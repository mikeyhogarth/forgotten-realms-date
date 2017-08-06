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
      const date1 = new ForgottenRealmsDate(3000, 1, 1);
      const date2 = new ForgottenRealmsDate(3000, 1, 1);
      expect(date1.equalTo(date2)).to.be.true;
    })
  });

  describe('#addDays', () => {
    it('does not return the same reference', () => {
      const date = new ForgottenRealmsDate();
      expect(date.addDays()).to.not.equal(date);
    });
  
    it('allows you to add days to a date', () => {
      const date = new ForgottenRealmsDate(3000, 1, 1);
      const newDate = date.addDays(10);
      expect(newDate.getYear()).to.equal(3000);
      expect(newDate.getMonth()).to.equal(1);
      expect(newDate.getDay()).to.equal(11);
    });

    context('when crossing over a month/year', () => {
      it('handles the transition correctly', () => {
        const date = new ForgottenRealmsDate(2999, 11, 30);
        const newDate = date.addDays(2);
        expect(newDate.getYear()).to.equal(3000);
        expect(newDate.getMonth()).to.equal(0);
        expect(newDate.getDay()).to.equal(2);
      });
    });
    
  });

  describe('#addTendays', () => {
    it('adds the specified number of tendays (a.k.a weeks) to the date', () => {
      const date = new ForgottenRealmsDate(2999, 11, 10);
      const newDate = date.addTendays(2);
      expect(newDate.getYear()).to.equal(2999);
      expect(newDate.getMonth()).to.equal(11);
      expect(newDate.getDay()).to.equal(30);
    })
  });

  describe('#addYears', () => {
    it('adds the specified number of years to the date', () => {
      const date = new ForgottenRealmsDate(2999, 11, 10);
      const newDate = date.addYears(1);
      expect(newDate.getYear()).to.equal(3000);
      expect(newDate.getMonth()).to.equal(11);
      expect(newDate.getDay()).to.equal(10);
    })
  });

  describe('#subtractDays', () => {
    it('does not return the same reference', () => {
      const date = new ForgottenRealmsDate();
      expect(date.subtractDays()).to.not.equal(date);
    });

    it('allows you to subtract days from a date', () => {
      const date = new ForgottenRealmsDate(3000, 1, 20);
      const newDate = date.subtractDays(10);
      expect(newDate.getYear()).to.equal(3000);
      expect(newDate.getMonth()).to.equal(1);
      expect(newDate.getDay()).to.equal(10);
    });

    context('when crossing over a month/year', () => {
      it('handles the transition correctly', () => {
        const date = new ForgottenRealmsDate(3000, 0, 1);
        const newDate = date.subtractDays(2);
        expect(newDate.getYear()).to.equal(2999);
        expect(newDate.getMonth()).to.equal(11);
        expect(newDate.getDay()).to.equal(29);
      });
    });
  });


  describe('#subtractYears', () => {
    it('subtracts the specified number of years to the date', () => {
      const date = new ForgottenRealmsDate(2999, 11, 10);
      const newDate = date.subtractYears(1);
      expect(newDate.getYear()).to.equal(2998);
      expect(newDate.getMonth()).to.equal(11);
      expect(newDate.getDay()).to.equal(10);
    })
  });

});