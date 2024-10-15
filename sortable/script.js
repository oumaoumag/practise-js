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
  heroes = data; // store the data in a global array
  renderTable(); // call the function to display the table
})
.catch((error) => 
  console.error("There was a problem with the fetch operation:", error)
);


// Function resposible for displaying the superhero data in atable format on the webapage.
// It dynamically generates table rows and columns based on the data and then inserts that table
// the HTML document
const renderTable = () => {
  const tbody = document.getElementById("heroes-body");
  tbody.innerHTML = ""; // Clear previous table rows

  const totalHeroes = pageSize === "all" ? heroes.length : pageSize;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + totalHeroes, heroes.length);

  for (let i = startIndex; i < endIndex; i++) {
    const hero = heroes[i];
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><img src="${hero.image.xs}" alt="${hero.name}" style="width: 40px;"></td>
    <td>${hero.name}</td>
    <td>${hero.biography.fullName}</td>
    <td>${JSON.stringify(hero.powerstats)}</td>
    <td>${hero.appearance.race}</td>
    <td>${hero.appearance.gender}</td>
    <td>${hero.appearance.height.join(", ")}</td>
    <td>${hero.appearance.weight.join(", ")}</td>
    <td>${hero.biography.placeOfBirth}</td>
    <td>${hero.biography.alignment}</td>
    `;
    tbody.appendChild(row);
  }
};

const nextPage = () => {
  const totalPages = Math.ceil(heroes.length / pageSize);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
};

document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);

const include = (searchQuery) => {
  return heroes.filter((hero) => {
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  });
};

// searching by full name
const includeFullName = (searchQuery) => {
  return heroes.filter((hero) => 
    hero.biography.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
};