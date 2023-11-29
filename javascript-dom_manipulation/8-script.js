function fetchAndDisplayTranslation() {
    const helloElement = document.getElementById("hello");
      const apiUrl = "https://hellosalut.stefanbohacek.dev/?lang=fr";
      fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        helloElement.textContent = data.hello;
      })
      .catch(error => {
        console.error("Error fetching translation:", error);
      });
  }
    document.addEventListener("DOMContentLoaded", fetchAndDisplayTranslation);