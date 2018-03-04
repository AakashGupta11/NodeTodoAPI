// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect to mongodb server');
  }
  else{
    console.log('Connected to mongodb server');
    // db.collection('TodoApp').find({_id: new ObjectID("5a9b9f3164870d28402bf95d")}).toArray().then((docs)=>{
    //   console.log('Todos: ');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //   console.log('Unable to fetch data', err);
    // });
    // db.collection('TodoApp').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //   console.log('Unable to fetch data', err);
    // });
    db.collection('Users').find({name: "Aakash"}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
      console.log('Unabble to fetch data');
    })
  }
});
