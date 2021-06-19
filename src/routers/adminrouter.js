const express = require('express')
const {MongoClient} = require('mongodb')
const samplejson = require('../data/sample.json')

const adminrouter = express.Router();

adminrouter.route('/').get((req, res) =>{
    const uri = 
    'mongodb+srv://mongoUser:mongoPassword@cluster0.r9png.mongodb.net?retryWrites=true&w=majority'
    const dbName= 'bagginsdb';
    // (async function mongo(){
    //     let client;
    //     try{
    //         client = await MongoClient.connect(uri);
    //         console.log(`connection established`);
    //         const db = client.db(dbName);
    //         console.log(`connecting to database ${dbName}`);
    //         const response = await db.collection('frodo').insertOne(samplejson);
    //         res.json(response);
    //     }catch(error){
    //         console.error(error);
    //     }
    //      client.close();
    // })();

    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(uri);
            console.log(`connection established`);
            const db = client.db(dbName);
            console.log(`connecting to database ${dbName}`);
            const response = await db.collection('frodo').find().toArray;
            res.json(response);
        }catch(error){
            console.error(error);
        }
        client.close();
    })();
});


module.exports = adminrouter;