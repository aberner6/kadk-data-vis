/*it's a fresh start!
yesterday, we figured out how to lay out the charts so they fit in the webpages easily
today:
/*
PART 2: DRAWING WITH DATA: paths: arcs
+ transforms, geometry
let's make arcs!
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
	dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
	dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

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
		.range([dimensions.boundedHeight/2,0]) //min goes almost at bottom, max goes almost at top
/*step 5: draw data
let's draw arcs
in order to do that we need to draw shapes
then rotate them per year
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
draw by hand first, then translate to code

the shape of an SVG Path element is defined by one attribute: d.
this attribute, d, contains a series of commands and parameters in the SVG Path Mini-Language.
these commands and parameters are a sequential set of instructions for how to "move the pen over the paper".
such as:
M 10 25 - Put the pen down at 10 25
L 10 75 - Draw a line to the point 10 75, from the previous point 10 25
L 60 75 - Draw a line to the point 60 75, from the previous point 10 75
L 10 25 - Draw a line to the point 10 25, from the previous point 60 75
that is what d3 generates for us given the data and shape definition
d3.svg.arc - create a new arc generator

more about paths: 
https://www.dashingd3js.com/svg-paths-and-d3js
*/
	const numBars = dataset.length;
	const arc = d3.arc()
		.startAngle(function(d,i) { return (i * 2 * Math.PI) / numBars; })
		.endAngle(function(d,i) { return ((i + 1) * 2 * Math.PI) / numBars; })
		.innerRadius(10)
		.padAngle(.02)

	const segments = bounds.selectAll("path")
		.data(dataset)
		.enter().append("path")
		.style("fill", "white")
		.style("stroke","black")
		.attr("d",function(d,i) {
        	d.outerRadius = yScale(+d.forest); 
        	return arc(d,i); 
		});
	segments.attr("transform", "translate("+dimensions.boundedWidth/2+","+dimensions.boundedWidth/2+")")

/*step 6: draw labels and axes*/
	const legendCircs = bounds.selectAll("circle")
        .data(dataset)
        .enter().append("circle")
		.attr("r", function(d) {
			return yScale(d.forest);
		})
		.style("fill", "none")
		.style("stroke", "black")
		.style("stroke-dasharray", "2,2")
		.style("stroke-width",".5px");
	legendCircs.attr("transform", "translate("+dimensions.boundedWidth/2+","+dimensions.boundedWidth/2+")")		

/*fancy way to curve a text around a circle
https://www.visualcinnamon.com/2015/09/placing-text-on-arcs.html
*/	
	const labelRadius = dimensions.boundedHeight/2 * 1.025;

	var labels = bounds.append("g")
		.attr("transform", "translate("+dimensions.boundedWidth/2+","+dimensions.boundedWidth/2+")")		
		.classed("labels", true);

	labels.append("def")
	    .append("path")
	    .attr("id", "label-path")
	    .attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

	labels.selectAll("text")
	    .data(dataset)
	  .enter().append("text")
	    .style("text-anchor", "middle")
	    .style("font-weight","bold")
	    .style("fill", "black")
	    .append("textPath")
	    .attr("xlink:href", "#label-path")
	    .attr("startOffset", function(d, i) {return i * 100 / numBars + 50 / numBars + '%';})
	    .text(function(d) {return d.year.toUpperCase(); });

	const title = bounds.append("text")
		.attr("x", -dimensions.margin.left/2)
		.attr("y", -dimensions.margin.top/2)
		.attr("fill", "black")
		.style("font-size", "1.4em")
		.text("Trees")
}
drawData();


/*
PART 2: DRAWING WITH DATA: arcs
+ transforms, geometry*/