import { useState, useEffect } from "react";

export const DarkModeBtn = () => {
  const [darkmode, setDarkMode] = useState(false);
  useEffect(()=>{
    document.documentElement.setAttribute('light-mode', darkmode ? 'dark': 'light');
  },[darkmode])
  return (
    <button type="button" className="btn_light_mode" onClick={()=>{setDarkMode(!darkmode)}}>
      <i></i><i></i><i></i><i></i><span className="hide">다크모드</span>
    </button>
  )
}