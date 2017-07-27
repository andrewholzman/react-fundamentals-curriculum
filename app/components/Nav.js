var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
var Input = require('./Input');

function Nav() {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li>
                    <NavLink exact activeClassName='active' to='/'>React Weather</NavLink>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <div className="nav-input">
                    <Input />
                </div>
            </ul>
        </nav>
    )
}

module.exports = Nav;
