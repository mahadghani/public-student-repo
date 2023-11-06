// Add your code here

const startButton = document.querySelector(".btn-primary");
startButton.addEventListener("click", changeColors);
const bodyDiv = document.querySelector(".background-body");

////////////////////////////////////////////////////////////////////////////////////////////

function changeColors() {
  if (startButton.value === "Start") {
    startButton.value = "Stop";
    startButton.style.backgroundColor = "red";
    startColorChange();
  } else {
    startButton.value = "Start";
    stopColorChange();
  }
}

let flag;

function startColorChange() {
  const totalTime = document.querySelector(".user-input").value;
  flag = setInterval(getColor, 3000);

  setTimeout(function () {
    clearInterval(flag);
    stopColorChange();
  }, totalTime * 1000);
}

function stopColorChange() {
  clearInterval(flag);
  bodyDiv.style.backgroundColor = "white";
  const userinput = document.querySelector(".user-input");
  userinput.value = 1;
  startButton.value = "Start";
  startButton.style.backgroundColor = "#007bff";
}

function getColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = Math.random(); // random value betwen 0 to 1

  //console.log(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  bodyDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
