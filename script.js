//grab the button

const buttons = document.querySelectorAll("button");
const displayEml = document.querySelector("#result"); //

const symbols = ["+", "-", "*", "/"];
// console.log(buttons);

let textToDisplay = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayEml.style.background = "";
    displayEml.style.color = "";

    const val = btn.innerText;
    const lastChar = textToDisplay[textToDisplay.length - 1];
    //[555] if . exist, dont let user enter another dot.
    if (val === "." && textToDisplay.includes(".")) return;

    // [2222222222] if the first one is symbol(not minus) then remove it(dont allow click on symbols on begining)
    // if (textToDisplay.length < 1 && ["*", "+", "/"].includes(val)) return;
    if (textToDisplay.length < 1 && symbols.includes(val)) return;
    // [33]if operator already exists, replace it with new one(you never have two operater)
    if (symbols.includes(lastChar) && symbols.includes(val)) {
      //[44444]remove the last char from the string
      textToDisplay = textToDisplay.slice(0, -1);
    }
    //AC remove everything from the display
    if (val === "AC") {
      return resetDisplay();
    }
    //show the total calculated value
    if (val === "=") {
      //[111111111111]check if the last character is a symbol,if it is, remove the symbol

      if (symbols.includes(lastChar)) {
        textToDisplay = textToDisplay.slice(0, -1);
      }
      onTotal();

      return;
    }
    //cut the last charactre from the display using slice
    if (val === "C") {
      textToDisplay = textToDisplay.slice(0, -1);
      return display(textToDisplay);
    }

    //call the function and show the value on the display(5)
    textToDisplay += val;
    display(textToDisplay);
  });
});

//display function to show the value  function of (5)
const display = (toDisplay) => {
  displayEml.innerText = toDisplay || "0.00"; // if there is nothing after C then toDisplay will be an empty string and it is false, so it will display "0.00"
};

const onTotal = () => {
  //[888]
  const prankNum = randomNumber();
  //[999];
  if (prankNum > 0) {
    //
    displayEml.style.background = "red";
    displayEml.style.color = "white";

    //add animation
    displayEml.classList.add("prank");
    //remove the class after the animation
    displayEml.addEventListener("animationend", () => {
      displayEml.classList.remove("prank");
    });
  }
  const total = eval(textToDisplay) + prankNum;
  console.log(prankNum);

  display(total);
  textToDisplay = "";
};

//funtion to reset display and set up "AC"
const resetDisplay = () => {
  display(textToDisplay);
  textToDisplay = "";
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10); //0-10
  //[6666]add to it the result
  return num < 6 ? num : 0;
};

//1. grab the button
//2. capture the value
//3. loop through them
//4. display
