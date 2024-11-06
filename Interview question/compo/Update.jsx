import React,{useState,useEffect} from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
function Update(props) {
    const [value,setValue]=useState({
        city:'',
        name:'',
        email:''
    })

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            console.log(res)
            setValue(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const navigate=useNavigate()

    const { id }=useParams()
    const handelupdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/user/${id}`,value)
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
              <form onSubmit={handelupdate}>
            <select className="form-select" name='city' value={value.city} onChange={(e)=>setValue({...value,city:e.target.value})} aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="Godhara">Godhara</option>
  <option value="Ramabag">Ramabag</option>
  <option value="Lakshmi">Lakshmi</option>
</select>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name:</label>
    <input type="text"name='name'value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="text"name='email' value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/' className="btn btn-dark">Back</Link>
</form>
        </div>
    );
}

export default Update;