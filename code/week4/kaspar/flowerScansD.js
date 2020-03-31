
/* PART 1 - DEN CODE ANNELIE SENDE MIG DEN 24. MARTS 
now let's draw our data again and see how good it looks!*/
//async function drawData() {
//	const dataset = await d3.csv("flowersMini.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 10;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height


//	/*	// code from the main.js file..
//	const foDomain = function (d) {
//	return d.forest;
//	}
//	console.log(d3.extent(dataset, foDomain) + "min and max forest");
//	const yScale = d3.scaleLinear()
//	.domain(d3.extent(dataset, foDomain))
//	.range([screenHeight - margin, margin]) //min goes almost at bottom, max goes almost at top
//	*/

////ANNELIE: color scale set up
//	const colScale = d3.scaleLinear()
//		.domain([0, dataset.length])
// 		.range(["green", "lightgreen", "purple"])
//    	.interpolate(d3.interpolateRgb.gamma(2.2))
////ANNELIE: I COMMENTED THIS OUT BECAUSE IT'S NOT NEEDED
//	// const flowerDomX = function (d,i) {
//	// 	return d.x;
//	// }
//	// console.log(d3.extent(dataset, flowerDomX) + "min and max x-value");
//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length]) //if you just want to use this for the index number, the domain goes from 0 to the length of the dataset rather than being related to the dataset's x value itself
//		.range([margin, screenWidth - margin]) //min goes almost at bottom, max goes almost at top


//	const flowerDomainY = function (d) {
//		return d.y;
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight-margin, margin]) //minimum and maximum pixels we want to map for radius


//	const flowerDomainZ = function (d) {
//		return d.z;
//	}
//	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//	const zScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([5, 10]) //min goes almost at bottom, max goes almost at top

//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")		//KASPAR: The reason why this isn't working could be because of the minus-values in the dataset.
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cx", function (d, i) {		//KASPAR:	This should not refere to the x-value but instead just increace by one everytime a circle is drawn.
//			return xScale(i); //ANNELIE: your xscale can be related to the "i" which is the index counter of increasing by one through the dataset - see above how the scale also changes therefore
//		})
//		.attr("cy", function (d) {
//			return yScale(flowerDomainY(d)); //ANNELIE: you have to go one deeper to scale the data using your domain scaler per data piece
//		})
//		.attr("r", function (d) {			//KASPAR: Trying to set the radius = the z-value from the dataset. 
//			return zScale(flowerDomainZ(d));
//		})
//		.attr("fill", function (d, i) {		//KASPAR: Here I would like to make a colourScale from green through lightGreen white and then purple.
//			//ANNELIE: how should the color know that it should change? it could change based on the i, which is the counter going through the dataset?
//			console.log(i);
//			return colScale(i);
//			//ANNELIE: and if you want to try that, then check this kind of example (see above)
//			 if (i > 0) {
//			 	prevVal = dataset[i - 1].flowersMini; //ANNELIE: what is with the "flowersmini" accessor? all you have to do is grab the d.x or d.y or d.z...
//			 	//	console.log(prevVal)		//KASPAR: if this is not commented out it will say undefined in the console
//			 	//ANNELIE: yes, because dataset[i-1].flowersMini does not exist because there's nothing called flowersMini in your dataset...
//			 	if (d.flowersMini >= prevVal) { //ANNELIE: this won't work - flowersMini doesn't exist
//			 		return "purple";
//			 	} else {
//			 		return "green";
//			 	}
//			 }
//		})
//		.attr("opacity", .1) //let's see how many overlaps we have?
//}


//drawData();// JavaScript source code




/*PART 2 - CODE BRUGT TIL AT VARIERE OPACITY OG CIRKEL-RADIUS, ABSTRACT DATA VISUALISERING*/

///*now let's draw our data again and see how good it looks!*/
//async function drawData() {
//	const dataset = await d3.csv("flowersSheet1.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 10;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height


//	/*	// code from the main.js file..
//	const foDomain = function (d) {
//	return d.forest;
//	}
//	console.log(d3.extent(dataset, foDomain) + "min and max forest");
//	const yScale = d3.scaleLinear()
//	.domain(d3.extent(dataset, foDomain))
//	.range([screenHeight - margin, margin]) //min goes almost at bottom, max goes almost at top
//	*/

