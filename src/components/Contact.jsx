import React from 'react'

const Contact = () => {

  return (
    <div name="contact" className='s=full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full'>
            <div className='pb-8  flex flex-col justify-center items-center md:items-start'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/amddrkpb" method="POST" className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder="Feel free to share your thought" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8  mx-auto flex items-center rounded-md hover:scale-110 duration-200'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
};


export default Contact