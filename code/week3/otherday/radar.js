/*
now let's make a radar chart!

*/

async function drawData() {
/*step 1: load data
something new here:
we will work with the json file
which has many days in it
for each day, there is a lot of information!
firstly, each day has a date :)
so we will need to learn how to turn human dates into d3 legible dates

note: we use "let" instead of "const" when loading the data 
because we will need to redefine the data to make it work better
*/
	let dataset = await d3.json("./../../weather_data.json") 
	const generalAccess = dataset[5];
	console.log(generalAccess);
/*
PART 1: Dates
check out the "date parser"
what we do is: we tell d3 to grab the date
which in the dataset is formatted as: "2018-01-01" 
that's year, month, day. d3 can parse or understand these dates if it knows what format they are coming in as. 
https://github.com/d3/d3-time-format
here's how you can know what to tell d3:
https://github.com/d3/d3-time-format#locale_format
in our case, we will tell d3 to expect "%Y-%m-%d" because that is how our data is formatted

then, we'll make sure the data is properly sorted
from earliest date to last date
by using the sort function
*/
	const dateParser = d3.timeParse("%Y-%m-%d");
	const dateAccessor = function(d){
		return dateParser(d.date)
	}
	dataset = dataset.sort(function(a,b){ 
		dateAccessor(a) - dateAccessor(b)
	})
	console.log(dataset);
	const metrics = [
	"windBearing",
	"moonPhase",
	"pressure",
	"humidity",
	"windSpeed",
	"temperatureMax",
	]	
/*step 2: prepare dimensions*/
	const width = d3.min([
		window.innerWidth * 0.9,
		window.innerHeight * 0.9,
	])
	let dimensions = {
	width: width,
	height: width,
    radius: width / 2,
	    margin: {
	      top: 200,
	      right: 50,
	      bottom: 50,
	      left: 200,
	    },
	}
	dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
	dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom
  	//need to set up the radius plan as well
  	dimensions.boundedRadius = dimensions.radius - ((dimensions.margin.left + dimensions.margin.right) / 2)

/*step 3: create canvas*/
	const wrapper = d3.select("#wrapper")
		.append("svg")
		.attr("width", dimensions.width)
		.attr("height", dimensions.height);
 
	const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`);

/*step 4: create scales
we will create a special scale here
where each metric we pass into the scaler
will give us back a domain specific to that metric
for example, we will pass in the moon phase
and get back a range of pixels related to the min and max of that piece of information!
*/

  const metricScales = metrics.map(function(metric){
  	return d3.scaleLinear()
		    .domain(d3.extent(dataset, function(d){
		    	return +d[metric]
		    }))
		    .range([0, dimensions.boundedRadius])
		    .nice() //this smooths the numbers down
  }) 

/*
here we add a path with the class of line
but we are not using it until the drawline function when we will update its values
*/
  const line = bounds.append("path")
      .attr("class", "line");

  const drawLine = function(day){ //for each day that we ask for
    const lineGenerator = d3.lineRadial()
        .angle(function(metric, i){ //angle is shifting around the circle depending on which metric
        	return i * ((Math.PI * 2) / metrics.length) 
        })
        .radius(function(metric, i){ 
        	return metricScales[i](+day[metric] || 0) //access the metric data for that day
        })
        .curve(d3.curveLinearClosed)

    const line = bounds.select(".line") //take that line from above
        .datum(metrics) //bind it to the categories of our metrix
        .attr("d", lineGenerator) //pass it through the line generator above
        .style("transform", `translate(${dimensions.boundedRadius}px, ${dimensions.boundedRadius}px)`)
  }

  let activeDayIndex = 0
  const title = d3.select("#title")
  const dateFormatter = d3.timeFormat("%B %-d, %Y")

  const updateChart = function(){
    title.text(dateFormatter(dateAccessor(dataset[activeDayIndex]))) //change the title
    drawLine(dataset[activeDayIndex]) //draw a line with the new data
  }

  updateChart()

  d3.select("#show-next-day").on("click", function(e){ //when the button is clicked
	activeDayIndex = (activeDayIndex + 1) % (dataset.length - 1) //change the data
    updateChart() //update the chart
  })
}
drawData()


/*
PART 1: DRAWING WITH DATA: radar
+ dates, more d3 paths*/