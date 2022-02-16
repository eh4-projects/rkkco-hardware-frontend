import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { SideBarItems } from '../../config/sidebar-items.config';
import { isAllowed } from '../../helpers/isAllowed.helper';
import { AuthContextAPI } from '../contexts/auth.context';
import { FiChevronDown } from 'react-icons/fi'

const Sidebar = () => {
    let location = useLocation();
    const { auth, } = useContext(AuthContextAPI);
    let history = useHistory();

    return (
        <div className="sidebar-main">
                {SideBarItems.map((e, index) => {
                    return (
                        isAllowed(e.allowed, auth.userType) ?
                            e.subItems && e.subItems.length > 0 ?
                                <div className="accordion" id="accordionExample" key={index}>
                                    <div id="headingOne">
                                        <div data-toggle="collapse" data-target="#collapseOne">
                                            <div className="row sidebar-div">
                                                <div className="col-md-3">
                                                    <e.icon className="sidebar-icon" />
                                                </div>
                                                <div className="sidebar-label col-md-8" >
                                                    <p className="sidebar-name-text">{e.displayName}</p>
                                                </div>
                                                <FiChevronDown className="drop-down-icons" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" >
                                        <div className="sub-menu">
                                            {e.subItems.map((item, i) => {
                                                return (
                                                    <div className={`row sidebar-div ${item.link === location.pathname ? 'sidebar-item-active' : ''}`} key={i} onClick={()=>history.push(item.link)}>
                                                        <div className="col-md-3">
                                                            <item.icon className="sidebar-icon" />
                                                        </div>
                                                        <div className="col-md-9" className="sidebar-label" >
                                                            <p className="sidebar-name-text">{item.displayName}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                :
                                 <div key={index} className={`row sidebar-div ${e.link === location.pathname ? 'sidebar-item-active' : ''}`} onClick={()=>history.push(e.link)}>
                                    <div className="col-md-3 col-lg-2">
                                        <e.icon className="sidebar-icon" />
                                    </div>
                                    <div className="col-md-9 col-lg-10 sidebar-label" >
                                        <p className="sidebar-name-text" >{e.displayName}</p>
                                    </div>
                                </div> 
                                :
                            null
                    );
                })}
        </div>
    );
};

export { Sidebar };