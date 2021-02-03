import React from 'react';
import { NavLink } from 'react-router-dom';

let Navigation = () => {
    return (
        <div className="section teal">
            <nav>
                <NavLink exact to="/">Confirmation Practices</NavLink>
                <NavLink to="/faqs">FAQs</NavLink>
                <NavLink to="/policies">Policies</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;