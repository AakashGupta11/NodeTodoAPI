// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = {name: "Alex", age: 25};
var {name} = obj;
console.log(name);

var ob = new ObjectID();
console.log(ob);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect to mongodb server');
  }
  else{
    console.log('Connected to mongodb server');
  }
  // db.collection('TodoApp').insertOne({
  //   text: "Mondodb test",
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     console.log('Unable to write data');
  //   }
  //   else{
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });
  // db.collection('Users').insertOne({
  //   name: "Aakash",
  //   age: "20",
  //   location: "Delhi"
  // }, (err, result)=>{
  //   if(err){
  //     console.log('Unable to write data');
  //   }
  //   else{
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });
  // db.close();
});
