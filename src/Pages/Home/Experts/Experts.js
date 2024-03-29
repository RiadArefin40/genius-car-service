import React from 'react';
import expert1 from '../../../Assets/images/experts/expert-1.jpg';
import expert2 from '../../../Assets/images/experts/expert-2.jpg';
import expert3 from '../../../Assets/images/experts/expert-3.jpg';
import expert4 from '../../../Assets/images/experts/expert-4.jpg';
import expert5 from '../../../Assets/images/experts/expert-5.jpg';
import expert6 from '../../../Assets/images/experts/expert-6.png';
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        {id:1 , name:'will Smith', img: expert1 },
        {id:2 , name:'Chris Rock', img: expert2 },
        {id:3 , name:'Dwayne Rock', img: expert3 },
        {id:4 , name:'Messy Rock', img: expert4 },
        {id:5 , name:'Ronaldo Rock', img: expert5 },
        {id:6 , name:'Maradona Rock', img: expert6 }

    ]
    return (
        <div id='experts' className='container'>
            <h1 className='text-primary text-center my-5'>Our experts mechanics</h1>
                <div className="row">
                    {
                        experts.map(expert =><Expert key={expert.id } expert={expert}></Expert>)
                    }
                </div>
            
        </div>
    );
};

export default Experts;