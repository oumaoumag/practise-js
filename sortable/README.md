# Superhero Data Organizer Documentation

## Project Overview

- This project aims to create a web application that organizes and displays data about superheroes. The application will fetch data from a JSON file and provide features like searching, sorting, and pagination, all without relying on any frameworks or libraries.

## Table of Contents

- [Superhero Data Organizer Documentation](#superhero-data-organizer-documentation)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Features](#features)
    - [Data Fetching](#data-fetching)
    - [Display](#display)
    - [Search Functionality](#search-functionality)
  - [Sorting Functionality](#sorting-functionality)
  - [Pagination](#pagination)
  - [Bonus Features](#bonus-features)
  - [Conclusion](#conclusion)
  - [Author](#author)
  - [License](#license)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Setup Instructions

- Clone the repository.

```bash
git clone https://github.com/anxielray/Sortable.git
cd Sortable

```

- Host the `index.html` file on your local host browser.
- The data that will be used in this tutrial will be one from the source of `https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json` we will be looking at superheroes in the web, possibly to sort them in a certain ways.

## Features

### Data Fetching

- The data fetching method from the API was done by the use of the fetch API method.
- The data is in JSON format.
- The data is then parsed into useable objects in Javascript.


```javascript
const loadData = heroes => {
  console.log(heroes);
};

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then(response => response.json())
  .then(loadData);
```

### Display

- Data is then displayed in a table format. It focuses on the following:

     - Icon
     - Super Hero names
     - Real Names
     - Power statistics
     - weight
     - Height
     - Place of birth
     - Gender
     - Alignment
  
### Search Functionality

- The search functionality touches on various search options, like searching by the superhero names or by their real names.
- The functionality to sort the weight and height Mathematically will be implemented soon!
- The search is interactive, meaning it updates the suggestions every time the user inputs the text.

## Sorting Functionality

- Users can sort the displayed data by clicking on the column headers.
- Sorting toggles between ascending and descending order on consecutive clicks.


## Pagination

- The application supports pagination to limit the number of displayed heroes per page.
- Users can choose the number of items to display (10, 20, 50, 100, or all).
- Where if `20` is chosen, the number of heroes per page will be 20. If `all` is selected, the heroes displayed will increament to all heroes trying to be displayed on the same page.

## Bonus Features

- Field-specific Search: Allow users to select which fields to search in.
- Custom Search Operators: Implement operators for filtering data (e.g., equal, greater than).
- Detail View: Clicking a hero's name shows detailed information in a separate section or modal.
- URL Management: Update the URL with search terms and filters, allowing for easy sharing of specific views.

## Conclusion

- This documentation provides a comprehensive overview of the Superhero Data Organizer project. By following these guidelines, you can build a fully functional web application that allows users to interactively manage superhero data. Enjoy your coding journey!

## Author

- Maybe another superhero before you go!
- [$AnxielRay$](https://learn.zone01kisumu.ke/git/oumouma/sortable.git)


## License
[Permission](LICENSE.md)