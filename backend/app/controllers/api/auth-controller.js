const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const InvalidCredentialException = require("../../exceptions/invalid-credential-exception")
const { appKey, tokenExpiresIn } = require("../../../config/app")
const UserRepository = require('../../repositories/user-repository')

class AuthController {

    async login(req, res) {
        // console.log(req.body)
        const { email, password } = req.body

        const user = await UserRepository.findByEmail(email)

        // if (!user) throw new InvalidCredentialException()

        if (!await bcrypt.compare(password, user.password))
            throw new InvalidCredentialException()

        console.log("Access Token")
        const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }
        const accessToken = jwt.sign(payload, appKey, { expiresIn: tokenExpiresIn })
        // this is line is helping to generate crypto key 
        // const key = require('crypto').randomBytes(64).toString('hex')
        // console.log(accessToken)

        res.send({ user, ...{ accessToken } })
    }

    async register(req, res) {
        res.send("Register")
    }
}

module.exports = new AuthController