const passport = require('passport');
const User = require('../../model/User');

const GoogleStratgy = require('passport-google-oauth20').Strategy;

module.exports = (passport) => {
    const PORT = process.env.PORT || 5000;
    passport.use(new GoogleStratgy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL || `http://localhost:${PORT}`}/auth/google/callback`
    }, async(accessToken, refreshToken, profile, done)=>{
        console.log(profile)
        try {
           const user = await User.findOneAndUpdate({
            googleId: profile?.id
           },

           {
            name: profile.displayName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value
           },

           {timestamps: true, new: true, upsert: true}
        
        );
        done(null, user) 
        } catch (error) {
           done(error, null) 
        }
    }))
}