//	//ANNELIE: color scale set up
//	const colScale = d3.scaleLinear()
//		.domain([0, dataset.length])
//		.range(["green", "lightgreen", "purple"])
//		.interpolate(d3.interpolateRgb.gamma(2.2))
//	//ANNELIE: I COMMENTED THIS OUT BECAUSE IT'S NOT NEEDED
//	// const flowerDomX = function (d,i) {
//	// 	return d.x;
//	// }
//	// console.log(d3.extent(dataset, flowerDomX) + "min and max x-value");
//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length]) //if you just want to use this for the index number, the domain goes from 0 to the length of the dataset rather than being related to the dataset's x value itself
//		.range([margin, screenWidth - margin]) //min goes almost at bottom, max goes almost at top


//	const flowerDomainY = function (d) {
//		return d.y;
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight - margin, margin]) //minimum and maximum pixels we want to map for radius


//	const flowerDomainZ = function (d) {
//		return d.z;
//	}
//	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//	const zScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([5, 10]) //min goes almost at bottom, max goes almost at top

//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")		//KASPAR: The reason why this isn't working could be because of the minus-values in the dataset.
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cx", function (d, i) {		//KASPAR:	This should not refere to the x-value but instead just increace by one everytime a circle is drawn.
//			return xScale(i); //ANNELIE: your xscale can be related to the "i" which is the index counter of increasing by one through the dataset - see above how the scale also changes therefore
//		})
//		.attr("cy", function (d) {
//			return yScale(flowerDomainY(d)); //ANNELIE: you have to go one deeper to scale the data using your domain scaler per data piece
//		})
//		.attr("r", function (d) {			//KASPAR: Trying to set the radius = the z-value from the dataset. 
//			return zScale(flowerDomainZ(d)*9);
//		})
//		.attr("fill", function (d, i) {		//KASPAR: Here I would like to make a colourScale from green through lightGreen white and then purple.
//			//ANNELIE: how should the color know that it should change? it could change based on the i, which is the counter going through the dataset?
//			console.log(i);
//			return colScale(i);
//			//ANNELIE: and if you want to try that, then check this kind of example (see above)
//			if (i > 0) {
//				prevVal = dataset[i - 1].flowersMini; //ANNELIE: what is with the "flowersmini" accessor? all you have to do is grab the d.x or d.y or d.z...
//				//	console.log(prevVal)		//KASPAR: if this is not commented out it will say undefined in the console
//				//ANNELIE: yes, because dataset[i-1].flowersMini does not exist because there's nothing called flowersMini in your dataset...
//				if (d.flowersMini >= prevVal) { //ANNELIE: this won't work - flowersMini doesn't exist
//					return "purple";
//				} else {
//					return "green";
//				}
//			}
//		})
//		.attr("opacity", .9) //let's see how many overlaps we have?
//}


//drawData();// JavaScript source code





/*PART 3 - Vaserne tegnet tydeligt med den stil jeg bedst kan lide
 
 NB! denne del skal også bruges til at visualisere andre dataset fra vaserne*/

/*now let's draw our data again and see how good it looks!*/
//async function drawData() {
//	const dataset = await d3.csv("flowersSheet1.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 1;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height

//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length]) 
//		.range([margin, screenWidth - margin]) 

//	const flowerDomainY = function(d) {
//		return parseFloat(d.y);
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight - margin, margin]) 
	

//	//DREAM: make it go through the colors of the flower mapped to the y data
//  //  const colScale = d3.scaleSequential()
//		//.domain(d3.extent(dataset, flowerDomainY))
//		//.range(["green", "white", "purple"])

//	var colorLinScale = d3.scaleLinear()
//		.domain([ -.1, 1.5, 2,3])
//		.range(["green", "lightgreen", "white", "purple"]);



//	const flowerDomainZ = function(d) {
//		return parseFloat(d.z);
//	}
//	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//	const zScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([1, .02, 2])
//	const oScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([1, .5])


//	const flowerDomainX = function(d) {
//		return parseFloat(d.x);
//	}
//	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
//	const xSpread = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainX))
//		.range([margin, screenWidth - margin])


//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cx", function (d) {
//			return xSpread(parseFloat(d.x));
//		})
//		.attr("cy", function (d) {
//			return yScale(parseFloat(d.y));
//		})
//		.attr("r", function (d) {
//			return zScale(parseFloat(d.z));
//		})
//		//.attr("fill", "green")
//		.attr("fill", function (d, i) {

//			return colorLinScale(parseFloat(d.y));
//		})
//		//.attr("fill-opacity", .2)
//		.attr("opacity", function(d){
//			return oScale(parseFloat(d.z));
//		})
//		//.attr("stroke", function (d, i) {
//		//	return colorLinScale(parseFloat(d.y));
//		//})

//		///*ANIMATION*/
//		//.transition()
//		//.duration(2000)
//		//.attr("fill-opacity", 0)
//		//.attr("stroke-opacity", .3);

