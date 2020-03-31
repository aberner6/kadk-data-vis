var myCanvas;
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("instagramdata.csv");
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);

/*step _: set up date parser
"11/10/2015"
https://github.com/d3/d3-time-format#locale_format
https://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
http://learnjsdata.com/time.html
*/
	const dateParser = d3.timeParse("%m/%d/%Y");
	const xAccessor = function(d){
		return dateParser(d.date);
	} 

/*step 2: define dimensions of canvas*/
	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;
	const margin = 200;

/*step 3: make the canvas*/
	myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height


/*step 4: set up xscale according to date*/
	const xScale = d3.scaleTime()
		.domain(d3.extent(dataset, xAccessor))
		.range([margin, screenWidth-margin])

    console.log("First and last posts: " + d3.extent(dataset, xAccessor))

/*step 5: set up bar scale according to likes*/
	const domainLikes = function (d) {
		return parseInt(d.likes);
	}
	const yScale = d3.scaleLinear() //linear range want quantitative information
		.domain(d3.extent(dataset, domainLikes)) //find min and max of what's coming in from my dataset
		.range([1, screenHeight/2]); //what i want to come out on the screen
	console.log("Least and most liked posts: " + d3.extent(dataset, domainLikes));

	const colScale = d3.scaleLinear()
		.range(["red","blue"]);
/*step 6: set up fill scale according to color data
read up here and see if you can figure something out:
https://observablehq.com/@d3/color-schemes?collection=@d3/d3-scale-chromatic
https://observablehq.com/@d3/sequential-scales?collection=@d3/d3-scale-chromatic
https://github.com/d3/d3-scale-chromatic


	
could you make the color defined by the data?
as in - if there is a color column in your data that says "red" or some hex numbers
then you could just pull that into your fill like so:
*/




/*step 7: use scale to draw shapes on the canvas :) 
check the week2/friday/bars.js example for more on this
*/
	const dataBar = myCanvas.selectAll("db1")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class",function(d,i){
			return "db"+i;
		})
		.attr("x", function(d){
			return xScale(xAccessor(d)); //the x accessor parses the date for us
		})
		.attr("y", function(d){
			return screenHeight/2-yScale(parseInt(d.likes))/2;
		})
		.attr("width", 2)
		.attr("height", function(d){
			// console.log(yScale(parseInt(d.likes)))
			return yScale(parseInt(d.likes));
		}) 
		.attr("fill", function(d) {
			return d.color;
		})
		// .attr("fill", "red");


const dataBar2 = myCanvas.selectAll("db2")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class",function(d,i){
			return "db"+i;
		})
		.attr("x", function(d){
			return xScale(xAccessor(d)); //the x accessor parses the date for us
		})
		.attr("y", function(d){
			return screenHeight/2-yScale(parseInt(d.likes))/2;
		})
		.attr("width", 2)
		.attr("height", function(d){
			return yScale(parseInt(d.likes))/1.5;
		})
		.attr("fill", function(d) {
			return d.color2;
		})
		// .attr("fill", "blue")


const dataBar3 = myCanvas.selectAll("db3")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class",function(d,i){
			return "db"+i;
		})
		.attr("x", function(d){
			return xScale(xAccessor(d)); //the x accessor parses the date for us
		})
		.attr("y", function(d){
			return screenHeight/2-yScale(parseInt(d.likes))/2;
		})
		.attr("width", 2)
		.attr("height", function(d){
			return yScale(parseInt(d.likes))/3;
		})
		.attr("fill", function(d) {
			return d.color3;
		})
		.on("mouseover", function(d){
		   var barUnderMouse = this;

		   var num = d3.select(this).attr("class");
		   console.log(num);
			//if you have the same classname as barundermouse
		  
		    d3.selectAll('rect').transition().attr('opacity',function () {
		    	if(this===barUnderMouse || (d3.selectAll(".db"+num)!=undefined)){
		    		return 1;
		    	}
		    	else{
		    		return .5;
		    	}
		    });
		})
		.on("mouseout", function(d){
		    d3.selectAll('rect').transition().attr('opacity',1);
		})

		function changeBackground(color) {
   			document.body.style.background = color;
			}

		window.addEventListener("load",function() { changeBackground('white') });


/*LABELS, AXES*/
/*step 6: draw labels and axes
here we just need to do some translation and positioning of the information
so that it fits properly at the edges of our visualisation
we have options for where to place each axis.
where would you draw them?
• axisTop • axisRight • axisBottom • axisLeft

note on appending a "g": when we call our axis generator, it will create many elements -
- the line, ticks, legend — 
so let’s create a "g" element to hold all of those elements and keep our DOM organized. 
then we’ll pass that new element to our yAxisGenerator function to tell it where to draw our axis.
*/
	const xAxisGenerator = d3.axisBottom() 
		.scale(xScale) 
	const xAxis = myCanvas.append("g")
		.call(xAxisGenerator)
		.style("transform", `translateY(${screenHeight/2}px)`)
/*.axisBottom() won't draw the axis in the right place? 
d3’s axis generator functions know where to place the tick marks and tick labels relative to the axis line itself, 
but they have no idea where to place the axis itself.
to move the x axis to the bottom, we can shift the x axis group, 
similar to how we shifted our chart bounds using a CSS transform.*/

	const xAxisLabel = xAxis.append("text") //also labels
		.attr("x", margin - 5)
		.attr("y", 0)
		.attr("fill", "black")
		.attr("text-anchor","end")
		.style("font-size", "1.4em")
		.html("Years")
}
drawData();