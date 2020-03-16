/*it's a fresh start!
we figured out how to lay out the charts so they fit in the webpages easily

now, let's play with a few more d3 svg shapes

PART 2: SVG
+ more shapes, practicing selectors, binding data
let's make a bar chart!
*/
async function drawData() {
/*step 1: load data*/
	const dataset = await d3.csv("./../../forest.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const color = "#e0f3f3";

/*step 2: prepare dimensions*/

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

/*step 3: create canvas*/
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

/*step 4: create scales*/
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
		.range([dimensions.boundedHeight,0]) //min goes almost at bottom, max goes almost at top

/*step 5: draw data
let's draw a bar chart
for that we need rectangles
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
draw by hand first
what are the x,y position defined by? 
what's the height defined by?
*/
	const rectWidth = 5;
	const foRects = bounds.selectAll("forest")
		.data(dataset)
		.enter().append("rect")
		.attr("x", function(d,i){
			return xScale(d.year)-rectWidth;
		})
		.attr("y", function(d){
			return yScale(d.forest);
		})
		.attr("width", rectWidth)
		.attr("height", function(d){
			return dimensions.boundedHeight-yScale(d.forest);
		})
		.attr("fill", "grey")
		.attr("stroke", "black")
		.attr("opacity",.2) 

/*step 6: draw labels and axes*/
	const xAxisGenerator = d3.axisBottom() 
		.scale(xScale) 
	    .ticks(4);
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
PART 2: SVG
+ more shapes, practicing selectors, binding data
PART 3: DRAWING WITH DATA
+ selectors, binding data, comparison, logic, conditionals*/