$(function() {

  "use strict";

  var fc_options_demo_1 = {
    onCompleteAnimation: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    },
    onCompleteRemove: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    }
  }

  var fc_options_demo_2 = {
    controlSelector: '.js-cart-control-unary',
    sourceSelector: '[data-role="source"]',
    target: $('.js-cart-target-unary'),
    type: 'unary',
    onCompleteAnimation: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    },
    onCompleteRemove: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    }
  }

  var fc_options_demo_3 = {
    controlSelector: '.js-cart-control-removable',
    sourceSelector: '[data-role="source"]',
    target: $('.js-cart-target-removable'),
    type: 'removable',
    onCompleteAnimation: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    },
    onCompleteRemove: function($instanse, $target) {
      var $counter = $target.find('.js-cart-counter');
      $counter.html($target.attr('data-counter'));
    }
  }

  // Demo 1
  $().flycart(fc_options_demo_1);

  // Demo 2
  $().flycart(fc_options_demo_2);

  // Demo 3
  $().flycart(fc_options_demo_3);


});