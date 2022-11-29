// declare two number variables named num1 and num2 (use let for one, and var for the other)
//TO DO

// assign values to the two number variables
//TO DO

// display the two numbers to the page and log to the console
// addToPage(num1);
// addToPage(num2);
//TO DO
//TO DO

// declare and initialize another number variable named num3
//TO DO

//display number3 to the page and log to the console
// addToPage(num3);
//TO DO

//declare and initialize a constant named TAX_RATE
//TO DO

//display the constant value to the page and log to the console
// addToPage(TAX_RATE);
//TO DO

//declare and initialize a string variable named myName
//TO DO

//display the string variable to the page and log it to the console
// addToPage(myName);
//TO DO

//declare a boolean variable named isValid and initialize it with a value of true
//TO DO

//display the boolean variable to the page and log it to the console
// addToPage(isValid);
//TO DO

// ----- we will cover arrays and objects later -----

//declare a variable named variableName and do not initialize it
//TO DO

//now display that variable to the page and log it to the console, we should see that it is undefined because it doesn't hold a value
// addToPage(variableName);
//TO DO

//declare a variable named nullVariable and set it equal to null, then display that value to the page and log it to the console
addToPage(nullVariable);
//TO DO

/*
  demonstrate what a multi-line comment looks like and how it works
  in this case I typed the enclosing characters first and then the comment
  You can also demonstrate the keyboard shortcut to comment out text in a JS file
*/

//allow the user to enter their age into a prompt and store that value in a variable named age
//TO DO

// write the user's value to the console
//TO DO

//write the user's value to the page
addToPage(age);




// ----- HELPER FUNCTION - WRITTEN FOR YOU -----
function addToPage(string){
  //the unordered list on the page
  let output = document.getElementById("output");
  
  //add the string passed in to this function to the output list on the page
  output.innerHTML += "<li>" + string + "</li>";
}
