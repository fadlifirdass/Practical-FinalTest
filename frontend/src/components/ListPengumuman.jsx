import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListPengumuman = () => {

    const [pengumuman,setAnnounce] = useState([])

    useEffect(()=>{
        getPengumuman();
    },[]);


    const getPengumuman = async () => {
        const response = await axios.get('http://localhost:5000/pengumuman');
        setAnnounce(response.data);
}

  return (
    <div>
    <h1 className='title'>Pengumuman</h1>
   <h2 className='subtitle'>List of Pengumuman</h2>
   <Link to={'/users/pengumuman/add'} className="button is-primary mb-2">Tambah Pengumuman</Link>
   <table className='table is-striped is-fullwidth'>
     <thead>
         <tr>
             <th>No</th>
             <th>Subject</th>
         </tr>
     </thead>
     <tbody>
     {pengumuman.map((pengumuman, index)=>(
             <tr key={pengumuman.uuid}>
                <td>{index + 1}</td>
                <td>{pengumuman.subject}</td>
            </tr>
            ))} 
     </tbody>
   </table>
 </div>
  )
}

export default ListPengumuman
