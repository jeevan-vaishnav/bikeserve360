
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { appKey, tokenExpiresIn } = require("../../config/app")

class AuthServices {

    async isPasswordAMatch(attempted, original) {
        return await bcrypt.compare(attempted, original)
    }

    async generateToken(payload) {
        return jwt.sign(payload, appKey, { expiresIn: tokenExpiresIn })
    }
}

module.exports = new AuthServices