

import { useEffect, useState } from 'react'
import CountryCard from '../componets/CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
export default function CountriesList({query}) {

   const[countriesData,setCountriesData]=useState([])
   // const[count,setCount]=useState(0)
     
    useEffect(()=>
      {
      fetch('https://restcountries.com/v3.1/all')
   .then((res)=>res.json())
   .then((data)=>
   {
      setCountriesData(data)
   })
},[])
 
     
  
    
  
   if(!countriesData.length)
   {
      return (<CountriesListShimmer/>)
   }
     return(
      <>
    
   
   <div className="countries-container">
      {countriesData
      .filter((country)=>
         country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
   )
   .map((country)=>{
      return(
  <CountryCard 
  key={country.name.common}
     name={country.name.common} 
     flag={country.flags.svg} 
     population={country.population.toLocaleString('en-IN')} 
     capital={country.capital?.[0]} 
     region={country.region}
     data={country}
     />
      )
   })}
  
     </div>
      
     </>
   ) 
    
 
  
  
}
