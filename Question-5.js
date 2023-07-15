// Q.5 Detect Cycle in a Directed Graph.

class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyList = new Map();
  
      for (let i = 0; i < vertices; i++) {
        this.adjacencyList.set(i, []);
      }
    }
  
    addEdge(source, destination) {
      this.adjacencyList.get(source).push(destination);
    }
  
    isCyclic() {
      const visited = new Set();
      const recursionStack = new Set();
  
      for (let i = 0; i < this.vertices; i++) {
        if (this._isCyclicHelper(i, visited, recursionStack)) {
          return true;
        }
      }
  
      return false;
    }
  
    _isCyclicHelper(vertex, visited, recursionStack) {
      visited.add(vertex);
      recursionStack.add(vertex);
  
      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          if (this._isCyclicHelper(neighbor, visited, recursionStack)) {
            return true;
          }
        } else if (recursionStack.has(neighbor)) {
          return true;
        }
      }
  
      recursionStack.delete(vertex);
      return false;
    }
  }
  
  const graph = new Graph(4);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  graph.addEdge(3, 3);
  
  const hasCycle = graph.isCyclic();
  console.log("Does the graph have a cycle ?   :- ", hasCycle);


// Output :- 
// Does the graph have a cycle ?   :-  true