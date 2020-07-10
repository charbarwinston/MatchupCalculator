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

function buildDatabase() {
    MongoClient.connect(url)
      .then((db) => {
        var dbo = db.db(testDbName);
        dbo.createCollection(testCollectionName)
        .then(() => {
          console.log("test collection created!");
          db.close();
        })
        .catch(() => {
          console.log("test collection failed!");
          db.close();
        })
    }).catch(console.log("Failed to connect to database"));
}

buildDatabase()
