import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Home(props) {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const navigate=useNavigate()
    const handeldelete=(id)=>{
        const conform=window.confirm('would you like to delete')
        if (conform) {
            axios.delete(`http://localhost:3000/user/${id}`)
            .then(()=>{
                navigate('/')
            }).catch((err)=>{
                console.log(err)})
        }
    }
    return (
        <div>
            <Link to='/create' className=' btn btn-outline-success'>Add +</Link>
            <table className='table'>
                <thead>
                <tr>
                     <th>Id</th>
                     <th>city</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th colSpan={3}>Action</th>
                    
                </tr>
                </thead>
                <tbody>
                {data.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.city}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td><Link to={`/read/${d.id}`} className='btn  btn-outline-warning'>Read</Link></td>
                        <td><Link to={`/update/${d.id}`} className='btn btn-outline-info'>Update</Link></td>
                        <td><button className='btn btn-outline-danger'onClick={(e)=>handeldelete(d.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;