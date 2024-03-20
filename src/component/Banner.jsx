import React from 'react';
import BGIMG from './Images/Banner.jpg';

const Banner = () => {
  return (
    <>
        <section className='md:py-[200px] py-[50px] bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${BGIMG})`}}>
            <div className='absolute top-0 left-0 w-full h-full bg-[#000000bd]'></div>
            <div className="container mx-auto z-50 relative px-4">
                <div className="text-center md:w-[60%] mx-auto text-white">
                    <h2 className='text-4xl pb-2 font-semibold'>Indulge in Flavorful Creations - Where Every Bite Tells a Story!</h2>
                    <p className='text-[18px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nobis officia unde dolorum perferendis et, similique exercitationem possimus eligendi excepturi quod quaerat veritatis ipsam nesciunt maxime saepe quo aliquid quidem?</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner