const MovieModel=require('../model/moviemodel')
const UserModel=require('../model/usermodel')
const ReviewModel=require('../model/reviewmodel')

const homepage=async(req,res)=>{
    try{
        const reviewdata=await ReviewModel.find().populate('username').populate('moviename')
        if(reviewdata){
            res.render('home',{
                title:'home page',
                displaydata:reviewdata
            })
        }
    }catch(error){
        console.log(`error to get data in home page`);
    }
    // res.render('home',{
    //     title:'home page'
    // })
}
const Addmovie=(req,res)=>{
    res.render('addmovie',{
        title:'add movie page'
    })
}
const Adduser=async(req,res)=>{
    try{
        const moviename=await MovieModel.find()
        if(moviename){
            res.render('adduser',{
                title:"add user page",
                data:moviename
            }) 
        }
    }catch(error){
        console.log(`movie name not found`);
    }
    // res.render('adduser',{
    //     title:"add user page"
    // })
}
const Addreview=async(req,res)=>{
    try{
        const Userdata=await UserModel.find()
        const moviedata=await MovieModel.find()
        res.render('addreview',{
            title:'add review page',
            userdata:Userdata,
            Moviedata:moviedata
        })

    }catch(error){
        console.log(`can't found data in review page `);
    }
    // res.render('addreview',{
    //     title:'add review page'
    // })
}
// Post_movie
const Post_movie=async(req,res)=>{
    try{
        const{movie_name,actor,director}=req.body
        const postmovie=new MovieModel({
            movie_name,actor,director
        })
        const savemovie=await postmovie.save()
        if(savemovie){
            console.log(`movie data added done`);
            res.redirect('/');
           
        }
    }catch(error){
        console.log(`error to add movie data`);
        res.redirect('/addmovie')

    }
}
// --------------------------PostUser-------------------------//
const PostUser=async(req,res)=>{
    try{
        const{name,email,movie}=req.body
        const postuser=new UserModel({
            name,email,movie
        })
        const response=await postuser.save()
        if(response){
            console.log(`user data added sucessfully`);
            res.redirect('/')
        }
    }catch(error){
        console.log(`error to add user data`);
        res.redirect('/adduser')
    }
}
// -----------------------------PostReview------------------------//
const PostReview=async(req,res)=>{
    try{
       const{username,moviename,review}=req.body
       const post_review=new ReviewModel({
        username,moviename,review 
       })
       const response=await post_review.save()
       if(response){
        console.log(`review added sucessfully`);
        res.redirect('/')
       }
    }catch(error){
        console.log(`error  to add review`);
        res.redirect('/addreview')
    }
}
// ------------------------------EditReview--------------------//
const EditReview=async(req,res)=>{
    try{
        const id=req.params.id
        const Userdata=await UserModel.find()
        const moviedata=await MovieModel.find()
        const editreview=await ReviewModel.findById(id)
        if(editreview){
            res.render('editpage',{
                title:"edit review page",
                edit:editreview,
                userdata:Userdata,
                Moviedata:moviedata
            })
        }
    }catch(error){
        console.log(`error to edit review`);
    }
}
// -------------------------UpdateReview-------------------------//
const UpdateReview=async(req,res)=>{
    try{
        const{username,moviename,review}=req.body
        const id=req.params.id
        
        const updatereview=await ReviewModel.findByIdAndUpdate(id,{
            username,moviename,review
        },{new:true})
        if(updatereview){
            console.log(`review data has been updated`);
            res.redirect('/')
        }
    }catch(error){
        console.log(`error to update review`);
    }
}
// ----------------------------DeleteReview--------------------//
const DeleteReview=async(req,res)=>{
    try{
        const _id=req.params.id
        const delete_review=await ReviewModel.findByIdAndDelete(_id)
        if(delete_review){
            console.log(`review data has been deleted`);
            res.redirect('/')
        }
    }catch(error){
        console.log(`error to delete review data`);
    }
}
module.exports={
    homepage,
    Adduser,
    Addmovie,
    Addreview,
    Post_movie,
    PostUser,
    PostReview,
    EditReview,
    UpdateReview,
    DeleteReview
}