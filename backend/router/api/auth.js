const AuthController = require("../../app/controllers/api/auth-controller")
const { validate } = require('../../app/middleware/validate')
// const { login, register  = require("../../app/validators/auth")
// const loginRules = require('../../app/validators/auth/login')
// const registerRules = require('../../app/validators/auth/register')
const validationsRules = require('../../app/validators/auth')

module.exports = {
    group: {
        prefix: "/auth"
    },
    routes: [
        {
            method: 'post',
            path: "/login",
            middleware: [validationsRules.login, validate],
            handler: AuthController.login
        },
        {
            method: "post",
            path: "/register",
            middleware: [validationsRules.register, validate],
            handler: AuthController.register
        }
    ]
}