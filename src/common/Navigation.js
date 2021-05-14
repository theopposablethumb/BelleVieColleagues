import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    state = {
        open: false
    }

    openNav(e) {
        e.preventDefault();
        return this.state.open ? this.setState({open: false}) : this.setState({open: true});
    }

    render() {
        return (
            <div className="section teal">
                <button onClick={(e) => this.openNav(e)} className={this.state.open ? 'menu active' : 'menu close'}></button>
                <nav className={this.state.open ? 'open' : 'close'}>
                    <NavLink exact to="/">Confirmation Practices</NavLink>
                    <NavLink to="/reporting-hours">Reporting Hours</NavLink>
                    {/*<NavLink to="/annual-leave">Annual Leave</NavLink> */}
                    <NavLink to="/faqs">FAQs</NavLink>
                    <NavLink to="/policies">Policies</NavLink>
                    <NavLink to="/rota">Rota Prototype</NavLink>
                </nav>
            </div>
        )
    }
    
}

export default Navigation;