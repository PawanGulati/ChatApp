import React from 'react'
import { Container, Grid, TextField, Button,makeStyles,withWidth, Fab } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme=>({
    button:{
        margin:0,
        [theme.breakpoints.down('sm')]:{
            margin:theme.spacing(1)
        }
    },
    container:{
        paddingTop:'10px',
        background:'rgba(245, 0, 87,.2)',
    }
}))

export default withWidth()(function ChatFoot(props) {
    const classes = useStyles()
    const {width} = props
    
    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={8}>
                    <TextField 
                        fullWidth 
                        variant='outlined' 
                        name='message' 
                        value={props.message} 
                        color='secondary'
                        autoFocus
                        autoComplete='off' 
                        onChange={(e)=>{props.inputHandler(e)}}
                        onKeyPress={(e)=>e.key==='Enter'?props.send(e):null} 
                        style={{background:'rgba(245, 0, 87,.1)'}} 
                    />
                </Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <Fab 
                        size={width==='xs'||width==='sm'?'small':'large'} 
                        color="secondary" 
                        aria-label="add" 
                        className={classes.button}
                        onClick={(e)=>{props.send(e)}}
                    >
                        <SendIcon />
                    </Fab>
                </Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <Fab 
                        size={width==='xs'||width==='sm'?'small':'large'} 
                        color="primary" 
                        aria-label="add" 
                        className={classes.button}
                        onClick={(e)=>{props.location(e)}}
                    >
                        <LocationOnIcon />
                    </Fab>
                </Grid>
            </Grid>
        </Container>
    )
})