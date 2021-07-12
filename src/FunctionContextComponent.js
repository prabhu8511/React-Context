import React, {useContext} from 'react'
import {ThemeContext} from './App'

export default function FunctionContextComponent(){
    
    const  darkTheme = useContext(ThemeContext)

    const themeStyle =  {
            backgroundColor: darkTheme ? "#333" : " #ccc",
            color: darkTheme ? "#ccc" : "#333",
            padding: '50px',
            margin: '50px'
    }

    return(
        <div style = {themeStyle}>Function Theme</div>
    )
}