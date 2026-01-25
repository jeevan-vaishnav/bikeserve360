
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const { appKey, tokenExpiresIn } = require("../../config/app")
const Tokenizer = require("../modules/tokenizer")
const { RefreshToken } = require('../models')
class AuthServices {

    async isPasswordAMatch(attempted, original) {
        return await bcrypt.compare(attempted, original)
    }

    async generateTokens(payload) {
        // return jwt.sign(payload, appKey, { expiresIn: tokenExpiresIn })

        const refreshToken = await Tokenizer.generateRefreshToken()
        await RefreshToken.create({
            token: refreshToken,
            userId: payload.id
        })

        return {
            accessToken: await Tokenizer.generateAccessToken(payload),
            refreshToken
        }
    }
}

module.exports = new AuthServices