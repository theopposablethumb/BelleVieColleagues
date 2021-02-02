import React from 'react';
import { NavLink } from 'react-router-dom';

let Navigation = () => {
    return (
        <nav>
            <NavLink to='/'>Confirmation Practices</NavLink>
            <NavLink to='/faqs'>FAQs</NavLink>
        </nav>
    )
}

export default Navigation;