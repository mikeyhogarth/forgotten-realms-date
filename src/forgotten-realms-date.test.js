const ForgottenRealmsDate = require('../dist/bundle');

describe('ForgottenRealmsTest', () => {

  describe('#constructor', () => {
    context('when constructed with no arguments', () => {
      it('initializes to the beginning of the age of thunder', () => {
        const date = new ForgottenRealmsDate();
        expect(date.getYear()).to.equal(-35000);
        expect(date.getMonth()).to.equal(0);
        expect(date.getDay()).to.equal(1);
      });
    });
  });

  describe('#getYear', () => {
    it('returns the year currently represented by the date', () => {
      const date = new ForgottenRealmsDate(3000,0,1);
      expect(date.getYear()).to.equal(3000);
    });
  });

  describe('#getMonth', () => {
    it('returns the month currently represented by the date', () => {
      const date = new ForgottenRealmsDate(3000, 2, 1);
      expect(date.getMonth()).to.equal(2);
    });
  });

  describe('#getMonthName', () => {
    it('returns the name for the month currently represented by the date', () => {
      const date = new ForgottenRealmsDate(3000, 2, 1);
      expect(date.getMonthName()).to.equal('Ches');
    });
  });

  describe('#getMonthCommonName', () => {
    it('returns the common name for the month currently represented by the date', () => {
      const date = new ForgottenRealmsDate(3000, 5, 1);
      expect(date.getMonthCommonName()).to.equal('The Time of Flowers');
    });
  });

  describe('#getDay', () => {
    it('returns the day currently represented by the date', () => {
      const date = new ForgottenRealmsDate(3000, 2, 5);
      expect(date.getDay()).to.equal(5);
    });
  });

  describe('#toString', () => {
    it('returns the current date, as a string', () => {
      const date = new ForgottenRealmsDate(3000, 3, 29);
      expect(date.toString()).to.equal('Tarsakh 29, 3000 DR');
    });
  });

  describe('#equalTo', () => {
    it('allows comparison of two dates', () => {
      const date1 = new ForgottenRealmsDate(3000, 1, 0);
      const date2 = new ForgottenRealmsDate(3000, 1, 0);
      expect(date1.equalTo(date2)).to.be.true;
    })
  });
});