var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

// home "page"
var HomePage = React.createClass({
  render: function() {
    return (
      <div className="homePage">
        <h1 className="homePageTitle">La Pizzeria!</h1>
        <img src="https://s-media-cache-ak0.pinimg.com/236x/b7/0f/1f/b70f1f6064f54ed3d56bc18738de3b51.jpg"/>
        <Link to="/order" className="button">ORDER</Link>
      </div>
    );
  }
});

module.exports = HomePage;