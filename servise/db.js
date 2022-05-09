const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/reminderApp",{
    useNewUrlParser:true
})

const User=mongoose.model('User',{
    uname:String,
    userid:String,
    pswd:String,
    eventForm:[]
})


module.exports={
    User
}