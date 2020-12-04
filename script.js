document.getElementById("breedButton").addEventListener("click", function(event) {
  event.preventDefault();
  const breed = document.getElementById("breedSelect").value;
  console.log(breed);

  const url = "https://dog.ceo/api/breed/" + breed + "/images";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let result = ""
      result += "<h2>Choose the dog you want to take home</h2>";
      result += "<div id='masonry'>";
      for (let i = 0; i < json.message.length; i++) {
        result += "<img class='image' loading='lazy' onclick='imageFunction(this)' src='" + json.message[i] + "'>";
      }
      result += "</div>";
      document.getElementById("image-cont").innerHTML = result;

    }).catch(function(error) {
      console.log(error);
    });
});

function imageFunction(image) {
  let result = "<h2>Congrats on Your New Dog!</h2>";
  result += "<img id='winner' src='" + image.src + "'>";
  document.getElementById("image-cont").innerHTML = result;
}
