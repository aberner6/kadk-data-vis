
/*PART 1: SCALES: color 
we can also work to encode the data through colors
for example, the more forest, the brighter the color
we can use HCL, HSV, RGB, for example:
		.interpolate(d3.interpolateHcl)
		.range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
or simply ask d3 to make a smooth color range based on our domain
https://github.com/d3/d3-scale-chromatic/blob/master/README.md
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
// 		// .interpolate(d3.interpolateHcl)
// 		.range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
// 		// .range(["beige", "red"])

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			console.log(xScale(d.year));
// 			return xScale(d.year);
// 		})
// 		.attr("cy", function(d){
// 			return yScale(d.forest);
// 		})
// 		.attr("r", radius)
// 		.attr("fill", function(d){
// 			return colScale(d.forest);
// 		});
// }
// drawData();






/*PART 1.1: SCALES: categories
what about doing scales based on "ordinal" information?
ordinal information is something like - fruits, cities, etc.
can d3 understand these and map them to different colors, for example?
yes!
ordinal scales are for discrete input domains, such as names or categories.
*/
async function drawData() {
	const dataset = await d3.csv("./../../week3/oldestTrees2.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 5;
	

	const width = 800;
	const height = 500;

	const margin = radius*4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", width) //of this width
		.attr("height", height); //and this height

	
	console.log("window"+d3.min([window.innerWidth, window.innerHeight]))
	console.log("simple question: what's the smallest number??? "+d3.min([0, 2, 6, 9]))







	const xScale = d3.scaleLinear() 
		.domain([0, dataset.length]) 
		.range([margin, width-margin]) //minimum and maximum pixels we want to map for radius
	
	const ageDomain = function(d){
		return d.age;
	}
	const yScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, ageDomain)) 
		.range([height-margin, margin]) //min goes almost at bottom, max goes almost at top

/*
the old school way to pull all the categories together:
*/
	// const cats = []; //empty cats array
	// function categories(){
	// 	for(var i=0; i<dataset.length; i++){ //our for loop to go through the data
	// 		cats.push(dataset[i].species); //push every data piece from the species column of the spreadsheet into the cats array
	// 	}
	// }
	// categories(); //make it happen!
	// console.log(cats);
/*
or you can go new school - which is what we have been doing thus far -
sorry for any confusion
still good to learn the pure javascript way of above (old school)
*/
	const speciesDomain = function(d){
		return d.species; //species access
	}	
	const colScale = d3.scaleOrdinal() //organise categorical information in color space
		.domain(cats) 
		.range(d3.interpolate({colors: ["red", "blue"]}, {colors: ["white", "black"]}));

	const treeCircles = canvas.selectAll("treecircs")
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function(d,i){			
				return xScale(i);
			}
		)
		.attr("cy", 10)
		.attr("r", radius)
		.attr("fill", function(d){
			console.log(colScale(d.species))
			return colScale(d.species);
		});

	// const lineData = canvas.selectAll("fol")
	// 	.data(dataset)
	// 	.enter().append("line")
	// 	.attr("x1", function(d,i){
	// 		return xScale(i);
	// 	})
	// 	.attr("x2", function(d,i){
	// 		return xScale(i);
	// 	})
	// 	.attr("y1", height-margin)
	// 	.attr("y2", function(d){
	// 		return yScale(d.age);
	// 	})
	// 	.attr("stroke", function(d){
	// 		return colScale(d.country);
	// 	});
}
drawData();


/*PART 1: SCALES: color 
/*PART 1.1: SCALES: categories*/