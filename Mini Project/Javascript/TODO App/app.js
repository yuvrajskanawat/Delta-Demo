let todo = []
let req = prompt("Enter your Request: ");
console.log(req);
while(true){
    if(req=="Quit"){
        console.log("Quitting App");
        break;
    }
    if(req=="List"){
        console.log("---------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------"); 
    }
    else if(req=="Add"){
        let task = prompt("Please,Enter the task you want to Add: ");
        todo.push(task);
        console.log("Task Added");        
    }
    else if(req == "Delete"){
        let idx=prompt("Please,Enter the task index: ");
        todo.splice(idx,1);
        console.log("Taks Deleted");
    }
    else{
        console.log("Wrong Request");
    }
    req = prompt("Enter your Request: ")
    // 
}