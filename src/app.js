import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bookRouter from "./router/book"
import userRouter from "./router/user"

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
// run router
app.use("/api", bookRouter)
app.use("/api", userRouter)
// connnect database
mongoose.connect('mongodb://127.0.0.1:27017/baithi')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})