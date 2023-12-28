import { productManager } from "../services/factory.js";

const authMiddleWareController = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/users/login');
    }
}

const getProductController = async (req, res) => {
    const { page, query, sort  } = req.query;
        const productos = await productManager.getProductsPipeline( 12, page, query, sort );
        res.render('product', {productos: productos, user: req.session.user });
}

const getProductByCat =  async (req, res) => {
    const { query  } = req.query;
    let productos = await productManager.getProductsPipeline( query)
    // result.prevLink = result.hasPrevPage ? `http://localhost:8080/?page=${result.prevPage}` : '';
    // result.nextLink = result.hasNextPage ? `http://localhost:8080/?page=${result.nextPage}` : '';
    // result.isValid = !(page <= 0 || page > result.totalPages)
    res.render('product', {products: productos, user:req.session.user});
}

export { getProductController, authMiddleWareController, getProductByCat }