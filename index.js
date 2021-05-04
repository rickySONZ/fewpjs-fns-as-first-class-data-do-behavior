/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(s) {
  let newS = s.split(":");
  let hours = parseInt(newS[0]);

  if (hours < 12){
    return "Good Morning";
  } else if (hours > 11 && hours < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(input){
  let greeting = document.getElementById('greeting')
  greeting.innerText = input
}