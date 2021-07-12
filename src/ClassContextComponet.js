import React, { Component, Fragment } from 'react'

import {ThemeContext}  from './App'

export default class ClassContextComponent extends React.Component {

    themeStyle(dark) {
        return {
            backgroundColor: dark ? "#333" : " #ccc",
            color: dark ? "#ccc" : "#333",
            padding: '50px',
            margin: '50px'
        }
    }

    render(){

        return(
            <ThemeContext.Consumer>
                {
                    (darkTheme) =>{
                        return <div style={this.themeStyle(darkTheme)}> Class Theme </div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }


}