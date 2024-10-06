import React from 'react';
import star from '../assets/icon-star.svg';
import '../index.css';

function Rating({handelClick, handelEnable, selectRating}) {

  return (
    <>
      <div className="flex flex-col justify-between items-start rotateCard min-h-[25rem] max-h-[26rem] max-w-[26rem] min-w-[25rem] p-6">
        <img
          src={star}
          alt="star"
          className="bg-gray-700 bg-opacity-40 p-3 rounded-full"
        />
        <h1 className="font-semibold text-2xl">How did we do?</h1>
        <p className="text-[15px]">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
        <ul className="flex items-center flex-wrap justify-between w-full">
          {['1', '2', '3', '4', '5'].map((rating) => (
            <li
              key={rating}
              onClick={()=> handelClick(rating)}
              className={` hover:text-gray-800 transition-all duration-200 ease-in-out w-10 ${selectRating === rating ? 'bg-white text-gray-800 bg-opacity-100 hover:bg-white font-bold' : 'bg-opacity-40 hover:font-bold bg-gray-700 text-gray-200 hover:bg-orange-500'} p-2 rounded-full text-center sm:w-12 sm:p-3 cursor-pointer`}
            >
              {rating}
            </li>
          ))}
        </ul>
        <button onClick={handelEnable} className="w-full bg-orange-500 text-gray-800 py-2 rounded-3xl font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all duration-200 ease-in-out">
          Submit
        </button>
      </div>
    </>
  );
}

export default Rating;
