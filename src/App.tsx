import { useEffect, useState } from 'react';
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
import useAjax from './hooks/useAjax';

import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { deleteProducts, fetchProducts } from './store/reducers/products';

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
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.product);
  const alert = useAppSelector((state) => state.products.alert)
  
  // vérifie l'état de la BDD et met à jour
  useEffect(() => {
    dispatch(fetchProducts());
  },
  [dispatch])  


const handleClickDelete = (id) => () => {
  dispatch(deleteProducts(id));
}

const toReturn = products.map((item) => {
     return (
    
    <ListItem sx={{boxShadow: 1}} key={item._id}>
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
        <Button variant="outline" onClick={handleClickDelete(item._id)}>Delete</Button>
      </Stack>
    </ListItem>
    ) 
  })

  return (
    <> 
    {alert && <p>{alert.message}</p>}
    <h1> Available products</h1>
    <Button variant="contained">Add a product</Button>
    <List sx={{ width: '100%' }}>
      <Stack spacing={2}>{toReturn}</Stack>
    </List>
    </>

  )
}

export default App
