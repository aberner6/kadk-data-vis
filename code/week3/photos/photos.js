
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("milas.csv");
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
	const margin = 10;

/*step 3: make the canvas*/
	const myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

/*step _: set up xscale according to date*/
	const xScale = d3.scaleTime()
		.domain(d3.extent(dataset, xAccessor))
		.range([margin, screenWidth-margin])

    console.log(d3.extent(dataset, xAccessor))
/*step _: set up bar scale according to likes*/
	const domainLikes = function (d) {
		return parseInt(d.likes);
	}
	const yScale = d3.scaleLinear() //linear range want quantitative information
		.domain(d3.extent(dataset, domainLikes)) //find min and max of what's coming in from my dataseet
		.range([screenHeight-margin, margin]); //what i want to come out on the screen
	console.log(d3.extent(dataset, domainLikes))
/*step _: set up fill scale according to color data*/



/*step 4: draw shapes with random messy positions just to see the data*/	


/*step 6: try to redraw the shapes now with at least a scale
for example... 
*/
/*step 7: use scale to draw shapes on the canvas :) 
check the week2/friday/bars.js example for more on this
*/
	const dataBar = myCanvas.selectAll("db")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", function(d){
			return xScale(xAccessor(d)); //the x accessor parses the date for us
		})
		.attr("y", function(d){
			return yScale(d.likes);
		})
		.attr("width", 10)
		.attr("height", function(d){
			return screenHeight-yScale(d.likes);
		})
		.attr("fill","pink");
}
drawData();