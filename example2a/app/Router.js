$(function() {
  App.Router = new (Backbone.Router.extend({

    routes: {
      'hello-world-1'         : 'helloWorldOne', 
      'hello-world-2'        : 'helloWorldTwo'
    },

    helloWorldOne: function() {
      var helloWorldOne = new App.Views.HelloWorldOne()
      helloWorldOne.render()
      $('#region-body').html(helloWorldOne.el)
    },

    helloWorldTwo: function() {
      var helloWorldTwo = new App.Views.HelloWorldTwo()
      helloWorldTwo.render()
      $('#region-body').html(helloWorldTwo.el)
       
    }

  }))
})
