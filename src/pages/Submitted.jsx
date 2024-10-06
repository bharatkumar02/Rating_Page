import React from 'react';
import thankYou from '../assets/illustration-thank-you.svg';
import '../index.css';

function Submitted({rating}) {
  return (
    <>
      <div className="min-h-[25rem] max-h-[26rem] max-w-[26rem] min-w-[25rem] p-5  flex flex-col justify-between items-center text-center rotateCard rotateY180">
        <img
          src={thankYou}
          alt="Thankyou"
          className="pt-5"
        />
        
        <p className='text-orange-400 text-opacity-70 bg-gray-800 py-2 px-4 rounded-full'>You Selected {rating} out of 5</p>
        <h2 className='text-2xl font-semibold text-gray-50'>Thank you!</h2>
        <p className='text-gray-400 text-opacity-90'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </>
  )
}

export default Submitted
