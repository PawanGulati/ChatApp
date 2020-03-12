import React from 'react'
// import {}  

import {makeStyles, Typography, Avatar} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{
        background:'#272C34',
        height:'100%',
        color:'white',
        fontFamily:'Barlow',
        padding:'2rem'
    },
    roomText:{
        fontSize:'1.7rem',
        letterSpacing:'2px',
        textAlign:'center',
    },
    userName:{
        fontSize:'1rem',
        lineHeight:'250%',
        overflowY:'auto',
        marginLeft:'1rem',
        textTransform:'capitalize',
        
    },
    usersVisibility:{
        [theme.breakpoints.down('sm')]:{
            visibility:'hidden'
        }
    }
}))

export default function SideBar({room,users}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h3' className={classes.roomText}>#{room}</Typography>
            {users.map((user,i)=>(
                <div key={i} style={{display:'flex',marginTop:'1rem'}} className={classes.usersVisibility}>
                    <Avatar style={{background:`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`}}>{user.name.slice(0,1).toUpperCase()}</Avatar>
                    <Typography className={classes.userName}>{user.name}</Typography>
                </div>
            ))}
        </div>
    )
}
