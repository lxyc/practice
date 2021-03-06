import {
  BinaryTreeNode
} from './models/node.mjs';

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BinaryTreeNode(key);
    if (this.root !== null) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  getMin() {
    const ret = this.getMinNode();
    return ret && ret.key;
  }

  getMinNode(node = this.root) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
    }
    return node;
  }

  getMax() {
    const ret = this.getMaxNode();
    return ret && ret.key;
  }

  getMaxNode(node = this.root) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
    }
    return node;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    }
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  find(key) {
    return this.findNode(this.root, key);
  }

  findNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      return this.findNode(node.left, key);
    }
    if (key > node.key) {
      return this.findNode(node.right, key);
    }
    return node;
  }

  remove(key) {
    return this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) { // ??????key??????????????????key??????????????????
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.key) { // ??????key??????????????????key??????????????????
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // ??????????????????
    if (node.left === null && node.right === null) { // ????????????????????????
      node = null;
      return node;
    }
    if (node.right === null) { // ??????????????????????????????
      node = node.left;
      return node;
    }
    if (node.left === null) { // ??????????????????????????????
      node = node.right;
      return node;
    }

    // ??????????????????????????????
    const tempNode = this.getMinNode(node.right); // ???????????????
    node.key = tempNode.key;
    node.right = this.removeNode(node.right, node.key);
    return node;
  }
}