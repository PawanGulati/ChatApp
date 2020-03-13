import React from 'react'
import classNames from 'classnames';

import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    paper:{
        overflowWrap:'break-word',
        border:'1px solid',
        padding:'0.4rem',
        display:'block',
        maxHeight:'500px',
        marginTop:'20px'
    },
    curUser:{
        maxWidth:'200px',
        marginLeft:'70%',
        background:'#E8E8E8',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'calc(100% - 200px)',
        }
    },
    admin:{ 
        maxWidth:'10em',
        position:'relative',
        left:'40%',
        background:'#C0C0C0',
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            left:'30%',
        }
    },
    otherUser:{
        maxWidth:'200px',
        background:'#D7595D',
        color:'white'
    },
    location:{
        maxWidth:'50px',
        marginLeft:'90%',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'83%',
        }
    }
}))

export default function Message({curName,name,children,locationUrl}) {
    const classes = useStyles()    
    
    const curUser = name === curName ? classes.curUser : null
    const admin = name === 'admin' ? classes.admin : null
    const otherUser = (name !== 'admin' && name !==  curName)  ? classes.otherUser : null
    const location = locationUrl ? classes.location : null

    return (
            <Paper className={`${classes.paper} ${curUser} ${otherUser} ${admin} ${location}`} >
                {children}
            </Paper>
    )
}
