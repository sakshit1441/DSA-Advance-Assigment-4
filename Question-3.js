// Q.3 Count the number of nodes at given level in a tree using BFS.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  function countNodesAtLevel(root, level) {
    if (!root) {
      return 0;
    }
  
    let currentLevel = 0;
    let queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let count = 0;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        count++;
  
        for (let child of currentNode.children) {
          queue.push(child);
        }
      }
  
      if (currentLevel === level) {
        return count;
      }
  
      currentLevel++;
    }
  
    return 0; // Level not found
  }
  
  // Example usage:
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  
  root.children.push(node2, node3);
  node2.children.push(node4, node5);
  node4.children.push(node6);
  
  console.log("Number of nodes at level 2:", countNodesAtLevel(root, 2));
  

// Output :- 

// Number of nodes at level 2: 2

