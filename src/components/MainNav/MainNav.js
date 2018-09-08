/**
 * Created by morgan on 9/3/18.
 */
import {Nav, NavItem} from 'react-bootstrap'
import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Technology from '../Technologies/Technology';
import './MainNav.css';

class MainNav extends React.Component {
    props;
    handleSelect(selectedKey, event) {
        event.preventDefault();
        alert("selected ${selectedKey}");
    }
    render(){
        return (
            <Nav bsStyle="pills" activeKey={1} onSelect={k => this.handleSelect(k)} className="mainNav">
                <BrowserRouter>
                    <NavItem eventKey={1} href="/home">

                    </NavItem>
                    <Link to="/technology">
                        <NavItem eventKey={2} title="Item">
                            NavItem 2 content
                        </NavItem>
                    </Link>
                    <NavItem eventKey={3} disabled>
                        NavItem 3 content
                    </NavItem>

                    <Route path="/technology" component={Technology} />
                </BrowserRouter>
            </Nav>
        );

    }
}
export default MainNav;