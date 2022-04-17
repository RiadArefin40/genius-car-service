import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>Services details{serviceId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
               <button className='btn btn-primary'>Proceed Checkout</button> 

            </Link>
            </div>
         
        </div>
    );
};

export default ServicesDetails;