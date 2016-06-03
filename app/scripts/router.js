var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'contact': 'contact',
    'about': 'about'
  },
  home: function(){
    this.current = 'home';
  },
  about: function(){
    this.current = 'about';
  },
  contact: function(){
    this.current = 'contact';
  }
});


module.exports = new Router();
