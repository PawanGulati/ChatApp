import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'

import {CssBaseline} from '@material-ui/core'

import Join from './components/JoinPage/Join'
import Chat from './components/ChatPage/Chat'

export default function App() {
    return (
        <>
            <CssBaseline/>
                <Route path='/' exact component={Join} />
                <Route path='/ChatPage' component={Chat} />
        </>
    )
}
