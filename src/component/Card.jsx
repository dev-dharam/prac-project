import React from 'react';
import CardImg from './Images/CardImg.jpg';

const Card = () => {
  return (
    <>
        <div className='w-[400px] border border-red-100 rounded-xl overflow-hidden'>
            <div className='h-[250px] overflow-hidden'>
                <img src={CardImg} className='w-full h-full hover:scale-110 duration-500 object-cover' alt="Card Img" />
            </div>
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>Classic Onion Capsicum</h2>
                <p className='text-[16px] pb-3'>Personal Pizza topped with our Classic Pan sauce, crunchy onion & capsicum and .</p>
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