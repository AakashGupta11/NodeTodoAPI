// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect to mongodb server');
  }
  else{
    console.log('Connected to mongodb server');
    // db.collection('TodoApp').findOneAndUpdate({_id: new ObjectID("5a9bdbedf0f395db7dba3c3b")},
    // {$set:{completed: true}},
    // {returnOriginal: false}).then((result)=>{
    //   console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({name: "Aakash"},
      {$set: {name: "Sherlock"}, $inc: {age: +5}},
      {returnOriginal: false}).then((result)=>{
      console.log(result);
    });
  }
});
