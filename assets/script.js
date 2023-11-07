$(function () {
  // Current day via day.js
  var currentDateTime = dayjs().format('dddd, MMMM D, YYYY, h:mm A');
  // Sets the element with the id "currentDay" to the current date
  $('#currentDay').text(currentDateTime);
});


$(document).ready(function () {
  // Get the current hour using Day.js
  const currentHour = dayjs().hour(); 

  // Array of hours
  const hourElements = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17",];

  // Loops through the array to apply the logic for each hour
  hourElements.forEach((elementId) => {
    const targetElement = document.getElementById(elementId);
    const elementHour = parseInt(targetElement.id.split('-')[1]);

    // Check the current time against what the element is associated with 
    if (currentHour > elementHour) {
      targetElement.classList.add("past");
      targetElement.classList.remove("present", "future");
    } else if (currentHour === elementHour) {
      targetElement.classList.add("present");
      targetElement.classList.remove("past", "future");
    } else {
      targetElement.classList.add("future");
      targetElement.classList.remove("past", "present");
    }
    
    // Retrieve user input from local storage
    const savedInput = localStorage.getItem(elementId);
    if (savedInput) {
      const description = targetElement.querySelector(".description");
      description.value = savedInput;
    }

    // Listener for text area to store user input
    const descriptionTextarea = targetElement.querySelector(".description");
    descriptionTextarea.addEventListener("input", function () {
      localStorage.setItem(elementId, descriptionTextarea.value);
    });

    $('#clearAllButton').on('click', function () {
      // This will loop through all time blocks
      const hourElements = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
      hourElements.forEach((elementId) => {
        const targetElement = document.getElementById(elementId);
        const descriptionTextarea = targetElement.querySelector('.description');
        descriptionTextarea.value = '';
        localStorage.removeItem(elementId); // Clear corresponding local storage item
      });
    });
    
  });
});







