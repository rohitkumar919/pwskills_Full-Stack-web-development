document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var dataContainer = document.getElementById("dataContainer");
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Hide the loader
        loader.style.display = "none";
  
        // Display the fetched data
        data.forEach(function(item) {
          var card = document.createElement("div");
          card.classList.add("card");
          card.textContent = item.title;
          dataContainer.appendChild(card);
        });
      })
      .catch(function(error) {
        console.log(error);
        // Hide the loader and display an error message
        loader.style.display = "none";
        dataContainer.textContent = "Error occurred while fetching data.";
      });
  });
  