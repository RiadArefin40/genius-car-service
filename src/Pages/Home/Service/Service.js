import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,img,id,price}=service;
    const navigate = useNavigate()
    const navigateToServicedetails=id=>{
            navigate(`/service/${id}`)
    }
    return (
        
            <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <button onClick={()=> navigateToServicedetails(id)} className='btn btn-primary'>Book:{name}</button>
            </div>
           
        
    );
};

export default Service;