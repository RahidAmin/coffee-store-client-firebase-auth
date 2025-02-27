import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/signin'>SignIn</NavLink>
        </div>
    );
};

export default Header;