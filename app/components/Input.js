var React = require('React');
var Link = require('react-router-dom').Link;

class Input extends React.Component{
    render() {
        return (
            <div className="input-container">
                <div className="homeform-group">
                    <input className="form-control" type="text" placeholder="Enter a City and State"/>
                    <Link className="btn btn-success" to={'/'} className="btn btn-success">Get Weather</Link>
                </div>


            </div>
        )
    }
}

module.exports = Input;