import React from 'react';
import CardImg from './Images/CardImg.jpg';

const Card = ({img, heading, desc}) => {
  return (
    <>
        <div className='border border-red-100 rounded-xl overflow-hidden'>
            <div className='h-[250px] overflow-hidden'>
                <img src={img} className='w-full h-full hover:scale-110 duration-500 object-cover' alt="Card Img" />
            </div>
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>{heading}</h2>
                <p className='text-[16px] pb-3'>{desc}</p>
                <div className='flex gap-4'>
                    <select>
                        <option value="">Half</option>
                        <option value="">Full</option>
                    </select>
                    <b>₹ 130</b>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;