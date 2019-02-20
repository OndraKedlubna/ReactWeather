var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About component</h3>
//         )
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>To jsem zpatlal. Je to s reactem. Snad je to na tom videt.</p>
            <p>Pouzite knihovny</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - framework na javascript
                </li>
                <li>
                    <a href="https://openweathermap.org/">Open weather map</a> - api with weather
                </li>
            </ul>
        </div>
    )
};

module.exports = About;