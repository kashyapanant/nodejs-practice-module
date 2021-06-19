const express = require('express');

const sessionsRouter = express.Router();

sessionsRouter.use((req, res, next) =>{
    if(req.user){
        next();
    }else{
        res.redirect('/auth/signin');
    }
});

sessionsRouter.route('/').get((request,response) =>{
    response.render('index',{name: 'to Sessions'});
});

sessionsRouter.route('/:id').get((request,response) =>{
    let id = request.params.id;
    response.render('index',{name: id});
});

module.exports = sessionsRouter;