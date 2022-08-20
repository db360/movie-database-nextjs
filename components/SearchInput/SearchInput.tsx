import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300; // ms

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState("");
  const timer = useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout( () => {
        setQuery(value)
    }, TIME)
  };

  return (
    <>
      <input
        className=" h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
        value={text}
        onChange={handleInput}
        placeholder="Search"
        type="text"
      />
      <div className="absolute right-4 top-8">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmbd-logo"/>
      </div>
    </>
  );
};

export default SearchInput;
