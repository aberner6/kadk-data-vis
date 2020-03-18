/*
let's draw a radial chart:
so we need:
date scales and a tiny bit of geometry
*/

/*step 1: load data
something new here:
we will work with the weather data json file
this is the past year of weather data in CPH!
got the data here: https://darksky.net/dev
which has many days in it and for each day, there is a lot of information
firstly, each day has a date :)
so we will need to learn how to turn human dates into d3 legible dates
*/
async function drawMore() {
  let dataset = await d3.json("./../../weather_data.json")

  const yAccessor = function(d){
    return d.temperatureMax;
  }
/*
date scales again:
check out the "date parser"
what we do is: we tell d3 to grab the date
which in the dataset is formatted as: "2018-01-01" 
that's year, month, day. d3 can parse or understand these dates if it knows what format they are coming in as. 
https://github.com/d3/d3-time-format
here's how you can know what to tell d3:
https://github.com/d3/d3-time-format#locale_format
in our case, we will tell d3 to expect "%Y-%m-%d" because that is how our data is formatted

then, we'll make sure the data is properly sorted
from earliest date to last date
by using the sort function
*/
  const dateParser = d3.timeParse("%Y-%m-%d");
  const xAccessor = function(d){
    return dateParser(d.date);
  } 
  dataset = dataset.sort(function(a,b){ 
    xAccessor(a) - xAccessor(b)
  })
  console.log(dataset);
/*
step 2: prepare our chart
need to define the width up front 
so that we can have it inform our radius
add in radius dimensions
*/

  const width = d3.min([
    window.innerWidth * 0.9,
    window.innerHeight * 0.9,
  ])
  let dimensions = {
  width: width,
  height: width,
    radius: width / 2,
      margin: {
        top: 200,
        right: 50,
        bottom: 50,
        left: 200,
      },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom
  dimensions.boundedRadius = dimensions.radius - ((dimensions.margin.left + dimensions.margin.right) / 2)

/*
step 3: prepare our canvas
same as usual
*/

  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

  const bounds = wrapper.append("g")
      .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);

/*
step 4: prepare our scales
note: a special scale according to the radius of the circular layout
*/

  const specialScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([10, dimensions.boundedRadius]);

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, (Math.PI * 2)]);

/* 
step 6: draw guides
we have to draw this underneath the data visualisation
*/
  const axis = bounds.append("g")
  const minMax = d3.extent(dataset, yAccessor);
  console.log(minMax);
  const gridCircle = axis.append("circle")
      .attr("cx", dimensions.boundedRadius)
      .attr("cy", dimensions.boundedRadius)
      .attr("r", dimensions.boundedRadius)
      .attr("fill","lightgrey")
      .attr("class", "grid-line");

  const legendMin = axis.append("circle")
        .attr("r", function(d) {
          return specialScale(minMax[0]);
        })
        .style("fill", "none")
        .style("stroke", "white")
        .style("stroke-width","1px")
        .attr("transform", "translate("+dimensions.boundedWidth/2+","+dimensions.boundedWidth/2+")")   
  const legendMax = axis.append("circle")
        .attr("r", function(d) {
          return specialScale(minMax[1]/2);
        })
        .style("fill", "none")
        .style("stroke", "white")
        .style("stroke-width","1px")
        .attr("transform", "translate("+dimensions.boundedWidth/2+","+dimensions.boundedWidth/2+")");
/* 
step 5: draw data
now we use the built in line radial function
so that the path of the line is place in a circular way
as opposed to linear! 
*/
  const lineGenerator = d3.lineRadial()
        .angle(function(d, i){
          return xScale(xAccessor(d)) 
        })
        .radius(function(d, i){ 
          return specialScale(yAccessor(d));
        })
        .curve(d3.curveLinearClosed);

  const line = bounds.append("path")
      .attr("d", lineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "teal")
      .attr("stroke-width", 1)
      .style("transform", `translate(${dimensions.boundedRadius}px, ${dimensions.boundedRadius}px)`);
}
drawMore()