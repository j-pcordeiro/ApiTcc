const LocalStrategy = require('passport-local').Strategy;
const encryptHelper = require('./encryptHelper');
const userModel = require('../moldes/UserModel')

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await userModel.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        email: 'email',
        password: 'password'
    },
       async (email, password, done) => {
            try {

                const user = await userModel.findByEmail(email);
    
                if (!user) { return done(null, false) }
    
                const isValid = await encryptHelper.compareSync(password, user.password);
 
                if (!isValid) return done(null, false)
                
                return done(null, user)
            } catch (err) {
   
                done(err, false);
            }
        }
    ));
} 