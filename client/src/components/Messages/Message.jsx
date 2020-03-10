import React from 'react'
import classNames from 'classnames';

import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    paper:{
        maxWidth:'200px',
        border:'1px solid',
        padding:'0.4rem',
        display:'block',
        maxHeight:'500px',
        marginTop:'20px'
    },
    curUser:{
        marginLeft:'70%',
        background:'#E8E8E8'
    },
    admin:{ 
        position:'relative',
        left:'40%',
        background:'#C0C0C0',
        textAlign:'center'
    },
    otherUser:{
        // position:'relative',
        // right:0,
        background:'#D7595D',
        color:'white'
    }
}))

export default function Message({curName,name,children}) {
    const classes = useStyles()    
    console.log(curName,name);
    
    
    const curUser = name === curName ? classes.curUser : null
    const admin = name === 'admin' ? classes.admin : null
    const otherUser = (name !== 'admin' && name !==  curName)  ? classes.otherUser : null

    return (
            <Paper className={`${classes.paper} ${curUser} ${otherUser} ${admin}`} >
                {children}
            </Paper>
    )
}
