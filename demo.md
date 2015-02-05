/*
Title: jQuery Flycart live demo
Description: jQuery Flycart live demo
*/

<link rel="stylesheet" href="/css/flycart.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
<script src="/js/flycart.js"></script>
<script src="/js/flycart-demo.js"></script>

## Flycart

Flycart is a jQuery plugin that animate cart operations.

Features:

  * Three use cases: multiadd, unary, removable
  * Callbacks on add and remove item
  * Customizable animated object

**Demo 1:** (multiadd: add some items to cart)

<a class="js-cart-target flycart-target" href="#">
  Cart: <span class="js-cart-counter">0</span>
</a>

<div
  class="js-cart-control flycart-source"
  data-role="source"
  data-count="1"
  >Add to cart 1 item
</div>

<div
  class="js-cart-control flycart-source"
  data-role="source"
  data-count="10"
  >Add to cart 10 items
</div>

<div
  class="js-cart-control flycart-source"
  data-role="source"
  data-count="-1"
  >Remove 1 item
</div>

<div style="margin:50px;"></div>


**Demo 2:** (unary: you cat add only one item of each type to cart)

<a class="js-cart-target-unary flycart-target" href="#">
  Cart: <span class="js-cart-counter">0</span>
</a>

<div
  class="js-cart-control-unary flycart-source"
  data-role="source"
  data-count="1"
  >Add first item
</div>

<div
  class="js-cart-control-unary flycart-source"
  data-role="source"
  data-count="1"
  >Add second item
</div>

<div
  class="js-cart-control-unary flycart-source"
  data-role="source"
  data-count="1"
  >Add third item
</div>

<div
  class="js-cart-control-unary flycart-source"
  data-role="source"
  data-count="1"
  data-incart="1"
  >Add fourth item (you can't)
</div>

<div style="margin:50px;"></div>

**Demo 3:** (removable: add and remove items per one button)

<a class="js-cart-target-removable flycart-target" href="#">
  Cart: <span class="js-cart-counter">0</span>
</a>

<div
  class="js-cart-control-removable flycart-source"
  data-role="source"
  data-count="1"
  >Add and remove 1 item
</div>

<div
  class="js-cart-control-removable flycart-source"
  data-role="source"
  data-count="10"
  >Add and remove 10 items
</div>

<div
  class="js-cart-control-removable flycart-source"
  data-role="source"
  data-count="100"
  >Add and remove 100 items
</div>


<div style="margin:30px;"></div>

## Setup

Add CSS in `<head>` section:

    <link rel="stylesheet" href="/css/flycart.css" type="text/css" />

or add `js-flycart.styl` in your [Stylus](http://en.wikipedia.org/wiki/Stylus_(stylesheet_language)) preprocessor stylessheet:

    @import "js-flycart.styl"

Then, before your closing `<body>` tag add:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script src="/js/flycart.js"></script>

JavaScript:

    $(function() {
      var fc_options = {};
      $().flycart(fc_options);
    });

## Settings & Callbacks

| Option              | Description                                  | Default value                   |
| ------------------- |:--------------------------------------------:| -------------------------------:|
| controlSelector     | Button for add or remove item from cart      | '.js-cart-control'              |
| sourceSelector      | Animated object start position               | '[data-role="source"]'          |
| target              | Animated object end position                 | $('.js-cart-target')            |
| type                | Type of cart (multiadd, unary, removable)    | 'multiadd'                      |
| animatedObject      | Animated object for adding to cart           | function(){...}, see code below |
| removedObject       | Animated object for removing from cart       | function(){...}, see code below |
| onCompleteAnimation | Callback on complete add animation           | $.noop()                        |
| onCompleteRemove    | Callback on complete remove animation        | $.noop()                        |
| animatedProperties  | CSS properties for animated object           | {opacity: 0.8}                  |
| speed               | Animation spedd (add)                        | 500                             |
| speedRemove         | Animation spedd (remove)                     | 400                             |

`animatedObject` and `removedObject` are anonymous functions that init animated object as DOM element. `animatedObject` example:

    animatedObject = function($source) {
      var $animatedObject = $('<div class="flycart-animated-add"></div>');
      var left = $source.offset().left;
      var top = $source.offset().top;
      var width = $source.outerWidth();
      var height = $source.outerHeight();
      $animatedObject.css({top: top-1, left: left-1, width: width, height: height});
      $('html').append($animatedObject);
      return $animatedObject;
    }

You can specify your own animated object.

## Another site live demo

[Mebelium](http://www.mebelium.ru/store/set/20-spalnia-provans-1)