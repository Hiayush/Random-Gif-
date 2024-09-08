import { useState } from "react";
import TagsGif from "./components/TagsGif";
import RandomGif from "./components/RandomGif";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen overflow-x-hidden bg-blue-300 flex flex-col space relative items-center ">
      <h1 className="w-11/12 text-center bg-slate-300 mt-[40px]  py-2 px-10 text-4xl font-bold rounded-lg space-evenly">
        Random Gif Generator
      </h1>

      <RandomGif></RandomGif>
      <TagsGif></TagsGif>
    </div>
  );
}

export default App;
