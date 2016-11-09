const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to the database');
  }
  console.log('Connect to the database');
/*
  db.collection('Todos').find({_id:"582219650b4a390410683e3c"}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos ',err)
  });
*/

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  },(err)=>{
    console.log('Unable to fetch the data ',err);
  })

  db.close();
});
