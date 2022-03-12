// perform CRUD - create read update and delete
// import db
// const mongodb = require('mongodb');
const Db = require('mongodb/lib/db');
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID } = require('mongodb');
// mongoose - odm object document model helps 
// need mongoclient to connect to the datbase to perform crud operations
// const MongoClient = mongodb.MongoClient;
// const id = new ObjectID(); 
// console.log(id.id); 
// id.getTimeStamp(); // using binary. 
// define connection url 
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// connect 
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('unable to connect to db');
    };
    const db = client.db(databaseName);
    // UPDATING
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('someiadffa')
    }, {
        $set: {
            name: 'newname'
        }
    })
    updatePromise.then((result) => {
        console.log(result); 
    }).catch((error) => {
        console.log(error);
    })
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error); 
    })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Brian',
    //     age: 42
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user');
    //     }
    //     console.log(result.ops);
    // })
    // bulk insert
    // db.collection('users').insertMany([
    //     {
    //         name: 'Susie',
    //         age: 40
    //     },
    //     {
    //         name: 'ezra',
    //         age: 1.2
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('could not insert users');
    //     }
    //     console.log(result.ops); 
    // });
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ], (err, res) => {
    //     if (err) {
    //         return console.error('unable to insert tasks', err); 
    //     }
    //     console.log(res.ops); 
    // });
    // db.getCollection('tasks').find({}); 
    // FETCHING 
    db.collection('users').findOne({_id: new ObjectID("asdfei53522l235asd")}, (err, user) => {
        if (err) {
            return console.error('no get name');
        }
        console.log(user);
    })
    db.collection('users').find({age: 27}).toArray((err, users) => {

    })
});