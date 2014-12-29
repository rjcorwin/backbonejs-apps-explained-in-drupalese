$(function() {

  App.Views.HelloWorldTwo = Backbone.View.extend({
    
    template : $("#template-HelloWorld").html(),

    render: function() {
      var vars = {
        helloWorldNumber: 2
      }
      var $output = _.template(this.template, vars) 
      this.$el.append($output)
    }

  })

})
