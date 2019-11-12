import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Login</Link>
            <Link to='/friends'>Friends List</Link>
        </nav>
    )
}

export default Nav;