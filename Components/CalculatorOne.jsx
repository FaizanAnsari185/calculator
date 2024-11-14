"use client"
import React, { useState } from "react";

const CalculatorOne = () => {
    const [add, setAdd] = useState("")

    const handleClick=(value)=>{
        setAdd(add + value)
    }

    const handleResult = () => {
        try {
            setAdd(eval(add).toString())
        } catch (error) {
            setAdd("Error")
        }
    }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">C<span className="text-red-500">a</span>lculat<span className="text-cyan-500">o</span>r</h1>
        <div>
          <input
            type="text"
            value={add}
            placeholder="Add Value"
            className="border-2 border-black bg-fuchsia-200 p-5 text-2xl"
            readOnly
          />
        </div>
        <div className="flex gap-4 justify-center">
          <h1 onClick={()=>handleClick("0")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">0</h1>
          <h1 onClick={()=>handleClick("1")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">1</h1>
          <h1 onClick={()=>handleClick("2")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">2</h1>
          <h1 onClick={()=>handleClick("3")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">3</h1>
          <h1 onClick={()=>handleClick("4")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">4</h1>
          <h1 onClick={()=>handleClick("5")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">5</h1>
          <h1 onClick={()=>handleClick("6")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">6</h1>
          <h1 onClick={()=>handleClick("7")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">7</h1>
          <h1 onClick={()=>handleClick("8")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">8</h1>
          <h1 onClick={()=>handleClick("9")} className="text-2xl bg-blue-500 p-4 border-2 border-black cursor-pointer">9</h1>
          <h1 onClick={()=>handleClick("+")} className="text-2xl bg-amber-700 p-4 border-2 border-black cursor-pointer">+</h1>
          <h1 onClick={()=>handleClick("-")} className="text-2xl bg-amber-700 p-4 border-2 border-black cursor-pointer">-</h1>
          <h1 onClick={()=>handleClick("*")} className="text-2xl bg-amber-700 p-4 border-2 border-black cursor-pointer">*</h1>
          <h1 onClick={()=>handleClick("/")} className="text-2xl bg-amber-700 p-4 border-2 border-black cursor-pointer">/</h1>
          <h1 onClick={()=>setAdd("")} className="text-2xl bg-yellow-500 p-4 border-2 border-black cursor-pointer">C</h1>
          <h1 onClick={handleResult} className="text-2xl bg-amber-700 p-4 border-2 border-black cursor-pointer">=</h1>
        </div>
      </div>
    </>
  );
};

export default CalculatorOne;
