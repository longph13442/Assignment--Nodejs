import mongoose,{Schema} from "mongoose";

const bookSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
},{timestamps:true})
export default mongoose.model("Book", bookSchema);