const PageController = require("../../app/controllers/web/page-controller")

module.exports = {
    group: {
        prefix: '/pages'
    },
    // pages/about/
    routes: [
        {
            method: 'get',
            path: "/",
            handler: PageController.home
        },
        {
            method: 'get',
            path: "/about",
            handler: PageController.about
        }
    ]
}