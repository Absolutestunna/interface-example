var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = Backbone.Router.extend({
  router: {
    '': 'home',
    'contact': 'contact',
    'about': 'about'
  },
  home: function(){
    var self = this;
    self.current = 'home';
  },
  about: function(){
    this.current = 'about';
  },
  contact: function(){
    this.current = 'contact';
  }
});


console.log('new router is', new Router());
module.exports = new Router();
