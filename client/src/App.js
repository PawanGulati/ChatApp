import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'

import Join from './components/JoinPage/Join'
import Chat from './components/ChatPage/Chat'

export default function App() {
    return (
        <>
            <Route path='/' exact component={Join} />
            <Route path='/Chat' component={Chat} />
        </>
    )
}
