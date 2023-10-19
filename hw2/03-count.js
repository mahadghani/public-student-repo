// Add your code here
const input = document.querySelector("input");
input.addEventListener("input", handleKeyDown);

const toHighlight = document.querySelector(".myText");
const originalContent = toHighlight.innerHTML;

function handleKeyDown(event) {
  // Code to handle input
  toHighlight.innerHTML = originalContent;

  const coloredWord = input.value;
  const currContent = toHighlight.innerHTML;

  // Use a regular expression that puts to strings to be highlighted in span tags
  const highlightedContent = currContent.replace(
    new RegExp(`(${coloredWord})`, "gi"),
    '<span class="highlight">$1</span>'
  );

  // Update the content of the div with the highlighted version
  toHighlight.innerHTML = highlightedContent;

  // Go through and actually highlight the words now
  const wordHighlight = document.querySelectorAll(".highlight");
  wordHighlight.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}
