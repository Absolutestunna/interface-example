var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


//local components
var Header = require('./header.jsx');
var About = require('./about.jsx');
var Contact = require('./contact.jsx');
var Home = require('./home.jsx');



var InterfaceComponent = React.createClass({displayName: "InterfaceComponent",
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      router: this.props.router
    }
  },
  componentWillMount: function(){
    this.callback = (function(){
     this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  homeChange: function(){
    Backbone.history.navigate('', {trigger: true});
  },
  aboutChange: function(){
    Backbone.history.navigate('about', {trigger: true});
  },
  contactChange: function(){
    Backbone.history.navigate('contact', {trigger: true});
  },
  render: function(){
    var currentRoute;
    var routing = this.props.router;
    if (routing.current == 'home'){
      currentRoute = React.createElement(Home, null)
    } else if(routing.current == 'about'){
      currentRoute = React.createElement(About, null)
    } else if(routing.current == "contact"){
      currentRoute = React.createElement(Contact, null)
    }
    return (
      React.createElement("div", null, 
        React.createElement(Header, {
          aboutChange: this.aboutChange, 
          contactChange: this.contactChange, 
          homeChange: this.homeChange}
          ), 
        currentRoute
      )
    );
  }
});

module.exports = InterfaceComponent;