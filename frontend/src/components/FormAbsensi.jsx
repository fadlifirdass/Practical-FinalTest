import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FormAbsensi = () => {
    const [absensi, setAbsensi] = useState([])


    useEffect(()=>{
        getAbsensi();
    },[]);

    const getAbsensi = async () => {
            const response = await axios.get('http://localhost:5000/historyabsensi')
            setAbsensi(response.data);
    }

  return (
    <div>
        <h1>Jam Masuk : <button>Sign in</button></h1>
        <h1>Jam Keluar : <button>Sign out</button></h1>

        <div>
        <br />
       <h1 className='title'>History</h1>
      <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Jam Masuk</th>
                <th>Jam Keluar</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            {absensi.map((absensi, index)=>(
             <tr key={absensi.uuid}>
                <td>{index + 1}</td>
                <td>{absensi.jam_masuk}</td>
                <td>{absensi.jam_keluar}</td>
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
