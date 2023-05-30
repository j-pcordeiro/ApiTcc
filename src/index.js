const express = require("express");
const appSettingsRouter = require('./routes/appSettings');
const loginRouter = require('./Routes/users');
const usersRouter = require('./Routes/UsuariosRoutes');
const empreendimentosRouter = require('./routes/empreendimentos');
const loteamentosRouter = require('./routes/loteamentos');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const session = require('express-session');
const passport = require('passport');

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());

require('./helpers/authenticationHelper')(passport);
app.use(session({  
    secret: 'M9WFAezM#Q',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 30 * 60 * 1000
    }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use('/settings', verifyJWT, appSettingsRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/empreendimentos', verifyJWT, empreendimentosRouter);
app.use('/loteamentos', verifyJWT, loteamentosRouter);

app.use(express.static(path.join(__dirname, 'views')));
app.use('/admin/dashboard', authenticationMiddleware, express.static(path.resolve(__dirname, 'views')));

app.listen(process.env.PORT || port);
console.log('José Milton Imóveis - dev API porta %s', port);

function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }else {
        res.redirect('/');
    }
}

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.userId;
       // console.log('User id salvo na req emp ', req.userId);
        next();
    });
}