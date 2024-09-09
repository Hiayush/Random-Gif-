import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_SOME_KEY;

export default function RandomGif() {

   
    
const {gif, loading, fetchData} = useGif();
    
    
    



  return (
    <div className="w-1/2 h-auto bg-slate-700 mx-auto rounded-lg border border-black flex flex-col items-center justify-evenly gap-y-5 mt-[15px]">
        <h1 className="text-center font-bold text-3xl underline">A Random Gif</h1>

        {
          loading ? (<Spinner/> ) : (<img src={gif} width="400px" height="400px" />)
        }
        
        <button className="bg-white rounded-sm w-6/12 mb-3" onClick={()=> fetchData()}>Generate</button>
     
    </div>
  );
}