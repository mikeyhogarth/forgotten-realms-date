# Forgotten Realms Date
A function for parsing normal date objects into a string representing the Forgotten Realms Dalereckoning (DR) system. See the [Wikipedia entry](https://en.wikipedia.org/wiki/Calendars_in_the_Forgotten_Realms) for more detail.

## Installation
Use `dist/bundle.js` - it's built with a UMD hook so should work with whatever method you use to import modules.

## Usage
```
const fn = require('forgotten-realms-date');
const date = new Date(3000, 3, 29);
fn(date);    // => 'Tarsakh 29, 3000 DR'
```
See [tests](src/forgotten-realms-date.test.js) for more examples, or take a look at the [API](https://mikeyhogarth.github.io/forgotten-realms-date/ForgottenRealmsDate.html) provided via JSdoc.

## Planned Features
* Holidays (Midwinter, Greengrass, Midsummer, Highharvestide and The Feast of the Moon)
* Leap years (Shieldmeet)
* Special day identification (Spring Equinox, Summer Solstice, Autumn Equinox, Winter Solstice)

## WHY!?
It's part of "A thing" that I might build one day.

## This looks fun can i contribute?
Yes, talk to me.
