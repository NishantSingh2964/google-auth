const router = require('express').Router();
const passport = require('passport');
const authController = require('../controller/authController');

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { session: false }),
    authController.googleCallback
);

router.get('/user',
    passport.authenticate('jwt', { session: false }),
    authController.getUser
);

router.post('/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: true, sameSite: 'none', secure: true });
    res.status(200).json({ message: 'logged out successful' });
});

module.exports = router; 