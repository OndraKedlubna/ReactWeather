var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Example</h1>
            <p>Examples to try:</p>
            <ol>
                <li>
                    <Link to='/?location=Karlovy Vary'>Karlovy Vary</Link>
                </li>
                <li>
                    <Link to='/?location=Praha'>Praha</Link>
                </li>
            </ol>
        </div>
    )
};


module.exports = Example;