//When a javascript runtime hits the 1st line
//it gets executed and the annomous function gets declared and immediately
//called or invoked because of the operator on line 12
  //then these variablesb and functions are declared starting line 3
  //then we return an object which contains the method we call publicTest
  //this object gets assigned to the budgetController variable after the function returns
  //so... the budgetController variable is simply an object containing the method called:
  //publicTest
//------------------------------------------------------------------------------

var budgetController = (function(){
    //some code
})();


var UIController = (function(){
      //some code
  });

//bridging the UI controller and the budget Controller together
var controller = (function(budegetCtrl, UICtrl){
      //some code
})(budgetController, UIController);
