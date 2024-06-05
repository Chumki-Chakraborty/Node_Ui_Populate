const mongoose=require('mongoose')

const schema=mongoose.Schema

const reviewschema=new schema({
    username:{
        type:schema.Types.ObjectId,
        ref:'user'
    },
    moviename:{
        type:schema.Types.ObjectId,
        ref:'movie'
    },
    review:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:1
    }
})

const reviewmodel=mongoose.model('review',reviewschema)
module.exports=reviewmodel