async function drawData() {
/*step 1: load the data*/
	let dataset = await d3.json("./../../weather_data.json")


/*step 2: set up parsers*/
	const tmprAccessor = function(d){
		return d.temperatureMax;
	}

	const dateParser = d3.timeParse("%Y-%m-%d");
	const xAccessor = function(d){
		return dateParser(d.date);
	} 
/*step 3: re-sort the data making sure it goes in order of the dates*/	
	dataset = dataset.sort(function(a,b){ 
		xAccessor(a) - xAccessor(b)
	})
	console.log(dataset);
/*step 4: prepare our overall dimensions*/
	const width = window.innerWidth * 0.9;
	const height = window.innerHeight * 0.9;
	let dimensions = {
	width: width,
	height: width,
	radius: width / 2,
	  margin: {
	    top: height/2,
	    right: 50,
	    bottom: 50,
	    left: width/2,
	  },
	}
	dimensions.boundedWidth = dimensions.width
	- dimensions.margin.left
	- dimensions.margin.right
	dimensions.boundedHeight = dimensions.height
	- dimensions.margin.top
	- dimensions.margin.bottom
	dimensions.boundedRadius = dimensions.radius - ((dimensions.margin.left + dimensions.margin.right) / 2)

/*step 5: make our canvas*/
	const wrapper = d3.select("#wrapper")
		.append("svg")
		.attr("width", dimensions.width)
		.attr("height", dimensions.height);

	const bounds = wrapper.append("g")
		.style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);


/*
step 4: prepare our scales
*/

	const radiusScale = d3.scaleLinear()
		.domain(d3.extent(dataset, tmprAccessor))
		.range([10, dimensions.boundedRadius]);

	const thetaAxes = d3.scaleTime()
		.domain(d3.extent(dataset, xAccessor))
		.range([-Math.PI / 2, Math.PI * 1.5 ])
	
/*
step 5: draw our lines
note: geometry!!!
*/
	const line = bounds.selectAll("lines")
		.data(dataset)
		.enter()
		.append("line")
        .attr('x1',function(d){ 
        	return (Math.cos(thetaAxes(xAccessor(d)))*50);  
        })
        .attr('y1',function(d){ 
        	return (Math.sin(thetaAxes(xAccessor(d)))*50); 
        })
        .attr('x2',function(d){ 
        	return (Math.cos(thetaAxes(xAccessor(d)))*(radiusScale(tmprAccessor(d))+50));
        })
        .attr('y2',function(d){ 
        	return (Math.sin(thetaAxes(xAccessor(d)))*(radiusScale(tmprAccessor(d))+50));
        })
		.attr("stroke-width", .5)
		.attr("stroke", "black")
}
drawData()

