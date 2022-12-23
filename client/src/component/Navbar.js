import React from 'react'
import {AppBar , Toolbar,styled} from "@mui/material";
import { NavLink } from 'react-router-dom';

// css
const Header = styled(AppBar)`
background: #111111
`
const Tab = styled(NavLink)`
font-size:18px;
margin-right:20px;
color:inherit;
text-decoration:none;
`

const Navbar = () => {
  return (
      <Header position="static">
        <Toolbar>
          <Tab to="/">Code for interview</Tab>
          <Tab to="/alluser">All users</Tab>
          <Tab to="/adduser">Add users</Tab>
        </Toolbar>
      </Header>
  )
}

export default Navbar
