$(function() {

  App.Views.HelloWorldOne = Backbone.View.extend({
    
    template : $("#template-HelloWorld").html(),

    render: function() {
      var vars = {
        helloWorldNumber: 1
      }
      var $output = _.template(this.template, vars) 
      this.$el.append($output)
    }

  })

})
