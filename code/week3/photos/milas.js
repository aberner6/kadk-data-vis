
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("milas_sm.csv");
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
	const margin = 40;

/*step 3: make the canvas*/
	const myCanvas = d3.select("#wrapper") //grab this element with the idea of wrapper
		.append("svg") //add an SVG canvas
		.attr("width", screenWidth) //of this width
		.attr("height", screenHeight); //and this height

/*step 4: set up xscale according to date*/
	const xScale = d3.scaleTime()
		.domain(d3.extent(dataset, xAccessor))
		.range([margin, screenWidth-margin])

    console.log(d3.extent(dataset, xAccessor))
/*step 5: set up bar scale according to likes*/
	const domainLikes = function (d) {
		return parseInt(d.likes);
	}
	const yScale = d3.scaleLinear() //linear range want quantitative information
		.domain(d3.extent(dataset, domainLikes)) //find min and max of what's coming in from my dataseet
		.range([1, screenHeight/2]); //what i want to come out on the screen
	console.log(d3.extent(dataset, domainLikes))

	const colScale = d3.scaleLinear() //linear range want quantitative information
		// .domain([0,1]) //find min and max of what's coming in from my dataseet
		.range(["red","blue"]); //what i want to come out on the screen

/*step 6: set up fill scale according to color data
read up here and see if you can figure something out:
https://observablehq.com/@d3/color-schemes?collection=@d3/d3-scale-chromatic
https://observablehq.com/@d3/sequential-scales?collection=@d3/d3-scale-chromatic
https://github.com/d3/d3-scale-chromatic

could you make the color defined by the data?
as in - if there is a color column in your data that says "red" or some hex numbers
then you could just pull that into your fill like so:
		.attr("fill",function(d){
			return d.color
		})
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
			return screenHeight/2-yScale(parseInt(d.likes))/2;
		})
		.attr("width", 5)
		.attr("height", function(d){
			console.log(yScale(parseInt(d.likes)))
			return yScale(parseInt(d.likes));
		})
		.attr("fill",function(d,i){
			// colScale.range([d.color])
			// console.log(colScale(i));
			return d3.interpolateYlGn(.5);
		});
}
drawData();