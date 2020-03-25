	const colScale = d3.scaleLinear()
		.domain([0, dataset.length])
 		.range(["green", "lightgreen", "purple"])
    	.interpolate(d3.interpolateRgb.gamma(2.2))
	const xScale = d3.scaleLinear()
		.domain([0, dataset.length]) 
		.range([margin, screenWidth - margin]) 
	
	const domainY = function (d) {
		return d.y;
	}
	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, domainY))
		.range([screenHeight-margin, margin])

	const circles = canvas.selectAll("circ")		
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function (d, i) {		
			return xScale(i);
		})
		.attr("cy", function (d) {
			return yScale(domainY(d));
		})
		.attr("r", 10)
		.attr("fill", function (d, i) {	
			return colScale(i);
		})