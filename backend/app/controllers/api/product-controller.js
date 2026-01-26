class ProductController {
    async index(req, res) {
        const user = req.user
        return res.send('Product index!')
    }
}

module.exports = new ProductController();