import React, { useState } from "react";

const SearchBar = () => {
  const [textToSearch, setTextToSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextToSearch(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form>
      <label htmlFor="inputTextToSearch">Digite o nome do seu Pokémon</label>
      <input
        id="inputTextToSearch"
        onChange={handleChange}
        type="text"
        value={textToSearch}
      />
      <button onClick={handleClick} type="submit">
        Pesquisar
      </button>
    </form>
  );
};

export default SearchBar;
