const characterElement = document.getElementById("character");
const apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const characterName = data.name;
    characterElement.textContent = characterName;
  })
  .catch(error => {
    console.error("Error fetching character data:", error);
  });