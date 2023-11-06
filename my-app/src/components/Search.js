// src/components/Search.js
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // delete previous name and picture
    const nameRemoval = document.querySelector(".nameElement");
    const picRemoval = document.querySelector(".picElement");

    // If the element exists, remove it
    if (nameRemoval) {
      nameRemoval.remove();
      picRemoval.remove();
    }

    // Searching for term
    console.log("Searching for:", searchTerm);
    if (nameList.includes(searchTerm)) {
      const index = nameList.indexOf(searchTerm);
      printInfo(index);
    } else {
      // pass
    }
  };

  return (
    <div className="container mt-5 parent-info">
      <h1 className="text-center display-4">Search for a Character</h1>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter character name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////

let charList = [];
let nameList = [];
const url = "https://thronesapi.com/api/v2/Characters";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Looping through the array of characters
    data.forEach((character) => {
      charList.push(character);
      nameList.push(character.fullName);
    });
  })
  .catch((error) => {
    // Handle errors here
    console.error("Error fetching data:", error);
  });

////////////////////////////////////////////////////////

const printInfo = (index) => {
  const name = charList[index].fullName;
  const pic = charList[index].imageUrl;

  // Creating a container element
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center"; // Center items horizontally
  container.style.justifyContent = "center"; // Center items vertically
  container.style.height = "100vh"; // Adjust the height as needed

  // Creating elements for name and picture
  const nameElement = document.createElement("p");
  nameElement.textContent = `Full Name: ${name}`;
  nameElement.style.fontWeight = "bold";
  nameElement.style.fontSize = "40px";
  nameElement.style.color = "black";

  const picElement = document.createElement("img");
  picElement.src = pic;
  picElement.alt = `Picture of ${name}`;
  picElement.style.width = "500px";
  picElement.style.height = "500px";

  // Append nameElement and picElement to the container
  container.appendChild(nameElement);
  container.appendChild(picElement);

  const parent = document.querySelector(".parent-info");
  parent.appendChild(container);
};

/////////////////////////////////////////////////////////
export default Search;
