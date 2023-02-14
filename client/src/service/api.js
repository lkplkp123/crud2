import axios from 'axios'


const URL = 'http://localhost:3011';

export const addUser = async (data) => {
     try {

          return await axios.post(`${URL}/add`, data)

     } catch (error) {

          console.log("error while calling add user api", error)

     }
}


export const getUsers = async () => {
     try {

          return await axios.get(`${URL}/all`)

     } catch (error) {
          console.log("error while calling add user api", error)


     }
}


export const getUser = async (id) => {
     try {

          return await axios.get(`${URL}/${id}`)

     } catch (error) {
          console.log("error while calling add user api", error)


     }
}

export const editUser = async (user,id)=>{

     try{
          return await axios.put(`${URL}/${id}`,user)


     }catch(error){
          console.log("error while calling add user api", error)


     }
}


export const deleteUser =async (id)=>{

     try{
          console.log(id,"id")

          return await axios.delete(`${URL}/${id}`)

     }catch(error){

          console.log("error while calling delete user api", error)


     }

}