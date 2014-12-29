# Backbone.js Apps Explained in Drupalese

## What is Backbone.js?
A JS library for building single page web apps... Or a sane way to keep your Javascript code from turning into spaghetti. Included in Drupal 8 core for organizing some Javascript code in the theming layer but it also works great as a replacement for the theming layer when used in a Single-Page-Webapp in the frontend and "headless Drupal" in the backend. The [Tonight Show website](http://www.nbc.com/the-tonight-show) is a cool example of this.  

- [Presentation on the Tonight Show project](https://austin2014.drupal.org/session/here%E2%80%99s-drupal-tonight-tonight-show-jimmy-fallon)
- [Headless Drupal group](https://groups.drupal.org/headless-drupal)
- [From August 2014, Josh Koenig's Working Code and Call to Action for a headless Drupal](https://www.getpantheon.com/blog/headless-drupal-demo-working-code-and-call-action)
- [From Lullabot: Copelandia is a proof of concept for a COPE oriented Drupal site, to decouple the Drupal Backend from the Frontend.](https://github.com/Lullabot/copelandia)
- Backbone works great for other things like Apache Solr: [Recline.js: Backbone.js based framework for Apache Solr UI](http://okfnlabs.org/blog/2012/11/01/recline-js-search-demo.html), [Solarita.js is another example](https://github.com/jbarroso/solritajs)


## Part 1: Drupal index.php, meet index.html. Drupal hook_menu, meet Backbone Router.

### Example 1
- The index.html to rule them all, like index.php
- The bootstrap sequence and the App object

### Example 2
- Explore Backbone Router, similar to hook_menu
- Create two Routes
- Notice `#` is similar to `?q=path`


## Part 2: Drupal Blocks, template.php, and PHP Templates, meet Backbone Views and Underscore templates

### Example 1
- Lets make what is in the Routes into reusable components using Backbone Views
 - Move the Route body assignment into the render function that assigns to View.el, 
 - explore View.$el, 
 - assign View.el to the body from the Route
 - assign View.el to the body of another route  

### Example 2
- Now use an underscore template


## @todo Example 3: CCK, meet Backbone Forms for Backbone Models
- Declare a Model's schema, create associated edit and view pages.


## @todo Example 4: Queries in the Views module, meet Backbone Collections
- Create a Backbone Collection and its associated View page.


## @todo Example 5: Review, lets introduce some more regions
- ...


## @todo Example 6: Connect the Models to Drupal
Use the Services module? `hook_menu` entries work well. 

