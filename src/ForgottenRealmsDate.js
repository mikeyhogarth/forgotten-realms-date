/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth on a very slow Saturday evening
 */
'use strict';

const BEGINNING_OF_THE_AGE_OF_THUNDER = -35000;
const MONTHS = require('./data/months.json');

/** Class representing a date in the Forgotten Realms Dalereckoning (DR) system. */
class ForgottenRealmsDate {

  /**
   * @constructor
   * @param {integer} year 
   * @param {integer} month 
   * @param {integer} day
   */
  constructor(year = BEGINNING_OF_THE_AGE_OF_THUNDER, month = 0, day = 1) {
    this._day    = day;
    this._month  = month;
    this._year   = year;
  }

  getYear() {
    return this._year;
  }

  getMonth() {
    return this._month;
  }

  getDay() {
    return this._day;
  }

  /**
   * getMonthName
   * get this month's name
   * @returns string
   */
  getMonthName() {
    return MONTHS[this._month].name;
  }

  /**
   * getMonthCommonName
   * get this month's common name
   * @returns string
   */
  getMonthCommonName() {
    return MONTHS[this._month].commonName;
  }

  /**
   * toString
   * converts the date to a readable string
   * @returns string
   */
  toString() {
    return `${this.getMonthName()} ${this.getDay()}, ${this.getYear()} DR`;
  }

  /**
   * equalTo
   * compares this date to another
   * @param {ForgottenRealmsDate} otherDate - date to compare to
   * @returns boolean - true if otherDate is equal, false otherwise
   */
  equalTo(otherDate) {
    return otherDate.getDay() === this.getDay() &&
      otherDate.getMonth() === this.getMonth() &&
      otherDate.getYear() === this.getYear();
  }

  /**
   * addDays
   * add some days to this date and return a new date with the result
   * @param {integer} days - days to add
   * @return a new ForgottenRealmsDate object
   */
  addDays(days = 1) {
    let newDay   = this.getDay(), newMonth = this.getMonth(), newYear  = this.getYear(); 
    
    for(let i = 0; i < days; i++) {
      newDay++;
      if(newDay > 30)   { newMonth++; newDay = 1;   }
      if(newMonth > 11) { newYear++;  newMonth = 0; }
    };

    return new ForgottenRealmsDate(newYear, newMonth, newDay);
  }

  /**
   * addTendays
   * adds some tendays (weeks, which are 10 days long in DR) to the current date
   * @return a new ForgottenRealmsDate object
   */
  addTendays(tendays = 1) {
    return this.addDays(10 * tendays);
  }

  /**
   * addYears
   * adds a specified number of years (365 days) to the current date
   * @return a new ForgottenRealmsDate object
   */
  addYears(years = 1) {
    return new ForgottenRealmsDate(this.getYear() + years, this.getMonth(), this.getDay());
  }

  /**
   * subtractDays
   * subtract some days to this date and return a new date with the result
   * @param {integer} days - days to subtract
   */
  subtractDays(days = 1) {
    let newDay   = this.getDay(), newMonth = this.getMonth(), newYear  = this.getYear(); 
    
    for(let i = 0; i < days; i++) {
      newDay--;
      if(newDay < 1)    { newMonth--; newDay = 30;   }
      if(newMonth < 1)  { newYear--;  newMonth = 11; }
    };

    return new ForgottenRealmsDate(newYear, newMonth, newDay);
  }

  /**
   * subtractTendays
   * adds some tendays (weeks, which are 10 days long in DR) to the current date
   * @return a new ForgottenRealmsDate object
   */
  subtractTendays(tendays = 1) {
    return this.subtractDays(10 * tendays);
  }

  /**
   * subtractYears
   * subtracts a specified number of years (365 days) to the current date
   * @return a new ForgottenRealmsDate object
   */
  subtractYears(years = 1) {
    return new ForgottenRealmsDate(this.getYear() - years, this.getMonth(), this.getDay());
  }
}

module.exports = ForgottenRealmsDate;