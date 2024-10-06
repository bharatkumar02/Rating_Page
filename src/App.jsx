import React,{useState} from 'react';
import Rating from './pages/Rating';
import Submitted from './pages/Submitted';
import './index.css';
function App() {
  const [enable, setEnable] = useState(false);
  const [selectRating, setSelectRating] = useState(0);

  function handelClick(rating){
      setSelectRating(rating)
      console.log(rating)
  }
  
  function handelEnable(){
    setEnable(true);
  }
  return (
    <>
      <main className="font-overPass text-gray-200 text-opacity-80 grid place-items-center min-h-screen">
        <section className={`grid place-items-center preserve ${ enable ? 'rotateY180' : ''} shadow-lg min-h-[25rem] max-h-[26rem] max-w-[26rem] min-w-[25rem]  mx-auto shadow-gray-950 p-6 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900`}>
          <Rating handelClick={handelClick} handelEnable={handelEnable} selectRating={selectRating}/>
          <Submitted rating={selectRating}/>
        </section>
      </main>
    </>
  );
}

export default App;
