var width = 300, height = 300
var nodes = [{}, {}, {}, {}, {}]

var svg = d3.select("#wrapper").append("svg")
  .attr("width", width)
  .attr("height", height)

var numNodes = 100
var nodes = d3.range(numNodes).map(function(d) {
  return {radius: Math.random() * 25}
})

var xScale = d3.scaleLinear()
  .domain([0, numNodes])
  .range([0, width])
var simulation = d3.forceSimulation(nodes)
  // .force('charge', d3.forceManyBody().strength(5))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius
  }))
  .force('x', d3.forceX().x(function(d,i) {
    console.log(xScale(i));
    return xScale(i);
  }))
  .force('y', d3.forceY().y(function(d) {
    return 0;
  }))
  .on('tick', ticked);


function ticked() {
  var u = d3.select('svg')
    .selectAll('circle')
    .data(nodes)

  u.enter()
    .append('circle')
    .attr('r', 5)
    .merge(u)
    .attr('cx', function(d) {
      return d.x
    })
    .attr('cy', function(d) {
      return d.y
    })

  u.exit().remove()
}


