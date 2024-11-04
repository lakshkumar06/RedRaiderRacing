import React from 'react';
import carsData from '../ContentFiles/Cars.json'; // Adjust the path as necessary

const Cars = () => {
  return (
    <div className='containerr carsdata'>
          <h2 className='text-center'>OUR <span className='text-primary'> CARS</span></h2>

      {carsData.map((car, index) => (
        <div key={index} className='md:px-[10vw] lg:px-[15vw] mt-[40px]'>
          <img src='' className='bg-[#D9D9D9] w-full aspect-[16/9]' alt={car.model}></img>
          <div className='flex justify-between'>
            <div className=''>
              <h2 className='pb-0'>{car.model}</h2>
            </div>
            <div className=''>
              <h2 className='pb-0'>{car.year}</h2>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-primary'>CHASIS:</p>
            </div>
            <div className=''>
              <p className='text-[white]'>{car.chasis}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-primary'>Power Unit:</p>
            </div>
            <div className=''>
              <p className='text-[white]'>{car.powerunit}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-primary'>Weight:</p>
            </div>
            <div className=''>
              <p className='text-[white]'>{car.weight}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-primary'>Achievement:</p>
            </div>
            <div className=''>
              <p className='text-[white]'>{car.achievement}</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-primary'>Competition Placement:</p>
            </div>
            <div className=''>
              <p className='text-[white]'>{car.placement}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cars;