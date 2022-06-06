import React from 'react';
import { Container,  Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import CustomeMenuDrawer from './CustomeMenuDrawer';
import { useSelector } from 'react-redux';
import { BiMenuAltLeft } from 'react-icons/bi';
import '../../styles/Menubar.css';

const CustomeMenu = () => {
    const cartList = useSelector((state) => state.cart);
    return (
        <div className='custome-menu-area'>
            {['lg'].map((expand) => (
                    <Navbar sticky="top" key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Badge color="error" badgeContent={cartList.length} showZero>
                            <CustomeMenuDrawer />
                        </Badge>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 menu-items">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/newproducts">New Products</NavLink>
                            <NavLink to="/bestsales">Best Sales</NavLink>
                            <NavLink to="/shop">Shop</NavLink>
                            <NavDropdown
                                className='inside-about'
                                title="About-us"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}>
                               <Link className='border-bottom' to="/faq">FAQ</Link>
                               <Link className='border-bottom' to="/policy">POLICY</Link>
                               <Link className='border-bottom' to="/conditions">CONDITIONS</Link>
                            </NavDropdown>
                            <NavLink to="/contactus">Contact Us</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                    </Navbar>
            ))}
        </div>
    );
};

export default CustomeMenu;