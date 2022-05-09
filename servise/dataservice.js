const db = require('./db')

const register = (uname, userid, pswd) => {
    //asynchronous

    return db.User.findOne({ userid })
        .then(user => {
            //   console.log(user);
            if (user) {
                return {
                    statusCode: 422,
                    status: false,
                    message: "already exist!!! please log in..."
                }
            }
            else {
                const newUser = new db.User({
                    uname,
                    userid,
                    pswd,

                    eventForm: []
                })
                newUser.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "register successfully"
                }
            }
        })
}



  //login
  const login=(userid,pswd)=>{
    //asynchronous
    return db.User.findOne({userid,pswd})
    .then(user=>{
      if(user){
      currentAcno=userid
      currentUname=user.uname
      

        
  
        return{
        statusCode:200,
        status:true,
        message:"successfully log in",
        currentAcno,
        currentUname,
        // token
        }
      }
      else{
        return {
          statusCode:422,
          status:false,
          message:"incorrect password/account number"
        }
      }
  
    })
      
  }
//add event


const addEvent=(userid,date,description)=>{
  return db.User.findOne({userid})
  .then(user=>{
    if(user)
    {
      user.eventForm.push({
        date,description
      })
      user.save()
        return{
          statusCode:200,
          status:true,
          message:"event added successfully"
        }
      
    }
    else{
      return{
        statusCode:422,
        status:false,
        message:"user doesnot exist"
      }
    
    }
  })
}





//viewEVENT

  const viewEvent=(userid)=>{
    //asynchronous 
    return db.User.findOne({userid})
    .then(user=>{
      if(user){
        return{
          statusCode:200,
          status:true,
          eventForm:user.eventForm
      }}
      else{
        return{
          statusCode:422,
          status:false,
          message:"user does not exist"
        }
      }
    })}
module.exports={
    register,login,addEvent,viewEvent
}

