const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://admin:eukFKDJpKL9KMobo@cluster0.m8mbdhn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = { client };
