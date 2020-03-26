
async function drawData() {

	const dataset = await d3.csv("./../../flowers_v.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;
	const margin = 20;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height





	const flowerDomainY = function(d) {
		return parseFloat(d.y);
	}
	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainY))
		.range([screenHeight - margin, margin]) 
	
    var yMin = d3.min(dataset, function(d){
    	return parseFloat(d.y);
    })
    var yMax = d3.max(dataset, function(d){
    	return parseFloat(d.y);
    })
    const colScale = d3.scaleLinear() 
		.domain([yMin, yMax/2, yMax])
		.range(["green","white","purple"])

	const flowerDomainZ = function(d) {
		return parseFloat(d.z);
	}
	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
	const zScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([1, 10]);

	const oScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([.1, .7])


	const flowerDomainX = function(d) {
		return parseFloat(d.x);
	}
	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
	const xScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainX))
		.range([margin, screenWidth - margin])


	const flowerCircles = canvas.selectAll("FlowerCir")		
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function (d) {			
			return xScale(parseFloat(d.x));
		})
		.attr("cy", function (d) {
			return yScale(parseFloat(d.y)); 
		})
		.attr("r", function(d){
			return zScale(parseFloat(d.z));
		})
		.attr("fill", function (d, i) {		
			return colScale(parseFloat(d.y));
		})
		.attr("opacity", function(d){
			return oScale(parseFloat(d.z));
		})
		.attr("stroke", function (d, i) {
			return colScale(parseFloat(d.y));
		})
		.attr("stroke-opacity",1);
}


drawData();
