const { MongoClient } = require('mongodb');

var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://arshdeep56:qwerty123@cluster0.q9yvb.mongodb.net/?retryWrites=true&w=majority";
var client=new mongo(url, {useNewUrlParser:true});

client.connect(function(err,db){
    if(err) throw err;
    var dbo=db.db("portfolio");
  
	var myobj1={
		name:"Arshdeep Singh",
		email:"sjagjit@gmail.com",
    username:"admin",
    password:"123"
	};
	
    var myobj2 = [
		{name:"John Doe",number:"4784467575",email:"john.doe@gmail.com"},
    {name:"Eric Miller",number:"4379917867",email:"milleric@hotmail.com"},
    {name:"James Fox",number:"4379425267",email:"foxjamie@hotmail.com"},
    {name:"Dave",number:"11523917867",email:"daviddawn@yahoo.com"}
	];
	
		dbo.collection("user_accounts").insert(myobj1, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
		
      dbo.collection("contact_list").insert(myobj2, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
});