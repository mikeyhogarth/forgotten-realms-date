# Forgotten Realms Date
A "Date" object for representing and manipulating dates in using the Forgotten Realms Dalereckoning (DR) system. See the [Wikipedia entry](https://en.wikipedia.org/wiki/Calendars_in_the_Forgotten_Realms) for more detail.

## Installation
Use `dist/bundle.js` - it's built with a UMD hook so should work with whatever method you use to import modules.

## Usage
```
const date = new ForgottenRealmsDate(3000, 3, 29);

date.toString(); // => 'Tarsakh 29, 3000 DR'
```
See [tests](src/forgotten-realms-date.test.js) for more examples.

## Planned Features
* Immutable date manipulation
  * Add/Subtract days
  * Add/Subtract Tendays
  * Add/Subtract years
* Holidays (Midwinter, Greengrass, Midsummer, Highharvestide and The Feast of the Moon)
* Leap years (Shieldmeet)
* Special day identification (Spring Equinox, Summer Solstice, Autumn Equinox, Winter Solstice)

## WHY!?
It's part of "A thing" that I might build one day.

## This looks fun can i contribute?
Yes, talk to me.