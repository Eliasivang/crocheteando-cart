import { Box, Divider, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function NavListDrawer() {
  return (
    <Box sx={{width: "100%"}}>
        <nav>
            <List component="">
                <ListItem>
                    <ListItemText primary="Productos"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="Contacto"/>
                </ListItem>
            </List>
            </nav>

    </Box> 
  )
}

export default NavListDrawer;