        import Users from '../schema/user-schema.js'

export const addUser = async(req,res)=>{
const user = req.body;

const newUser = new Users(user);
console.log(user);

try{
await newUser.save();
res.status(202).json(newUser);  
}catch(error){
    res.status(409).json({message:error.message});
}
}

//get data from database

export const getUsers =async (req,res)=>{
try{
    const users  = await Users.find({})
    res.status(200).json(users)
}catch(error){
    res.status(404).json({message:error.message})
}
}

// for edit

export const getUser =async (req,res)=>{
try{
    console.log(req.params.id);
const users = await Users.findById({_id:req.params.id}) //const amit = Users.findById(req.params.id); 
res.status(200).json(users);
}catch(error){
 res.status(404).json({message:error.message})
}
}

// update  

export const editData = async(req,res)=>{
    const editUata =  req.body
    //const edituser = new Users(editUata);
     try{
         await Users.updateOne({_id:req.params.id},editUata)
         res.status(202).json( )
     }catch(error){
         res.status(404).json({message:error.message})
     }  
}

// delete

export const deleteUser = async (req,res)=>{
    try{
await Users.deleteOne({_id:req.params.id})
res.status(200).json({message:"user deleted successfully"})
    }catch(error){
        res.status(404).json({message:error.message})
    }
}