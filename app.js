//When a javascript runtime hits the 1st line
//it gets executed and the annomous function gets declared and immediately
//called or invoked because of the operator on line 12
  //then these variablesb and functions are declared starting line 3
  //then we return an object which contains the method we call publicTest
  //this object gets assigned to the budgetController variable after the function returns
  //so... the budgetController variable is simply an object containing the method called:
  //publicTest
//------------------------------------------------------------------------------

//Budget Controller
var budgetController = (function(){
    //some code
})();

//UI Controller
var UIController = (function(){
      //some code
  });

//Global App Controller
var controller = (function(budegetCtrl, UICtrl){
      document.querySelector('.add__btn').addEventListener('click', function(){
        //1st get the field input Data
        //2. add item to the budget Controller
        //3. add the item to the UI
        //4. calculate the budget
        //5. display the budget on the UI
      })
})(budgetController, UIController);
