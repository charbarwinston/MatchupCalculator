const dbInit = require('./db-initialize');
const MongoClient = require('mongodb').MongoClient;
const expect = require("chai").expect
const sinon = require("sinon");
const { query } = require('express');



const testDbName = "DUMMY_LEAGUE_MATCHES"
const testCollectionName = "MATCHES"
const testMatch = {
  team1: {
    top: "teemo",
    mid: "ahri",
    jungle: "zac",
    adc: "thresh",
    support: "bard",
    win: "win"
  },
  team2: {
    top: "garen",
    mid: "taliyah",
    jungle: "nocturne",
    adc: "vayne",
    support: "braum",
    win: "fail"
  }
}

var url = "mongodb://localhost:27017/" + testDbName;

describe("db-initialize tests", () => {
  describe("SeedDataBaseConnection", () => {
    it('should populate correct test data when seedDatabaseCollection is called', async () => {
      dbInit.seedDatabaseCollection();
      var result = await queryHelper();
      expect(result.length).to.be.greaterThan(0);

    })
  })
})

async function queryHelper() {
  const client = await MongoClient.connect(url)
  .catch(err => { 
    handleError(err);
  });

  const db = await client.db(testDbName);
  return await db.collection(testCollectionName).find( {} ).toArray();

}