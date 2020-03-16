/*it's a fresh start! 
we will now use let and const in our code*/

/*PART 2: LOADING DATA
 + data structures: arrays, objects, csvs, json
we already saw the array and how to access it:*/
// const array = [1, 5, 9];
// const accessor = array[0];
// console.log(accessor);

/*now let's see object-based data:*/
// const obj = [
//       {key:'coffee', value: 2},
//       {key:'music', value: 8},
//       {key:'bike', value: 5},
//       {key:'read', value: 0}
// ]
// const accessor = obj[0].key;
// console.log(accessor);

/*and we can load csvs - from our local folder or from online*/
// async function drawData() {
// 	const dataset = await d3.csv("./../../forest.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);
// }
// drawData()
/*hold on, what's with the "await"?
await is a JavaScript keyword that will pause the execution of a function until a Promise is resolved
this will only work within an async function — note that the drawData() function declaration is preceded by the keyword async
for now, just follow my lead. if you want to dig deep, there are videos on the reference page
*/
/*let's load - JSON!*/
// async function drawData() {
// 	const dataset = await d3.json("./../../weather_data.json")
// 	const accessor = dataset[0];
// 	console.log(accessor);
// }
// drawData()






/*PART 3: SCALES
ok, enough with the loading data. let's do something with it
let's use the forest dataset we already found out how to load*/
// async function drawData() {
// 	const dataset = await d3.csv("./../../forest.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);

// 	const width = 1200;
// 	const height = 800;
// 	//now we need our SVG canvas
// 	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
// 		.append("svg") //add an SVG canvas
// 		.attr("width", width) //of this width
// 		.attr("height", height); //and this height

// 	const radius = 5;
// 	const color = "#e0f3f3";

// }
// drawData();
/*when moving to the next block, comment the above two lines out and re-instate
so we don't have to copy past the canvas and data call many many times
*/

/*PART 3.1: DATA?
and let's draw something on it, WITH our data!*/
// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", 10)
// 		.attr("cy", 10)
// 		.attr("r", radius)
// 		.attr("fill", color);
// }
// drawData();


/*PART 3.2: DATA?
wait they are all overlapping. this happened before...*/
// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return 10+10*i; //one per data point, so we need i (as in index)
// 		})
// 		.attr("cy", 10)
// 		.attr("r", radius)
// 		.attr("fill", color);
// }
// drawData();


/*PART 3.3: DATA?
ok but we want to see the NUMBERS*/
// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return 10+10*i; //one per data point, so we need i (as in index)
// 		})
// 		.attr("cy", 10)
// 		.attr("r", function(d,i){
// 			console.log(d.forest);
// 			return d.forest;
// 		})
// 		.attr("fill", color);	
// }
// drawData();



/*BREAK: WHAT DO WE WANT TO SEE? DRAW IT ON PAPER
space things out nicely. make the circles fit.
how should the data be shown? 
example: the data should be shown through the radius of the circles and how many circles there are
every piece of data should be represented as a circle
every circle's radius should get bigger if it represents bigger data and smaller if it represents smaller data
the circles should be spaced out evenly along the x axis
they should be placed on the same y location across the page
for that we need SCALES.*/



/*PART 3.4: SCALES, FINALLY

what are scales?
a scale is a function that converts values between two domains.
like on a map: the physical space is scaled down to fit on a map you can hold!
there are a few different kinds of scales depending on the incoming data.
today we will work with the linear scale - good for quantitative data
another day we will work with the ordinal scale - good for categorical data

so what is the "physical space" we are scaling? 
it is the information that should fit in our canvas. 
do we need to plot forest levels over 1000 or under 0? 
we could hard-code a standard set of temperatures
but that range could be too large (making the data hard to see), or it could be too small or offset (cutting off the data). 
instead, let’s use the actual range by finding the lowest and highest temperatures in our dataset.

what do we need to set up scales? 
the domain: the minimum and maximum input values
the range: the minimum and maximum output values

let’s start with the domain. 
we’ll need to create an array of the smallest and largest numbers our y axis will need to handle
in this case the lowest and highest forest levels in our dataset.
*/


