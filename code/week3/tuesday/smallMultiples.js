
async function drawData() {
/*step 1: load the data*/
    let dataset = await d3.json("./../../weather_data.json")

    console.log(dataset[0])
/*step 2: set up parsers*/
    const tmprAccessor = function(d){
        return d.temperatureMax;
    }
    const moonAccessor = function(d){
        return d.moonPhase;
    }
    const dateParser = d3.timeParse("%Y-%m-%d");
    const xAccessor = function(d){
        return dateParser(d.date);
    } 
/*step 3: re-sort the data making sure it goes in order of the dates*/  
    dataset = dataset.sort(function(a,b){ 
        xAccessor(a) - xAccessor(b)
    })

/*step 4: prepare our overall dimensions*/
    const width = window.innerWidth * 0.99;
    const height = window.innerHeight * 0.99;
    let dimensions = {
    width: width,
    height: width,
    radius: 30,
      margin: {
        top: 10,
        right: 50,
        bottom: 50,
        left: 10,
      },
    }
    dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right - dimensions.radius*2;
    dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom - dimensions.radius*2;

/*step 5: make our canvas*/
    const wrapper = d3.select("#wrapper")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);

    const bounds = wrapper.append("g")
        .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);
/*
step 4: prepare our scales
*/

    const radiusScale = d3.scaleLinear()
        .domain(d3.extent(dataset, tmprAccessor))
        .range([1, dimensions.radius]);

    const thetaAxes = d3.scaleTime()
        .domain(d3.extent(dataset, xAccessor))
        .range([-Math.PI / 2, Math.PI * 1.5 ])


    const xScale = d3.scaleLinear() 
        .domain(d3.extent(dataset, xAccessor)) 
        .range([dimensions.margin.left, dimensions.boundedWidth])
    const yScale = d3.scaleLinear() 
        .domain(d3.extent(dataset, tmprAccessor)) 
        .range([dimensions.boundedHeight/4,0])

    const colScale = d3.scaleLinear()
        .domain(d3.extent(dataset, moonAccessor))
        // .range(["cyan", "tomato"])
        // .interpolate(d3.interpolateRgb);
        .range(["#12CBC4", "#B53471"]) 
        .interpolate(d3.interpolateHcl);
/*
step 5: draw our days
note: grid!!!
*/

    var days = bounds.selectAll(".day")
      .data(dataset); 

    var xOffset = dimensions.radius;//190.14; // the xoffset for each day 
    var yOffset = dimensions.radius;//200.14; // the yoffset for each day
    var row = 0; 
    var enteringDay = days.enter()
      .append('g')
      .classed('day', true)
      .attr("transform", function(d,i){
        if( i % 7 == 0 ){ 
          row++; 
        }
        return "translate(" + (( i % 7 + 1 ) * xOffset - .5 * xOffset) + ", "+(row * yOffset - .5 * yOffset)+")";
      })

    enteringDay
        .append("circle")
        .attr('cx',0)
        .attr('cy',0)
        .attr('r',function(d){ 
            return radiusScale(tmprAccessor(d));
        })
        .attr("fill", function(d){
            return colScale(moonAccessor(d));
        })
        .attr("opacity",.3);

    enteringDay
        .append("line")
        .attr('x1',0)
        .attr('x2',0)
        .attr('y1',0)
        .attr('y2',function(d){ 
            return radiusScale(tmprAccessor(d));
        })
        .attr("stroke", "white");
}
drawData()

