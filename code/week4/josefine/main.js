
async function drawData() {
	const dataset = await d3.csv("./../../TeaData.csv")
	const accessor = dataset[0];
	console.log(accessor);
	

    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.9;

	const margin = 50;

	const canvas = d3.select("#wrapper") 
		.append("svg") 
		.attr("width", width) 
        .attr("height", height);

    //y-coordinates scaled

	const yDomain = function(d){
		return d.ycoor;
	}

	const yScale = d3.scaleLinear() 
		.domain(d3.extent(dataset, yDomain)) 
		.range([width-margin, margin]) 

    //x-coordinates scaled


	const xDomain = function(d){
		return d.xcoor;
    }

    const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, xDomain))
        .range([margin, height-margin])

   

    //colors for the elements

    const type = function (d) {
        return d.type1;
    }

	const colScale = d3.scaleOrdinal()
		.domain(d3.extent(dataset, type))
        .range(["#4a2c24", "#6b0010", "#1eaa13", "#f7b334", "#3adaf4"]);  //Black, Rooibus, Green, Chai, Iced

    const colScale2 = d3.scaleOrdinal()
        .domain(d3.extent(dataset, type))
        .range(["#2d1302", "#6b0010", "#1d9500", "#f48414", "#3adaf4"]);  //Black, Rooibus, Green, Chai, Iced

    const fav = []; 
		 function categories(){
		 	for(var i=0; i<dataset.length; i++){ 
		 		fav.push(dataset[i].type1); 
		 	}
        }
   
		 categories(); 
    console.log(fav);

    const mns = function (d) {
        return d.milknsugar
    }

    const sugarScale = d3.scaleOrdinal()
        .domain(d3.extent(dataset, mns))
        .range(["Orange", "Red", "White", "Black"]); //Both, Sugar, Milk, Nothing

    const milk = [];
    function categories2() {
        for (var i = 0; i < dataset.length; i++) {
                milk.push(dataset[i].milknsugar);
        }
    }
        categories2();

    const country = canvas.selectAll("country")
        .data(dataset)
        .enter().append("circle")
        .attr("cx", function (d) {
            return margin + 3.3 * d.xcoor;
        })
        .attr("cy", function (d) {
            return 30 + 6 * d.ycoor;
        })
        .attr("r", function (d) {
            return d.teacountry / 3.5;
        })
        .attr("fill", function (d) {
            return colScale(d.type1);
        })
        .attr("opacity", 0.3)
        .on("mouseover", function(d) {
            console.log(parseFloat(d3.select(this).attr("cx")))
            //get this circle's x/y values, then augment for the tooltip
            var xPosition = parseFloat(d3.select(this).attr("cx"));
            var yPosition = parseFloat(d3.select(this).attr("cy"));

            d3.select("#tooltip")
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")                     
                .select("#value")
                .html(d.teacountry+" <br/> "+d.milknsugar);
            //show the tooltip
            d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
            //hide the tooltip
            d3.select("#tooltip").classed("hidden", true); 
        })
        .transition()
        .duration(8000)
        .attr("fill", function (d) {
            return sugarScale(d.milknsugar);
        })
        .attr("opacity", 0.4);

    const person = canvas.selectAll("person")
        .data(dataset)
        .enter().append("circle")
        .attr("cx", function (d) {
            return margin + 3.3 * d.xcoor;
        })
        .attr("cy", function (d) {
            return 30 + 6 * d.ycoor;
        })
        .attr("r", function (d) {
            return 5 * d.teaperson;
        })
        .attr("fill", function (d) {
            return colScale2(d.type1);
        })
        .transition()
        .duration(8000)
        .attr("fill", function (d) {
            return sugarScale(d.milknsugar);
        });
}
drawData();


