let heroes = []; // An empty array that will eventually store the superhero data fetched from the API.
let currentPage = 1; // Keeps track of which page of data is currently being displayed (used for pagination)
let pageSize = 20; // Determines how many superhero entries are displayed  per page. Default value if set to 20.
let searchQuery = ""; // Holds the value of the current search query entered by the user.
let sortColumn = "name"; // Specifies which column to sort the data by (default is "name")
let sortDirection = "asc"; // Indicates the sorting order(ascending or descending), default to "asc" (ascending).

fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((data) => {
  heroes = data;
  renderTable();
})
.catch((error) => 
  console.error("There was a problem with the fetch operation:", error)
);