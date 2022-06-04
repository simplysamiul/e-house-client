import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { FaQuran } from 'react-icons/fa';
import {BsWatch, BsPhone} from 'react-icons/bs';
import {MdMonitor} from 'react-icons/md';
import {AiOutlineCamera} from 'react-icons/ai';
import {BiRun} from 'react-icons/bi';
import {FaBabyCarriage} from 'react-icons/fa';
import {GiLaptop, GiSofa, GiSchoolBag, GiMailShirt, GiLipstick} from 'react-icons/gi';
import '../../styles/Menubar.css'

export default function FullCatagories({text, icon}) {
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
            <Link to="/catagory/watch"><BsWatch className='catagories-drawer-icon' /> Watch</Link>
            <Link to="/catagory/monitor"><MdMonitor className='catagories-drawer-icon' /> Tv/Monitor</Link>
            <Link to="/catagory/bages"><GiSchoolBag className='catagories-drawer-icon' />Bages</Link>
            <Link to="/catagory/laptop"><GiLaptop className='catagories-drawer-icon' />Laptop</Link>
          </div>
          <div>
            <Link to="/catagory/sports"><BiRun className='catagories-drawer-icon' /> Sports Outdoor</Link>
            <Link to="/catagory/camera"><AiOutlineCamera className='catagories-drawer-icon'/> Camera</Link>
            <Link to="/catagory/furniture"><GiSofa className='catagories-drawer-icon' />Furnitures</Link>
            <Link to="/catagory/phone"><BsPhone className='catagories-drawer-icon' /> Phone</Link>
          </div>
          <div>
            <Link to="/catagory/baby"><FaBabyCarriage className='catagories-drawer-icon' />Baby &amp; Toy</Link>
            <Link to="/catagory/manfashion"><GiMailShirt className='catagories-drawer-icon' />Men's Fashion</Link>
            <Link to="/catagory/cosmatic"><GiLipstick className='catagories-drawer-icon' />Cosmatic</Link>
            <Link to="/catagory/religionsitem"><FaQuran className='catagories-drawer-icon' /> Religions Items</Link>
          </div>
        </div>
      </List>
    </Box>
  );
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button title='all category' className='more-items-btn' onClick={toggleDrawer(anchor, true)}>{text} {icon}</button>
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