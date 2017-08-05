/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth on a very slow Saturday evening
 */

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

  getMonthName() {
    return MONTHS[this._month].name;
  }

  getMonthCommonName() {
    return MONTHS[this._month].commonName;
  }

  toString() {
    return `${this.getMonthName()} ${this.getDay()}, ${this.getYear()} DR`;
  }

  equalTo(otherDate) {
    return otherDate.getDay() === this.getDay() &&
      otherDate.getMonth() === this.getMonth() &&
      otherDate.getYear() === this.getYear();
  }

  addDays(days) {
    return new ForgottenRealmsDate(this.getYear(), this.getMonth(), this.getDay() + days)
  }

  subtractDays(days) {
    return new ForgottenRealmsDate(this.getYear(), this.getMonth(), this.getDay() - days)
  }

 }