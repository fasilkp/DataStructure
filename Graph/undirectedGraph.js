class Graph{
    constructor(){
        this.adjecencyList={
            'A': new Set(['B', 'F']),
            'B': new Set(['A', 'C']),
            'C': new Set(['B', "D", "E"]),
            'D': new Set(['C', 'E']),
            'E': new Set(['F', 'C', 'D']),
            'F': new Set(['E', "A"])
        };
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
    hasEdge(vertex1, vertex2){
        return( 
        this.adjecencyList[vertex1].has(vertex2) &&
        this.adjecencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1, vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return;
        }
        for(let adjacentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjecencyList[vertex]
    }
    bfs(startVertex){
        let queue=[startVertex]
        let visited={}
        let output=[]
        while(queue.length>0){
            let vertex= queue.shift();
            visited[vertex]=true;
            output.push(vertex)
            this.adjecencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    queue.push(neighbor)
                }
            });
        }
        console.log(output)
    }
    dfs(startVertex){
        let stack=[startVertex]
        let visited={}
        let output=[]
        while(stack.length>0){
            let vertex= stack.pop();
            visited[vertex]=true;
            output.push(vertex)
            this.adjecencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    stack.push(neighbor)
                }
            });
        }
        console.log(output)
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + " -> "+ [...this.adjecencyList[vertex]])
        }
    }
}

const graph= new Graph()

// graph.addEdge('a', 'b')

// graph.removeEdge('a', 'b')
// graph.removeVertex('a')

graph.addEdge('A', 'D')
graph.display()
graph.bfs('A')
graph.dfs('A')
// console.log(graph.hasEdge('a', 'c'))

console.log(graph.adjecencyList)