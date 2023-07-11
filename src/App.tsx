import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import data from './data/data'
import { Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
console.log(data);
  const toReturn = data.map((item) => {
    return (
    <ListItem sx={{boxShadow: 1}} >
      <ListItemAvatar>
        <Avatar>
          <PhoneIphoneIcon  />
        </Avatar>
      </ListItemAvatar>
      <Stack spacing={2} direction={"row"} alignItems="center">
        <Typography noWrap >
          <p>{item.name}</p>
        </Typography>
        <p>{item.type}</p>
        <p style={{width: '50px'}}>{item.price}</p>
        <p >{item.warranty_years}</p>
        {item.available ? <Button variant="outline">Buy</Button> : <Button disabled> <DoNotDisturbAltIcon /> </Button>}
        <Button variant="outline">Update</Button>
        <Button onClick={handleOpen} variant="outline">Delete</Button>
      </Stack>
    </ListItem>
    )
  })

  return (
    <> 
    <h1> Available product</h1>
    <Button variant="contained">Add a product</Button>
    <List sx={{ width: '100%' }}>
      <Stack spacing={2}>{toReturn}</Stack>
    </List>
    <Modal 
      open={open}
      onClose={handleClose}
>
   <Box sx={{...style, width: 400 }}>
    <p>
      Etes vous sur de supprimer?
    </p>
    </Box>
    </Modal>
    </>

  )
}

export default App
