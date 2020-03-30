
async function drawData() {

/*step 1: get the data and see one piece of it*/	
	let dataset = await d3.csv("product_pyramid.csv")
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);


	const domainWater = function (d) {
		return parseInt(d.water);
	}
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

	const xScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([0, screenWidth]);

	// const yScale = d3.scaleLinear()
	// 	.domain(d3.extent(dataset, domainWater)) //find min and max
	// 	.range([margin, screenHeight]);

	const yScale = d3.scaleLinear()
		.domain([0, dataset.length]) //find min and max
		.range([margin, screenHeight]);

	const widthScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([margin, screenWidth-margin]);

	console.log(d3.extent(dataset, domainWater)); //check that this works

/*step 7: use scale to draw shapes on the canvas :) */

	const dataLine = myCanvas.selectAll("dLines")
		.data(dataset)
		.enter()
		.append("line")
		.attr("class", function(d){
			return d.product;
		})
		.attr("x1", function(d){
			return screenWidth/2-widthScale(parseInt(d.water))/2;
		})
		.attr("y1", function(d, i) {
            return yScale(i);
        })  
		.attr("x2", function(d){
			return screenWidth/2+widthScale(parseInt(d.water))/2;
		})
		.attr("y2", function(d, i) {
            return yScale(i);
        })  
		.attr("stroke", "blue");

	const icons = myCanvas.selectAll("icons")
		.data(dataset)
		.enter()
		.append('image')
	    .attr('xlink:href', function(d,i){
	    	return 'icons/'+d.product+'.svg';
	    })
	    .attr('width', 10)
	    .attr('height', 10)
	    .attr("x", screenWidth/2)
	    .attr("y", function(d,i){
            return yScale(i);
			// return yScale(parseInt(d.water));
		})

	const textLeft = myCanvas.selectAll(".waterNumsL")
		.data(dataset)
		.enter()
		.append('text')
		.attr("class", "waterNumsL")
	    .attr("x", function(d,i){
			return screenWidth/2-widthScale(parseInt(d.water))/2;
	    })
	    .attr("y", function(d,i){
            return yScale(i);
		})
		.attr("text-anchor","end")
		// .attr("dx", 4)
		.text(function(d){
			return d.water; 
		})

	const textRight = myCanvas.selectAll(".waterNumsR")
		.data(dataset)
		.enter()
		.append('text')
		.attr("class", "waterNumsR")
	    .attr("x", function(d,i){
			return screenWidth/2+widthScale(parseInt(d.water))/2;
	    })
	    .attr("y", function(d,i){
            return yScale(i);
		})
		.attr("text-anchor","end")
		// .attr("dx", 4)
		.text(function(d){
			return d.water; 
		})
}
drawData();
