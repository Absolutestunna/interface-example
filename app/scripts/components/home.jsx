var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');



var HomeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
});

module.exports = HomeComponent;
