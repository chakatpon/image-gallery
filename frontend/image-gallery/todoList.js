var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do ?");

while(input !== "quit"){
    //ask again for new input
    if(input === "list") {
        listTodos();
        
    }else if(input === "new") {
        addTodo();
        
    }else if(input === "delete"){
        deleteTodo();
        
    }

    input = prompt("What would you like to do?");


}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
    console.log("***************");
        todos.forEach(function(todo, i){
            console.log(i + " :" + todo);
        });
        console.log("***************")
        console.log(todos);

}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
}

function deleteTodo(){
    //asd for indes of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    //splice()
    todos.splice(indix,1);
    console.log("Deleted Todo");

}