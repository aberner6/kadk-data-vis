
/*PART 1: SCALES: color 
we can also work to encode the data through colors
for example, the more forest, the brighter the color
we can use HCL, HSV, RGB, for example:
		.interpolate(d3.interpolateHcl)
		.range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
or simply ask d3 to make a smooth color range based on our domain
*/
// async function drawData() {
// 	const dataset = await d3.csv("./../../forest.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);

// 	const radius = 5;
// 	const color = "#e0f3f3";
	
// 	const screenSize = d3.min([
// 		window.innerWidth * 0.9,
// 		window.innerHeight * 0.9,
// 	])

// 	const width = screenSize;
// 	const height = screenSize;

// 	const margin = radius*4;

// 	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
// 		.append("svg") //add an SVG canvas
// 		.attr("width", width) //of this width
// 		.attr("height", height); //and this height
	
// 	const xDomain = function(d){
// 		return d.year;
// 	}
// 	console.log(d3.extent(dataset, xDomain)+"min and max years");
// 	const xScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, xDomain)) 
// 		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius

// 	const foDomain = function(d){
// 		return d.forest;
// 	}
// 	console.log(d3.extent(dataset, foDomain)+"min and max forest");
// 	const yScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top

// 	const colScale = d3.scaleLinear()
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range(['beige', 'red']);

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return xScale(d.year);
// 		})
// 		.attr("cy", function(d){
// 			return yScale(d.forest);
// 		})
// 		.attr("r", radius)
// 		.attr("fill", function(d){
// 			return colScale(d.forest);
// 		})
// 		.attr("stroke", "black")
// 		.attr("opacity",.2) //let's see how many overlaps we have?
// }
// drawData();






/*PART 1.1: SCALES: categories
what about doing scales based on "ordinal" information?
ordinal information is something like - fruits, cities, etc.
can d3 understand these and map them to different colors, for example?
yes!
ordinal scales are for discrete input domains, such as names or categories.
*/
// async function drawData() {
// 	const dataset = await d3.csv("./../../oldestTrees.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);

// 	const radius = 5;
	
// 	const screenSize = d3.min([
// 		window.innerWidth * 0.9,
// 		window.innerHeight * 0.9,
// 	])

// 	const width = screenSize;
// 	const height = screenSize;

// 	const margin = radius*4;

// 	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
// 		.append("svg") //add an SVG canvas
// 		.attr("width", width) //of this width
// 		.attr("height", height); //and this height

// 	const xScale = d3.scaleLinear() 
// 		.domain([0, dataset.length]) 
// 		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius
// 	const foDomain = function(d){
// 		return d.age;
// 	}
// 	const extent = d3.extent(dataset, foDomain);
// 	console.log(extent)
// 	const yScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top


// 	const cats = [];
// 	function categories(){
// 		for(var i=0; i<dataset.length; i++){
// 			cats.push(dataset[i].species);
// 		}
// 	}
// 	categories();
// 	console.log(cats)

// 	const colScale = d3.scaleOrdinal()
// 		.domain([cats])
// 		.range(d3.schemeAccent);

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return xScale(i);
// 		})
// 		.attr("cy", function(d){
// 			return yScale(d.age);
// 		})
// 		.attr("r", radius)
// 		.attr("fill", function(d){
// 			return colScale(d.species);
// 		});
// }
// drawData();


/*PART 1: SCALES: color 
/*PART 1.1: SCALES: categories*/