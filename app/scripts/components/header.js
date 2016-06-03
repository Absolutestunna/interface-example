var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var HeaderComponent = React.createClass({displayName: "HeaderComponent",
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("button", {className: "success"}, "Home"), 
        React.createElement("button", null, "About"), 
        React.createElement("button", null, "Contact")
      )
    );
  }
});

module.exports = HeaderComponent;