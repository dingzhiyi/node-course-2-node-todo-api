const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Cannot connect to the database');
  }
  console.log('Connected to the database');

  //deleteMany
  //db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//    console.log(result)
//  });
  //deleteOne
//  db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //  console.log(result);
  //});
  //findOneAndDelete
  db.collection('Todos')
    .findOneAndDelete({_id:new ObjectID("582364b95247bb9f22fa75fd")})
    .then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
    });


  db.close();
});
