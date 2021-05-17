import React from 'react';
import { Link } from 'react-router-dom';

let Navigation = (props) => {

    let activeLink = (url) => {
        if (props.path === url) {
            return true;
        }
    }

    return (
        <div className="section border-bottom">
            <div className="tabs">
                <Link to={"/confirmation-practices"} className={activeLink('/confirmation-practices') ? 'active' : null}>Questions</Link>
                {props.circle ? <Link to="/leadership-confirmation-practices" className={activeLink('/leadership-confirmation-practices') ? 'active' : null}>Leadership Question</Link> : null}
                <Link to={"/completed-confirmation-practices"} className={activeLink('/completed-confirmation-practices') ? 'active' : null}>Previous Answers</Link>
                {props.circle ? <Link to="/edit-confirmation-practices" className={activeLink('/edit-confirmation-practices') ? 'active' : null}>Admin Confirmation Practices</Link> : null}
                {props.circle ? <Link to="/review-team-confirmation-practices" className={activeLink('/review-team-confirmation-practices') ? 'active' : null}>Review Teams</Link> : null}
            </div>
        </div>
    )
}

export default Navigation;