// perform CRUD - create read update and delete
// import db
const mongodb = require('mongodb');
const Db = require('mongodb/lib/db');
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
    // db.collection('users').insertOne({
    //     name: 'Brian',
    //     age: 42
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user');
    //     }
    //     console.log(result.ops);
    // })
    // bulk insert
    db.collection('users').insertMany([
        {
            name: 'Susie',
            age: 40
        },
        {
            name: 'ezra',
            age: 1.2
        }
    ], (error, result) => {
        if (error) {
            return console.log('could not insert users');
        }
        console.log(result.ops); 
    })
});