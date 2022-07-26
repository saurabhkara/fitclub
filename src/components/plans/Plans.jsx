import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick  from '../../assets/whiteTick.png';
export default function Plans() {
  return (
    <div className='plans-containers'>
        <div className="plans-blur blur"></div>
        <div className="program-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now With Us</span>
        </div>
        <div className='plan-cards'>
            {plansData.map((plan, index) => {
                return (
                <div className="plan" key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, index) => (
                           <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={index} >{feature}</span>
                           </div> 
                        ))}
                    </div>
                    <div>
                        <span>See  more benefits ...</span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>)
            })}
        </div>
        
    </div>
  )
}
