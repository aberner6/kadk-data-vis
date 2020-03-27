// Keywords
var keywords = [];
var keywordSorted;
var totalKeywords = [];
var theseKeywords = [];
var focusKeywords = [];
var uniqueKeywords;
var mostKeyed;
var uniqueMostKeyed;
var uniqueTotalsKeyed;
var links = [];

async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("mini_train.csv");
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);

    keywords.length = 0;  // number of unique keywords
    theseKeywords.length = 0;
    totalKeywords.length = 0;
    focusKeywords.length = 0;
    for (i = 0;i<dataset.length; i++){
        //if keywords exist add to array
        if (data[i].name!="undefined"){
            keywords[i] = data[i].keywords.split(", ");
        }
        // 1 array with all the keywords
        for (j=0; j<keywords[i].length; j++){
            theseKeywords.push(keywords[i][j]);
        }
    };
    keywordSorted = false;
    console.log(keywordSorted)
    for (i=0; i<theseKeywords.length; i++){
        if(theseKeywords[i].length==0){
          theseKeywords.splice(i,1)
          i--;
        }
        console.log(keywordSorted)
        keywordSorted = true;
    }
    uniqueKeywords = theseKeywords.filter( onlyUnique ); //finds unique keywords
    createNodes();
    //some magic function to return uniquevalues
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    //return number of times a keyword was used
    function keyConsolidation(givenKey,i) {
        var total = 0;
        for (i = 0;i<theseKeywords.length; i++){
            if(theseKeywords[i] == givenKey){
                total++;
            }
        }
         return total;
    }
	function createNodes(){
	    links = [];
	    if(itsDone==false){
	        for (i=0; i<thisData.length; i++){
	            for (j=0; j<uniqueMostKeyed.length; j++){
	                if (keywords[i].indexOf(uniqueMostKeyed[j])!=-1){
	                    links.push({"source":keywords[i],"target":uniqueMostKeyed[j],"title":thisData[i].name})
	                    // links.push({"source":keywords[i],"target":keywords[i],"img":thisData[i].img, "url":thisData[i].url})
	                    // links.push({"source":keywords[i],"target":uniqueMostKeyed[j],"typeResearch": thisData[i].typeResearch, "sourceVal":thisData[i].sourceVal.toLowerCase(), "headline":thisData[i].title, "authors":thisData[i].author, "url":thisData[i].link})
	                }
	            }
	        }
	        simpleNodes();
	    }
	}

function simpleNodes(){
    var thisMap;
    var thisWeight = [];
    var maxWeight;
    links.forEach(function(link) {
      link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, title:link.name});
      link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});

    });

    force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([w, h])
        .linkDistance(100)
        .charge(-800)
        .on("tick", tick)
        .start();

    drag = force.drag()
        .on("dragstart", dragstart);

    path = vis.selectAll("path")
        .data(force.links())
        .enter().append("path")
        .attr("class","link")
        .attr("stroke", "grey")
    circle = vis.selectAll("node")
        .data(force.nodes())
        .enter().append("circle")
        .attr("class",function(d){
            howLong.push(d.name);
            thisWeight.push(d.weight);
            maxWeight = d3.max(thisWeight, function(d){ return d; })
            rMap = d3.scale.linear()
                .domain([0, maxWeight])
                .range([radius, radius*9])
            return "node";
        })

    circle
        .attr("r", function(d,i){
            return radius/10;
        })
        .attr("stroke", function(d,i){
            if(howLong[i][0].length==1){
                return "grey";
            }
            return "none";
        })
        .attr("opacity", function(d,i){
            .4;
        })
        .call(drag);

    circle
        .transition()
        .duration(2000)
        .attr("r", function(d,i){
            if(howLong[i][0].length==1){
                return rMap(d.weight);
            }
            return radius;
        });

}
drawData();


        // .attr("fill", function(d,i){
            // if(d.name=="objective 1" || d.name=="objective 2" || d.name== "objective 3"){
            //     return "#02A694";
            // }
            // if(howLong[i][0].length==1){
            //     return "white";
            // }
            // else{
            //     return "#F2355B"
            // }
        // })