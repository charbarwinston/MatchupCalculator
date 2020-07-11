var MongoClient = require('mongodb').MongoClient;

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

function handleError(err){
  console.log(err); 
  throw(err);
}

async function seedDatabaseCollection() {
  const client = await MongoClient.connect(url)
    .catch(err => { 
      handleError(err);
    });

  const db = await client.db(testDbName);
  createTestCollection(db);
  insertTestData(db);
}

async function createTestCollection(db) {
  await db.createCollection(testCollectionName)
    .catch(err => {
      handleError(err);
    });
}

async function insertTestData(db){
  await db.collection(testCollectionName).insertOne(testMatch)
    .catch((err) => {
      handleError(err);
    })

}


module.exports = {
  seedDatabaseCollection
}