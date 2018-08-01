import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav () {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact className="nav-link" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" className="nav-link" activeClassName="active">
                        Add Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" className="nav-link" activeClassName="active">
                        Leaderboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
