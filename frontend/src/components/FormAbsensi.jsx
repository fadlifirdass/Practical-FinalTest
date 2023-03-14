import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FormAbsensi = () => {
    const [signIn, setSignIn] = useState("")
    const [signOut, setSignOut] = useState("")


    useEffect(()=>{
        getAbsensi()
    },[])

    const getAbsensi = async ()=> {
        try {
            const response = await axios.get('http://localhost:5000/absensi')
            setSignIn(response.data.jam_masuk)
            setSignOut(response.data.jam_keluar)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Jam Masuk : {signIn}</h1>
        <h1>Jam Keluar : {signOut}</h1>
    </div>
  )
}

export default FormAbsensi
