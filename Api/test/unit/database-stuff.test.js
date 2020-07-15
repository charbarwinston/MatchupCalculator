const expect = require('chai').expect;
const databaseStuff = require('../../bin/db/database-stuff');
const { assert } = require('chai');

testResult = {
  garen: .75,
  darius: .52,
  teemo: .5,
  vayne: .82,
  volibear: .23
};


describe('champion-parser-test', () => {
  describe('queryByChampion', () => {
    it('should pull matchup data of one champion when queryChampion is called', () => {
      assert(true);
    })
  })
});