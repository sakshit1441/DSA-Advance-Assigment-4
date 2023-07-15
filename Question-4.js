// Q.4 Count number of trees in a forest.

class UnionFind {
    constructor(size) {
      this.parent = new Array(size);
      this.rank = new Array(size);
      this.count = size;
  
      for (let i = 0; i < size; i++) {
        this.parent[i] = i;
        this.rank[i] = 0;
      }
    }
  
    find(x) {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }
  
    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
  
      if (rootX === rootY) {
        return;
      }
  
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
  
      this.count--;
    }
  }
  
  function countTreesInForest(n, edges) {
    const uf = new UnionFind(n);
  
    for (let [u, v] of edges) {
      uf.union(u, v);
    }
  
    return uf.count;
  }
  
  const forestEdges = [
    [0, 1],
    [1, 2],
    [3, 4],
    [4, 5],
    [6, 7]
  ];
  
  const numTrees = countTreesInForest(8, forestEdges);
  console.log("Number of trees in the forest:", numTrees);
  

// Output :- 

// Number of trees in the forest: 3