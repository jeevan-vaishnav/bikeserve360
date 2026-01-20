module.exports = {
    group: {
        prefix: '/pages'
    },
    // pages/about/
    routes: [
        {
            method: 'get',
            path: "/",
            handler: (req, res) => {
                res.send("Home")
            }
        },
        {
            method: 'get',
            path: "/about",
            handler: (req, res) => {
                res.send("About Page")
            }
        }
    ]
}