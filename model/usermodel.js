const mongoose=require('mongoose')

const schema=mongoose.Schema

const userschema=new schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    movie:{
        type:schema.Types.ObjectId,
        ref:'movie'
    },
    status:{
        type:String,
        default:1 
    }

})

const Usermodel=mongoose.model('user',userschema)
module.exports=Usermodel