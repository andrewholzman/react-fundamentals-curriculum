var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var Input = require('./Input');

class App extends React.Component{
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="nav-container">
                        <Nav/>                
                    </div>

                    <div className='home-container'style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                        <h1>Enter a City and State</h1>
                        <Input />
                    </div>

                </div>

            </Router>
        )
    }
}

module.exports = App;