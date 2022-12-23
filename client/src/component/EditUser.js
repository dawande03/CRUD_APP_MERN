import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React, { useEffect, useState, } from 'react'
import { editData, getUser } from '../serviceApi/Api'
import { useNavigate, useParams } from 'react-router-dom'


//css
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&> div{
    margin-top: 20px;
}
`
const EditUser = () => {
    let navigate = useNavigate()
    const { id } = useParams();

    const [inputData, setInputdata] = useState({
        name: "",
        username: "",
        userphone: "",
        usermail: ""
    })
   // const { name, username, usermail, userphone } = inputData;

    useEffect(() => {
        loaduser()
    },[]);

    const loaduser = async () => {
        const response = await getUser(id);
        setInputdata(response.data);
    }

    const inputHandler = (event) => {

        const { name, value } = event.target;
        setInputdata({ ...inputData, [name]: value });
    }

    const editUserinput = async () => {
        await editData(inputData,id) // calling api addUser
        console.log(inputData);
        navigate("/alluser")
    }
    return (

        <Container>
            <Typography variant='h4'>Edit user</Typography>
        
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' name='name' onChange={inputHandler} value={inputData.name} />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input type='text' name='username' onChange={inputHandler} value={inputData.username} />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='email' name='usermail' onChange={inputHandler} value={inputData.usermail} />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input type='number' name="userphone" onChange={inputHandler} value={inputData.userphone} />
            </FormControl>
            <FormControl>
                <Button onClick={editUserinput} variant="contained">EDIT USER</Button>
            </FormControl>
        </Container>

    )
}

export default EditUser
