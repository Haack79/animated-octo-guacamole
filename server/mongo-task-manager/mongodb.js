// perform CRUD - create read update and delete
// import db
const mongodb = require('mongodb');
// need mongoclient to connect to the datbase to perform crud operations
const MongoClient = mongodb.MongoClient;
// define connection url 
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// connect 
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('unable to connect to db');
    };
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'Brian',
        age: 42
    })
});