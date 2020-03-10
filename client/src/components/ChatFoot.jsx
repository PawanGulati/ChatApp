import React from 'react'
import { Container, Grid, TextField, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

export default function ChatFoot(props) {
    return (
        <Container style={{padding:'10px',height:'10%'}}>
            <Grid container>
                <Grid item xs={10}>
                    <TextField fullWidth variant='outlined' name='message' value={props.message} autoComplete='off' onChange={(e)=>{props.inputHandler(e)}}/>
                </Grid>
                <Grid item>
                    <Button 
                        variant='contained' 
                        color="secondary" 
                        style={{margin:'0 15px',height:'56px'}} 
                        endIcon={<SendIcon/>}
                        onClick={(e)=>{props.send(e)}}    
                    >SEND</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
