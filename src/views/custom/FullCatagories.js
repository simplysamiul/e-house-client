import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaQuran } from 'react-icons/fa';
import {BsWatch, BsPhone} from 'react-icons/bs';
import {MdMonitor} from 'react-icons/md';
import {AiOutlineCamera} from 'react-icons/ai';
import {BiRun} from 'react-icons/bi';
import {FaBabyCarriage} from 'react-icons/fa';
import {GiLaptop, GiSofa, GiSchoolBag, GiMailShirt, GiLipstick} from 'react-icons/gi';
import '../../styles/Menubar.css'

export default function FullCatagories() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {return;}
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <h1 className="drawer-categories-header">Categories</h1>
        <div className="drawer-categories-section">
          <div>
            <Link to=""><BsWatch className='catagories-drawer-icon' /> Watch</Link>
            <Link to=""><MdMonitor className='catagories-drawer-icon' /> Tv/Monitor</Link>
            <Link to=""><GiSchoolBag className='catagories-drawer-icon' />Bages</Link>
            <Link to=""><GiLaptop className='catagories-drawer-icon' />Laptop</Link>
          </div>
          <div>
            <Link to=""><BiRun className='catagories-drawer-icon' /> Sports Outdoor</Link>
            <Link to=""><AiOutlineCamera className='catagories-drawer-icon'/> Camera</Link>
            <Link to=""><GiSofa className='catagories-drawer-icon' />Furnitures</Link>
            <Link to=""><BsPhone className='catagories-drawer-icon' /> Phone</Link>
          </div>
          <div>
            <Link to=""><FaBabyCarriage className='catagories-drawer-icon' />Baby &amp; Toy</Link>
            <Link to=""><GiMailShirt className='catagories-drawer-icon' />Men's Fasion</Link>
            <Link to=""><GiLipstick className='catagories-drawer-icon' />Cosmatic</Link>
            <Link to=""><FaQuran className='catagories-drawer-icon' /> Relihions Items</Link>
          </div>
        </div>
      </List>
    </Box>
  );
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className='more-items-btn' onClick={toggleDrawer(anchor, true)}>More Catagories <AiOutlinePlusCircle /></button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};