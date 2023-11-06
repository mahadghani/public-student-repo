// URL for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

const section = document.getElementById("charactersSection");
section.style.textAlign = "center";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Looping through the array of characters
    console.log(data);
    data.forEach((character) => {
      // Accessing information about each character
      const name = character.fullName;
      const title = character.title;
      const pic = character.imageUrl;

      // Creating a new element for each character
      const newElement = document.createElement("div");
      // Styling the character element
      newElement.style.width = "300px"; // Adjust the width as needed
      newElement.style.margin = "auto"; // Center the element
      newElement.style.display = "inline-block"; // Display inline
      newElement.style.textAlign = "center"; // Center the content

      // Creating elements for name, title, and picture
      const nameElement = document.createElement("p");
      nameElement.textContent = `Name: ${name}`;
      nameElement.style.height = "50px";
      nameElement.style.fontWeight = "bold";
      nameElement.style.fontSize = "20px";
      nameElement.style.color = "black";

      const titleElement = document.createElement("p");
      titleElement.textContent = `Title: ${title}`;
      titleElement.style.height = "50px";
      titleElement.style.fontWeight = "bold";
      titleElement.style.fontSize = "20px";
      titleElement.style.color = "black";

      const picElement = document.createElement("img");
      picElement.src = pic;
      picElement.alt = `Picture of ${name}`;
      picElement.style.width = "250px";
      picElement.style.height = "250px";
      picElement.style.marginTop = "10px";

      newElement.addEventListener("mouseenter", () => {
        newElement.style.backgroundColor = "#004042";
        nameElement.style.color = "white";
        titleElement.style.color = "white";
      });

      newElement.addEventListener("mouseleave", () => {
        newElement.style.backgroundColor = "transparent";
        nameElement.style.color = "black";
        titleElement.style.color = "black";
      });

      // Appending name, title, and picture elements to the character element
      newElement.appendChild(picElement);
      newElement.appendChild(nameElement);
      newElement.appendChild(titleElement);

      // Appending the character element to the section
      newElement.style;
      section.appendChild(newElement);
    });
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error fetching data:", error);
  });

const startButton = document.querySelector(".btn-primary");
startButton.addEventListener("click", changeColors);
