angular
  .module('to-do',[])
  .controller('ToDoController', ToDoController );

function ToDoController(){
  this.tasks = ["walk the cat", "eat second breakfast", "watch rocky cutscenes on youtube since too tored to workout"];

  this.createTask = () =>{
    this.tasks.push(this.taskName);
    this.taskName ="";
  };

  this.deleteTask = (index) =>{
    this.tasks.splice(index, 1);
  };
}
