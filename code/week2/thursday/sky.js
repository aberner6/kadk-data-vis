
async function drawData() {
	const dataset = await d3.csv("./../../annelie_sky.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 5;
	
	const screenSize = d3.min([
		window.innerWidth * 0.9,
		window.innerHeight * 0.9,
	])

	const width = screenSize;
	const height = screenSize;

	const margin = radius*4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", width) //of this width
		.attr("height", height); //and this height

	const xScale = d3.scaleLinear() 
		.domain([0, dataset.length]) 
		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius
	
	const skyDomain = function(d){
		return d.sky;
	}
	const extent = d3.extent(dataset, skyDomain);
	console.log(extent)
	const colScale = d3.scaleOrdinal()
		.domain(extent)
		.range(d3.schemeAccent);

	const skyCircles = canvas.selectAll("sky")
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function(d,i){
			return xScale(i);
		})
		.attr("cy", height/2)
		.attr("r", radius)
		.attr("fill", function(d){
			return colScale(d.sky);
		});
}
drawData();