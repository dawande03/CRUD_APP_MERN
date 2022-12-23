import axios from "axios"

const URL = "http://localhost:4008";

export const addUser =async (data)=>{
    try{
      return  await axios.post(`${URL}/add`,data)
    }catch(error){ 
        console.log(`Error while calling add user api`,error);
    }
}

// get data from database

export const getUsers = async ()=>{
  try{
  return await axios.get(`${URL}/all`);
  }catch(error){
    console.log(`Error while calling data from database`,error);
  }
}

// get data for edit data

export const getUser = async(id)=>{
try{
return await axios.get(`${URL}/${id}`)
}catch(error){
  console.log(`Error while calling API for edit`,error);
}
}

// update data

export const editData = async (user,id)=>{
  try{
   return axios.put(`${URL}/${id}`,user);
  }catch(error){
    console.log(`Error while calling Edit api`,error);
  }
}

// delete user 

export const deleteUser = async(id)=>{
try{
  await axios.delete(`${URL}/${id}`);
}catch(error){
  console.log(`Error while calling delete api`,error);
}
}