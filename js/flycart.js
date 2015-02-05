(function ($, window) {

    $.fn.flycart = function(options) {
      // Public variables
      var settings = $.extend({
        controlSelector: '.js-cart-control',
        sourceSelector: '[data-role="source"]',
        target: $('.js-cart-target'),
        animatedObject: function($source) {
          var $animatedObject = $('<div class="flycart-animated-add"></div>');
          var left = $source.offset().left;
          var top = $source.offset().top;
          var width = $source.outerWidth();
          var height = $source.outerHeight();
          $animatedObject.css({top: top-1, left: left-1, width: width, height: height});
          $('html').append($animatedObject);
          return $animatedObject;
        },
        removedObject: function($source) {
          var $animatedObject = $('<div class="flycart-animated-remove"></div>');
          var left = $source.offset().left;
          var top = $source.offset().top;
          var width = $source.outerWidth();
          var height = $source.outerHeight();
          $animatedObject.css({top: top-1, left: left-1, width: width, height: height});
          $('html').append($animatedObject);
          return $animatedObject;
        },
        onCompleteAnimation: $.noop(),
        onCompleteRemove: $.noop(),
        animatedProperties: {opacity: 0.8},
        speed: 500,
        speedRemove: 400,
        type: 'multiadd' // 'removable', 'multiadd', 'unary'
        }, options);

      $(settings.controlSelector).live('click tap', function(event){
        event.preventDefault();
        event.stopPropagation();

        var $instanse = $(this);
        var $target = settings.target;
        var $source;

        var count = $instanse.attr('data-count') | 0;
        var delta;

        switch(settings.type) {
          case 'multiadd':
            delta = count;
            break;
          case 'unary':
            var incart = $instanse.attr('data-incart') | 0;
            if(incart == 0) {
              delta = 1;
              $instanse.attr('data-incart', 1);
            } else {
              return;
            }
            break;
          case 'removable':
            var isadd = $instanse.attr('data-isadd') | 0;
            if(isadd == 0) {
              delta = count;
              $instanse.attr('data-isadd', 1);
            } else {
              delta = -count;
              $instanse.attr('data-isadd', 0);
            }
        }

        var _totalCounter = $target.attr('data-counter') | 0;
        $target.attr('data-counter', _totalCounter + delta)

        if ($instanse.filter(settings.sourceSelector).length) {
          $source = $instanse;
        } else if($instanse.parent().is(settings.sourceSelector)) {
          $source = $instanse.parent();
        } else {
          $source = $instanse.parentsUntil(settings.sourceSelector).parent();
        }

        if (delta > 0) {
          var $animatedObject = settings.animatedObject($source);

          var animatedProperties = $.extend(settings.animatedProperties, {
              top: $target.offset().top,
              left: $target.offset().left,
              width: $target.outerWidth(),
              height: $target.outerHeight()
            }
          );

          $animatedObject.animate(animatedProperties, settings.speed, function(){
            $(this).remove();
            if(settings.onCompleteAnimation != $.noop()) settings.onCompleteAnimation($instanse, $target);
          });
        } else if (delta < 0) { // Remove
          var $animatedObject = settings.removedObject($target);
          var animatedProperties = {
            top: $target.offset().top + $target.outerHeight(),
            left: $target.offset().left + $target.outerWidth(),
            width: 0,
            height: 0
          }

          $animatedObject.animate(animatedProperties, settings.speedRemove, function(){
            $(this).remove();
            if(settings.onCompleteRemove != $.noop()) settings.onCompleteRemove($instanse, $target);
          });


        }

      });


    };



}(jQuery, window));