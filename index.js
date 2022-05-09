const express=require('express')

const dataservice=require('./servise/dataservice')

const app=express()

app.use(express.json())

const cors=require('cors')
const req=require('express/lib/request')
const res=require('express/lib/response')

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log("server started at port no:3000");
})


 //register API:
 app.post('/register',(req,res)=>{
    //asynchronous
    const result=dataservice.register(req.body.uname,req.body.userid,req.body.pswd)//fn calling 
  .then(result=>{
      res.status(result.statusCode).json(result)
  })
 })

   //login API:
   app.post('/login',(req,res)=>{
    dataservice.login(req.body.userid,req.body.pswd)//fn calling 
    .then(result=>{
        res.status(result.statusCode).json(result)

    })

})
//event

app.post('/addEvent',(req,res)=>{
    dataservice.addEvent(req.body.userid,req.body.date,req.body.description)//fn calling
    .then(result=>{
        res.status(result.statusCode).json(result)

    })

})


app.post('/viewEvent',(req,res)=>{
    dataservice.viewEvent(req.body.userid)//fn calling
    .then(result=>{
        res.status(result.statusCode).json(result)

    })

})