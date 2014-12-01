# Backbone.js Apps Explained in Drupalese.md

## What is Backbone.js?
A JS library for building single page web apps... Or a sane way to keep your Javascript code from turning into spaghetti. Included in Drupal 8 but I'm not sure what for other than the fact D8 is supposed to be Services oriented and Backbone is a great choice for building apps on top of a "headless Drupal". The [Tonight Show website](http://www.nbc.com/the-tonight-show) is a cool example.  

- [Presentation on the Tonight Show project](https://austin2014.drupal.org/session/here%E2%80%99s-drupal-tonight-tonight-show-jimmy-fallon)
- [Headless Drupal group](https://groups.drupal.org/headless-drupal)
- [From August 2014, Josh Koenig's Working Code and Call to Action for a headless Drupal](https://www.getpantheon.com/blog/headless-drupal-demo-working-code-and-call-action)
- [From Lullabot: Copelandia is a proof of concept for a COPE oriented Drupal site, to decouple the Drupal Backend from the Frontend.](https://github.com/Lullabot/copelandia)
- [Recline.js: Backbone.js based framework for Apache Solr UI](http://okfnlabs.org/blog/2012/11/01/recline-js-search-demo.html), [Solarita.js is another example](https://github.com/jbarroso/solritajs)

@todo put a menu in the body and a content region 

## Example 1: Drupal index.php, meet index.html. Drupal hook_menu, meet Backbone Router.
- explore Anatomy of a backbone app 
 - The index.html to rule them all, like index.php
 - The start sequence
 - The global App object and its attached buddies
 - Explore the routes, explain the #route vs /route
 - Trigger some routes on the command line

## Example 2: Drupal Blocks, template.php, and Templates, meet Backbone Views and Underscore templates
- Lets make what is in the Routes into reusable components, Backbone Views
 - Move the Route body assignment into the render function that assigns to View.el, 
 - explore View.$el, 
 - assign View.el to the body from the Route
 - assign View.el to the body of another route  
- Now use a template to make the output more dynamic
 - Feed in the URL of the page into a template
 - print it in two Routes


## CCK, meet Backbone Forms for Backbone Models
Example 3: Declare a Model's schema, create associated edit and view pages.


## Views module, meet Backbone Collections
Example 4: Create a Backbone Collection and its associated View page.


## Bonus Magic: Two-way data binding
Example5: Change a Model in a Collection and watch the View update because it's listening for changes on the Model.


## Connect the Models to Drupal
Example 6: Use the Services module? `hook_menu` entries work well. 


## What about all these other JS frameworks?
... Backbone.js is the backbone, you build the body parts that attach, then you direct the movements
vs
... Ember.js/Angular.js is a whole body, you direct the movements

... Library
vs
... Framework

Often referred to as how "opinionated" something is. Backbone's strength is in not being opinionated, Ember's strength is in being opinionated.

Frameworks have steep learning curves (remember Drupal?) but promise productivity and best practices... Yet Google backed Angular, the leader in JS frontend frameworks, is still figuring it out. Angular 2 will be throwing out a lot of concepts and bringing in new ones, breaking compatibility with anything you write today. Your apps will be "born to die" in 12 months.  

[The State of JavaScript (frameworks) in 2015 (don't use frameworks)](http://www.breck-mckye.com/blog/2014/12/the-state-of-javascript-in-2015/) 
