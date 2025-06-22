import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"


 export default function Header({theme}) {

    const[isDark,setisDark]=useContext(ThemeContext)
 
    return (
             
     <header className={`header-container ${isDark? 'dark' :" "}`}>
       <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer"
         onClick={()=>
          {
            document.body.classList.toggle('dark')
            setisDark(!isDark)
            localStorage.setItem('isDarkMode',!isDark)
             }}>
            <i className={`fa-regular fa-${isDark ? 'moon' : 'sun'}`}></i>
            &nbsp;&nbsp;{isDark?'Dark Mode':'Light Mode'}
         </p>
          
      </div>

   </header>
  )
}


