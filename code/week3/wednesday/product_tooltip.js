
async function drawData() {

/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("product_pyramid.csv")
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);


/*step 2: define dimensions of canvas*/
	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;
	const margin = 10;

/*step 3: make the canvas*/
	const myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

/*step 4: begin drawing with data
testing: see if we can make one shape per data item
*/
	// const dataRect = myCanvas.selectAll("dRects")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("x", 100)
	// 	.attr("y", 100)
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// 	.attr("fill", "lightgreen")
	// 	.attr("opacity", .1)

/*step 5: can we use the data in the shapes?
testing
*/
	// const dataRect = myCanvas.selectAll("dRects")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("x", function(d) {		
	// 		return d.water;
	// 	})
	// 	.attr("y", 100)
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// 	.attr("fill", "lightgreen")
	// .attr("opacity", .1)

/*step 6: set up scales so the data can be proportional to the canvas size etc.
*/
	const domainWater = function (d) {
		return parseInt(d.water);
	}
	const xScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([0, screenWidth]);

	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([0, screenHeight]);

	console.log(d3.extent(dataset, domainWater)); //check that this works

/*step 7: use scale to draw shapes on the canvas :) */
	const dataRect = myCanvas.selectAll("dRects")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class", function(d){
			return d.product;
		})
		.attr("x", function(d) {		
			return xScale(parseInt(d.water));
		})
		.attr("y", function(d){
			return yScale(parseInt(d.water));
		})
		.attr("width", 50)
		.attr("height", 50)
		.attr("stroke","white")
		.attr("fill", "lightgreen")
        .on("mouseover", function(d) {
            //get this circle's x/y values, then augment for the tooltip
			var xPosition = parseFloat(d3.select(this).attr("x")) + 25;
			var yPosition = parseFloat(d3.select(this).attr("y")) + 25;

            d3.select("#tooltip")
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")                     
                .select("#value")
                .text(d.product);
            //show the tooltip
            d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
            //hide the tooltip
            d3.select("#tooltip").classed("hidden", true); 
        })
}
drawData();
