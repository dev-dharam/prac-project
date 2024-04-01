import React, { useEffect, useState } from 'react'
import Banner from '../component/Banner'
import Card from '../component/Card'

const Home = () => {

  const [dataitem, setDataItems] = useState([]);
  const [datacate, setDataCate] = useState([]);

  const GetDataFromDB = async () => {
    const res = await fetch("http://localhost:5000/api/v1/getdata");
    // console.log(res)
    const data = await res.json();
    // console.log(data);
    setDataCate(data.FoodCategory);
    setDataItems(data.FoodItems);
  }

  useEffect(() => {
    GetDataFromDB();
  }, [])

  return (
    <>
      <Banner/>

      <div className='container mx-auto'>
        {
          datacate != [] 
          ?
          datacate.map((category) => {
            return(
              <div key={category.CategoryName}>
                <h3 className='text-red-500 text-2xl font-bold mt-9 mb-3'>{category.CategoryName}</h3>

                <div className='grid grid-cols-3 gap-4'>
                {
                  dataitem.filter(myitem => category.CategoryName === myitem.CategoryName).map((itemss) => {
                    return(
                        <div key={itemss.name}>
                          <Card img={itemss.img} heading={itemss.name} desc={itemss.description}/>
                        </div>
                    )
                  })
                }
                </div>

              </div>
            )
          })
          :
          ""
        }
      </div>

    </>
  )
}

export default Home