import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListKaryawan = () => {
    const [users, setUser] = useState([])

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async () => {
            const response = await axios.get('http://localhost:5000/users')
            setUser(response.data);
    }
  return (
    <div>
    <h1 className='title'>Users</h1>
   <h2 className='subtitle'>List of Users</h2>
   <Link to={'/users/add'} className="button is-primary mb-2">Add User</Link>
   <table className='table is-striped is-fullwidth'>
     <thead>
         <tr>
             <th>No</th>
             <th>Nama</th>
             <th>Email</th>
             <th>Role</th>
             <th>Actions</th>
         </tr>
     </thead>
     <tbody>
     {users.map((user, index)=>(
             <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <Link to={`/users/edit/${user.uuid}`} className='button is-halfwidth'>Edit</Link>
                </td>
            </tr>
            ))} 
     </tbody>
   </table>
 </div>
  )
}

export default ListKaryawan
