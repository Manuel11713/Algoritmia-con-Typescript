import {PriorityQueue} from './06_Priority_Queue';

class WeightedGraph{
    adjacencyList:HashTableGraph;
    
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(nameV:string){
        if(!this.adjacencyList[nameV]) this.adjacencyList[nameV] = [];
        return this.adjacencyList;
    }
    addEdge(vertex1:string,vertex2:string,weight:number){

        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return "Invalid Vertices";

        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
        
        return this.adjacencyList;
    }

    Dijkstra(start:string, finish:string){
        let nodes = new PriorityQueue();
        let distances:HashTableGraph = {};
        let previous:HashTableGraph = {};
        let smallest:any;
        //Build up initial state.
        for(let vertex of Object.keys(this.adjacencyList)){
            if(vertex === start){ distances[vertex] = 0;
                distances[vertex] = 0;
                nodes.insert(0, vertex)
            }
            else{
                distances[vertex] = Infinity;
                nodes.insert(Infinity, vertex);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        
    }
}