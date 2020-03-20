async function drawData() {
	const dataset = await d3.csv("./../../week3/oldestTrees2.csv")
	const accessor = dataset[0];
	console.log(accessor);	

	const width = 800;
	const height = 500;

	const radius = 5;
	const margin = radius*4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", width) //of this width
		.attr("height", height); //and this height
	

	const xScale = d3.scaleLinear() 
		.domain([0, dataset.length]) 
		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius
	
	const ageDomain = function(d){
		return d.age;
	}
	const yScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, ageDomain)) 
		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top

	const countryDomain = function(d){
		return d.country;
	}
	const colScale = d3.scaleOrdinal() //organise categorical information in color space
		.domain(d3.extent(dataset, countryDomain)) 
		.range(d3.schemeAccent);

	const lineData = canvas.selectAll("forestLines")
		.data(dataset)
		.enter().append("line")
		.attr("x1", function(d,i){
			return xScale(i);
		})
		.attr("x2", function(d,i){
			return xScale(i);
		})
		.attr("y1", height-margin)
		.attr("y2", function(d){
			return yScale(d.age);
		})
		.attr("stroke", function(d){
			return colScale(d.country);
		})
		.attr("stroke-width",10)
}
drawData();