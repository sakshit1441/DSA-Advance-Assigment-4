// Q.2 Depth First Traversal for a Graph.

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      this.adjacencyList.set(vertex, []);
    }
  
    addEdge(source, destination) {
      this.adjacencyList.get(source).push(destination);
      this.adjacencyList.get(destination).push(source);
    }
  
    depthFirstTraversal(startingVertex) {
      const visited = new Set();
  
      this._depthFirstTraversalHelper(startingVertex, visited);
    }
  
    _depthFirstTraversalHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
  
      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this._depthFirstTraversalHelper(neighbor, visited);
        }
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex(0);
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  graph.addEdge(3, 3);
  
  console.log("Depth-First Traversal:");
  graph.depthFirstTraversal(2);


// Output :- 

// Depth-First Traversal:
// 2
// 0
// 1
// 3
  