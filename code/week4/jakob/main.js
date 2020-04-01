
async function drawData() {
	const dataset = await d3.csv("faelled_monday.csv")
	const accessor = dataset[0];
	console.log(accessor);
	
    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.9;
	const margin = 50;

	const canvas = d3.select("#wrapper") 
		.append("svg") 
		.attr("width", width) 
        .attr("height", height);

	const xScale = d3.scaleLinear() 
		.domain([0, 86]) 
		.range([width-margin, margin]) 
    
    const colScale = d3.scaleOrdinal() 
        .domain([0,1,2,3]) 
        .range(["black","green","blue","red"]) 

    const yScale = d3.scaleOrdinal() 
        .domain(["12m","13m","14m"]) 
        .range([20,120,220]) 

    console.log(dataset.length)
    const bar = canvas.selectAll("bars")
        .data(dataset)
        .enter().append("rect")
        .attr("x", function(d,i){
            return 10+(d.entryNum)*10
        })
        .attr("y", function(d,i){
            return yScale(d.date);
        })
        .attr("width", 10)
        .attr("height", 100)
        .attr("fill", function (d) {
            return colScale(d.category);
        })
}
drawData();


