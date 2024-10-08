/**
 * Checks if the given date is a Friday.
 * @param {Date | string} date - The date to check.
 * @returns {boolean} True if the date is a Friday, false otherwise.
 */
function isFriday(date) {
    // Get the day of the week (0 = Sunday, ..., 5 = Friday, 6 = Saturday).
    // Check if the day is 5 (Friday).
    return new Date(date).getDay() === 5;
  }
  
  /**
   * Checks if the given date falls on a weekend (Saturday or Sunday).
   * @param {Date | string} date - The date to check.
   * @returns {boolean} True if the date is a weekend, false otherwise.
   */
  function isWeekend(date) {
    // Get the day of the week (0 = Sunday, ..., 6 = Saturday).
    var day = new Date(date).getDay();
    // Check if the day is either 0 (Sunday) or 6 (Saturday).
    return day === 0 || day === 6;
  }
  
  /**
   * Checks if the year of the given date is a leap year.
   * @param {Date | string} date - The date to check.
   * @returns {boolean} True if the year is a leap year, false otherwise.
   */
  function isLeapYear(date) {
    // Extract the year from the given date.
    var year = new Date(date).getFullYear();
    // Check if the year is divisible by 4 but not by 100, unless it is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  /**
   * Checks if the given date is the last day of the month.
   * @param {Date | string} date - The date to check.
   * @returns {boolean} True if the date is the last day of the month, false otherwise.
   */
  function isLastDayOfMonth(date) {
    // Create a Date object for the given date.
    var d = new Date(date);
    // Get the last day of the month by creating a new Date object with
    // the day set to 0 of the next month. This gives the last day of the current month.
    var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    // Check if the date's day matches the last day of the month.
    return d.getDate() === lastDay;
  }