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
        background:'rgb(215,89,93,0.1)',
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
                        onClick={(e)=>{props.send(e)}}
                    >
                        <LocationOnIcon />
                    </Fab>
                </Grid>
            </Grid>
        </Container>
    )
})

// <Grid item xs={2}>
//                     <Button 
//                         variant='contained' 
//                         color="secondary" 
//                         style={{margin:'0 15px',height:'56px'}} 
//                         endIcon={<SendIcon/>}
//                         onClick={(e)=>{props.send(e)}}
//                         className={classes.button}    
//                         size='small'
//                     >{width!=='xs'||width==='sm'?`SEND`:null}</Button>
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Button 
//                         variant='contained' 
//                         color="secondary" 
//                         style={{margin:'0 15px',height:'56px'}} 
//                         endIcon={<LocationOnIcon/>}
//                         onClick={(e)=>{props.send(e)}}
//                         className={classes.button}
//                         size='small'

//                     >{width!=='xs'||width==='sm'?`LOCATION`:null}</Button>
//                 </Grid> 