import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [msg, setMessage] = useState("")
    const [status, setStatus] = useState("pending")
    
    const saveForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products',{
                name: name,
                price: price,
                status: status
            })
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.msg)
            }
        }
    }


    const [products, setProduct] = useState([])

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () => {
            const response = await axios.get('http://localhost:5000/history')
            setProduct(response.data);
    }


  return (
    <div>
    <h1 className='title'>Pengajuan</h1>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                     <form onSubmit={saveForm}>
                        <p className='has-text-centered'>{msg}</p>
                     <div className="field">
                            <label className="label">Jenis Pengajuan</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={name} onChange={(e)=> setName(e.target.value)}>
                                        <option value="Request Overtime">Request Overtime</option>
                                        <option value="Request Reimburstment">Request Reimburstment</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                     <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Subject'
                                value={price} onChange={(e)=> setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                            <button type='submit' className="button is-success">Save</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>

    <div>
        <br />
       <h1 className='title'>History</h1>
      <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Jenis Pengajuan</th>
                <th>Deskripsi Pengajuan</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index)=>(
             <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>{product.createdAt}</td>
            </tr>
            ))} 
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default ProductList
