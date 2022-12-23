import mongoose from "mongoose";

  const Connection = async(username,password)=>{
      const URL = `mongodb+srv://${username}:${password}@cluster0.qnrpyar.mongodb.net/merncrud2?retryWrites=true&w=majority`
      try{
       await  mongoose.connect(URL,{
              useNewUrlParser:true,
              useUnifiedTopology:true     
          })
          console.log("Database conected successfully");    
      }catch(error){
          console.log(`Error while connection database`,error);
      }
  }
  export default Connection