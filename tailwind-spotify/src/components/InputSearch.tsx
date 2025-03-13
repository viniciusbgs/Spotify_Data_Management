"use client";

import { Search } from 'lucide-react';
import React, { useState } from 'react';

const InputS = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event : any) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {


    console.log('Valor de pesquisa:', searchValue);
    // Por exemplo, você pode realizar uma busca, enviar para o servidor, etc.
  };

  return (
    <>
    <div className="flex space-x-4 text-black p-6">
      <input
        type="text"
        className="border border-zinc-700 rounded-full px-4 py-2 w-full"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-zinc-800 rounded-full px-4 py-2 text-zinc-50"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>

    <p>
        {searchValue}
    </p>
</>
  );
};

export default InputS;
