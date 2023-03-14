import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [msg, setMessage] = useState("")
    const [status, setStatus] = useState("")
    const navigate = useNavigate()
    const {id} = useParams();


    useEffect(()=>{
        const getProdcutById = async () =>{
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`);
                setName(response.data.name)
                setPrice(response.data.price)
                setStatus(response.data.status)
            } catch (error) {
                if(error.response){
                    setMessage(error.response.data.msg)
                }
            }
        }
        getProdcutById()
    },[id])


    const updateStatus = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/products/${id}`,{
                name: name,
                price: price,
                status: status
            })
            navigate("/users")
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.msg)
            }
        }
    }

  return (
    <div>
    <h1 className='title'>Manage Pengajuan</h1>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                     <form onSubmit={updateStatus}>
                     <div className="field">
                            <label className="label">Jenis Pengajuan</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Pengajuan' 
                                 value={name} onChange={(e)=> setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Deskripsi Pengajuan</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Deskripsi' 
                                 value={price} onChange={(e)=> setPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={status} onChange={(e)=> setStatus(e.target.value)}>
                                        <option value="Declined">Decline</option>
                                        <option value="Approved">Approve</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                            <button type='submit' className="button is-success">Update</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default FormEditProduct
