// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect to mongodb server');
  }
  else{
    console.log('Connected to mongodb server');
    // db.collection('TodoApp').deleteMany({text: "Eat lunch"}).then((result)=>{
    //   console.log(result);
    // }, (err)=>{
    //   console.log('Unable to delete data');
    // });

    // db.collection('TodoApp').deleteOne({text: "Eat lunch"}).then((result)=>{
    //   console.log(result);
    // }, (err)=>{
    //   console.log('Unable to delete data');
    // });

    db.collection('TodoApp').findOneAndDelete({completed: false}).then((result)=>{
      console.log(result);
    }, (err)=>{
      console.log('Unable to delete data');
    });
  }
});
