import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FormAbsensi = () => {
    const [absensi, setAbsensi] = useState([])
    const [jam_masuk, setMasuk] = useState("Login")
    const [jam_keluar, setKeluar] = useState("Logout")
    const [msg, setMessage] = useState("")

    const SignIn = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/absensi",{
                jam_masuk: jam_masuk,
                jam_keluar: jam_keluar
            });
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.msg)
            }
        }
    }


    useEffect(()=>{
        getAbsensi();
    },[]);

    const getAbsensi = async () => {
            const response = await axios.get('http://localhost:5000/historyabsensi')
            setAbsensi(response.data);
    }

  return (
    <div>
        <br />  
        <div className='box'>
        <div className='columns is-centered'>
            <form onSubmit={SignIn} >
         <button type='submit' className="button is-success mr-4"
         >Sign In</button>
         </form>

       <button className="button is-danger"
       >Sign Out</button>
       </div>
       </div>
        <div>
        <br />
       <h1 className='title'>History</h1>
      <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Status</th>
                <th>Jam</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            {absensi.map((absensi, index)=>(
             <tr key={absensi.uuid}>
                <td>{index + 1}</td>
                <td>{absensi.jam_masuk}</td>
                <td>{absensi.updatedAt}</td>
                <td>{absensi.createdAt}</td>
            </tr>
            ))} 
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default FormAbsensi
