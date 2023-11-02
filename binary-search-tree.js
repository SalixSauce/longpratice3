// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(val, currentNode = this.root) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      }
  
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      } else {
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = new TreeNode(val);
          } else {
            this.insert(val, currentNode.left);
          }
        }
      }
    }
  
    search(val, currentNode = this.root) {
      if (!currentNode) {
        return false;
      }
      if (val === currentNode.val) {
        return true;
      }
  
      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      } else {
        return this.search(val, currentNode.right);
      }
    }
  
    preOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      console.log(currentNode.val);
  
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  
    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
  
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  
    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
  
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  
    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [this.root];
  
      while(queue.length) {
        let currNode = queue.shift();
  
        console.log(currNode.val)
  
        if(currNode.left) {
          queue.push(currNode.left)
        }
        if(currNode.right) {
          queue.push(currNode.right)
        }
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [this.root];
  
      while(stack.length) {
        let currNode = stack.pop()
        console.log(currNode.val)
      if(currNode.left) {
        stack.push(currNode.left)
      }
      if(currNode.right) {
        stack.push(currNode.right)
      }
      }// Your code
  
    }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
  
