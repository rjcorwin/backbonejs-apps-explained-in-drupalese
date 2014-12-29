$(function() {

  App.Views.HelloWorldTwo = Backbone.View.extend({
    
    render: function() {
      this.$el.append("This is Hello World 2.")
    }

  })

})