/*PART 3.5: mins,maxes
d3 has a method for that!
it's called d3.extent
it takes the whole dataset and finds the min and max
let's set it up.
first we need to have a function to access the area of the data we want to check
in our case, it is the "forest" column which holds the forest data*/
// 	const foDomain = function(d){
// 		return d.forest;
// 	}
// 	console.log(d3.extent(dataset, foDomain));

// 	const rScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([1, 20]) //minimum and maximum pixels we want to map for radius

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return 10+10*i; //one per data point, so we need i (as in index)
// 		})
// 		.attr("cy", 100)
// 		.attr("r", function(d){
// 			// console.log(rScale(d.forest)); //so we can see its working
// 			return rScale(d.forest);
// 		})
// 		.attr("fill", color);
// }
// drawData();


/*PART 3.6: scaling for the x axis
now lets check in on that x axis spacing. 
its done by guesswork and hardcoded so the numbers may be going off the screen
SCALES to the rescue again :) 
let's do year by year?*/
// 	const xDomain = function(d){
// 		return d.year;
// 	}
// 	console.log(d3.extent(dataset, xDomain)+"min and max years");
// 	const xScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, xDomain)) 
// 		.range([0, width]) //minimum and maximum pixels we want to map for radius

// 	const foDomain = function(d){
// 		return d.forest;
// 	}
// 	console.log(d3.extent(dataset, foDomain)+"min and max forest");

// 	const rScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([1, 20]) //minimum and maximum pixels we want to map for radius

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return xScale(d.year);
// 		})
// 		.attr("cy", 100)
// 		.attr("r", function(d){
// 			return rScale(d.forest);
// 		})
// 		.attr("fill", color);
// }
// drawData()	


/*PART 3.7: scaling data to the y axis?
what about plotting all the circles on the y axis 
according to their forest levels?*/
// 	const xDomain = function(d){
// 		return d.year;
// 	}
// 	console.log(d3.extent(dataset, xDomain)+"min and max years");
// 	const xScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, xDomain)) 
// 		.range([20, width-20]) //minimum and maximum pixels we want to map for radius

// 	const foDomain = function(d){
// 		return d.forest;
// 	}
// 	console.log(d3.extent(dataset, foDomain)+"min and max forest");

// 	const yScale = d3.scaleLinear() 
// 		.domain(d3.extent(dataset, foDomain)) 
// 		.range([height-50, 50]) //min goes almost at bottom, max goes almost at top

// 	const foCircles = canvas.selectAll("foc")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function(d,i){
// 			return xScale(d.year);
// 		})
// 		.attr("cy", function(d){
// 			return yScale(d.forest);
// 		})
// 		.attr("r", 10)
// 		.attr("fill", "grey")
// 		.attr("stroke", "black")
// 		.attr("opacity",.2) //let's see how many overlaps we have?
// }
// drawData()



/*PART 3.8: canvas
last thing: it's not so good that our canvas is hard-coded
it doesn't change when we make our browser window small or big
so we could miss some data pieces
ideally, the chart will be as large as possible while still fitting on our screen.
we want to use either the height or the width of the window, whichever one is smaller. 
to leave a little whitespace around the chart let's make it a touch smaller than that even
the d3.min method helps us by getting the minimum of the array of items we pass it.
note: we'll also add a consistent margin while we're at it
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
// }
// drawData();



/*now let's draw our data again and see how good it looks!*/
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
// 		.attr("fill", "grey")
// 		.attr("stroke", "black")
// 		.attr("opacity",.2) //let's see how many overlaps we have?
// }
// drawData();



/*
PART 2: LOADING DATA
+ data structures
PART 3: SCALES
+ linear, ordinal, min, max, canvas size
*/