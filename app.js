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
    var Expense = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var Income = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
    };

//data structure ready to receive data
    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
    };

    return {
        addItem: function(type, des, val){//method that takes in type, description and value of our input
            var newItem;
            if(type === 'exp') {
              newItem new Expense(id, des, val);
            } else if (type === 'inc') {
              newItem = new Income(id, des, val);
            }

        }
    };

})();

//UI Controller
var UIController = (function(){
      //central place where all strings are stored, we can then retrieve them and change them
      var Domstrings = {
        inputType: '.add__type',
        description: '.add__description',
        value: '.add__value',
        inputBtn: '.add__btn'
      }

      return {
        getInput: function(){
          return {
            //3 input values stored as parameters
            type: document.querySelector(Domstrings.inputType).value,//read the value,income or expens
            description: document.querySelector(Domstrings.description).value,
            value: document.querySelector(Domstrings.value).value
          };
        },

        getDomstrings: function(){
          //exposing Domstrings into the public
            return Domstrings;
        }
      };
  })();

//Global App Controller
var controller = (function(budegetCtrl, UICtrl){

      var setupEventListeners = function(){

          var Dom = UICtrl.getDomstrings();//now inside of this Dom var, we also have the Domstrings, since we exposed them publicly
          document.querySelector(Dom.inputBtn).addEventListener('click', ctrlAddItem);
          document.addEventListener('keypress', function(event){
              if(event.keyCode === 13 || event.which === 13){//return key
                ctrlAddItem();
            }
        });
      }

      var ctrlAddItem = function(){

        //1. get the field input Data
        var input = UICtrl.getInput();

        //2. add item to the budget Controller
        //3. add the item to the UI
        //4. calculate the budget
        //5. display the budget on the UI

      };

      return {
        init: function(){
          console.log('app has started');
          setupEventListeners();
        }
      };
})(budgetController, UIController);

controller.init();//without this line of code, nothing will happen
//without event lsners we can not input Data
//without data we have no app
