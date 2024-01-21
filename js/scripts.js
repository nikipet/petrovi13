/*!
 * Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

// Set the content of the element with the ID "current-year" to the current year
document.getElementById("copyright").innerHTML = "Copyright&copy;   Петрови-13&reg; " + getCurrentYear();


