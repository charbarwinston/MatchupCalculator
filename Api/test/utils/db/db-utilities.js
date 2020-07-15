var MongoClient = require('mongodb').MongoClient;
var testData = require('../resources/test-data')


const testDbName = "DUMMY_LEAGUE_MATCHES"
const testCollectionName = "MATCHES"


const url = "mongodb://localhost:27017/" + testDbName;

function handleError(err){
  console.log(err); 
  throw(err);
}

async function connectToDatabase() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true })
  .catch(err => { 
    handleError(err);
  });
  return client.db(testDbName);
}

async function seedDatabaseCollection(collectionName, data) {

  const db = await connectToDatabase();

  db.createCollection(collectionName)
  .catch(err => {
    handleError(err);
  });
  db.collection(collectionName).insertOne(data)
  .catch((err) => {
    handleError(err);
  });
  client.close();
}

async function clearDatabaseCollection(collectionName) {
  const db = await connectToDatabase()
  .catch((err) => {
    handleError(err);
  });
  db.dropCollection(collectionName)
  .catch((err) => {
    handleError(err);
  });
}


module.exports = {
  seedDatabaseCollection,
  clearDatabaseCollection
}