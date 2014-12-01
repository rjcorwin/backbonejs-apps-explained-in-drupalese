# Backbone.js Apps Explained in Drupalese

## What is Backbone.js?
A JS library for building single page web apps... Or a sane way to keep your Javascript code from turning into spaghetti. Included in Drupal 8 but I'm not sure what for other than the fact D8 is supposed to be Services oriented and Backbone is a great choice for building apps on top of a "headless Drupal". The [Tonight Show website](http://www.nbc.com/the-tonight-show) is a cool example.  

- [Presentation on the Tonight Show project](https://austin2014.drupal.org/session/here%E2%80%99s-drupal-tonight-tonight-show-jimmy-fallon)
- [Headless Drupal group](https://groups.drupal.org/headless-drupal)
- [From August 2014, Josh Koenig's Working Code and Call to Action for a headless Drupal](https://www.getpantheon.com/blog/headless-drupal-demo-working-code-and-call-action)
- [From Lullabot: Copelandia is a proof of concept for a COPE oriented Drupal site, to decouple the Drupal Backend from the Frontend.](https://github.com/Lullabot/copelandia)
- [Recline.js: Backbone.js based framework for Apache Solr UI](http://okfnlabs.org/blog/2012/11/01/recline-js-search-demo.html), [Solarita.js is another example](https://github.com/jbarroso/solritajs)


## Example 1: Drupal index.php, meet index.html. Drupal hook_menu, meet Backbone Router.
- explore Anatomy of a backbone app 
 - The index.html to rule them all, like index.php
 - The start sequence
 - The global App object and its attached buddies
 - Explore the routes, explain the #route vs /route
 - Trigger some routes on the command line

## Example 2: Drupal Blocks, template.php, and Templates, meet Backbone Views and Underscore templates
- Example 2a: Lets make what is in the Routes into reusable components, Backbone Views
 - Move the Route body assignment into the render function that assigns to View.el, 
 - explore View.$el, 
 - assign View.el to the body from the Route
 - assign View.el to the body of another route  
- Example 2b: Now use a template to make the output more dynamic
 - Feed in the URL of the page into a template
 - print it in two Routes


## CCK, meet Backbone Forms for Backbone Models
@todo Example 3: Declare a Model's schema, create associated edit and view pages.


## Views module, meet Backbone Collections
@todo Example 4: Create a Backbone Collection and its associated View page.


## Review, lets introduce some more regions
@todo Example 5: ...

## Connect the Models to Drupal
@todo Example 6: Use the Services module? `hook_menu` entries work well. 

