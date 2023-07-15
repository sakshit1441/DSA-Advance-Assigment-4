// Q.1 Breadth First Traversal for a Graph.

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
  
    breadthFirstTraversal(startingVertex) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startingVertex);
      queue.push(startingVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.adjacencyList.get(currentVertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
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
  
  console.log("Breadth-First Traversal:");
  graph.breadthFirstTraversal(2);
  

// Output :- 

// Breadth-First Traversal:
// 2
// 0
// 1
// 3