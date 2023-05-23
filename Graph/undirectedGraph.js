class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]= new Set()
        }
    }
    addEdge(vertex1, vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
}