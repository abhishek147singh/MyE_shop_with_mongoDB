import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    noReviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    discreption: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    img: {
        data: Buffer,
        contentType: String,
    },
} , 
{
    timestamps : true
});

const Product = mongoose.model('Product' , productSchema );
export default Product;
