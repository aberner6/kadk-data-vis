/*
let's draw a line chart
PART 1: date scales
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
async function drawLineChart() {
  const dataset = await d3.json("./../../weather_data.json")

  const yAccessor = function(d){
    return d.temperatureMax;
  }
/*
PART 1: Date scales
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

/*
step 2: prepare our chart
same as usual
*/

  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom

/*
step 3: prepare our canvas
same as usual
*/

  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`)

/*
step 4: prepare our scales

yscale:
here, we want to get the min and max of the temperature
(see above - the yaccessor definition we chose)
then, we want to annotate the data with the freezing temperature
in this case, dark sky (our data source) provides the data in fahrenheit
so we make our freezing temperature and place it by mapping 32 (Fahrenheit freezing)
to the yscale we define based on the pixels of our canvas

xscale:
our xscale is defined by time
in this case, as mentioned above, time is specific and human writtenfirst
therefore we need to translate it through our xaccessor above
in order to move it through d3 computer language
*/

  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])

  const freezingTemperaturePlacement = yScale(32)
  const freezingTemperatures = bounds.append("rect")
      .attr("x", 0)
      .attr("width", dimensions.boundedWidth)
      .attr("y", freezingTemperaturePlacement)
      .attr("height", dimensions.boundedHeight
        - freezingTemperaturePlacement)
      .attr("fill", "#e0f3f3")

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

/* 
step 5: draw data 
here we will draw a line where
the line should start on the left of the xaxis
and as the date increases, the line should go to the right
and as the temperature changes, the line should go up or down the y axis

we will therefore use d3's handly linegenerator function
we tell the line generator how to scale the data for the x and y axis
and it will draw a path (remember friday? how svg draws paths?)
we just give all the data to the line generator
which we have set up to choose certain aspects of that data and map them to our scale
*/

  const lineGenerator = d3.line()
    .x(function(d){
      return xScale(xAccessor(d));
    })
    .y(function(d){
      return yScale(yAccessor(d));
    })

  const colScale = d3.scaleLinear()
    .domain([0, dataset.length])
    .range(["green", "lightgreen", "purple"])
    .interpolate(d3.interpolateRgb.gamma(2.2))

  const line = bounds.append("path")
      .attr("d", lineGenerator(dataset))
      .attr("stroke-width", 2)
      .attr("fill","none")

/* 
step 6: draw axes, labels
let's put our y axis on the left
and our xaxis at the bottom
means that we have to push the xaxis to the bottom through a translation
because if we say "bottom", d3 just knows we want our ticks or words
to be below the line :)
*/
  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
      .style("transform", `translateY(${
        dimensions.boundedHeight
      }px)`)
}
drawLineChart()