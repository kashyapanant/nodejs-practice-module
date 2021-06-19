const passport = require('passport');
const {Strategy} = require('passport-local');
const { MongoClient } = require('mongodb');

module.exports = function localStrategy(){
    passport.use(
        new Strategy(
            {
                usernameField: 'username',
                passwordField: 'password',

            },
            (username, password, done) =>{
                const uri = 
                'mongodb+srv://mongoUser:mongoPassword@cluster0.r9png.mongodb.net?retryWrites=true&w=majority'
                const dbName= 'bagginsdb';
                (async function validateUser(){
                    let client;
        try{
            client = await MongoClient.connect(uri);
            const db = client.db(dbName);
            const user = await db.collection('users').findOne({username});
           if(user && user.password === password){
               done(null, user);
           }else{
               done(null, false);
           }
        }catch(e){
            //console.error(e);
            done(e, false);
        }client.close();
        }());
                
                  
                //const user = {username, password, name:'DummyUser'};
                //done(null, user);
            }
        )
    );
};