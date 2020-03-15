/*it's a fresh start!
we need to rethink how we lay out our chart
let's draw it first
overall, we'll need a title at least

inside, we need a general container for the viz
the viz has to fit:
- title, axes and labels
- visualisation itself

so... let's re-do our canvas a bit

PART 1: CHARTS
+ containers, labels, axes*/

async function drawData() {
/*step 1: load data*/
	const dataset = await d3.csv("./../../forest.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 5;
	const color = "#e0f3f3";

/*step 2: prepare dimensions
the width / height is the same as before
but now we organise our margins more efficiently
and take into account the margins when using the width and height
this is so that we don't mess around inside the scale functions themselves
that will mean fewer issues / places to look and troubleshoot or solve when we are trying to style the surrounding information of the viz
*/

	const width = d3.min([
		window.innerWidth * 0.9,
		window.innerHeight * 0.9,
	])
	let dimensions = {
	width: width,
	height: width,
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

/*step 3: create canvas
now we will establish a general wrapper that holds the whole viz
as well as a specific, bounded canvas that holds the stuff we want to be able to see
this will take into account the margins we want to set the viz off from the edges of the screen
*/
  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`);

/*step 4: create scales
same as before, but now we can just use the bounded edges 
instead of computing those edges inside the scale function
*/
	const xDomain = function(d){
		return d.year;
	}
	const xScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, xDomain)) 
		.range([0, dimensions.boundedWidth]) //minimum and maximum pixels we want to map for radius

	const foDomain = function(d){
		return d.forest;
	}
	const yScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, foDomain)) 
		.range([dimensions.boundedHeight, 0]) //min goes almost at bottom, max goes almost at top

/*step 5: draw data*/
	const foCircles = bounds.selectAll("foc")
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function(d,i){
			return xScale(d.year);
		})
		.attr("cy", function(d){
			return yScale(d.forest);
		})
		.attr("r", radius)
		.attr("fill", "grey")
		.attr("stroke", "black")
		.attr("opacity",.2) //let's see how many overlaps we have?

/*LABELS, AXES*/
/*step 6: draw labels and axes
here we just need to do some translation and positioning of the information
so that it fits properly at the edges of our visualisation
*/
	const xAxisGenerator = d3.axisBottom() 
		.scale(xScale) 
	const xAxis = bounds.append("g")
		.call(xAxisGenerator)
		.style("transform", `translateY(${dimensions.boundedHeight}px)`)

	const xAxisLabel = xAxis.append("text") //also labels
		.attr("x", dimensions.boundedWidth / 2)
		.attr("y", dimensions.margin.bottom - 10)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.html("Years")

	const yAxisGenerator = d3.axisLeft()
		.scale(yScale) 
	const yAxis = bounds.append("g")
		.call(yAxisGenerator)

	const yAxisLabel = yAxis.append("text")
		.attr("x", -dimensions.boundedWidth / 2)
		.attr("y", -dimensions.margin.left/4)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.text("Growth")
		.style("transform", "rotate(-90deg)")
		.style("text-anchor", "middle")

	const title = bounds.append("text")
		.attr("x", -dimensions.margin.left/2)
		.attr("y", -dimensions.margin.top/2)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.text("Trees")
}
drawData();


/*
PART 1: CHARTS
+ containers, labels, axes
PART 2: SVG
+ more shapes, practicing selectors, binding data
PART 3: DRAWING WITH DATA
+ selectors, binding data, comparison, logic, conditionals*/