var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                <p>test</p>
            </li>
        </ul>
    )
}

module.exports = Nav;
