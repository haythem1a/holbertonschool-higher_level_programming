const listMoviesElement = document.getElementById("list_movies");
const apiUrl = "https://swapi-api.hbtn.io/api/films/?format=json";
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const movies = data.results;
    movies.forEach(movie => {
      const title = movie.title;
      const listItem = document.createElement("li");
      listItem.textContent = title;
      listMoviesElement.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching movie data:", error);
  });