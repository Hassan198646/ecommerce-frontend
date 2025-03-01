import Product from "../models/Product.js";

const productController = {

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
           res.status(500).json({error:error.message})
        }

    },
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({error:error.message});
        }

    },
    createProduct: async (req, res) => {


        try {
            const { category, name, price, description, stock } = req.body;

            if (req.file) {
                const image = { fileName: req.file.filename, path: req.file.path };
            }

            const newProduct = new Product({ category, name, image, price, description, stock });
            await newProduct.save();
            res.status(201).json(newProduct);

        } catch (error) {
            
            res.status(400).json({error:error.message});
            
        }


    },

    updateProduct: async (req, res) => {
        try{
            let { id } = req.params;
            if (req.file) {
                req.body.image = { fileName: req.file.fileName, path: req.file.path };
            }
    
            const product = await Product.findByIdAndUpdate(id, { ...req.body },{new:true});
            res.status(200).json(product);
        }catch(error){
            res.status(500).json({error:error.message});
        }
 
        

    },
    deleteProduct: async (req, res) => {
        try{
            let { id } = req.params;
            let deletedProduct = await Product.findByIdAndDelete(id);
            res.status(200).json(deletedProduct);
        }catch(error){
            res.status(500).json({error:error.message});
        }

    }
};

export default productController;
