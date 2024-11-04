import React from 'react'
import Events from '../ContentFiles/Events.json'
const UpcomingEvents = () => {
  return (
    <div className='containerr'>
        <h2 className='text-center'>Upcoming Events</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-[3vw]'>
          {Events.map((event, index) => (
            <div
              key={index}
              className='bg-[white] border-[1px] border-[#AEAEAE] text-[black] '
            >
              <div className='w-full aspect-[16/9] bg-[#EBEBEB] border-b-[1px] border-[#AEAEAE]'>
                <img src={event.thumbnail} alt={event.title} className='w-full h-full object-cover'/>
              </div>
              <div className='flex px-[10%] gap-[0.5em] sm:gap-[1em] py-[0.4em] sm:py-[1em]'>
                <div className='text-center'>
                  <p className='text-[black] text-[14px] sm:text-[14px] lg:text-[16px]'>{event.month}</p>
                  <p className=' text-[18px] sm:text-[18px] lg:text-[24px] font-semibold text-primary leading-[1.2em]'>{event.date}</p>
                </div>
                <div className='text-left'>
                  <p className='text-[black] text-[14px] sm:text-[16px] lg:text-[18px] font-bold'>{event.title}</p>
                  <p className='text-[14px] sm:text-[14px] lg:text-[16px] text-[#A3A3A3]'>{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default UpcomingEvents
