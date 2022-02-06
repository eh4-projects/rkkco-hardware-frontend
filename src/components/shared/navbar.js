import { get } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { defaultRoutes } from '../../config/default-route.config';
import { userTypes } from '../../config/user-type.config';
import { AuthContextAPI } from '../contexts/auth.context';
import { HiViewList } from 'react-icons/hi';
import { MdMessage, MdNotificationsActive } from 'react-icons/md';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Navbar = ({
    isTransparent = false
}) => {
    const { auth, setAuth } = useContext(AuthContextAPI);
    const [count, setCount] = useState(0);

    return (
        <div >
            <Navbars expand="lg" className="stock-navbar" style={{ zIndex: 100 }}>
                <Container fluid>
                    <Navbars.Brand href="#">R.K. Kulathissa Co.</Navbars.Brand>
                    <Navbars.Toggle aria-controls="NavbarsScroll" />
                    <Navbars.Collapse id="NavbarsScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} NavbarScroll >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action1">Lobby</Nav.Link>
                            <Nav.Link href="#action1">Stock Management</Nav.Link>
                            <Nav.Link href="#action1">Sales Point</Nav.Link>
                            <Nav.Link href="#action1">Quotation</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbars.Collapse>
                </Container>
            </Navbars>

            {/* <nav className={`navbar navbar-expand-md ${isTransparent ? 'navigation-clean-button-transparent' : 'navigation-clean-button'}`}>
                <div className="container-fluid">

                    <button data-toggle="collapse" className="navbar-toggler" data-target="#myNavbar">
                        <span className="sr-only">Toggle navigation</span><HiViewList className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link className="nav-link" to="./">Home</Link></li>
                            {auth && auth.isLogged &&
                                (auth.userType === userTypes.Admin || auth.userType === userTypes.BoothManager || auth.userType === userTypes.OcMember) ? <li className="nav-item">
                                <Link className="nav-link" to={auth.userType === userTypes.BoothManager ? "/chat" : defaultRoutes[get(auth, "userType", "")]}>Dashboard</Link></li> : null}
                            {auth && auth.isLogged ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="./lobby">Lobby</Link>
                                </li>
                                : null
                            }
                            {auth && auth.isLogged ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/quiz-zone" title="Goto Game Zone">Game Zone</Link>
                                </li>
                                : null
                            }
                        </ul>
                        <div className="my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                {auth && !auth.isLogged ?
                                    <span className="navbar-text actions">
                                        <Link className="mr-sm-2 login" to="/login" title="Login">Login</Link>
                                        <Link className="my-2 my-sm-0 login signup" to="/user-registration" title="Sign Up">Sign Up</Link>
                                    </span>
                                    :
                                    <span className="navbar-text actions">
                                        <Link className="login" to="/profile" title="View My Profile">{auth.firstName}</Link>
                                        <Link to="/chat" className="login" title="View Notifications"><MdNotificationsActive size={30} />
                                            {count ? <span className="badge badge-danger">{count}</span> : null}

                                        </Link>
                                        <a className="login" onClick={() => setAuth(false)} title="Logout"><RiLogoutBoxRLine size={30} /></a>
                                    </span>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div >
    );
};

export { Navbar };
