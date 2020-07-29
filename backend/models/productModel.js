import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    //rating
    rating: { type: Number, default: 0 },
    //comments
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  product_price: { type: Number, default: 0, required: true },
  category_id: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  product_description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;