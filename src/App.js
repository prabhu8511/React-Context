import React, { useState, Fragment } from 'react'

import FunctionContextComponent from './FunctionContextComponent'

import ClassContextComponent from './ClassContextComponet'


export const ThemeContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <ThemeContext.Provider value={darkTheme}>

         <FunctionContextComponent />

         <ClassContextComponent />

      </ThemeContext.Provider>
      </>
  );
}

export default App;
