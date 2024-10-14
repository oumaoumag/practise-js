let heroes = [];
let currentPage = 1;
let pageSize = 20;
let searchQuery = "";
let sortColumn = "name";
let sortDirection = "asc";

const loadData = (data) => {
  heroes = data;
  renderTable();
};

const renderTable = () => {
  const tbody = document.getElementById("heroes-body");
  tbody.innerHTML = "";

  const totalHeroes = pageSize === "all" ? heroes.length : pageSize;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + totalHeroes, heroes.length);

  for (let i = startIndex; i < endIndex; i++) {
    const hero = heroes[i];
    const row = document.createElement("tr");

    row.innerHTML = `
              <td><img src="${hero.images.xs}" alt="${
      hero.name
    }" style="width: 40px;"></td>
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

const updatePageSize = () => {
  pageSize = document.getElementById("pageSize").value;
  if (pageSize === "all") {
    pageSize = heroes.length;
  }
  currentPage = 1;
  renderTable();
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

const handleSearchName = () => {
  searchQuery = document.getElementById("search").value;
  const suggestions = include(searchQuery);
  renderSearch(suggestions);
};

const handleSearchFullName = () => {
  searchQuery = document.getElementById("search").value;
  const suggestions = includeFullName(searchQuery);
  renderSearch(suggestions);
};

const handleSearchPOB = () => {
  searchQuery = document.getElementById("search").value;
  const suggestions = includePOB(searchQuery);
  renderSearch(suggestions);
};

const handleSearchAlignment = () => {
  searchQuery = document.getElementById("search").value;
  const suggestions = includeAlignment(searchQuery);
  renderSearch(suggestions);
};

const include = (searchQuery) => {
  return heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const includeFullName = (searchQuery) => {
  return heroes.filter((hero) =>
    hero.biography.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const includePOB = (searchQuery) => {
  return heroes.filter((hero) =>
    hero.biography.placeOfBirth
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
};

const includeAlignment = (searchQuery) => {
  return heroes.filter((hero) =>
    hero.biography.alignment.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const specialSearch = () => {
  const searchField = document.getElementById("searchField").value;
  searchQuery = document.getElementById("search").value;
  let value;
  switch (searchField) {
    case "name":
      handleSearchName();
      break;
    case "fullName":
      handleSearchFullName();
      break;
    case "placeOfBirth":
      handleSearchPOB();
      break;
    case "alignment":
      handleSearchAlignment();
      break;
    default:
      value = "";
  }
  return value.toLowerCase().includes(searchQuery.toLowerCase());
};

const handleNumericSearch = () => {
  const minWeight = parseInt(document.getElementById("minWeight").value) || 0;
  const maxWeight =
    parseInt(document.getElementById("maxWeight").value) || Infinity;

  heroes.filter((hero) => {
    const weight = parseInt(hero.appearance.weight[0]) || 0;
    return weight >= minWeight && weight <= maxWeight;
  });
};

const renderSearch = (filteredHeroes = heroes) => {
  const tbody = document.getElementById("heroes-body");
  tbody.innerHTML = "";

  let totalHeroes;

  if (pageSize === "all") {
    totalHeroes = filteredHeroes.length;
    currentPage = 1;
  } else {
    totalHeroes = Math.min(pageSize, filteredHeroes.length);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex =
    pageSize === "all" ? filteredHeroes.length : startIndex + totalHeroes;

  for (let i = startIndex; i < endIndex && i < filteredHeroes.length; i++) {
    const hero = filteredHeroes[i];
    const row = document.createElement("tr");

    row.innerHTML = `
          <td><img src="${hero.images.xs}" alt="${
      hero.name
    }" style="width: 40px;"></td>
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

  document.getElementById("prev").style.display =
    currentPage > 1 ? "inline" : "none";
  document.getElementById("next").style.display =
    pageSize !== "all" &&
    currentPage < Math.ceil(filteredHeroes.length / pageSize)
      ? "inline"
      : "none";
};

const sortTable = (column) => {
  if (sortColumn === column) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  } else {
    sortColumn = column;
    sortDirection = "asc";
  }

  heroes.sort((a, b) => {
    let aValue, bValue;

    switch (column) {
      case "name":
        aValue = a.name;
        bValue = b.name;
        break;
      case "fullName":
        aValue = a.biography.fullName;
        bValue = b.biography.fullName;
        break;
      case "powerstats":
        aValue = Object.values(a.powerstats).reduce((acc, val) => acc + val, 0);
        bValue = Object.values(b.powerstats).reduce((acc, val) => acc + val, 0);
        break;
      case "race":
        aValue = a.appearance.race;
        bValue = b.appearance.race;
        break;
      case "gender":
        aValue = a.appearance.gender;
        bValue = b.appearance.gender;
        break;
      case "height":
        aValue = parseInt(a.appearance.height[0]);
        bValue = parseInt(b.appearance.height[0]);
        break;
      case "weight":
        aValue = parseInt(a.appearance.weight[0]);
        bValue = parseInt(b.appearance.weight[0]);
        break;
      case "placeOfBirth":
        aValue = a.biography.placeOfBirth;
        bValue = b.biography.placeOfBirth;
        break;
      case "alignment":
        aValue = a.biography.alignment;
        bValue = b.biography.alignment;
        break;
      default:
        aValue = "";
        bValue = "";
        break;
    }
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  renderTable();
};

document.getElementById("search").addEventListener("input", specialSearch);
document.getElementById("pageSize").addEventListener("change", updatePageSize);
document.getElementById("next").addEventListener("click", nextPage);
document.getElementById("prev").addEventListener("click", prevPage);

fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(loadData)
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );
