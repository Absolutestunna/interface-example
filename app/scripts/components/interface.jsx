//3rd Party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Header = require('./header.jsx');
var About = require('./about.jsx');
var Contact = require('./contact.jsx');
var Home = require('./home.jsx');


var InterfaceComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var currentRoute;
    var routing = this.props.router;
    console.log('routing current', routing);
    if (routing.current == 'home'){
      currentRoute = <Home />
    }
    return (
      <div>
        <Header />
        {currentRoute}
      </div>
    );
  }
});

module.exports = InterfaceComponent;
