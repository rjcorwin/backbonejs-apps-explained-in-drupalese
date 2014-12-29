$(function() {
  App.Router = new (Backbone.Router.extend({

    routes: {
      'hello-world-1'         : 'helloWorldOne', 
      'hello-world-2'        : 'helloWorldTwo'
    },

    helloWorldOne: function() {
      $('#region-body').html("This is Hello World 1.")
    },

    helloWorldTwo: function() {
      $('#region-body').html("This is Hello World 2.")
    }

  }))
})
