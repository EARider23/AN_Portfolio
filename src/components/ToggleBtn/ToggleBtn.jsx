import React, { useContext } from 'react';
import { THEME_TYPE } from "../../constants";
import { ThemeContext } from "../../../src/providers/ThemeProvider";

import './ToggleBtn.scss';

const ToggleBtn = () => {

  const [themeMode, setTheme] = useContext(ThemeContext);
  
  const handleThemeChange = (e) => {
    console.log("current Value: "+ themeMode.theme);
    if(themeMode.theme === THEME_TYPE.LIGHT) {
      setTheme({ theme:THEME_TYPE.DARK });
    }
    else {
      setTheme({ theme:THEME_TYPE.LIGHT });
    }
    console.log("new Value: "+ themeMode.theme);
  };

  return (
    <div className="switch-container">
      <label className='switch'>
        <input data-test-id="theme-changer"
          type="checkbox"
          defaultChecked={themeMode.theme === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>      
    </div>
  );
};

export default ToggleBtn;