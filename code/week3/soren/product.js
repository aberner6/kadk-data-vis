
function drawData() {

/*step 1: get the data and see one piece of it*/
	const dataset = [1, 7, 9]

/*step 2: define dimensions of canvas*/
	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;
	const margin = 30;

/*step 3: make the canvas*/
	const myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

/*step 6: set up scales so the data can be proportional to the canvas size etc.
*/
	const domain = function (d) {
		return d;
	}
	const radiusScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domain))
		.range([1, 10])

/*step 7: use scale to draw shapes on the canvas :) */

	const dataLine = myCanvas.selectAll("dCircs")
		.data(dataset)
		.enter()
		.append("circle")
		.attr("cx", screenWidth/2)
		.attr("cy", screenHeight/2)
		.attr("r", function(d){
			return radiusScale(d);
		})

	const icons = myCanvas.selectAll("man")
		.data(dataset)
		.enter()
		.append('image')
	    .attr('xlink:href', 'imgs/man_v2.svg'
	    .attr('width', 50)
	    .attr('height', 50)
	    .attr("x", screenWidth/2)
	    .attr("y", screenHeight/2);

	const text = myCanvas.selectAll(".dataNums")
		.data(dataset)
		.enter()
		.append('text')
		.attr("class", "dataNums")
	    .attr("x", screenWidth/2)
	    .attr("y", screenHeight/2)
		.text(function(d){
			return d; 
		})
}
drawData();
