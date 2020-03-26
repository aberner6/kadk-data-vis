
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("milas.csv");
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);

/*side-steps to a network: 
1. find all last names that occur more than once

2. set up special process of data where we say that:
if a data item shares a last name with another data item
then
associate them as linked

3. set up a "force network" where d3
draws nodes (circles) and links (arcs) for each family
and alone nodes for non-family

*/	

/*step 2: define dimensions of canvas*/
	// const screenWidth = window.innerWidth * 0.9;
	// const screenHeight = window.innerHeight * 0.9;
	// const margin = 10;

/*step 3: make the canvas*/
	// const myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
	// 	.append("svg") //add an SVG canvas
	// 	.attr("width", screenWidth) //of this width
	// 	.attr("height", screenHeight); //and this height

/*step 4: draw shapes with random messy positions just to see the data*/	

/*step 5: try to set up a scale*/	
	// const domainAge = function (d) {
	// 	return parseInt(d.age);
	// }
	// const yScale = d3.scaleLinear() //linear range want quantitative information
	// 	.domain(d3.extent(dataset, domainAge)) //find min and max of what's coming in from my dataseet
	// 	.range([screenHeight-10, 10]); //what i want to come out on the screen
	// console.log(d3.extent(dataset, domainAge))
/*step 6: try to redraw the shapes now with at least a scale
for example... 
*/
/*step 7: use scale to draw shapes on the canvas :) */
	// const dataCirc = myCanvas.selectAll("dc")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("circle")
	// 	.attr("cx", 50)
	// 	.attr("cy", function(d){
	// 		return yScale(parseInt(d.age));
	// 	})
	// 	.attr("r",10)
	// 	.attr("fill","pink");

}
drawData();