var React = require('react');
var ReactDOM = require('react-dom');

var AboutComponent = React.createClass({displayName: "AboutComponent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "About")
    
      )
    );
  }
});

module.exports = AboutComponent;