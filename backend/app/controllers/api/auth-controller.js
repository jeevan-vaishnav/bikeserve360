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
        res.send({ user, ...tokens })
    }

    async register(req, res) {
        const { firstName, lastName, email, password } = req.body
        const data = { firstName, lastName, email, password }
        const user = await UserRepository.create(data);
        const tokens = await AuthServices.generateTokens(data)

        res.send({ user, ...tokens })
    }
}

module.exports = new AuthController