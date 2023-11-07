$(function () {
  // Current day via day.js
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  // Sets the element with the id "currentDay" to the current date
  $('#currentDay').text(currentDate);
});


$(document).ready(function () {
  // Get the current hour using Day.js
  const currentHour = dayjs().hour(); 

  // Array of hours
  const hourElements = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

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
  });
});














// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
