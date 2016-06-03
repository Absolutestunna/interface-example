var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');



var HomeComponent = React.createClass({displayName: "HomeComponent",
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "Home")
      )
    );
  }
});

module.exports = HomeComponent;