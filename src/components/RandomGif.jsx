import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RandomGif() {

    const API_KEY = import.meta.env.VITE_SOME_KEY;
    const [gif, setGif] = useState('')
    
  async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        
        
    }

    useEffect(() => {    
      fetchData();  
    }, []);
    



  return (
    <div className="w-1/2 h-auto bg-slate-700 mx-auto rounded-lg border border-black flex flex-col items-center justify-evenly gap-y-5 mt-[15px]">
        <h1 className="text-center font-bold text-3xl underline">A Random Gif</h1>
        <img src={gif} width="400px" height="400px" />
        <button className="bg-white rounded-sm w-6/12 mb-3" onClick={fetchData}>Generate</button>
     
    </div>
  );
}