const express = require('express');
const { MongoClient, objectID } = require('mongodb');
const passport = require('passport');
//const passport = require('../config/passport');

const authRouter = express.Router();

authRouter.route('/signup').post((req, res) => {
    const {username, password} = req.body;

    const uri = 
    'mongodb+srv://mongoUser:mongoPassword@cluster0.r9png.mongodb.net?retryWrites=true&w=majority'
    const dbName= 'bagginsdb';

    (async function addUser(){
        let client;
        try{
            client = await MongoClient.connect(uri);
            const db = client.db(dbName);
            const user = {username, password};
            const results = db.collection('users').insertOne(user);
            console.log(results);
            req.login((await results).ops[0], () =>{
                res.redirect('/auth/profile');
            });
        
            
        }catch(e){
            console.error(e);
        }
        client.close();
    }())
    
});

authRouter.route('/profile').get((req, res) =>{
    res.json(req.user);
});

authRouter.route('/signin').get((req,res) =>{
    res.render('signin');
}).post(passport.authenticate('local',{
    successRedirect: '/auth/profile',
    failureMessage: '/',
}));
 
module.exports = authRouter;