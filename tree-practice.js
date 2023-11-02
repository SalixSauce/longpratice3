const createStatsCollector = require("mocha/lib/stats-collector");
const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  if (!rootNode) return;

  let min = rootNode.val;

  while (rootNode.left) {
    rootNode = rootNode.left;

    if (rootNode.val < min) {
      min = rootNode.val;
    }
  }
  return min;
}

function findMaxBST(rootNode) {
  // Your code here

  if (!rootNode) return;

  let max = rootNode.val;

  while (rootNode.right) {
    rootNode = rootNode.right;

    if (rootNode.val > max) {
      max = rootNode.val;
    }
  }
  return max;
}

function findMinBT(rootNode) {
  // Your code here
  if (!rootNode) return;

  let min = rootNode.val;

  if (rootNode.left) {
    const lMin = findMinBT(rootNode.left);
    min = Math.min(min, lMin);
  }
  if (rootNode.right) {
    const rMin = findMinBT(rootNode.right);
    min = Math.min(min, rMin);
  }
  return min;
}

function findMaxBT(rootNode) {
  // Your code here
  if (!rootNode) return;

  let max = rootNode.val;
  if (rootNode.left) {
    max = Math.max(max, findMaxBT(rootNode.left));
  }
  if (rootNode.right) {
    max = Math.max(max, findMaxBT(rootNode.right));
  }
  return max;
}

function getHeight(rootNode) {
  // Your code here
  if (!rootNode) return -1;

  return Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) + 1;
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  // let count = 0;

  // this.countNodes(rootNode.left)

  // this.countNodes(rootNode.right)
  // count += 1

  return countNodes(rootNode.left) + countNodes(rootNode.right) + 1;
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length > 0) {
    let currNode = stack.pop();

    if (
      (currNode.left && currNode.left.val === target) ||
      (currNode.right && currNode.right.val === target)
    ) {
      return currNode;
    }
    if (currNode.left) {
      stack.push(currNode.left);
    }
    if (currNode.right) {
      stack.push(currNode.right);
    }
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
