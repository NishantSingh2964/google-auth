const jwt = require('jsonwebtoken')
exports.googleCallback =(req, res)=>{
    try {
       //generate token
       const token = jwt.sign({sub: req.user._id},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
       );

       res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax'
       });

       //redirect to user dashboard
       res.redirect(`${process.env.UI_URL}/success-login?access_token=${token}`)

    } catch (error) {
       console.error('Error during google callback', error) 
       res.status(500).json({message: 'Internal Server Error during login'})
    }
}

exports.getUser = (req, res)=>{
    try {
        if(!req.user){
            res.status(401).json({message: 'User not authenticated'})
        }
        res.json({
            user: req.user
        })
    } catch (error) {
        console.error('Error during getUser', error)
        res.status(500).json({message: 'Internal server error'})
        
    }
}