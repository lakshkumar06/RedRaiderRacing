import React from 'react'

const ContactForm = () => {
  return (
    <div className='containerr'>
        <h2 className='text-center'>Still have a <span className='text-primary'>Question</span>?</h2>
        <form action="" method="" className='contactForm text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[white] text-left'>

            <div className='flex gap-[2vw]'>
                <div className='sm:w-1/2 py-[0.5em]'>
                    <label for="fname">First Name</label><br/>
                    <input type='text' id='fname' name='fname' className=' px-[1em] py-[0.4em] w-full' required></input>
                </div>
                <div className='sm:w-1/2 py-[0.5em]'>
                    <label for="lname">Last Name</label><br/>
                    <input type='text' id='lname' name='lname' className=' px-[1em] py-[0.4em] w-full' required></input>
                </div>
            </div>
            <div className='flex gap-[2vw]'>
        
                <div className='sm:w-1/2 py-[0.5em]'>
                    <label for="email">Email</label><br/>
                    <input type='email' id='email' name='email' className=' px-[1em] py-[0.4em] w-full' required></input>
                </div>
                <div className='sm:w-1/2 py-[0.5em]'>
                    <label for="company">Company</label><br/>
                    <input type='company' id='company' name='company' className=' px-[1em] py-[0.4em] w-full' required></input>
                </div>
            </div>
            <div className='text-left full py-[2vw]]'>
                <label for="name">How can we Help you?</label><br/>
                <textarea id='message' name='message' rows='5' className=' px-[1em] py-[0.4em] w-full box-border' required></textarea>
            </div>

            <div className='flex justify-center sm:justify-end mt-[0.5em]'>
                <button type='submit' className='text-[18px] md:text-[20px]  lg:text-[24px] submitBtn py-[0.3em] px-[3em] text-primary border-[2px] border-primary rounded-[10px]'>Shoot</button>
            </div>
        </form>
      
    </div>
  )
}

export default ContactForm
