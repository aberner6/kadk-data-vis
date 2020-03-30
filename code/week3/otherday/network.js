var width = window.outerWidth;
var height = window.innerHeight;
var radius = 10;

async function drawData() {
  const dataset = await d3.csv("./../../flowers_mini.csv")
  const generalAccess = dataset[5];
  console.log(generalAccess);

  var canvas = d3.select("#wrapper").append("svg")
    .attr("width", width)
    .attr("height", height)

  var datasetLength = dataset.length;
  var nodes = dataset;
  console.log(nodes);

  var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(10))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(function(d) {
      return 10
    }))
    .on('tick', ticked)

  var angle = 0;
  function ticked() {
    var draw = canvas
      .selectAll('circle')
      .data(nodes)

    draw.enter()
      .append("circle")
      .attr("r", radius)
      .merge(draw)
      .attr("transform", function(d,i){
          d.x = Math.max(radius, Math.min(width - radius, d.x));
          d.y = Math.max(radius, Math.min(height - radius, d.y));   
          return "translate(" + d.x+ "," + d.y + ")";
        // angle = (i / (datasetLength/2)) * Math.PI; // Calculate the angle at which the element will be placed.
        //                                     // For a semicircle, we would use (i / numNodes) * Math.PI.
        // d.x = (300 * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
        // d.y = (300 * Math.sin(angle)) + (height/2);
        // return "translate(" + d.x + "," + d.y + ")";
      })

    draw.exit().remove()
  }
}
drawData();

