import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';
import AddedPrtoductList from './AddedPrtoductList';
import emptyImg from '../../assets/empty-cart.png';
import { AiFillHeart  } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import '../../styles/Menubar.css';

export default function WishListProduct() {
  const [state, setState] = React.useState({
    left: false
  });

  // get added product
  const addedProducts = useSelector((state) => state.wish);

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
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><AiFillHeart className='wish-cart-list' /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <button className='added-produt-list-close' onClick={toggleDrawer(anchor, false)}><ImCross /></button>
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
              cartClick = "wish"
              /> )
            }
            </div>}

          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};