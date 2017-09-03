const forgottenRealmsDate = require('../dist/bundle');

describe('ForgottenRealmsTest', () => {

  context('for a normal date', () => {
    it('parses it into the Forgotten Realms Dalereckoning (DR) system', () => {
      const date = new Date(1487, 1, 3);
      expect(forgottenRealmsDate(date)).to.equal("Alturiak 3, 1487 DR");
    });

    it('allows you to ask for the common name via options', () => {
      const date = new Date(1487, 1, 3);
      expect(forgottenRealmsDate(date, { useCommonName: true })).to.equal("The Claw of Winter 3, 1487 DR");
    })
  });
});