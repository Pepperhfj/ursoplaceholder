  // Prints dice roll to the page ! 
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder'); // Gets the element Id of 'placeholder' !
    placeholder.innerHTML = number;
  }
  
  var dice = {
    sides: ["epic!", "awesome!", "cool!"], // The array of words that get printed to the html (^o^)
    roll: function () {
      var randomIndex = Math.floor(Math.random() * this.sides.length); // Gets a random index (O_o)
      return this.sides[randomIndex]; // Returns the words as a random index !
    }
  };
  
  var button = document.getElementById('button'); // Gets the element ID of 'button' !
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };



  