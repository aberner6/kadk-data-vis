/*it's a fresh start!
we need to rethink how we lay out our chart
let's draw it first
overall, we'll need a title at least

inside, we need a general container for the viz
the viz has to fit:
- axes and labels
- visualisation itself

so... let's re-do our canvas a bit

*/

async function drawData() {
	const dataset = await d3.csv("./../../forest.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 5;
	const color = "#e0f3f3";
	
	const screenSize = d3.min([
		window.innerWidth * 0.9,
		window.innerHeight * 0.9,
	])

	const width = screenSize;
	const height = screenSize;

	const margin = radius*4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", width) //of this width
		.attr("height", height); //and this height

	const xDomain = function(d){
		return d.year;
	}
	console.log(d3.extent(dataset, xDomain)+"min and max years");
	const xScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, xDomain)) 
		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius

	const foDomain = function(d){
		return d.forest;
	}
	console.log(d3.extent(dataset, foDomain)+"min and max forest");

	const yScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, foDomain)) 
		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top

	const foCircles = canvas.selectAll("foc")
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

/*PART 1: LABELS, AXES, CONTAINERS*/
	const xAxisGenerator = d3.axisBottom() //x axis on the bottom please
		.scale(xScale) //use the same scale we set up for the dots

	const xAxis = canvas.append("g") //add a spot and add the axes
       	.attr("transform", "translate("+margin*4+","+(height-margin)+")")
		.call(xAxisGenerator)

	const xAxisLabel = xAxis.append("text") //also labels
		.attr("x", width / 2)
		.attr("y", height/2)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.html("Dew point (&deg;F)")

	const yAxisGenerator = d3.axisLeft() //y axis is for left side
		.scale(yScale) //same scale as we were using

	const yAxis = canvas.append("g")
       	.attr("transform", "translate("+margin*4+","+0+")")
		.call(yAxisGenerator)

	const yAxisLabel = yAxis.append("text")
		.attr("x", 0)
		.attr("y", 0)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.text("Relative humidity")
		.style("transform", "rotate(-90deg)")
		.style("text-anchor", "middle")
}
drawData();


/*
PART 1: CHARTS
+ containers, labels, axes
PART 2: SVG
+ more shapes, practicing selectors, binding data
PART 3: DRAWING WITH DATA
+ selectors, binding data, comparison, logic, conditionals*/