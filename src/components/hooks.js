import React from "react";
import {useState,useEffect} from 'react';

const Hooks = () => {
 const [cnt,setCount]= useState({
     counter: 0
 })
 const [flag,setFlag]=useState(false);


 const handleClick=()=>{
     setCount({
         counter: cnt.counter +1
     })
 }

 const handleFlag=()=>{
     setFlag(!flag)
 }

 useEffect(()=>{
     console.log(flag);
 },[flag]);

  return (
    <div>
        <h1>{cnt.counter}- {flag + " "}</h1>
      <button type="button" onClick={handleClick}>
        Counter
      </button>
      <button type="button" onClick={handleFlag}>
        Show/Hide
      </button>
       
    </div>
  );
};

export default Hooks;
