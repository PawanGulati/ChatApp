import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

// import {createMuiTheme,MuiThemeProvider} from '@material-ui/core'

import App from './App'

// const theme = createMuiTheme({
//     palette:{
//         type:'dark'
//     }
// })

const app = (
    <BrowserRouter>
            <App/>
    </BrowserRouter>
)

ReactDOM.render(app,document.querySelector('#root'))
