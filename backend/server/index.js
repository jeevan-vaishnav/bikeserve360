const express = require('express')

class Server {
    constructor(port) {
        this.port = port
        this.app = express()
    }

    start() {
        this._setupRoutes()
        this._listen()
    }

    _setupRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Home Page")
        })

        this.app.get("/services", (req, res) => {
            res.send("Services Page")
        })
    }

    _listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

module.exports = Server