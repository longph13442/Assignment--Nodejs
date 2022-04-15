import mongoose,{Schema} from "mongoose";
import {createHmac} from "crypto"
const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
},{timestamps: true})
userSchema.methods={
    checkPassword(password){
       return this.password == this.encryptpassword(password);
    },
    encryptpassword(password){
        if(!password) return
        try {
            return createHmac("sha256","long").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
       
    }
}
userSchema.pre("save", function (next){
    this.password = this.encryptpassword(this.password);
    next();
})
export default mongoose.model("User", userSchema);