import React, { Component } from 'react'

import {Grid} from '@material-ui/core'

import SideBar from '../SideBar/SideBar'
import Messages from '../Messages/Messages'
import ChatFoot from '../ChatFoot'
export default class Chat extends Component {
    render(){
        return (
            <Grid container style={{height:'100%'}}>
                <Grid item xs={3} style={{height:'100%'}}>
                    <SideBar/>
                </Grid>
                <Grid item xs={9} style={{height:'100%'}}>
                    <Grid item xs={12} style={{height:'calc(100% - 72px)'}}>
                        <Messages/>
                    </Grid>
                    <Grid item xs={12} style={{height:'10%'}}>
                        <ChatFoot/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
