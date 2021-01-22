const check = require('express-validator/check').check;

exports.signinValidation= [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password').not().isEmpty()
        
]