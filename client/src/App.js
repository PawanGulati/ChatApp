import React from 'react'
import {Route} from 'react-router-dom'

import Join from './components/JoinPage/Join'
import Chat from './components/ChatPage/Chat'

export default function App() {
    return (
        <div>
            <Route path='/' exact component={Join} />
            <Route path='/Chat' component={Chat} />
        </div>
    )
}
