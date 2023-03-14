import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';

const Welcome = () => {

    const [pengumuman,setAnnounce] = useState([])

    useEffect(()=>{
        getPengumuman();
    },[]);


    const getPengumuman = async () => {
        const response = await axios.get('http://localhost:5000/pengumuman');
        setAnnounce(response.data);
}

    const {user} = useSelector((state)=> state.auth);
  return (
    <div>
      <h1 className='title'>Dashboard</h1>
      <h2 className='subtitle'>Welcome Back <strong>{user && user.name} | {user && user.role}</strong></h2>

      <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
            </tr>
        </thead>
        <tbody>
            {pengumuman.map((pengumuman, index)=>(
             <tr key={pengumuman.uuid}>
                <td>{pengumuman.subject}</td>
                <td>{pengumuman.description}</td>
            </tr>
            ))} 
        </tbody>
      </table>

    </div>
  )
}

export default Welcome
