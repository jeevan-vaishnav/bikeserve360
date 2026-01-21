const { User } = require("../../models")

class AuthController {
    async login(req, res) {
        // console.log(req.body)
        const { email, password } = req.body

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) return res.status(403).send("Invalid login creditials!")


        if (password !== user.password) {
            // 403: Forbidden
            return res.status(403).send("Invalid login creditials!")
        }

        res.send(user)
    }

    async register(req, res) {
        res.send("Register")
    }
}

module.exports = new AuthController