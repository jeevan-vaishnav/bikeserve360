const { body } = require('express-validator')
module.exports = (() => {
    return [
        body('firstName').notEmpty().withMessage("First Name is required!"),
        body('lastName').notEmpty().withMessage("Last Name is required!"),
        body('email').isEmail().withMessage("Email need to be valid address!"),
        body('password').notEmpty().withMessage("Password cannot be empty"),
    ]
})()