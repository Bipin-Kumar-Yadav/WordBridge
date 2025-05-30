import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoilState/ThemeState';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () =>{
    const [theme,setTheme] = useRecoilState(themeState);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <button
            onClick={toggleTheme}
            className={`
                    p-2
                    rounded-full
                    ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                    ${theme === 'dark' ? 'hover:bg-gray-700': 'hover:bg-gray-100'}
                `}
        >
            {
                theme === 'dark' ? (
                     <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                     <Moon className="h-5 w-5 text-gray-700" />
                )
            }
        </button>
        
    )

}

export default ThemeToggle;