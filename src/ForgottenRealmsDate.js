/**
 * Forgotten Realms Date
 * 
 * Author: Mikey Hogarth
 */
'use strict';

const MONTHS = require('./data/months.json');

/** 
 * Function for converting a date into the Forgotten Realms Dalereckoning (DR) system. 
 * @param date {Date} a javascript date object
 * @param opts {Object} options
 * 
 * Available Options
 * 
 * useCommonName: {boolean} if true, the month's common name will be used.
*/
const fn = (date, opts = {}) => {
  const nameType = opts.useCommonName ? 'commonName' : 'name';
  return `${MONTHS[date.getMonth()][nameType]} ${date.getDate()}, ${date.getFullYear()} DR`;
};

module.exports = fn;