//3rd Party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var HeaderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div>
        <button className="success">Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    );
  }
});

module.exports = HeaderComponent;
