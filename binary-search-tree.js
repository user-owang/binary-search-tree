class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = Node(val)
    if (this.root === null){
      this.root = newNode
    } else {
      let current = this.root
      while (current) {
        if (val < current.val) {
            if (current.left === null) {
                current.left = newNode;
                return this;
            } else {
                current = current.left;
            }
        } else if (val > current.val) {
            if (current.right === null) {
                current.right = newNode;
                return this;
            } else {
                current = current.right;
            }
        } else {
            console.log("Value already exists in the tree")
            return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function checkForNull(node, val){
      if(node.val === null){
        node = newNode
      } else{
        if(val>node.val){
          if(node.right === null){
            node.right = Node(val)
          } else{
            checkForNull(node.right, val)
          }
        } else if(val<node.val){
          if(node.left === null){
            node.left = Node(val)
          } else{
            checkForNull(node.left, val)
          }
        } else  {
          console.log("Value already exists in the tree")
        }
      }
    }
    checkForNull(this.root, val)

    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    while (current) {
      if (val > current.val) {
        current = current.right
      } else if (val < current.val) {
        current = current.left
      } else if (val === current.val){
        return current
      }
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function checkVal(node, val){
      if (node === null){
        return undefined
      } else {
        if (val > node.val){
          return checkVal(node.right, val)
        }else if (val < node.val){
          return checkVal(node.left, val)
        } else if(node.val === val){
          return node 
        }
      }
    }
    return checkVal(this.root, val)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let stack = [this.root]
    let answer = []
    while (stack.length > 0){
      let current = stack.pop()
      answer.push(current.val)
      if(current.right !== null){
        stack.push(current.right)
      }
      if(current.left !== null){
        stack.push(current.left)
      }
    }
    return answer
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    function checkSmaller(node){
      if (node === null){
        return []
      }
      let answer = []
      if(node.left !== null){
        answer.push(...checkSmaller(node.left))
      }
      answer.push(node.val)
      if(node.right !== null){
        answer.push(...checkSmaller(node.right))
      }
      return answer
    }
    return checkSmaller(this.root)
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    function checkNoChildren(node){
      if (node === null){
        return []
      }
      let answer = []
      if(node.left !== null){
        answer.push(...checkSmaller(node.left))
      }
      if(node.right !== null){
        answer.push(...checkNoChildren(node.right))
      }
      answer.push(node.val)
      return answer
    }
    return checkNoChildren(this.root)
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root]
    let answer = []
    while(queue.length > 0){
      let current = queue.shift()
      answer.push(current.val)
      if(current.right !== null){
        queue.push(current.right)
      }
      if(current.left !== null){
        queue.push(current.left)
      }
    }
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
