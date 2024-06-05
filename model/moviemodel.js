const mongoose=require('mongoose')

const schema=mongoose.Schema

const MovieSchema=new schema({
    movie_name:{
        type:String,
        required:[true,"movie is required"]
    },
    actor:{
        type:String,
        required:[true,"actor is required"]
    },
    director:{
        type:String,
        required:[true,"director is required"]
    },
    status:{
        type:String,
        default:1
    }
})
const MovieModel=mongoose.model('movie',MovieSchema)
module.exports=MovieModel