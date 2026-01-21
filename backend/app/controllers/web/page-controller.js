// backend/app/controllers/web/page-controller.js
class PageController {
    home(req, res) {
        throw new Error("An error happend")
        res.send("Home Page with Controller")
    }
    about(req, res) {
        res.send("About Page with Controller")
    }
}

module.exports = new PageController // only one instance