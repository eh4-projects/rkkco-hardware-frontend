import { get } from 'lodash';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { defaultRoutes } from '../../config/default-route.config';
import { userTypes } from '../../config/user-type.config';
import { AuthContextAPI } from '../contexts/auth.context';

const Navbar = () => {
    const { auth } = useContext(AuthContextAPI);

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light stock-navbar" style={{ zIndex: 100, position: "fixed"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://github.com">R.K. Kulathissa Co.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://github.com">Home <span className="sr-only">(current)</span></a>
                            </li>
                            {auth && auth.isLogged &&
                                (auth.userType === userTypes.Admin || auth.userType === userTypes.BoothManager || auth.userType === userTypes.OcMember) ? <li className="nav-item">
                                <Link className="nav-link" to={auth.userType === userTypes.BoothManager ? "/chat" : defaultRoutes[get(auth, "userType", "")]}>Dashboard</Link></li> : null}
                            {auth && auth.isLogged ?
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com">Link</a>
                                </li>
                                : null
                            }
                            {auth && auth.isLogged ?
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="https://github.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="https://github.com">Action</a>
                                        <a className="dropdown-item" href="https://github.com">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="https://github.com">Something else here</a>
                                    </div>
                                </li>
                                : null
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export { Navbar };
