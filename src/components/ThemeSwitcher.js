{/*import React, { useContext } from 'react';


import { FiSun, FiMoon } from 'react-icons/fi';

import styled from 'styled-components';
import themeList from '../data/themeList';

const ThemeSwitchStyles = styled.div`
    label {
        --gap: 5px;
        --size: 20px;
        height: 30px;
        width: 55px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        background-color: var(--secondary-color);
        border-radius: 50px;
        z-index: 1;        
        
        .icon-sun {            
            height: var(--size);
            width: var(--size);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-moon {        
            height: var(--size);
            width: var(--size);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {            
            width: 80%;   
            color: var(--white-color);         
        }
    }
    input {
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }
    label::after {
        position: absolute;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
        top: 50%;
        left: var(--gap);
        height: var(--size);
        width: var(--size);
        background-color: var(--white-color);
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }

    input:checked + label:: after {
        left: calc(100% - var(--size) - var(--gap));
    }
`;

function ThemeSwitcher () {

    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <ThemeSwitchStyles>
        <input type="checkbox" id="switcher" onChange={toggleTheme} 
        checked={theme === themeList.dark}/>
        <label htmlFor="switcher">
            <div className="icon-sun">
                <FiSun />
            </div>
            <div className='icon-moon'>
                <FiMoon />
            </div>
        </label>
    </ThemeSwitchStyles>
  )
};

export default ThemeSwitcher*/}