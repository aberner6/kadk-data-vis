
// function drawData() {

/*step 1: get the data and see one piece of it*/
	const dataset = [1, 7, 9]

/*step 2: define dimensions of canvas*/
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
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
		.range([1, 20])

/*step 7: use scale to draw shapes on the canvas :) */

	// const dataCirc = myCanvas.selectAll("dCircs")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("circle")
	// 	.attr("cx", screenWidth/2)
	// 	.attr("cy", screenHeight/2)
	// 	.attr("r", function(d){
	// 		return radiusScale(d);
	// 	})

	const men = myCanvas
		.append('image')
	    .attr('xlink:href', 'imgs/man_v1.svg')
	    .attr('width', 500)
	    .attr('height', 500)
	    .attr("x", screenWidth/4)
	    .attr("y", 0);

	const circ = myCanvas.selectAll("manCirc")
		.data(dataset)
		.enter()
		.append("circle")
	    .attr("cx", screenWidth/2)
	    .attr("cy", screenHeight/2)
	    .attr("r", 0)
	    .attr("fill","none")
	    .attr("stroke","red")
	    .transition()
	    .duration(8000)
	    .attr("r", function(d){
	    	return radiusScale(d); 
	    })

	// const noDataCirc = myCanvas
	// 	.append("circle")
	//     .attr("cx", screenWidth/2)
	//     .attr("cy", screenHeight/2)
	//     .attr("r", 0)
	//     .attr("fill","none")
	//     .attr("stroke","red");

	// var customElastic = d3.easeElastic.period(0.3);
	// men.transition()
 //        .ease(customElastic)
 //        .duration(1500)
 //        .attr("y", 100)
 //        .on("end", function(){ 
	// 		noDataCirc.transition()
	// 		    .attr("r", 100)
	// 		    .on("end", function(){
	// 		    	men.transition().attr("y",0);
	// 		    })
	// 	})


	// const text = myCanvas.selectAll(".dataNums")
	// 	.data(dataset)
	// 	.enter()
	// 	.append('text')
	// 	.attr("class", "dataNums")
	//     .attr("x", screenWidth/2)
	//     .attr("y", screenHeight/2)
	// 	.text(function(d){
	// 		return d; 
	// 	})
// }
// drawData();
