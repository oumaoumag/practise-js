# [Working with Dates in JavaScript](https://asaqeni.com/learn/js/date-manipulation-guide)

JavaScript offers powerfull tools to manupulate and format dates, making it easy to work with temporal data in your web applications.

## 1. How to Get Today's Date:
There are two primary ways to retrive the current data and time in JavaScript:

+ `**new** Date() :` This constructor creates a new Date Object representung the current data and time at the moment the code is executed.

```Js
const today = new Date();
console.log(today); // Output: 2024-10-07T23:07:47.164Z
```
- **Logging the Date**:
 If you used `console.log(today);`, it would typically show the date in your local timezone. However, the if you get an output similar to the one above, it suggests, that you're logging the date in a format that indicates it's being ouput in Coodinated Universal Time(UTC) rather that your local time zone. To fix this use:
```Js
console.log(today.toString()); // Output: Tue Oct 08 2024 02:24:02 GMT+0300 (East Africa Time)
```
- **Formating the Date**: To format the date, you can use methods like `toLocaleString()`. This converts the date to local timezone format.
```Js
console.log(today.toLocalString()); //10/8/2024, 2:13:45 AM
```
+ `**Date.now** :` This static methods returns the number of milliseconds elapsed since midnight on january 1, 1970, UTC (Coordinated Universal Time). While not directly a date object, it provides a timmestamo useful for further manupulation
```Js
const timestamp = Date.now();
console.log(timestamp); // Output: (large number representing milliseconds since epoch)
```
## 2. How to Format a Date:
JavaScript provides several ways to format dates. The preferred format is ISO 8601 (YYY-MM-DD), which works consistenly across browsers:
```Js
const isoDate = new Date('2024-10-08'); //IS0 format
console.log(isoDate.toISOString()); // Outputs: 2024-10-08T00:00:00.000Z
```
The build-in Date object does'nt offer a direct way to format dates for display. However, JavaScript provides methods and libraries to achieve various formatting options:

## Locale-Specific Formatting:
```Js
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric'};
console.log(today.toLocaleDate(String))