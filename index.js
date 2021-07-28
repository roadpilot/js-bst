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
var q = [];
var dataArr = [];
        if (root == undefined) {
           return -1;
        }
        // console.log("FOO", root.data)
        this.levelOrder(root.left)
        this.levelOrder(root.right)
console.log(dataArr.join(" "));
        // Add your code here
q.push(root);
while(q.length > 0){
    var getdata = q.shift();
    dataArr.push(getdata.data)
    if(getdata.left){
        q.push(getdata.left)
    }
    if(getdata.right){
        q.push(getdata.right);
    }

}
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
	}; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
});