//		/*INTERACTION*/
//		// .on("ckick", ) inte
//}

//drawData();

///*PART 4 - FORSØG PÅ AT TEGNE VASERNE OPPEFRA*/
//async function drawData() {
//	const dataset = await d3.csv("flowersSheet4.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 1;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height

//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length])
//		.range([margin, screenWidth - margin])

//	const flowerDomainY = function (d) {
//		return parseFloat(d.y);
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight - margin, margin])

//var colorLinScale = d3.scaleLinear()
//	.domain([0.2, 1.4, 1.6, 2, 2.9])
//	.range(["green", "green", "white", "purple", "purple"]);



//const flowerDomainZ = function (d) {
//	return parseFloat(d.z);
//}
//console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//const zScale = d3.scaleLinear()
//	.domain(d3.extent(dataset, flowerDomainZ))
//	.range([5, .1])
//const oScale = d3.scaleLinear()
//	.domain(d3.extent(dataset, flowerDomainZ))
//	.range([.1, .7])


//	const flowerDomainX = function (d) {
//		return parseFloat(d.x);
//	}
//	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
//	const xSpread = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainX))
//		.range([margin, screenWidth - margin])


//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cx", function (d) {
//			return xSpread(parseFloat(d.z));
//		})
//		.attr("cy", function (d) {
//			return yScale(parseFloat(d.x));
//		})
//		.attr("r", function (d) {
//			return zScale(parseFloat(d.y));
//		})
//		//.attr("fill", "green")
//		.attr("fill", function (d, i) {
//			return colorLinScale(parseFloat(d.y));
//		})
//		.attr("fill-opacity", 1)
//		.attr("opacity", function (d) {
//			return oScale(parseFloat(d.x));
//		})
//		.attr("stroke", function (d, i) {
//			return colorLinScale(parseFloat(d.y));
//		})

//	/*ANIMATION*/
//	//.transition()
//	//.duration(2000)
//	//.attr("fill-opacity", 0)
//	//.attr("stroke-opacity", .3);

//	/*INTERACTION*/
//	// .on("ckick", ) inte
//}
//drawData();

/*PART 5 - TILBAGE TIL DET ABSTRAKTE - IMPLEMENTERING AF KODE FRA PART 2 I PART 3*/
/*now let's draw our data again and see how good it looks!*/
async function drawData() {
	const dataset = await d3.csv("flowersSheet1.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 1;
	const color = "#e0f3f3";

	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;

	const margin = radius * 4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

	const xScale = d3.scaleLinear()
		.domain([0, dataset.length]) 
		.range([0, 50]) 

	const flowerDomainY = function(d) {
		return parseFloat(d.y);
	}
	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainY))
		.range([0, 200]) 


	var colorLinScale = d3.scaleLinear()
		.domain([ 0.2, 1.4, 1.6, 2, 2.9])
		.range(["green", "green", "white", "purple", "purple"]);



	const flowerDomainZ = function(d) {
		return parseFloat(d.z);
	}
	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
	const zScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([5,.1])
	const oScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([.1, .7])


	const flowerDomainX = function(d) {
		return parseFloat(d.x);
	}
	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
	const xSpread = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainX))
		.range([0, 200])


	let prevVal = 0;
	var angle = 0;
	var datasetLength = dataset.length;
	console.log(datasetLength)
	const flowerCircles = canvas.selectAll("FlowerCir")
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function (d, i) {
			angle = (i / (datasetLength)) * Math.PI*2; // Calculate the angle at which the element will be placed.
			if(angle>Math.PI){
				return xSpread(parseFloat(d.x));
			}
			// return xScale(i);
		})
		.attr("cy", function(d){
			return yScale(parseFloat(d.y));
		})
		.attr("transform", function(d,i){
			angle = (i / (datasetLength)) * Math.PI*2; // Calculate the angle at which the element will be placed.
			// console.log(angle);
			d.x = (150 * Math.cos(angle)) + (screenWidth/2); // Calculate the x position of the element.
			d.y = (150 * Math.sin(angle)) + (screenHeight/2);
			return "translate(" + d.x + "," + d.y + ")";
		})
		//.attr("r", 10)
		.attr("r", function (d) {
			return zScale(parseFloat(d.z));
		})
		.attr("fill", "none")
		// .attr("fill", function (d, i) {
		// 	return colorLinScale(parseFloat(d.z));
		// })
		// .attr("opacity", 1)
		// .attr("fill-opacity", 0)
		//.attr("opacity", function(d){
		//	return oScale(parseFloat(d.z));
		//})
		.attr("stroke", function (d, i) {
			return colorLinScale(parseFloat(d.y));
		})
		//.attr("stroke-opacity", .9)
			.attr("stroke-opacity", function(d){
			return oScale(parseFloat(d.z));
		})
		.attr("stroke-width", .1)
		// .attr("stroke-width", function(d){
		// 	return zScale(parseFloat(d.z));
		// })

		///*ANIMATION*/
		//.transition()
		//.duration(2000)
		//.attr("fill-opacity", 0)
		//.attr("stroke-opacity", .3);

		///*INTERACTION*/
		// .on("ckick", ) inte
}

