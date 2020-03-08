import React, { Fragment } from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{
        background:'#272C34',
        height:'100%',
        
    }
}))

export default function SideBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        f     
        </div>
    )
}
