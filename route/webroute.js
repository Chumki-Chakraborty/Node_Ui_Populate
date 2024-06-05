const express=require('express')
const { homepage, Adduser, Addmovie, Addreview, Post_movie, PostUser, PostReview, EditReview, UpdateReview, DeleteReview } = require('../controler/webcontroller')

const webroute=express.Router()

webroute.get('/',homepage)
webroute.get('/adduser',Adduser)
webroute.get('/addmovie',Addmovie)
webroute.get('/addreview',Addreview)
// ------------------------------------------//
webroute.post('/post/movie',Post_movie)
webroute.post('/post/user',PostUser)
webroute.post('/post/review',PostReview)
webroute.get('/edit/review/:id',EditReview)
webroute.post('/update/review/:id',UpdateReview)
webroute.get('/delete/review/:id',DeleteReview)
module.exports=webroute