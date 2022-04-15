import book from "../model/book"
export const list =async (req,res) =>{
    try {
        const Book= await book.find().exec();
       return res.json(Book);
    } catch (error) {
       return res.status(400).json({
           message:" Action is fail !"
       })
    }
}
export const read = async(req,res) =>{
    try {
        const Book= await book.findOne({_id: req.params.id}).exec();
       return res.json(Book);
    } catch (error) {
       return res.status(400).json({
           message:" Action is fail !"
       })
    }
}
export const remove = async (req,res) =>{
    try {
        const Book= await book.findOneAndDelete({_id: req.params.id}).exec();
       return res.json(Book);
    } catch (error) {
       return res.status(400).json({
           message:" Action is fail !"
       })
    }
}
export const creat =async (req,res) =>{
    try {
        const Book= await new book(req.body).save();
       return res.json(Book);
    } catch (error) {
       return res.status(400).json({
           message:" Action is fail !"
       })
    }
}
export const update = async(req,res) =>{
    try {
        const Book= await book.findOneAndUpdate({_id: req.params.id}, req.body).exec();
       return res.json(Book);
    } catch (error) {
       return res.status(400).json({
           message:" Action is fail !"
       })
    }
}