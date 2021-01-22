const check = require('express-validator/check').check;

exports.registerValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password')
    .not().isEmpty()
    .isLength({ min: 4, max:16 })
    .withMessage('Password must be between 4 to 16 characters')
    .custom(async (confirmPassword, {req}) => { 
            const password = req.body.password 
        
            // If password and confirm password not same 
            // don't allow to sign up and throw error 
            if(password !== confirmPassword){ 
              throw new Error('Passwords must be same') 
            } 
    }), 
    
]