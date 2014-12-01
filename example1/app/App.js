$(function() {


  App = new (Backbone.View.extend({

    // Backbone App structure
    Models: {},
    Views: {},
    Collections: {},
    Router: {},

    start: function(){
      Backbone.history.start({pushState: false})
      Backbone.history.navigate('hello-world-1', {trigger: true})
    }

  }))


})
