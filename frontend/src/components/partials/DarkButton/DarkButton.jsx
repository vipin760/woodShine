import React, { useEffect, useState } from 'react'

const DarkButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
    const element = document.documentElement;
    console.log(element)
    useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark")
        localStorage.setItem("theme","dark")
        }else{
            element.classList.remove("dark")
        localStorage.setItem("theme","light")
        }
    },[theme])
  return (
    <div className='relative'>
      <i className={`fa-solid transition-all duration-3000 ${theme==='dark'?"dark fa-toggle-on":"light fa-toggle-off"}`} 
      onClick={()=>setTheme(theme==="light"?"dark":"light")}
      ></i>
    </div>
  )
}

export default DarkButton
