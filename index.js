const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const { request, response } = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session')


const app  = express();
const port = process.env.PORT;
const sessionsRouter = require('./src/routers/sessionsrouter');
const adminrouter = require('./src/routers/adminrouter');
const authRouter = require('./src/routers/authrouter');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: 'donttell'}));

require('./src/config/passport.js')(app);

app.get('/',(request, response) =>{
    response.render('index',{name: 'Kashyap'});
});

app.use('/session',sessionsRouter);
app.use('/admin',adminrouter);
app.use('/auth', authRouter);

app.listen(port, () =>{
    console.log(`Registered on port ${chalk.blue(port)}`)
});

app.set('views','./src/views');
app.set('view engine','ejs'); 
