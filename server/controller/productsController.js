module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_products().then(products => {
            res.status(200).send(products)
        }).catch(err => console.log('error in getProducts', err))
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, description, img} = req.body;
        db.create_product([name, price, description, img]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log('error in createProduct', err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.query;
        db.delete_product(id).then(res => {
            res.status(200).send(res)
        }).catch(err => console.log('error in deleteProduct', err))
    }
}