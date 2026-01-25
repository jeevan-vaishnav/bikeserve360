const InvalidCredentialException = require("../../exceptions/invalid-credential-exception")
const UserRepository = require('../../repositories/user-repository')
const AuthServices = require("../../services/auth.services")

class AuthController {

    async login(req, res) {
        // console.log(req.body)
        const { email, password } = req.body

        const user = await UserRepository.findByEmail(email)

        // if (!user) throw new InvalidCredentialException()

        if (!await AuthServices.isPasswordAMatch(password, user.password))
            throw new InvalidCredentialException()

        console.log("Access Token")
        const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }
        const tokens = await AuthServices.generateTokens(payload)
        console.log(tokens)
        // this is line is helping to generate crypto key 
        // const key = require('crypto').randomBytes(64).toString('hex')
        // console.log(accessToken)
        res.send({ user, ...tokens })
    }

    async register(req, res) {
        res.send("Register")
    }
}

module.exports = new AuthController