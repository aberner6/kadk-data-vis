
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("sofia.csv");
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);

/*step _: set up date parser
your dates look like this:
"15/8-2012"
which translates to this in computer language:
"%d/%m-%Y"
see below references for how that is determined:
https://github.com/d3/d3-time-format
https://github.com/d3/d3-time-format#locale_format
https://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
http://learnjsdata.com/time.html
*/
	const dateParser = d3.timeParse("%d/%m-%Y");
	const yearOnly = d3.timeFormat("%Y")
	const xAccessor = function(d){
		return yearOnly(dateParser(d.date));
	} 

/*step 2: define dimensions of canvas*/
	const screenWidth = window.innerWidth * 0.9;
	const screenHeight = window.innerHeight * 0.9;
	const margin = 30;

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

/*step 5: draw in groups per year - like a canvas per year*/
    const years = myCanvas.selectAll(".year")
      .data(dataset); 

    const enteringYear = years.enter()
      .append('g')
      .attr("transform", function(d){
      	return "translate("+xScale(xAccessor(d))+","+margin+")";
      })


/*step 6: math:
figure out the total number of posts for each year
put this in the "totals" array
*/
	const totals = [];
    for (i = 0; i<dataset.length; i++){
        totals[i]= valueConsolidation(xAccessor(dataset[i]));
    } 
    //return number of times a post in a year occurs
    function valueConsolidation(givenYear,i) {
        let total = 0;
        for (i = 0;i<dataset.length; i++){
            if(xAccessor(dataset[i])!="undefined" && xAccessor(dataset[i])== givenYear){
                total++;
            }
        }
        return total;
     }

/* step 7: can you figure out scales based on totals per year???
fake code... :
	const radiusScale = d3.scaleLinear()
		.domain([]) //minimum year to maximum posts... for ex: [1 post to 10000 posts]
		.range([]) //range this should map to on the screen [5, 15]

*/



/*step 8: on each of those year "canvases", draw circles
there is one circle per post

can you figure out how to set up a scale for the radius?
it should relate to "i" which is the index counting how many posts there are in each year
*/
    enteringYear
        .append("circle")
        .attr('cx',0)
        .attr('cy',0)
        .attr("class", function(d){
        	return xAccessor(d); //if you inspect the elements in the console, you can see that each circle has its year as a class
        })
        .attr("r", function(d,i){
        	console.log(totals[i])
        	return totals[i]; //note: this is not scaled according to the min and max it could be! could go off the canvas or whatever!
        })
        .attr("fill", "teal")
        .attr("stroke", "white")
        .attr("opacity", .2)
}
drawData();