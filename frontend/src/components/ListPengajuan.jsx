import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ListPengajuan = () => {
    const [products, setProduct] = useState([])

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () => {
            const response = await axios.get('http://localhost:5000/products')
            setProduct(response.data);
    }
  return (
    <div>
       <h1 className='title'>Request</h1>
      <h2 className='subtitle'>List of Requests</h2>
      <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Jenis Pengajuan</th>
                <th>Deskripsi Pengajuan</th>
                <th>Nama Karyawan</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index)=>(
             <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>{product.status}</td>
                <td>
                    <Link to={`/pengajuan/edit/${product.uuid}`} className='button is-halfwidth'>Approve</Link>
                </td>
            </tr>
            ))} 
        </tbody>
      </table>
    </div>
  )
}

export default ListPengajuan
