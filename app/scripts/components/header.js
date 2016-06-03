var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var HeaderComponent = React.createClass({displayName: "HeaderComponent",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.props.homeChange}, "Home"), 
        React.createElement("button", {onClick: this.props.aboutChange}, "About"), 
        React.createElement("button", {onClick: this.props.contactChange}, "Contact")
      )
    );
  }
});

module.exports = HeaderComponent;