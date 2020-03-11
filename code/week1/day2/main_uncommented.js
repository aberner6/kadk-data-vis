
const dataset = [12, 25, 38];
const accessor = dataset[0];
console.log(accessor); 


const canvas = d3.select("#wrapper") 
	.append("svg") 
	.attr("width", 400)
	.attr("height", 400) 

const oneCircle = canvas 
	.append("circle") 
	.attr("cx", 10)
	.attr("cy", 10)
	.attr("r", 10)
	.attr("fill", "black");

const circ1 = canvas 
	.append("circle") 
	.attr("cx", 10)
	.attr("cy", 50)
	.attr("r", 12)
	.attr("fill", "pink");
const circ2 = canvas 
	.append("circle") 
	.attr("cx", 40)
	.attr("cy", 50)
	.attr("r", 25)
	.attr("fill", "pink");
const circ3 = canvas 
	.append("circle") 
	.attr("cx", 70)
	.attr("cy", 50)
	.attr("r", 38)
	.attr("fill", "pink");


const dataDots = canvas.selectAll("circle") 
	.data(dataset)
	.enter().append("circle") 
	.attr("cx", 20) 
	.attr("cy", 100)
	.attr("r", 10)
	.attr("fill", "blue");


const dataDots2 = canvas.selectAll("dots")
	.data(dataset)
	.enter().append("circle")
	.attr("cx", function(d, i){
		return 20+i*10;
	})
	.attr("cy", 200)
	.attr("r", 5)
	.attr("fill", "blue");
