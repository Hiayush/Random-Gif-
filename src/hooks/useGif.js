import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_SOME_KEY;

export default function useGif(tags) {
  const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagsMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tags}`;

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData() {
    setLoading(true);

    const { data } = await axios.get(tags ? tagsMemeurl : randomMemeurl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
}
