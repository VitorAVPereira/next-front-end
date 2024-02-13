import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position='static' color='secondary'>
        <Toolbar>
            <Typography variant='h4' color='primary'>OREGON</Typography>
        </Toolbar>
    </AppBar>
  )
}
