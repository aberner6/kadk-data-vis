const data = [
    { name: 'SM 828-804', parent: '' },
    { name: '828', parent: 'SM 828-804', amount: 24.8 },
    { name: '827', parent: 'SM 828-804', amount: 23 },
    { name: '826', parent: 'SM 828-804', amount: 23.9 },
    { name: '825', parent: 'SM 828-804', amount: 25.1 },
    { name: '824', parent: 'SM 828-804', amount: 24.9 },
    { name: '823', parent: 'SM 828-804', amount: 24.4 },
    { name: '821', parent: 'SM 828-804', amount: 22.9 },
    { name: '820', parent: 'SM 828-804', amount: 23.7 },
    { name: '819', parent: 'SM 828-804', amount: 23.8 },
    { name: '818', parent: 'SM 828-804', amount: 24.2 },
    { name: '817', parent: 'SM 828-804', amount: 24.7 },
    { name: '816', parent: 'SM 828-804', amount: 24.7 },
    { name: '815', parent: 'SM 828-804', amount: 24.7 },
    { name: '814', parent: 'SM 828-804', amount: 24.2 },
    { name: '813', parent: 'SM 828-804', amount: 25.2 },
    { name: '812', parent: 'SM 828-804', amount: 24.8 },
    { name: '811', parent: 'SM 828-804', amount: 25 },
    { name: '810', parent: 'SM 828-804', amount: 24.7 },
    { name: '809', parent: 'SM 828-804', amount: 24.5 },
    { name: '808', parent: 'SM 828-804', amount: 25.3 },
    { name: '807', parent: 'SM 828-804', amount: 24 },
    { name: '806', parent: 'SM 828-804', amount: 24.6 },
    { name: '805', parent: 'SM 828-804', amount: 24.7 },
    { name: '804', parent: 'SM 828-804', amount: 23.9 },
];

const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 1060)
    .attr('height', 800);

const graph = svg.append('g')
    .attr('transform', 'translate(50, 50)'); // to give a 50px margin

const stratify = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.parent);

const rootNode = stratify(data)
    .sum(d => d.amount);

const pack = d3.pack()
    .size([960, 700])
    .padding(5);

const bubbleData = pack(rootNode).descendants();

// create an ordinal scale
const colour = d3.scaleOrdinal(['#d1c4e9', '#b39ddb', '#9575cd']);

// join data and add group for each node
const nodes = graph.selectAll('g')
    .data(bubbleData)
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x}, ${d.y})`);
// returns an array of nodes entered into the DOM (groups)

//console.log(nodes)

// add circle to each group
nodes.append('circle')
    .attr('r', d => d.r)
    // .attr('stroke', 'white')
    // .attr('stroke-width', 2)
    .attr('fill', d => colour(d.depth));

// add text to each group
nodes.filter(d => !d.children)
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy','0.3em')
    .attr('fill', 'white')
    .style('font-size', d => (d.value * 1))
    .text(d => d.data.name);

// async function drawData() {
    
//     const dataset = await d3.csv("CarbonShort_Rune.xlsx - Ark1 (1).csv")

//     const sm_d13Domain = function(d){
//         return parseFloat(d.sm_d13C);
//     }

//     const sm_CDomain = function(d){
//         return parseFloat(d.sm_C);
//     }

//      const colScale = d3.scaleLinear()
//         .domain(d3.extent(dataset, xDomain))
//         .range(['DarkSlateGrey', 'ForestGreen']);

//     const rScale = d3.scaleLinear() 
//         .domain(d3.extent(dataset, foDomain)) 
//         .range([20, 100])
// }
// drawData();