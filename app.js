// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const connectionUrl = 'mongodb://127.0.0.1:27017';
// const dbName = "proj-2";

// MongoClient.connect(connectionUrl, (error, res1) => {
//     if (error) {
//         return console.log("An error has occurred", error);
//     }
//     console.log("Connection successful");
//     const db = res1.db(dbName);

//     db.collection('users').insertOne({
//         name:"Basma",
//         age:19,

//     },//as tne Options parameter is optional,we will skip it and handel the callback
//     (error,data)=>{
//         if(error){
//             console.log("un able to insert")
//         }
//         console.log(data.insertedId)
//     })

//     db.collection('users').insertOne({
//         name:"Ruaa",
//         age:19,

//     },
//     (error,data)=>{
//         if(error){
//             console.log("un able to insert")
//         }
//         console.log(data.insertedId)
//     })

//     db.collection('users').insertMany([
//         {
//          name:"Amany",
//          age:27,
//         },
//        {
//         name:"Basma",
//         age:27, 
//       },
//       {
//         name:"Eman",
//         age:27,
//       },
//       {
//         name:"Nada",
//         age:27,
//       },
//       {
//         name:"Ruqaia",
//         age:27,
//       },
//       {
//         name:"Body",
//         age:18,
//       },
//       {
//         name:"Aser",
//         age:10,
//       },
//       {
//         name:"Mohammed",
//         age:2,
//       },
//       {
//         name:"Nour",
//         age:7,
//       },
//       {
//         name:"Azza",
//         age:6,
//       }
//     ],(error,data)=>{
//         if(error){
//             console.log("un able to insert data")
//         }
//         console.log(data.insertedCount)   
//     })

//     db.collection("users").find({age:27}).limit(3).toArray((error,user)=>{
//         if(error){
//             console.log("un able to find users with this age")
//         }
//         console.log(user)
//     })

//     db.collection("users").updateOne({_id: mongodb.ObjectId("66c1ee403d5ea4a7464a1846")}
//     ,{
//         $set:{name:"farah"},
//         $inc:{age:4}
//     }) 

//     db.collection("users").updateOne({_id: mongodb.ObjectId("66c1ee403d5ea4a7464a1847")}
//     ,{
//         $set:{name:"Mona"},
//         $inc:{age:4}
//     }) 

//     db.collection("users").updateOne({_id: mongodb.ObjectId("66c1ee403d5ea4a7464a1848")}
//     ,{
//         $set:{name:"Engy"},
//         $inc:{age:4}
//     }) 

//     db.collection("users").updateOne({_id:mongodb.ObjectId("66c1ee403d5ea4a7464a1849")}
//     ,{
//         $set:{name:"fares"},
//         $inc:{age:4}
//     }) 

//     db.collection("users").updateMany({},{$inc:{age:3}})

//     db.collection("users").deleteMany({age:41})
//     .then((data1)=>console.log(data1.modifiedCount))
//     .catch((error)=>console.log(error))

// })
//////////////////////////////////


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = "proj-2";

MongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log("An error has occurred", error);
    }
    console.log("Connection successful");
    const db = res1.db(dbName);

    // Insertions
    db.collection('users').insertOne({
        name: "Basma",
        age: 19,
    }, (error, data) => {
        if (error) {
            return console.log("Unable to insert", error);
        }
        console.log(data.insertedId);
    });

    db.collection('users').insertOne({
        name: "Ruaa",
        age: 19,
    }, (error, data) => {
        if (error) {
            return console.log("Unable to insert", error);
        }
        console.log(data.insertedId);
    });

    db.collection('users').insertMany([
        { name: "Amany", age: 27 },
        { name: "Basma", age: 27 },
        { name: "Eman", age: 27 },
        { name: "Nada", age: 27 },
        { name: "Ruqaia", age: 27 },
        { name: "Body", age: 18 },
        { name: "Aser", age: 10 },
        { name: "Mohammed", age: 2 },
        { name: "Nour", age: 7 },
        { name: "Azza", age: 6 },
    ], (error, data) => {
        if (error) {
            return console.log("Unable to insert data", error);
        }
        console.log(data.insertedCount);
    });

    // Find operation
    db.collection("users").find({ age: 27 }).limit(3).toArray((error, user) => {
        if (error) {
            return console.log("Unable to find users with this age", error);
        }
        console.log(user);
    });

    // Update operations
    db.collection("users").updateOne({ _id: mongodb.ObjectId("66c1ee403d5ea4a7464a1846") }, {
        $set: { name: "farah" },
        $inc: { age: 4 }
    });

    db.collection("users").updateOne({ _id: mongodb.ObjectId("66c1ee403d5ea4a7464a1847") }, {
        $set: { name: "Mona" },
        $inc: { age: 4 }
    });

    db.collection("users").updateOne({ _id: mongodb.ObjectId("66c1ee403d5ea4a7464a1848") }, {
        $set: { name: "Engy" },
        $inc: { age: 4 }
    });

    db.collection("users").updateOne({ _id: mongodb.ObjectId("66c1ee403d5ea4a7464a1849") }, {
        $set: { name: "fares" },
        $inc: { age: 4 }
    });

    // Update all users by incrementing their age by 3
    db.collection("users").updateMany({}, { $inc: { age: 10 } });

    // Delete users with age 41
    db.collection("users").deleteMany({ age: 41 })
        .then((data1) => console.log(data1.deletedCount))
        .catch((error) => console.log(error));
});
