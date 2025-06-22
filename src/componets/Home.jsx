import React, { useContext, useEffect, useState } from 'react'
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"



import { useOutletContext, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

export default function Home() {

    const[query,setQuery] = useState("")
  

        const [isDark]= useContext(ThemeContext);
        
       useEffect(()=>
      {
        window.addEventListener('resize',()=>
         {
          console.log('hey')
         }
        )


      })
        
  
  return (
    <main className={` ${isDark? 'dark' :" "}`}>
     <div className="search-filter-container">
      <SearchBar setQuery={setQuery}/>
      <SelectMenu setQuery={setQuery} />
     </div>
     {query==='unmount'? '' :<CountriesList query={query}/>}
     </main>
  )
}
