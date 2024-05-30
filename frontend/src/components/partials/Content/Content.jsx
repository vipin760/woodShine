import React, { useEffect, useState } from 'react'

const Content = () => {
   const [smooth,setSmooth]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setSmooth(true)
        }, 100);
    },[])
  return (
    
       <>
        <div className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 ${smooth?"transition-all duration-1000 ease-in-out opacity-100":"opacity-0"}`}>
          <ul className="text-center text-xl p-20">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </ul>
        </div>
      </>
  )
}

export default Content
