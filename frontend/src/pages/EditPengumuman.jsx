import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditUser from '../components/FormEditUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import FormEditPengumuman from '../components/FormEditPengumuman'

const EditPengumuman = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state=> state.auth));

    useEffect(()=>{
        dispatch(getMe());
    },[dispatch]);

    useEffect(()=>{
        if(isError){
         navigate("/")
        }
        if(user && user.role !== "admin"){
           navigate("/dashboard")
        }
     },[isError, user, navigate]);
  return (
    <div>
      <Layout>
        <FormEditPengumuman/>
      </Layout>
    </div>
  )
}

export default EditPengumuman
