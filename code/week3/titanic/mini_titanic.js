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
var itsDone=false;
var filterNum = 0.5;
var nodes = {};
var svg;
var vis;
var circle;
async function drawData() {
/*step 1: get the data and see one piece of it*/	
	const dataset = await d3.csv("mini_train.csv");
	const accessOnePiece = dataset[0];
	console.log(accessOnePiece);

    var width = 800;
    var height = 600;
    var radius = 10;

    svg = d3.select("#wrapper")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    vis = svg //for the visualization
        .append('svg:g')
        .attr("transform","translate("+ 0 + "," + 0 + ")");  





    keywords.length = 0;  // number of unique keywords
    theseKeywords.length = 0;
    totalKeywords.length = 0;
    focusKeywords.length = 0;
    for (i = 0;i<dataset.length; i++){
        //if keywords exist add to array
        if (dataset[i].name!="undefined"){
            keywords[i] = dataset[i].name.split(", ");
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



    //creates a new array with the sums of all the different Keywords and also creates list of focus Keywords
    if(keywordSorted==true){
        for (i = 0; i<theseKeywords.length; i++){
            totalKeywords[i]= keyConsolidation(theseKeywords[i])
            mostKeyed = d3.max(totalKeywords); 
            if(totalKeywords[i]>mostKeyed*filterNum){
                focusKeywords.push(theseKeywords[i]);
            }
        } 
    }
    uniqueMostKeyed = focusKeywords.filter( onlyUnique ); //finds unique keywords from focused
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
	        for (i=0; i<dataset.length; i++){
	            for (j=0; j<uniqueMostKeyed.length; j++){
	                if (keywords[i].indexOf(uniqueMostKeyed[j])!=-1){
	                    links.push({"source":keywords[i],"target":uniqueMostKeyed[j],"title":dataset[i].name})
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


//new v5
        var simulation = d3.forceSimulation(nodes)
              .force("link", d3.forceLink(links).id(d => d.id))
              .force("charge", d3.forceManyBody())
              .force("center", d3.forceCenter(width / 2, height / 2));


        // path = vis.selectAll("path")
        //     .data(force.links())
        //     .enter().append("path")
        //     .attr("class","link")
        //     .attr("stroke", "grey")
        circle = vis.selectAll("node")
            .data(simulation.nodes())
            .enter().append("circle")
            .attr("class", function(d){
                console.log(d);
                return d;
            })
            .attr("r", radius)
    }
    function ticked() {
      // path.attr("d", linkArc);
      // circle.attr("transform", transform);
    }

    function transform(d) {
      d.x = Math.max(radius, Math.min(width - radius, d.x));
      d.y = Math.max(radius, Math.min(height - radius, d.y));   
      return "translate(" + d.x+ "," + d.y + ")";
    }

    function linkArc(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }

}
drawData();


