import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';
import AddedPrtoductList from './AddedPrtoductList';
import emptyImg from '../../assets/empty-cart.png';
import '../../styles/Menubar.css';

export default function CustomeMenuDrawer({icon}) {
  const [state, setState] = React.useState({
    left: false
  });

  // get added product
  const addedProducts = useSelector((state) => state.cart);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{icon}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {addedProducts.length === 0 
            ?<div className='empty-cart'>
              <h1>Your cart is empty</h1>
              <img src={emptyImg} alt="" />
            </div>
            :<div>
            {
              addedProducts.map((addedProduct)=> <AddedPrtoductList 
              key={addedProduct._id}
              addedProduct={addedProduct}
              /> )
            }
            </div>}

          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};