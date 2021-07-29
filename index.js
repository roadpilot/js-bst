// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {
        if (root == undefined) {
        // console.log(queue)
           return -1;
        }
        this.levelOrder(root.left)
        this.levelOrder(root.right)
        // Add your code here
   var queue = [root];
        console.log(queue)
      while (queue.length > 0) {
        var node = queue.shift();
        // write(node.data + " ");
        if(node.left) {
         queue.push(node.left);
        // process.stdout.write(node.data + " ")
        }
        if (node.right) {
         queue.push(node.right);
        // process.stdout.write(node.data + " ")
        }
      }
      
    //   function write(str){
    //     process.stdout.write(str);
    //   }        
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
	}; // End of function levelOrder