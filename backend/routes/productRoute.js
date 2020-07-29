import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

// router.get('/', async (req, res) => {
//   const products = await Product.find({});
//   res.send(products);
// });

router.get('/', async (req, res) => {
  const category_id = req.query.category_id ? { category_id: req.query.category_id } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await Product.find({ ...category_id, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.product_name = req.body.name;
    product.product_price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category_id = req.body.category;
    product.countInStock = req.body.countInStock;
    product.product_description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

router.post('/', async (req, res) => {
  const product = new Product({
    product_name: req.body.name,
    product_price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category_id: req.body.category,
    countInStock: req.body.countInStock,
    product_description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'Product Created', data: newProduct });
  }
  return res.status(500).send({ message: 'Error is creating product' });
})

router.delete('/:id', async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

export default router;
