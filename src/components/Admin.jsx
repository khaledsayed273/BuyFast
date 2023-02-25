import React, { useReducer } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';

function Admin() {

    const inetialstate = {
        firstName: "",
        lastName: "",
        password: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "reset":
                return action.payload
            default:
                return { ...state, [action.type]: action.payload }
        }
    }

    const [state, dispatch] = useReducer(reducer, inetialstate)

    const handleinput = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
    }

    const handlebtn = (e) => {
        e.preventDefault()
        console.log(state);
        dispatch({ type: "reset", payload: inetialstate })
    }

    const styleWidthInputs = {
        xs: "90%",
        sm: "80%",
        lg: "80%",
        xl: "50%"
    }


    return (
        <Container sx={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    '& .MuiTextField-root': { m: 1 },
                }}
            >
                <Typography component="form" variant='div' display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{
                    background: "#e4e4e4",
                    padding: "10px",
                    width: { xs: "90%", md: "80%", xl: "100%" },
                    height: "60%"
                }}>
                    <TextField
                        value={state.firstName}
                        onChange={handleinput}
                        label="First Name"
                        type="text"
                        name='firstName'
                        variant="outlined"
                        color="success"
                        sx={{ background: "white", borderRadius: '7px', width: styleWidthInputs }}

                    />
                    <TextField
                        value={state.lastName}
                        onChange={handleinput}
                        label="Last Name"
                        type="text"
                        name='lastName'
                        variant="outlined"
                        color="success"
                        sx={{ background: "white", borderRadius: '7px', width: styleWidthInputs }}
                    />
                    <TextField
                        value={state.password}
                        onChange={handleinput}
                        label="Password"
                        type="password"
                        name='password'
                        variant="outlined"
                        color="success"
                        sx={{ background: "white", borderRadius: '7px', width: styleWidthInputs }}
                    />
                    <Button onClick={handlebtn} type='submit' variant="contained" color="success" sx={{ width:styleWidthInputs , padding: "10px", fontWeight: "600", letterSpacing: "2px", fontSize: "17px", fontFamily: "unset", marginTop: "10px" }}>
                        Send
                    </Button>
                </Typography>
            </Box>
        </Container>

    )
}

export default Admin
