//we are doing data, so let's start with that
//our data is... 12, 25, 38
//we are going to put it in a variable called dataset
const dataset = [12, 25, 38];
//load and check if it's "there" in the console

//how do we access it?
//accessor functions convert a single data point into the metric value.
const accessor = dataset[0];

//can we check that by default?
//console.log is the way to immediately check what's going on
console.log(dataset[0]); 

//where shall we put this data?
//we need to make a canvas
//we make canvases with svg - that is how we draw with d3
//we will put it in the "wrapper" div

const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
	.append("svg") //add an SVG canvas
	.attr("width", 400) //of this width
	.attr("height", 400) //and this height
	//this could be done a little more smartly - that's for next time

//we can now draw on the canvas
const circle = canvas //take the canvas
	.append("circle") //add a circle
	.attr("cx", 10)
	.attr("cy", 10)
	.attr("r", 10)
	.attr("fill", "black");

//but what about the data... ?
//shall we make one circle per data point?
const circles = canvas //take the canvas
	.append("circle") //add a circle
	.attr("cx", 10)
	.attr("cy", 20)
	.attr("r", 12)
	.attr("fill", "pink");
const circles = canvas //take the canvas
	.append("circle") //add a circle
	.attr("cx", 20)
	.attr("cy", 20)
	.attr("r", 25)
	.attr("fill", "pink");
const circles = canvas //take the canvas
	.append("circle") //add a circle
	.attr("cx", 30)
	.attr("cy", 20)
	.attr("r", 38)
	.attr("fill", "pink");
//this is getting annoying!
//firstly we need variables instead of these numbers - too hard to remember
//secondly, we can't do this for bigger datasets

const dataDots = canvas.selectAll("circle") //hey we want some elements
	.data(dataset) //we want them to go with the data
	.enter().append("circle") //specifically these should be SVG circle shapes
	.attr("cx", 20) //and these are their attributes
	.attr("cy", 30)
	.attr("r", 10)
	.attr("fill", "blue");
//in the console, inspect the elements... 
//we have one circle element per data point!

//so the above is almost the most amazing and somewhat mind blowing part of d3
//create a circle for each data point
//wait but there are selected elements that don't exist?
//and then we add them to data and then add the shapes again?




//TELL D3 WHAT YOU WANT
//we want circles
//we want circles and data
//this is the data join!


//that was cool, but now we need to spread them out...
//how?
const dots = canvas.selectAll("circle")
	.data(dataset)
	.enter().append("circle")
	.attr("cx", function(d, i){
		return 10+i*5;
	})
	.attr("cy", 20)
	.attr("r", 10)
	.attr("fill", "blue");



