/*it's a fresh start!*/

// async function drawData() {
// 	const dataset = await d3.csv("./../../forest.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);

// 	const radius = 5;
// 	const color = "#e0f3f3";
	
// 	const screenSize = d3.min([
// 		window.innerWidth * 0.9,
// 		window.innerHeight * 0.9,
// 	])

// 	const width = screenSize;
// 	const height = screenSize;

// 	const margin = radius*4;

// 	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
// 		.append("svg") //add an SVG canvas
// 		.attr("width", width) //of this width
// 		.attr("height", height); //and this height

// 	const xDomain = function(d){
// 		return d.year;
// 	}
// 	console.log(d3.extent(dataset, xDomain)+"min and max years");
// 	const xScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, xDomain)) 
// 		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius

// 	const foDomain = function(d){
// 		return d.forest;
// 	}
// 	console.log(d3.extent(dataset, foDomain)+"min and max forest");

// 	const yScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return xScale(d.year);
// 		})
// 		.attr("cy", function(d){
// 			return yScale(d.forest);
// 		})
// 		.attr("r", radius)
// 		.attr("fill", "grey")
// 		.attr("stroke", "black")
// 		.attr("opacity",.2) //let's see how many overlaps we have?
// }
// drawData();


/*
PART 1: SVG
+ more shapes, practicing selectors, binding data
PART 2: DRAWING WITH DATA
+ selectors, binding data, comparison, logic, conditionals*/