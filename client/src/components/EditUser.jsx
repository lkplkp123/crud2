
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material"
import { useState } from "react"
import { editUser,getUser } from "../service/api"
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect } from "react"

const Container = styled(FormGroup)`
     width:50%;
     margin:5% auto 0 auto;
     & > div{
          margin-top:20px
     }
`

const defaultValue = {

     name: '',
     username: '',
     email: '',
     phone: ''
}

const EditUser = () => {

     const [user, setUser] = useState(defaultValue)
     const navigate = useNavigate()
     const {id}=useParams()

     useEffect(() => {

          LoadUeserDetails()

     }, [])


     const LoadUeserDetails = async () => {

         const response =  await getUser(id)

          setUser(response.data)




     }
     const onValueChange = (e) => {
          console.log(e.target.name, e.target.value)

          setUser({ ...user, [e.target.name]: e.target.value })
          console.log(user, "user")
     }

     const editUserDetails = async () => {
          await editUser(user,id)
          navigate('/all')
     }


     return (

          <Container >
               <Typography variant='h4'>Edit User</Typography>
               <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input autoComplete="off" onChange={(e) => onValueChange(e)} name="name"  value={user.name}/>
               </FormControl>
               <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input autoComplete="off" onChange={(e) => onValueChange(e)} name="username" value={user.username} />
               </FormControl>
               <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input autoComplete="off" onChange={(e) => onValueChange(e)} name="email" value={user.email} />
               </FormControl>
               <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input autoComplete="off" onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
               </FormControl>
               <FormControl>
                    <Button variant="contained" onClick={() => editUserDetails()}>Edit User </Button>
               </FormControl>

          </Container>
     )
}


export default EditUser