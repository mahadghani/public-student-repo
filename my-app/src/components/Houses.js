// src/components/Houses.js
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const Houses = () => {
  useEffect(() => {
    doProcess();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center display-4">Exercise 02 - Charts</h1>
      <canvas
        className="donut-chart"
        aria-label="donut chart"
        role="img"
      ></canvas>
    </div>
  );
};

export default Houses;

////////////////////////////////
const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

const renderChart = (newList, recurrs) => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      //labels: ["label", "label", "label", "label"],
      labels: newList,
      datasets: [
        {
          label: "My First Dataset",
          //data: [1, 12, 33, 5],
          data: recurrs,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const doProcess = () => {
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
      let list = [];
      data.forEach((character) => {
        list.push(character.family);
      });

      let newList = [];
      let recurrs = [];
      while (list[0]) {
        if (newList.includes(list[0]) == false) {
          let tempName = list[0];
          let tempCount = 0;

          // Remove all instances of 'Banana' from the original array
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] == tempName) {
              list.splice(i, 1);
              tempCount++;
            }
          }

          // console.log(tempName, tempCount);
          newList.push(tempName);
          recurrs.push(tempCount);
        }
      }

      renderChart(newList, recurrs);

      // console.log(list);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error fetching data:", error);
    });
};
