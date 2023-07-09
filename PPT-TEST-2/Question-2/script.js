document.addEventListener("DOMContentLoaded", function() {
    var inputBox = document.getElementById("inputBox");
    var submitBtn = document.getElementById("submitBtn");
    var output = document.getElementById("output");
  
    submitBtn.addEventListener("click", function() {
      var userInput = inputBox.value;
      if (userInput) {
        var newElement = document.createElement("p");
        newElement.textContent = userInput;
        output.appendChild(newElement);
        inputBox.value = "";
      }
    });
  });
  