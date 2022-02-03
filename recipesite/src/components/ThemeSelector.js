import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme';
import React from 'react';
import modeIcon from '../assets/dark_mode_black_24dp.svg'

const themeColors = ['lightcoral', 'tan', 'black']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
        changeMode(mode==='dark' ? 'light' : 'dark')
    }

    console.log(mode)
 
  return (
  <div className="theme-selector">
      <div className="mode-toggle">

          <img src={modeIcon}
          onClick={toggleMode}
          alt="dark/light toggle icon"
          style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}/>

      </div>
      <div className="theme-buttons">
          {themeColors .map(color => (
              <div 
              key={color}
              onClick={() => changeColor(color)}
              style={{background: color}}> 
              </div>
          ))}
      </div>
  </div>);
}
