import { AppBar, Toolbar, styled } from '@mui/material'

import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
          background:#111111
`

const Taps = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none


`

const NavBar = () => {

     return (
          <Header position='static'>
               <Toolbar>
                    <Taps to='/'>Home Page </Taps>
                    <Taps to='/all'>All User </Taps>
                    <Taps to='/add'>Add User </Taps>
               </Toolbar>
          </Header>
     )
}


export default NavBar