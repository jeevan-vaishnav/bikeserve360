const UnAuthenticatedException = require("../exceptions/unauthenticated-exception")
const jwt = require('jsonwebtoken')
const appConfig = require("../../config/app")
const UserRepository = require("../repositories/user-repository")

exports.auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return next(new UnAuthenticatedException());

    await jwt.verify(token, appConfig.appKey, async (err, user) => {
        if (err) return next(new UnAuthenticatedException())

        try {
            req.user = await UserRepository.findById(user.id)
            next()
        } catch (e) {
            return res.status(e.status || 401).send({ message: "User not found!" })
        }

    })

}