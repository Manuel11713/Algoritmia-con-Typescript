interface HashTableGraph{
    [key:string]:any[]
}

class Graph{//We are building and undirected graph
    adjacencyList:HashTableGraph;
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(nameV:string){
        if(!this.adjacencyList[nameV]) this.adjacencyList[nameV] = [];
        return this.adjacencyList;
    }
    addEdge(vertix1:string,vertix2:string){

        if(!this.adjacencyList[vertix1] || !this.adjacencyList[vertix2]) return "Invalid Vertices";

        this.adjacencyList[vertix1].push(vertix2);
        this.adjacencyList[vertix2].push(vertix1);
        
        return this.adjacencyList;
    }
    removeEdge(vertix1:string,vertix2:string){
        if(!this.adjacencyList[vertix1] || !this.adjacencyList[vertix2]) return "Invalid Vertices";

        this.adjacencyList[vertix1] = this.adjacencyList[vertix1].filter(vertix=>vertix!=vertix2);
        this.adjacencyList[vertix2] = this.adjacencyList[vertix2].filter(vertix=>vertix!=vertix1);

        return this.adjacencyList;
    }
    removeVertix(vertix1:string){
        if(!this.adjacencyList[vertix1]) return "Invalid Vertix";

        
        for(let vertex of Object.keys(this.adjacencyList)){
            this.removeEdge(vertix1,vertex);
        }

        delete this.adjacencyList[vertix1];

        return this.adjacencyList;
    }
}
let graph = new Graph();

graph.addVertex("Tokio");
graph.addVertex("New York");
graph.addVertex("Berlin");
graph.addVertex("CDMX");
graph.addVertex("Ottawa");
graph.addVertex("Buenos Aires");
console.log(graph.addVertex("Oregon"));

console.log(graph.addEdge("Tokio","New York"))
console.log(graph.addEdge("CDMX","Buenos Aires"))
console.log(graph.addEdge("Berlin","CDMX"))
console.log(graph.addEdge("CDNX","Buenos Aires"))

//console.log(graph.removeEdge("CDMX","Buenos Aires"))

console.log(graph.removeVertix("CDMX"));    