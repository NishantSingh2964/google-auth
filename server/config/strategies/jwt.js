const {Strategy: jwtStrategy} = require('passport-jwt')
const User = require('../../model/User');

const CookieExtracter = req => req.cookies?.token;

module.exports = (passport)=>{
    passport.use(new jwtStrategy({
        jwtFromRequest: CookieExtracter,
        secretOrKey:process.env.JWT_SECRET
    }, async(payload, done)=>{
        try{
          const user = await User.findById(payload.sub);
          if(user){
            done(null, user)
          }else{
            done(null, false);
          }
        }catch(error){
            done(error, false) 
        }
    }))
}