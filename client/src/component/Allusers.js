import { Table, TableRow,TableHead,TableCell, TableContainer,Paper,TableBody,styled,Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser, getUsers } from '../serviceApi/Api'
import { Link } from 'react-router-dom';

//css

const StyleTable = styled(Table)`
width:90%;
margin:30px auto 20px auto;
`
const Trow = styled(TableRow)`
background:#000000;
&>th{
  color:white;
  font-size:18px;
}
`
const Tbody = styled(TableRow)`
&>td{
  font-size:16px
}
`
const Allusers = () => {
const [user,setUser] = useState([])


  useEffect(()=>{
    getAllusers()
  },[]); 

  const getAllusers = async ()=>{
  let response =  await getUsers();
  console.log(response.data);
  setUser(response.data.reverse())
  }

  // delete user
  const deleteData = async(id)=>{
    await deleteUser(id)
    getAllusers()
  }
  return (
    
     <TableContainer component={Paper}>
      <StyleTable aria-label="simple table">
      <TableHead >
      <Trow>
      <TableCell align="center">ID</TableCell>
      <TableCell align="center">Name</TableCell>
      <TableCell align="center">Username</TableCell>
      <TableCell align="center">Email</TableCell>
      <TableCell align="center">Phone</TableCell>
      <TableCell align="center">Action</TableCell>
      </Trow>
      </TableHead>
      <TableBody>
      {user.map((item,index)=>{
        return(
          <Tbody key={index}>
        <TableCell align="center">{item._id}</TableCell>
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">{item.username}</TableCell>
        <TableCell align="center">{item.usermail}</TableCell>
        <TableCell align="center">{item.userphone}</TableCell>
        <TableCell align="center">
        <Button variant="outlined" color="secondary" sx={{mr:1}} component={Link} to={`/edituser/${item._id}`}>Edit</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={()=>deleteData(item._id)}>
        Delete
      </Button>
        </TableCell>
        </Tbody>
        )
      })  
      }
      </TableBody>
      </StyleTable>
      </TableContainer>
    
  )
}

export default Allusers

