import ProductManager from "./ProductManager.js";
import express from "express";

const app = express();

const path = './db-products.json' ;

const productManager = new ProductManager(path);

app.get('/products', async (req,res) => {
    try {
        let limit = req.query.limit 
    let productos = await productManager.getProducts();
    
    if(!limit) return res.send({productos});

    return res.send(productos.slice(0, limit));

    } catch (error) {
        
    }
} );

app.get('/products/:pid', async (req,res) => {
try {
    let id = req.params.pid
    return res.send(await productManager.getProductById(id))
} catch (error) {
    
}

} );

app.use(express.urlencoded({extended:true}));

app.listen(8080,()=>console.log('servidor corriendo'));
