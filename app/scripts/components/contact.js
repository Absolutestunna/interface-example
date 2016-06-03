var React = require('react');
var ReactDOM = require('react-dom');

var ContactComponent = React.createClass({displayName: "ContactComponent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "Contact")
      
      )
    );
  }
});

module.exports = ContactComponent;