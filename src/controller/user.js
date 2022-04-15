import user from "../model/user"
export const signup= async(req,res) =>{
    const {name,email,password} = req.body;
    try {
        const check = await user.findOne({email}).exec();
        if(check){
            return res.status(400).json({
                message:" Email đã tồn tại !"
            })
        }
        const User = await new user(req.body).save();
        return res.json({
            message: "Sign up is Success !",
            Users:{
                _id: User.id,
                name: User.name,
                email: User.email
            }
        })
    } catch (error) {
        return res.status(400).json({
            message:" Action is fail !"
        })
    }
}
export const signin= async(req,res) =>{
    const {email,password} = req.body;
    try {
        const check = await user.findOne({email}).exec();
        if(!check){
            return res.status(400).json({
                message:" Email không tồn tại !"
            })
        }
        if(!check.checkPassword(password)){
            return res.status(400).json({
                message:" mật khẩu không đúng !"
            })
        }
        return res.json({
            message: "Sign in is Success !",
            Users:{
                _id: check.id,
                name: check.name,
                email: check.email
            }
        })
    } catch (error) {
        return res.status(400).json({
            message:" Action is fail !"
        })
    }
}