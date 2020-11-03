class TreeNode{
    val:number;
    rigth:any;
    left:any;
    constructor(val:number){
        this.val = val;
        this.rigth = null;
        this.left = null;
    }
}
class BinarySearchTree{
    root:any;
    constructor(){
        this.root = null;
    }
    insert(val:number){//Time complexity O(logn)
        let nNode = new TreeNode(val);
        if(!this.root)this.root=nNode;

        return this.compareInsert(this.root,nNode);
        
    }
    compareInsert(currNode:any,nNode:any):boolean{
        if(nNode.val>currNode.val && !currNode.rigth)return currNode.rigth=nNode;
        if(nNode.val>currNode.val && currNode.rigth)return this.compareInsert(currNode.rigth,nNode);

        if(nNode.val<currNode.val && !currNode.left)return currNode.left=nNode;
        if(nNode.val<currNode.val && currNode.left)return this.compareInsert(currNode.left,nNode);

        return true;
    }
    find(val:number):boolean{//Time complexity O(logn)
        if(!this.root)return false;
        return this.compareFind(this.root,val);
    }
    compareFind(currNode:any, val:number):boolean{
        if(currNode.val==val)return true;
        if(val<currNode.val && currNode.left)return this.compareFind(currNode.left, val);
        else if(val>currNode.val && currNode.rigth)return this.compareFind(currNode.rigth,val);
        else return false;
    }

    // Breadth First Search
    BFS(){
        let node = this.root,
            data = [],
            queue = [];
        if(!node) return [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.rigth) queue.push(node.rigth);
        }
        return data;
    }
    //Depth First Search
    DFS(){
        let data:number[] = [];
        if(!this.root)return data;
        return data.concat(this.iteDFS(this.root))
    }
    iteDFS(node:any):number[]{
        let res:number[] = [];
        res.push(node.val);
        if(node.rigth)res = res.concat(this.iteDFS(node.rigth));
        if(node.left)res = res.concat(this.iteDFS(node.left));
        return res;
    }
} 



let tree = new BinarySearchTree();

//console.log(tree);
tree.insert(12);
//console.log(tree);
tree.insert(52);
//console.log(tree);
tree.insert(1);
//console.log(tree);
tree.insert(42);
//console.log(tree.root.rigth,"42");
tree.insert(87);

// console.log(tree);
// console.log(tree.find(88));

console.log(tree.DFS());