drawData();

/*PART 6 - TILBAGE TIL DET ABSTRAKTE - FORSØG PÅ AT LADE DATAEN BEVÆGE SIG RINDT I EN CIRKEL 
 (NB) - VIRKER IKKE
 */
/*now let's draw our data again and see how good it looks!*/
//async function drawData() {
//	const dataset = await d3.csv("flowersSheet1.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 1;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height

//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length]) 
//		.range([margin, screenWidth - margin]) 

//	const flowerDomainY = function(d) {
//		return parseFloat(d.y);
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight - margin, margin]) 


//	var colorLinScale = d3.scaleLinear()
//		.domain([ 0.2, 1.4, 1.6, 2, 2.9])
//		.range(["green", "green", "white", "purple", "purple"]);



//	const flowerDomainZ = function(d) {
//		return parseFloat(d.z);
//	}
//	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//	const zScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([5,.1])
//	const oScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([.1, .7])


//	const flowerDomainX = function(d) {
//		return parseFloat(d.x);
//	}
//	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
//	const xSpread = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainX))
//		.range([margin, screenWidth - margin])


//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cx", function (d, i) {
//			return xScale(i);
//		})
//		.attr("cy", function (d) {
//			return yScale(parseFloat(d.y));
//		})
//		//.attr("r", 10)
//		.attr("r", function (d) {
//			return zScale(parseFloat(d.z));
//		})
//		//.attr("fill", "green")
//		.attr("fill", function (d, i) {

//			return colorLinScale(parseFloat(d.z));
//		})
//		.attr("opacity", 1)
//		.attr("fill-opacity", 0)
//		//.attr("opacity", function(d){
//		//	return oScale(parseFloat(d.z));
//		//})
//		.attr("stroke", function (d, i) {
//			return colorLinScale(parseFloat(d.y));
//		})
//		//.attr("stroke-opacity", .9)
//			.attr("stroke-opacity", function(d){
//			return oScale(parseFloat(d.z));
//		})
//		.attr("stroke-width", 1.2)
//		.attr("stroke-width", function(d){
//			return zScale(parsefloat(d.z));
//		})

//		///*ANIMATION*/
//		//.transition()
//		//.duration(2000)
//		//.attr("fill-opacity", 0)
//		//.attr("stroke-opacity", .3);

//		///*INTERACTION*/
//		// .on("ckick", ) inte
//}

//drawData();

/*PART 7 - ANDET DATA I OBJ-FILEN 
*/
//async function drawData() {
//	const dataset = await d3.csv("flowersSheet4a.csv")
//	const accessor = dataset[0];
//	console.log(accessor);

//	const radius = 1;
//	const color = "#e0f3f3";

//	const screenWidth = window.innerWidth * 0.9;
//	const screenHeight = window.innerHeight * 0.9;

//	const margin = radius * 4;

//	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
//		.append("svg") //add an SVG canvas
//		.attr("width", screenWidth) //of this width
//		.attr("height", screenHeight); //and this height

//	const xScale = d3.scaleLinear()
//		.domain([0, dataset.length])
//		.range([margin, screenWidth - margin])

//	const flowerDomainY = function (d) {
//		return parseFloat(d.y);
//	}
//	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
//	const yScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainY))
//		.range([screenHeight - margin, margin])


//	var colorLinScale = d3.scaleLinear()
//		.domain([0.2, 1.4, 1.6, 2, 2.9])
//		.range(["green", "green", "white", "purple", "purple"]);



//	const flowerDomainZ = function (d) {
//		return parseFloat(d.z);
//	}
//	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
//	const zScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([5, .1])
//	const oScale = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainZ))
//		.range([.1, .7])


//	const flowerDomainX = function (d) {
//		return parseFloat(d.x);
//	}
//	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
//	const xSpread = d3.scaleLinear()
//		.domain(d3.extent(dataset, flowerDomainX))
//		.range([margin, screenWidth - margin])


