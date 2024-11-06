import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create(props) {
    const [value,setValue]=useState({
        city:'',
        name:'',
        email:''
    })
    const navigate=useNavigate()

    const handelcreate=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/user',value)
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
            <form onSubmit={handelcreate}>
            <select className="form-select" name='city'onChange={(e)=>setValue({...value,city:e.target.value})} aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="Godhara">Godhara</option>
  <option value="Ramabag">Ramabag</option>
  <option value="Lakshmi">Lakshmi</option>
</select>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name:</label>
    <input type="text"name='name' onChange={(e)=>setValue({...value,name:e.target.value})} className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="text"name='email' onChange={(e)=>setValue({...value,email:e.target.value})} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/' className="btn btn-dark">Back</Link>
</form>
        </div>
    );
}

export default Create;