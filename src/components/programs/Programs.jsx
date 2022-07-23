import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

export default function Programs() {
  return (
    <div className='programs'>

        {/* header */}
      <div className="program-header">
        <span className='stroke-text'>Explore our</span>
        <span>programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="programs-category">
        {programsData.map((item,index)=>{
            return(
                <div className="category">
                    {item.image}
                    <span>{item.heading}</span>
                    <span>{item.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                       <img src={RightArrow} alt="arrow" />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}
