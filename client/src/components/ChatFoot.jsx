import React from 'react'
import { Container, Grid, TextField, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

export default function ChatFoot() {
    return (
        <Container style={{padding:'10px',height:'10%'}}>
            <Grid container>
                <Grid item xs={10}>
                    <TextField fullWidth variant='outlined'/>
                </Grid>
                <Grid item>
                    <Button variant='contained' color="secondary" style={{margin:'0 15px',height:'56px'}} endIcon={<SendIcon/>}>SEND</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
