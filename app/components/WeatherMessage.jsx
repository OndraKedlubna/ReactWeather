var React = require('react');

var WeatherMessage = ({temperature, location}) => {
    return (
        <div>
            <h3>It is {temperature} in {location}</h3>
        </div>
    )
};

module.exports = WeatherMessage;