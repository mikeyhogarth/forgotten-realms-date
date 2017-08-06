/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth on a very slow Saturday evening
 */
'use strict';

 const BEGINNING_OF_THE_AGE_OF_THUNDER = -35000;
 const MONTHS = require('./data/months.json');

 module.exports = class ForgottenRealmsDate {

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
   */
  getMonthName() {
    return MONTHS[this._month].name;
  }

  /**
   * getMonthCommonName
   * get this month's common name
   */
  getMonthCommonName() {
    return MONTHS[this._month].commonName;
  }

  /**
   * toString
   * converts the date to a readable string
   */
  toString() {
    return `${this.getMonthName()} ${this.getDay()}, ${this.getYear()} DR`;
  }

  /**
   * equalTo
   * compares this date to another
   * @param {ForgottenRealmsDate} otherDate - date to compare to
   */
  equalTo(otherDate) {
    return otherDate.getDay() === this.getDay() &&
      otherDate.getMonth() === this.getMonth() &&
      otherDate.getYear() === this.getYear();
  }

  /**
   * addDays
   * add some days to this date and return a new date with the result
   * @param {integer} days - days to add (default 1)
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
   * subtractDays
   * subtract some days to this date and return a new date with the result
   * @param {integer} days - days to subtract (default 1)
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

 }