import { FormControl, FormGroup, Input, InputLabel, Typography,styled , Button} from '@mui/material'
import React, { useState } from 'react'
import { addUser } from '../serviceApi/Api'
import { useNavigate } from 'react-router-dom'
//css
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div{
    margin-top: 20px;
}
`
const Adduser = () => {
    let navigate = useNavigate()
    const [inputData,setInputdata] = useState({
        name:"",
        username:"",
        userphone:"",
        usermail:""
    })

    const inputHandler = (event)=>{
    
        const {name,value} = event.target;
        setInputdata({...inputData,[name]:value});
    }

    const addUserinput = async ()=>{
       await addUser(inputData)
       navigate("/alluser")
    }
  return (
    
      <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={inputHandler}/>
        </FormControl>
      
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name='username' onChange={inputHandler}/>
        </FormControl>
      
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='usermail' onChange={inputHandler}/>
        </FormControl>
      
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name="userphone" onChange={inputHandler}/>
        </FormControl>
        <FormControl>
        <Button onClick={addUserinput} variant="contained">Add</Button>
        </FormControl>
      </Container>
    
  )
}

export default Adduser
