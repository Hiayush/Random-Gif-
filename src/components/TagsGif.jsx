import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function TagsGif() {

    const [tags, setTags] = useState("car")
    const API_KEY = import.meta.env.VITE_SOME_KEY;
    

  
    const {gif, loading, fetchData} = useGif(tags)
  


  return (
    <div className='w-1/2 h-auto bg-slate-700 mx-auto rounded-lg border border-black flex flex-col items-center justify-evenly gap-y-5 mt-[15px]'>
            <h1 className="text-center font-bold text-3xl underline">A Random {tags} Gif</h1>
            {
          loading ? (<Spinner/> ) : (<img src={gif} width="400px" height="400px" />)
        }
            <input type="text" onChange={(event)=>setTags(event.target.value)} value={tags} />
            <button className="bg-white rounded-sm w-6/12 mb-3" onClick={()=>fetchData(tags)}>Generate</button>

    </div>
  )
}
