const data = [
    { name: 'CarbonLong', parent: '' },
    { name: 'Year 1000-900', parent: 'CarbonLong' },
    { name: 'Year 899-800', parent: 'CarbonLong' },
    { name: 'Year 799-700', parent: 'CarbonLong' },
    { name: 'Year 1000-960', parent: 'Year 1000-900' },
    { name: 'Year 960-930', parent: 'Year 1000-900' },
    { name: 'Year 930-900', parent: 'Year 1000-900' },
    { name: 'Year 899-860', parent: 'Year 899-800' },
    { name: 'Year 860-830', parent: 'Year 899-800' },
    { name: 'Year 830-800', parent: 'Year 899-800' },
    { name: 'Year 799-760', parent: 'Year 799-700' },
    { name: 'Year 760-730', parent: 'Year 799-700' },
    { name: 'Year 730-700', parent: 'Year 799-700' },
    { name: '991', parent: 'Year 1000-960', amount: 25.3 },
    { name: '989', parent: 'Year 1000-960', amount: 25.7 },
    { name: '987', parent: 'Year 1000-960', amount: 25.8 },
    { name: '985', parent: 'Year 1000-960', amount: 25.9 },
    { name: '983', parent: 'Year 1000-960', amount: 25 },
    { name: '981', parent: 'Year 1000-960', amount: 25.4 },
    { name: '979', parent: 'Year 1000-960', amount: 25 },
    { name: '977', parent: 'Year 1000-960', amount: 24.6 },
    { name: '975', parent: 'Year 1000-960', amount: 25.4 },
    { name: '973', parent: 'Year 1000-960', amount: 25.2 },
    { name: '971', parent: 'Year 1000-960', amount: 24.8 },
    { name: '969', parent: 'Year 1000-960', amount: 25.3 },
    { name: '967', parent: 'Year 1000-960', amount: 25.8 },
    { name: '965', parent: 'Year 1000-960', amount: 25.4 },
    { name: '963', parent: 'Year 1000-960', amount: 24.8 },
    { name: '961', parent: 'Year 1000-960', amount: 25.1 },
    { name: '959', parent: 'Year 960-930', amount: 24.9 },
    { name: '957', parent: 'Year 960-930', amount: 25.2 },
    { name: '955', parent: 'Year 960-930', amount: 25.2 },
    { name: '953', parent: 'Year 960-930', amount: 24.4 },
    { name: '951', parent: 'Year 960-930', amount: 24.8 },
    { name: '949', parent: 'Year 960-930', amount: 25.2 },
    { name: '947', parent: 'Year 960-930', amount: 25.3 },
    { name: '945', parent: 'Year 960-930', amount: 25.3 },
    { name: '943', parent: 'Year 960-930', amount: 25.4 },
    { name: '941', parent: 'Year 960-930', amount: 24.9 },
    { name: '939', parent: 'Year 960-930', amount: 24.7 },
    { name: '937', parent: 'Year 960-930', amount: 24.6 },
    { name: '935', parent: 'Year 960-930', amount: 24.9 },
    { name: '933', parent: 'Year 960-930', amount: 24.4 },
    { name: '931', parent: 'Year 960-930', amount: 25 },
    { name: '929', parent: 'Year 930-900', amount: 25.5 },
    { name: '927', parent: 'Year 930-900', amount: 24.6 },
    { name: '925', parent: 'Year 930-900', amount: 25 },
    { name: '923', parent: 'Year 930-900', amount: 24.6 },
    { name: '921', parent: 'Year 930-900', amount: 24.9 },
    { name: '919', parent: 'Year 930-900', amount: 25.1 },
    { name: '917', parent: 'Year 930-900', amount: 25 },
    { name: '915', parent: 'Year 930-900', amount: 25 },
    { name: '913', parent: 'Year 930-900', amount: 25 },
    { name: '911', parent: 'Year 930-900', amount: 25.3 },
    { name: '909', parent: 'Year 930-900', amount: 24.6 },
    { name: '907', parent: 'Year 930-900', amount: 24.9 },
    { name: '905', parent: 'Year 930-900', amount: 24.1 },
    { name: '903', parent: 'Year 930-900', amount: 24.9 },
    { name: '901', parent: 'Year 930-900', amount: 25 },
    { name: '899', parent: 'Year 899-860', amount: 24.4 },
    { name: '897', parent: 'Year 899-860', amount: 24.1 },
    { name: '895', parent: 'Year 899-860', amount: 23.9 },
    { name: '893', parent: 'Year 899-860', amount: 24.2 },
    { name: '891', parent: 'Year 899-860', amount: 24.6 },
    { name: '889', parent: 'Year 899-860', amount: 23.8 },
    { name: '887', parent: 'Year 899-860', amount: 24.3 },
    { name: '885', parent: 'Year 899-860', amount: 23.9 },
    { name: '883', parent: 'Year 899-860', amount: 23.9 },
    { name: '881', parent: 'Year 899-860', amount: 24.3 },
    { name: '879', parent: 'Year 899-860', amount: 24.8 },
    { name: '877', parent: 'Year 899-860', amount: 24.5 },
    { name: '875', parent: 'Year 899-860', amount: 24.4 },
    { name: '873', parent: 'Year 899-860', amount: 24.6 },
    { name: '871', parent: 'Year 899-860', amount: 24.9 },
    { name: '869', parent: 'Year 899-860', amount: 24.8 },
    { name: '867', parent: 'Year 899-860', amount: 25 },
    { name: '865', parent: 'Year 899-860', amount: 25 },
    { name: '863', parent: 'Year 899-860', amount: 25.1 },
    { name: '861', parent: 'Year 899-860', amount: 24.6 },
    { name: '859', parent: 'Year 860-830', amount: 25.1 },
    { name: '857', parent: 'Year 860-830', amount: 24.8 },
    { name: '855', parent: 'Year 860-830', amount: 24.8 },
    { name: '853', parent: 'Year 860-830', amount: 24.7 },
    { name: '851', parent: 'Year 860-830', amount: 24.8 },
    { name: '849', parent: 'Year 860-830', amount: 25 },
    { name: '847', parent: 'Year 860-830', amount: 24.6 },
    { name: '845', parent: 'Year 860-830', amount: 25.1 },
    { name: '843', parent: 'Year 860-830', amount: 24.9 },
    { name: '841', parent: 'Year 860-830', amount: 24.7 },
    { name: '839', parent: 'Year 860-830', amount: 24.7 },
    { name: '837', parent: 'Year 860-830', amount: 25.1 },
    { name: '835', parent: 'Year 860-830', amount: 24.5 },
    { name: '833', parent: 'Year 860-830', amount: 25.2 },
    { name: '831', parent: 'Year 860-830', amount: 24.8 },
    { name: '829', parent: 'Year 830-800', amount: 25.2 },
    { name: '827', parent: 'Year 830-800', amount: 24.5 },
    { name: '825', parent: 'Year 830-800', amount: 24.8 },
    { name: '823', parent: 'Year 830-800', amount: 24.2 },
    { name: '821', parent: 'Year 830-800', amount: 24.6 },
    { name: '819', parent: 'Year 830-800', amount: 24.5 },
    { name: '817', parent: 'Year 830-800', amount: 25.4 },
    { name: '815', parent: 'Year 830-800', amount: 25 },
    { name: '813', parent: 'Year 830-800', amount: 25.3 },
    { name: '811', parent: 'Year 830-800', amount: 24.5 },
    { name: '809', parent: 'Year 830-800', amount: 25 },
    { name: '807', parent: 'Year 830-800', amount: 24.4 },
    { name: '805', parent: 'Year 830-800', amount: 24.8 },
    { name: '803', parent: 'Year 830-800', amount: 24.6 },
    { name: '801', parent: 'Year 830-800', amount: 23.9 },
    { name: '799', parent: 'Year 799-760', amount: 24 },
    { name: '797', parent: 'Year 799-760', amount: 24.9 },
    { name: '795', parent: 'Year 799-760', amount: 25.2 },
    { name: '793', parent: 'Year 799-760', amount: 24.3 },
    { name: '791', parent: 'Year 799-760', amount: 24.9 },
    { name: '789', parent: 'Year 799-760', amount: 25.3 },
    { name: '787', parent: 'Year 799-760', amount: 25.1 },
    { name: '785', parent: 'Year 799-760', amount: 25.1 },
    { name: '783', parent: 'Year 799-760', amount: 25.2 },
    { name: '781', parent: 'Year 799-760', amount: 25.3 },
    { name: '779', parent: 'Year 799-760', amount: 25.5 },
    { name: '777', parent: 'Year 799-760', amount: 25.4 },
    { name: '775', parent: 'Year 799-760', amount: 25.6 },
    { name: '773', parent: 'Year 799-760', amount: 25.2 },
    { name: '771', parent: 'Year 799-760', amount: 24.9 },
    { name: '769', parent: 'Year 799-760', amount: 25.6 },
    { name: '767', parent: 'Year 799-760', amount: 25.5 },
    { name: '765', parent: 'Year 799-760', amount: 25.3 },
    { name: '763', parent: 'Year 799-760', amount: 25.5 },
    { name: '761', parent: 'Year 799-760', amount: 25.9 },
    { name: '759', parent: 'Year 760-730', amount: 24.6 },
    { name: '757', parent: 'Year 760-730', amount: 25.3 },
    { name: '755', parent: 'Year 760-730', amount: 24.6 },
    { name: '753', parent: 'Year 760-730', amount: 24.5 },
    { name: '751', parent: 'Year 760-730', amount: 25.2 },
    { name: '749', parent: 'Year 760-730', amount: 25.2 },
    { name: '747', parent: 'Year 760-730', amount: 25.7 },
    { name: '745', parent: 'Year 760-730', amount: 25.7 },
    { name: '743', parent: 'Year 760-730', amount: 25.7 },
    { name: '741', parent: 'Year 760-730', amount: 25.4 },
    { name: '739', parent: 'Year 760-730', amount: 25.7 },
    { name: '737', parent: 'Year 760-730', amount: 25.6 },
    { name: '735', parent: 'Year 760-730', amount: 25.8 },
    { name: '733', parent: 'Year 760-730', amount: 25.7 },
    { name: '731', parent: 'Year 760-730', amount: 25.5 },
    { name: '729', parent: 'Year 730-700', amount: 25.4 },
    { name: '727', parent: 'Year 730-700', amount: 24.8 },
    { name: '725', parent: 'Year 730-700', amount: 24.8 },
    { name: '723', parent: 'Year 730-700', amount: 25.3 },
    { name: '721', parent: 'Year 730-700', amount: 25.4 },
    { name: '719', parent: 'Year 730-700', amount: 24.9 },
    { name: '717', parent: 'Year 730-700', amount: 24.7 },
    { name: '715', parent: 'Year 730-700', amount: 24.9 },
    { name: '713', parent: 'Year 730-700', amount: 25.9 },
    { name: '711', parent: 'Year 730-700', amount: 25.3 },
    { name: '709', parent: 'Year 730-700', amount: 25.5 },
    { name: '707', parent: 'Year 730-700', amount: 25 },
    { name: '705', parent: 'Year 730-700', amount: 24.5 },

    { name: 'CarbonShort', parent: 'Year 830-800' },
    { name: 'SM', parent: 'CarbonShort' },
    { name: 'SRP', parent: 'CarbonShort' },
    { name: 'FAAM', parent: 'CarbonShort' },
    { name: 'HKM', parent: 'CarbonShort' },
    { name: 'SMO', parent: 'CarbonShort' },
    { name: 'SOEV', parent: 'CarbonShort' },

    // SM
    { name: '828', parent: 'SM', amount: 24.8 },
    { name: '827', parent: 'SM', amount: 23 },
    { name: '826', parent: 'SM', amount: 23.9 },
    { name: '825', parent: 'SM', amount: 25.1 },
    { name: '824', parent: 'SM', amount: 24.9 },
    { name: '823', parent: 'SM', amount: 24.4 },
    { name: '821', parent: 'SM', amount: 22.9 },
    { name: '820', parent: 'SM', amount: 23.7 },
    { name: '819', parent: 'SM', amount: 23.8 },
    { name: '818', parent: 'SM', amount: 24.2 },
    { name: '817', parent: 'SM', amount: 24.7 },
    { name: '816', parent: 'SM', amount: 24.7 },
    { name: '815', parent: 'SM', amount: 24.7 },
    { name: '814', parent: 'SM', amount: 24.2 },
    { name: '813', parent: 'SM', amount: 25.2 },
    { name: '812', parent: 'SM', amount: 24.8 },
    { name: '811', parent: 'SM', amount: 25 },
    { name: '810', parent: 'SM', amount: 24.7 },
    { name: '809', parent: 'SM', amount: 24.5 },
    { name: '808', parent: 'SM', amount: 25.3 },
    { name: '807', parent: 'SM', amount: 24 },
    { name: '806', parent: 'SM', amount: 24.6 },
    { name: '805', parent: 'SM', amount: 24.7 },
    { name: '804', parent: 'SM', amount: 23.9 },

    //SRP
    { name: '828', parent: 'SRP', amount: 24.8 },
    { name: '827', parent: 'SRP', amount: 23 },
    { name: '826', parent: 'SRP', amount: 23.9 },
    { name: '825', parent: 'SRP', amount: 25.1 },
    { name: '824', parent: 'SRP', amount: 24.9 },
    { name: '823', parent: 'SRP', amount: 24.4 },
    { name: '821', parent: 'SRP', amount: 22.9 },
    { name: '820', parent: 'SRP', amount: 23.7 },
    { name: '819', parent: 'SRP', amount: 23.8 },
    { name: '818', parent: 'SRP', amount: 24.2 },
    { name: '817', parent: 'SRP', amount: 24.7 },
    { name: '816', parent: 'SRP', amount: 24.7 },
    { name: '815', parent: 'SRP', amount: 24.7 },
    { name: '814', parent: 'SRP', amount: 24.2 },
    { name: '813', parent: 'SRP', amount: 25.2 },
    { name: '812', parent: 'SRP', amount: 24.8 },
    { name: '811', parent: 'SRP', amount: 25 },
    { name: '810', parent: 'SRP', amount: 24.7 },
    { name: '809', parent: 'SRP', amount: 24.5 },
    { name: '808', parent: 'SRP', amount: 25.3 },
    { name: '807', parent: 'SRP', amount: 24 },
    { name: '806', parent: 'SRP', amount: 24.6 },
    { name: '805', parent: 'SRP', amount: 24.7 },
    { name: '804', parent: 'SRP', amount: 23.9 },

    //FAAM
    { name: '828', parent: 'FAAM', amount: 24.8 },
    { name: '827', parent: 'FAAM', amount: 23 },
    { name: '826', parent: 'FAAM', amount: 23.9 },
    { name: '825', parent: 'FAAM', amount: 25.1 },
    { name: '824', parent: 'FAAM', amount: 24.9 },
    { name: '823', parent: 'FAAM', amount: 24.4 },
    { name: '821', parent: 'FAAM', amount: 22.9 },
    { name: '820', parent: 'FAAM', amount: 23.7 },
    { name: '819', parent: 'FAAM', amount: 23.8 },
    { name: '818', parent: 'FAAM', amount: 24.2 },
    { name: '817', parent: 'FAAM', amount: 24.7 },
    { name: '816', parent: 'FAAM', amount: 24.7 },
    { name: '815', parent: 'FAAM', amount: 24.7 },
    { name: '814', parent: 'FAAM', amount: 24.2 },
    { name: '813', parent: 'FAAM', amount: 25.2 },
    { name: '812', parent: 'FAAM', amount: 24.8 },
    { name: '811', parent: 'FAAM', amount: 25 },
    { name: '810', parent: 'FAAM', amount: 24.7 },
    { name: '809', parent: 'FAAM', amount: 24.5 },
    { name: '808', parent: 'FAAM', amount: 25.3 },
    { name: '807', parent: 'FAAM', amount: 24 },
    { name: '806', parent: 'FAAM', amount: 24.6 },
    { name: '805', parent: 'FAAM', amount: 24.7 },
    { name: '804', parent: 'FAAM', amount: 23.9 },

    //HKM
    { name: '828', parent: 'HKM', amount: 24.8 },
    { name: '827', parent: 'HKM', amount: 23 },
    { name: '826', parent: 'HKM', amount: 23.9 },
    { name: '825', parent: 'HKM', amount: 25.1 },
    { name: '824', parent: 'HKM', amount: 24.9 },
    { name: '823', parent: 'HKM', amount: 24.4 },
    { name: '821', parent: 'HKM', amount: 22.9 },
    { name: '820', parent: 'HKM', amount: 23.7 },
    { name: '819', parent: 'HKM', amount: 23.8 },
    { name: '818', parent: 'HKM', amount: 24.2 },
    { name: '817', parent: 'HKM', amount: 24.7 },
    { name: '816', parent: 'HKM', amount: 24.7 },
    { name: '815', parent: 'HKM', amount: 24.7 },
    { name: '814', parent: 'HKM', amount: 24.2 },
    { name: '813', parent: 'HKM', amount: 25.2 },
    { name: '812', parent: 'HKM', amount: 24.8 },
    { name: '811', parent: 'HKM', amount: 25 },
    { name: '810', parent: 'HKM', amount: 24.7 },
    { name: '809', parent: 'HKM', amount: 24.5 },
    { name: '808', parent: 'HKM', amount: 25.3 },
    { name: '807', parent: 'HKM', amount: 24 },
    { name: '806', parent: 'HKM', amount: 24.6 },
    { name: '805', parent: 'HKM', amount: 24.7 },
    { name: '804', parent: 'HKM', amount: 23.9 },

    //SMO
    { name: '828', parent: 'SMO', amount: 24.8 },
    { name: '827', parent: 'SMO', amount: 23 },
    { name: '826', parent: 'SMO', amount: 23.9 },
    { name: '825', parent: 'SMO', amount: 25.1 },
    { name: '824', parent: 'SMO', amount: 24.9 },
    { name: '823', parent: 'SMO', amount: 24.4 },
    { name: '821', parent: 'SMO', amount: 22.9 },
    { name: '820', parent: 'SMO', amount: 23.7 },
    { name: '819', parent: 'SMO', amount: 23.8 },
    { name: '818', parent: 'SMO', amount: 24.2 },
    { name: '817', parent: 'SMO', amount: 24.7 },
    { name: '816', parent: 'SMO', amount: 24.7 },
    { name: '815', parent: 'SMO', amount: 24.7 },
    { name: '814', parent: 'SMO', amount: 24.2 },
    { name: '813', parent: 'SMO', amount: 25.2 },
    { name: '812', parent: 'SMO', amount: 24.8 },
    { name: '811', parent: 'SMO', amount: 25 },
    { name: '810', parent: 'SMO', amount: 24.7 },
    { name: '809', parent: 'SMO', amount: 24.5 },
    { name: '808', parent: 'SMO', amount: 25.3 },
    { name: '807', parent: 'SMO', amount: 24 },
    { name: '806', parent: 'SMO', amount: 24.6 },
    { name: '805', parent: 'SMO', amount: 24.7 },
    { name: '804', parent: 'SMO', amount: 23.9 },

    //SOEV
    { name: '828', parent: 'SOEV', amount: 24.8 },
    { name: '827', parent: 'SOEV', amount: 23 },
    { name: '826', parent: 'SOEV', amount: 23.9 },
    { name: '825', parent: 'SOEV', amount: 25.1 },
    { name: '824', parent: 'SOEV', amount: 24.9 },
    { name: '823', parent: 'SOEV', amount: 24.4 },
    { name: '821', parent: 'SOEV', amount: 22.9 },
    { name: '820', parent: 'SOEV', amount: 23.7 },
    { name: '819', parent: 'SOEV', amount: 23.8 },
    { name: '818', parent: 'SOEV', amount: 24.2 },
    { name: '817', parent: 'SOEV', amount: 24.7 },
    { name: '816', parent: 'SOEV', amount: 24.7 },
    { name: '815', parent: 'SOEV', amount: 24.7 },
    { name: '814', parent: 'SOEV', amount: 24.2 },
    { name: '813', parent: 'SOEV', amount: 25.2 },
    { name: '812', parent: 'SOEV', amount: 24.8 },
    { name: '811', parent: 'SOEV', amount: 25 },
    { name: '810', parent: 'SOEV', amount: 24.7 },
    { name: '809', parent: 'SOEV', amount: 24.5 },
    { name: '808', parent: 'SOEV', amount: 25.3 },
    { name: '807', parent: 'SOEV', amount: 24 },
    { name: '806', parent: 'SOEV', amount: 24.6 },
    { name: '805', parent: 'SOEV', amount: 24.7 },
    { name: '804', parent: 'SOEV', amount: 23.9 },
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




var minBub = d3.min(bubbleData, function(d){
    if(isNaN(parseFloat(d.id))){
    }else{
        return d.value;  
    }
})
var maxBub = d3.max(bubbleData, function(d){
    if(isNaN(parseFloat(d.id))){
        console.log("no")
    }else{
        return d.value;  
    }
})
const rScale = d3.scaleLinear()
    .domain([minBub,maxBub])
    .range([1, 50])

// join data and add group for each node
const nodes = graph.selectAll('g')
    .data(bubbleData)
    .enter()
    .append('g')
    .attr('transform', function(d){
        return `translate(${d.x}, ${d.y})`
    })
    .on("mouseover", function(d){
        // var xPosition = d3.select(this).node().transform.baseVal[0].matrix.e;
        // var yPosition = d3.select(this).node().transform.baseVal[0].matrix.f;
        d3.select("#info")
            // .style("left", xPosition + "px")
            // .style("top", yPosition + "px")                     
            // .select("#value")
            .text(d.id);
        //show the tooltip
        d3.select("#info").classed("hidden", false);
    })
    .on("mouseout", function() {
        //hide the tooltip
        d3.select("#info").classed("hidden", true); 
    })
// returns an array of nodes entered into the DOM (groups)


// add circle to each group
nodes.append('circle')
    .attr('r', function(d){
        if(isNaN(parseFloat(d.id))){
            return d.r;
        }else{
            return rScale(parseFloat(d.value));
        }
    })
    .attr('fill', function(d){
        return colour(d.depth)
    })
    .attr("opacity", 1)
    .attr("stroke","white")
    .attr("stroke-width",1)
    .on("mouseover", function(){
        d3.select(this)
            .transition()
            .attr("stroke-width",8)
    })
    .on("mouseout", function(){
        d3.select(this)
            .transition()
            .attr("stroke-width",1)
    })
    // .append("feDropShadow")

// add text to each group
nodes.filter(d => !d.children)
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy','0.3em')
    .attr('fill', 'white')
    .style('font-size', 5)
    .text(d => d.data.name)

// add text to each group
// nodes.filter(function(d){
//         return d.children;
//     })
//     .append('text')
//     .attr('text-anchor', 'middle')
//     .attr('dy','0.3em')
//     .attr('fill', 'white')
//     .style('font-size', 5)
//     .text(function(d){
//         console.log(d.data);
//         return d.data.name;
//     })
// nodes.filter(d => d.children)
//     .append('text')
//     .attr('text-anchor', 'middle')
//     .attr('dy','0.3em')
//     .attr('fill', 'white')
//     .style('font-size', 5)
//     .text(d => d.data.name);






