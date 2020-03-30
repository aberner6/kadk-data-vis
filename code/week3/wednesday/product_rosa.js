
async function drawData() {

/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("product_pyramid.csv")
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);


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
	const domainWater = function (d) {
		return parseInt(d.water);
	}
	const xScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([0, screenWidth]);

	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([margin, screenHeight]);
	
	const widthScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainWater)) //find min and max
		.range([margin, screenWidth-margin]);

	console.log(d3.extent(dataset, domainWater)); //check that this works

/*step 7: use scale to draw shapes on the canvas :) */
	// const dataRect = myCanvas.selectAll("dRects")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("rect")
	// 	.attr("class", function(d){
	// 		return d.product;
	// 	})
	// 	.attr("x", function(d){
	// 		return screenWidth/2-widthScale(parseInt(d.water))/2;
	// 	})
	// 	.attr("y", function(d){
	// 		return yScale(parseInt(d.water));
	// 	})
	// 	.attr("width", function(d){
	// 		return widthScale(parseInt(d.water));
	// 	})
	// 	.attr("height", 1)
	// 	.attr("fill", "black")

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
		.attr("y1", function(d){
			return yScale(parseInt(d.water));
		})
		// .attr("y1", function (d, i) {

  //           return yScale(i);
  //         })  
		.attr("x2", function(d){
			return screenWidth/2+widthScale(parseInt(d.water))/2;
		})
		.attr("y2", function(d){
			return yScale(parseInt(d.water));
		})
		// .attr("y2", function (d, i) {

  //           return yScale(i);
  //         })  
		.attr("stroke", "blue");

	const icons = myCanvas.selectAll("icons")
		.data(dataset)
		.enter()
		.append('image')
	    .attr('xlink:href', function(d,i){
	    	console.log(d.product);
	    	return 'icons/'+d.product+'.svg';
	    })
	    .attr('width', 10)
	    .attr('height', 10)
	    .attr("x", screenWidth/2)
	    .attr("y", function(d){
			return yScale(parseInt(d.water));
		})

	const text = myCanvas.selectAll(".waterNums")
		.data(dataset)
		.enter()
		.append('text')
		.attr("class", "waterNums")
	    .attr("x", function(d,i){
	    	console.log(i);
	    	if(i<dataset.length/2){
	    		console.log(i)
	    		return screenWidth/2; //some number
	    	}
	    	else{
	    		return 50;
	    	}
	    })
	    .attr("y", function(d){
			return yScale(parseInt(d.water));
		})
		.text(function(d){
			return d.water; 
			
		})
}
drawData();
