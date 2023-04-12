import { string } from "joi";
import mongoose from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
},
{ timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);