import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {Container, Paper,withStyles, Typography, Divider, TextField, Button} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = theme =>({
    container:{
        marginTop:'15%',
        textAlign:'center',
        fontFamily:'Barlow',
        color:'secondary'
    },
    paper:{
        height:'300px',
        padding:'15px',
        boxShadow:'0.1px 0.1px 10px #D7595D inset'
    },
    joinText:{
        fontWeight:700,
        color:'#D7595D',
        fontFamily:'Barlow',
    }
})
export default withStyles(styles)(class Join extends Component{
    state={
        name:'',
        room:''
    }

    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    render(){
        const {classes} = this.props
        return (
            <Container maxWidth='xs' className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' className={classes.joinText}>JOIN</Typography>
                    <Divider />
                    <Container>
                        <form className={classes.root} required autoComplete="off" >
                            <TextField 
                                id="standard-basic" 
                                label="UserName" 
                                fullWidth 
                                style={{marginTop:'32px'}}
                                color='secondary'
                                value={this.state.name}
                                name='name'
                                onChange={this.inputHandler}
                                required
                            />
                            <TextField 
                                id="standard-basic" 
                                label="RoomName" 
                                fullWidth 
                                style={{marginTop:'32px'}}
                                color='secondary'
                                value={this.state.room}
                                name='room'
                                onChange={this.inputHandler}
                                required
                            />
                            <Link to={`/Chat?name=${this.state.name}&room=${this.state.room}`} style={{textDecoration:'none '}}>
                                <Button 
                                    type='submit'
                                    variant='outlined' 
                                    color='secondary' 
                                    endIcon={<ExitToAppIcon/>} 
                                    style={{marginTop:'50px'}}
                                > JOIN </Button>
                            </Link>
                        </form> 
                    </Container>
                </Paper>
            </Container>
        )
    }
})
