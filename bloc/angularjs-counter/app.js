angular
  .module('counter',[])
  .controller('CounterController', CounterController);

  function CounterController(){
    this.number = 0;

    this.increment = () => {this.number++};
    this.decrement = () => {this.number--};
  }
