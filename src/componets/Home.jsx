import React, { useContext, useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { ThemeContext } from '../contexts/ThemeContext';

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => console.log('hey');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
