const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../views', 'index.html'));
});


// router.post('/authenticate', passport.authenticate('local') , (req, res)  => {
//         //auth ok
//     const id = 1; //esse id viria do banco de dados
//     const token = jwt.sign({ id }, process.env.SECRET, {
//         expiresIn: 300 // expires in 5min
//     });
//     return res.json({ auth: true, token: token });
      
//     //res.status(500).json({message: 'Login inválido!'});
// })


router.post('/authenticate', passport.authenticate('local') , (req, res)  => {
    const userId = res.req.user.id;
    const userEmail = res.req.user.email;
    const userName = res.req.user.nome;

    const token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: '100 days' // expires in 5min
    });

    const user = {
        "id": userId,
        "email": userEmail,
        "nome": userName,
        "token": token
    }

    if(!res.req.user.liberado) return res.status(401).json(user);
    if(res.req.user.liberado) return res.status(200).json(user);

    return res.sendStatus(401);
});

function teste(e) {
    console.log(e.body);


    return passport.authenticate('local');
}

module.exports = router;