//it's a fresh start! 
//we will now use let and const in our code

//PART 2: LOADING DATA
// + data structures: arrays, objects, csvs, json
//we already saw the array and how to access it:
// const array = [1, 5, 9];
// const accessor = array[0];
// console.log(accessor);

//now let's see object-based data:
// const obj = [
//       {key:'coffee', value: 2},
//       {key:'music', value: 8},
//       {key:'bike', value: 5},
//       {key:'read', value: 0}
// ]
// const accessor = obj[0].key;
// console.log(accessor);

//and we can load csvs - from our local folder or from online
// async function drawData() {
// 	const dataset = await d3.csv("./../../mauna_loa_co2_monthly_averages.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);
// }
// drawData()
//hold on, what's with the "await"?
//await is a JavaScript keyword that will pause the execution of a function until a Promise is resolved
//this will only work within an async function — note that the drawData() function declaration is preceded by the keyword async
//for now, just follow my lead. if you want to dig deep, there are videos on the reference page

//let's load - JSON!
// async function drawData() {
// 	const dataset = await d3.json("./../../weather_data.json")
// 	const accessor = dataset[0];
// 	console.log(accessor);
// }
// drawData()






//PART 3: SCALES
//ok, enough with the loading data. let's do something with it
//let's use the co2 dataset we already found out how to load
async function drawData() {
	const dataset = await d3.csv("./../../mauna_loa_co2_monthly_averages.csv")
	const accessor = dataset[0];
	console.log(accessor);

	//now we need our SVG canvas
	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", 400) //of this width
		.attr("height", 400); //and this height

	const radius = 5;
	const color = "#e0f3f3";
	//and let's draw something on it, WITH our data!
	// const coCircles = canvas.selectAll("coc")
	// 	.data(dataset)
	// 	.enter().append("circle")
	// 	.attr("cx", 10)
	// 	.attr("cy", 10)
	// 	.attr("r", radius)
	// 	.attr("fill", color);
	//wait they are all overlapping. this happened before 
	// const coCircles = canvas.selectAll("coc")
	// 	.data(dataset)
	// 	.enter().append("circle")
	// 	.attr("cx", function(d,i){
	// 		return 10+10*i; //one per data point, so we need i (as in index)
	// 	})
	// 	.attr("cy", 10)
	// 	.attr("r", radius)
	// 	.attr("fill", color);
	//ok but we want to see the NUMBERS
	const coCircles = canvas.selectAll("coc")
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function(d,i){
			return 10+10*i; //one per data point, so we need i (as in index)
		})
		.attr("cy", 10)
		.attr("r", function(d,i){
			console.log(d.average);
			return d.average;
		})
		.attr("fill", color);	
	//and space things out nicely. and make the circles fit.
	//we need SCALES.

}
drawData()











// PART 2: LOADING DATA
// + data structures
// PART 3: SCALES
// + linear, ordinal, min, max
// PART 4: SVG
// + more shapes, practicing selectors, binding data
// PART 5: DRAWING WITH DATA
// + selectors, binding data, comparison, logic, conditionals