//	let prevVal = 0;
//	const flowerCircles = canvas.selectAll("FlowerCir")
//		.data(dataset)
//		.enter().append("circle")
//		.attr("cy", function (d) {
//			return yScale(parseFloat(d.y));
//		})
//		.attr("cx", function (d) {
//			return yScale(parseFloat(d.x));
//		})
//		.attr("r", .5)
//		.attr("fill", "green")
//		.attr("opacity", .9)
//		//.attr("fill-opacity", 0)
//		//.attr("opacity", function(d){
//		//	return oScale(parseFloat(d.z));
//		//})
//		//.attr("stroke", function (d, i) {
//		//	return colorLinScale(parseFloat(d.y));
//		//})
//		//.attr("stroke", "green")
//		//.attr("stroke-opacity", .9)
//		//.attr("stroke-width", 1.2)
//		//.attr("stroke-width",1)

//	///*ANIMATION*/
//	//.transition()
//	//.duration(2000)
//	//.attr("fill-opacity", 0)
//	//.attr("stroke-opacity", .3);

//	///*INTERACTION*/
//	// .on("ckick", ) inte
//}

//drawData();

/*PART 8 - SECRET DATA PART 2 (USED CODE PART 3)

 NB! denne del skal også bruges til at visualisere andre dataset fra vaserne*/

/*now let's draw our data again and see how good it looks!*/
// async function drawData() {
// 	const dataset = await d3.csv("flowersSheet4.csv")
// 	const accessor = dataset[0];
// 	console.log(accessor);

// 	const radius = 1;
// 	const color = "#e0f3f3";

// 	const screenWidth = window.innerWidth * 0.9;
// 	const screenHeight = window.innerHeight * 0.9;

// 	const margin = radius * 4;

// 	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
// 		.append("svg") //add an SVG canvas
// 		.attr("width", screenWidth) //of this width
// 		.attr("height", screenHeight); //and this height

// 	const xScale = d3.scaleLinear()
// 		.domain([0, dataset.length]) 
// 		.range([margin, screenWidth - margin]) 

// 	const flowerDomainY = function(d) {
// 		return parseFloat(d.y);
// 	}
// 	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
// 	const yScale = d3.scaleLinear()
// 		.domain(d3.extent(dataset, flowerDomainY))
// 		.range([screenHeight - margin, margin]) 


// 	//DREAM: make it go through the colors of the flower mapped to the y data
//   //  const colScale = d3.scaleSequential()
// 		//.domain(d3.extent(dataset, flowerDomainY))
// 		//.range(["green", "white", "purple"])

// 	var colorLinScale = d3.scaleLinear()
// 		.domain([ -.1, 1.5, 2,3])
// 		.range(["green", "lightgreen", "white", "purple"]);



// 	const flowerDomainZ = function(d) {
// 		return parseFloat(d.z);
// 	}
// 	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
// 	const zScale = d3.scaleLinear()
// 		.domain(d3.extent(dataset, flowerDomainZ))
// 		.range([1, .02, 2])
// 	const oScale = d3.scaleLinear()
// 		.domain(d3.extent(dataset, flowerDomainZ))
// 		.range([1, .5])


// 	const flowerDomainX = function(d) {
// 		return parseFloat(d.x);
// 	}
// 	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
// 	const xSpread = d3.scaleLinear()
// 		.domain(d3.extent(dataset, flowerDomainX))
// 		.range([margin, screenWidth - margin])


// 	let prevVal = 0;
// 	const flowerCircles = canvas.selectAll("FlowerCir")
// 		.data(dataset)
// 		.enter().append("circle")
// 		.attr("cx", function (d) {
// 			return xSpread(parseFloat(d.x));
// 		})
// 		.attr("cy", function (d) {
// 			return yScale(parseFloat(d.y));
// 		})
// 		.attr("r", function (d) {
// 			return zScale(parseFloat(d.z));
// 		})
// 		//.attr("fill", "green")
// 		.attr("fill", function (d, i) {

// 			return colorLinScale(parseFloat(d.y));
// 		})
// 		//.attr("fill-opacity", .2)
// 		.attr("opacity", function(d){
// 			return oScale(parseFloat(d.z));
// 		})
// 		//.attr("stroke", function (d, i) {
// 		//	return colorLinScale(parseFloat(d.y));
// 		//})

// 		///*ANIMATION*/
// 		//.transition()
// 		//.duration(2000)
// 		//.attr("fill-opacity", 0)
// 		//.attr("stroke-opacity", .3);

// 		/*INTERACTION*/
// 		// .on("ckick", ) inte
// }

// drawData();
