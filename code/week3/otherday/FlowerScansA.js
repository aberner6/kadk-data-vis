
/* PART 1 - DEN CODE ANNELIE SENDE MIG DEN 24. MARTS 
now let's draw our data again and see how good it looks!*/
//async function drawData() {
//	const dataset = await d3.csv("./../../flowersMini.csv")
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
//	const dataset = await d3.csv("./../../flowersSheet1.csv")
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





/*PART 3 - FORSØG PÅ AT TEGNE VASERNE*/

/*now let's draw our data again and see how good it looks!*/
async function drawData() {
	const dataset = await d3.csv("./../../flowers_v.csv")
	const accessor = dataset[0];
	console.log(accessor);

	const radius = 1;
	const color = "#e0f3f3";

	const screenWidth = window.innerWidth * 0.5;
	const screenHeight = window.innerHeight * 0.5;

	const margin = radius * 4;

	const canvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

	const xScale = d3.scaleLinear()
		.domain([0, dataset.length]) 
		.range([margin, screenWidth - margin]) 

	const flowerDomainY = function(d) {
		return parseFloat(d.y);
	}
	console.log(d3.extent(dataset, flowerDomainY) + "min and max y-value");
	const yScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainY))
		.range([screenHeight - margin, margin]) 
	

	//DREAM: make it go through the colors of the flower mapped to the y data
    const colScale = d3.scaleSequential()
		.domain(d3.extent(dataset, flowerDomainY))
		.range(["green","white","purple"])



	const flowerDomainZ = function(d) {
		return parseFloat(d.z);
	}
	console.log(d3.extent(dataset, flowerDomainZ) + "min and max z-value");
	const zScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([1, 10])
	const oScale = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainZ))
		.range([.1, .7])


	const flowerDomainX = function(d) {
		return parseFloat(d.x);
	}
	console.log(d3.extent(dataset, flowerDomainX) + "min and max x-value");
	const xSpread = d3.scaleLinear()
		.domain(d3.extent(dataset, flowerDomainX))
		.range([margin, screenWidth - margin])


	let prevVal = 0;
	const flowerCircles = canvas.selectAll("FlowerCir")		
		.data(dataset)
		.enter().append("circle")
		.attr("cx", function (d) {			
			return xSpread(parseFloat(d.x));
		})
		.attr("cy", function (d) {
			return yScale(parseFloat(d.y)); 
		})
		.attr("r", function(d){
			return zScale(parseFloat(d.z));
		})
		.attr("fill", function (d, i) {		
													/*KASPAR: - Annelie: how should the color know that it should change? 
													- I would like the colour to change based on the z - value.I also like that it gradually changes, 
													But it could be nice if it had som information in it..*/
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
