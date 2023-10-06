const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(event) {
  // Your code to handle the input event goes here
  let y = elem.value;
  let x = parseInt(y);
  // console.log(x);
  if (isNaN(x) || x < 0) {
    alert("The number you entered is invalid!");
  } else {
    let len = y.length;
    let same = 1;
    for (let i = 0; i < len; i++) {
      if (y[i] != y[len - i - 1]) {
        same = 0;
      }
    }
    // console.log(same);
    let info = document.getElementsByClassName("palindromeornot");

    if (same == 1) {
      console.log("Yes. This is a palindrome!");
      info[0].textContent = "Yes. This is a palindrome!";
      info[0].style.color = "green";
    } else {
      console.log("No. Try Again.");
      info[0].textContent = "NOT palindrome!";
      info[0].style.color = "red";
    }
  }
  // console.log("Input value:", elem.value);
}
