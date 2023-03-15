import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditPengumuman = () => {
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")
    const [msg, setMessage] = useState("")
    const navigate = useNavigate()
    const {id} = useParams();


    useEffect(()=>{
        const getPengumumanById = async () =>{
            try {
                const response = await axios.get(`http://localhost:5000/pengumuman/${id}`);
                setSubject(response.data.subject)
                setDescription(response.data.description)
            } catch (error) {
                if(error.response){
                    setMessage(error.response.data.msg)
                }
            }
        }
        getPengumumanById()
    },[id])

    const editPengumuman = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pengumuman/${id}`,{
                subject: subject,
                description: description,
            })
            navigate("/users/pengumuman")
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.msg)
            }
        }
    }


  return (
    <div>
    <h1 className='title'>Pengumuman</h1>
    <h2 className='subtitle'>Add Pengumuman</h2>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                     <form onSubmit={editPengumuman}>
                     <p className='has-text-centered'>{msg}</p>
                     <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input type="text" className="input"  
                                value={subject} onChange={(e)=> setSubject(e.target.value)}
                                placeholder="Subject"
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Description'
                                value={description} onChange={(e)=> setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                            <button type="submit" className="button is-success">Save</button>
                            </div>
                        </div>
                 </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default FormEditPengumuman
