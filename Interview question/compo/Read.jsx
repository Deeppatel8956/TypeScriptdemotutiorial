import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Read(props) {
    const [data,setData]=useState([])

    const { id }=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <strong>{data.id}</strong>
                        <strong>{data.city}</strong>
                        <strong>{data.name}</strong>
                        <strong>{data.email}</strong>
            <Link to={`/update/${id}`} className='btn btn-outline-primary'>Update</Link>
            <Link to='/' className='btn btn-outline-dark'>Back</Link>            
        </div>
    );
}

export default Read;