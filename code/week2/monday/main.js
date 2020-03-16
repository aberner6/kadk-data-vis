/*PART 1: DATA
we are doing data, so let's start with that
our data is... 12, 25, 38
we are going to put it in a variable called dataset*/
const radius = 7;
const dataset = [12, 25, 38, 40, 40, 8];
console.log(radius+" it's here")
console.log(dataset)
/*load and check if it's "there" in the console
how do we access it?
accessor functions convert a single data point into the metric value.*/
const accessor = dataset[4];
console.log(accessor);





/*PART 2: SVG CANVAS
where shall we put this data?
we need to make a canvas
we make canvases with svg - that is how we draw with d3
we will put it in the "wrapper" div
*/
const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
	.append("svg") //add an SVG canvas
	.attr("width", 600) //of this width
	.attr("height", 700); //and this height
////this could be done a little more smartly - that's for next time





/*PART 3: DRAWING ON THE CANVAS
we can now draw on the canvas
with SVG
specifically, let's make a circle
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
*/
// const oneCircle = canvas //take the canvas
// 	.append("circle") //add a circle
// 	.attr("cx", 10)
// 	.attr("cy", 10)
// 	.attr("r", 10)
// 	.attr("fill", "black");






/*PART 4: DRAWING WITH DATA?
but what about the data... ?
shall we make one circle per data point?*/
// const circ1 = canvas //take the canvas
// 	.append("circle") //add a circle
// 	.attr("cx", 10)
// 	.attr("cy", 50)
// 	.attr("r", 12)
// 	.attr("fill", "pink");
// const circ2 = canvas //take the canvas
// 	.append("circle") //add a circle
// 	.attr("cx", 40)
// 	.attr("cy", 50)
// 	.attr("r", 25)
// 	.attr("fill", "pink");
// const circ3 = canvas //take the canvas
// 	.append("circle") //add a circle
// 	.attr("cx", 70)
// 	.attr("cy", 50)
// 	.attr("r", 38)
// 	.attr("fill", "pink");






/*PART 5: DRAWING WITH DATA:)
this is getting annoying!
firstly we need variables instead of these numbers - too hard to remember
secondly, we can't do this for bigger datasets
const dataset = [12, 25, 38, 40, 40, 8];
*/

// const dataDots = canvas.selectAll("circ") //hey we want some elements
// 	.data(dataset) //we want them to go with the data
// 	.enter().append("circle") //specifically these should be SVG circle shapes
// 	.attr("cx", 20) //and these are their attributes
// 	.attr("cy", 100)
// 	.attr("r", 10)
// 	.attr("fill", "blue")
// 	.attr("stroke","black");

/*in the console, inspect the elements... 
we have one circle element per data point!

so the above is almost the most amazing and somewhat mind blowing part of d3
create a circle for each data point
wait but there are selected elements that don't exist?
and then we add them to data and then add the shapes again?

BREAK IT DOWN
svg.selectAll("circ") at first returns "empty" state, because no circles exist yet.
selection.data joins the data with our selected (empty) elements, returning a new selection that represents the "update selection": elements successfully bound to data. The enter (and exit) selections are defined under this, which we use to add or remove elements to correspond to the data.
selection.enter gets us the enter selection,
and finally missing elements are added by calling selection.append on the enter selection. This adds a new circle for each data point to the SVG container.

TELL D3 WHAT YOU WANT
we want circles
we want circles and data
this is the data join!
*/






/*PART 6: DRAWING WITH DATA:) :)
that was cool, but now we need to spread them out...
how?
*/
// const dataDots2 = canvas.selectAll("dots")
// 	.data(dataset)
// 	.enter().append("circle")
// 	.attr("cx", function(d, i){
// 		console.log(i+"index");
// 		return 20+i*70; 
// 	})
// 	.attr("cy", 200)
// 	.attr("r", 50)
// 	.attr("fill", "blue");







/*PART 7: DRAWING WITH DATA:) :) :)
what about SEEING the data? like we did by hand above?
*/
const dataDots2 = canvas.selectAll("dots")
	.data(dataset)
	.enter().append("circle")
	.attr("cx", function(d, i){
		console.log(i+"index");
		return 20+i*70; 
	})
	.attr("cy", 200)
	.attr("r", function(d){
		return d;
	})
	.attr("fill", function(d){
		return d3.rgb(d*6,255,255); //we will do this properly tomorrow or thursday
	});












