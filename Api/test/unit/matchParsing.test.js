const matchParser = require('../../bin/db/match-parser');
const testLane = require('../utils/resources/test-data').testLane;
const { expect, assert } = require('chai');

describe('matchParsing', () => {
  describe('parseMatch', () => {
    it('should return the result of a lane matchup from the game passed to it', () => {
      expectedResult = {
        teemo: {
          garen: 1
        },
        garen: {
          teemo: 0
        }
      };
      matchupResult = matchParser.parseMatch(testLane);
      assert.deepEqual(matchupResult, expectedResult);
    }) 
  })
})