(function() {
  $(function() {
    var $intro, introMax;
    $.window = $(window);
    $.body = $(document.body);
    $.window.data('originalTitle', document.title).on('blur', function() {
      return document.title = 'Hey! Where have you gone?';
    }).on('focus', function() {
      return document.title = $.window.data('originalTitle');
    });
    $.body.on('click', 'a[href^="#"]', function(event) {
      var target;
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        target = $(this.hash);
        if (!target.length) {
          target = $('[name=' + this.hash.slice(1)(+']'));
        }
        if (target.length) {
          event.preventDefault();
          return $('html,body').stop().animate({
            scrollTop: target.offset().top
          }, 600, function() {
            return location.hash = target.prop('id');
          });
        }
      }
    });
    $intro = $.body.find('.intro .intro__wrap');
    introMax = $.body.find('.intro');
    if (!Modernizr.touch) {
      $.window.on('scroll.intro', function() {
        var offset, transform;
        if ($.window.scrollTop() > introMax.height()) {
          return;
        }
        offset = ($.window.scrollTop() / introMax.height()) * -200;
        transform = "translate3d(0," + offset + "px,0)";
        $intro[0].style.webkitTransform = transform;
        $intro[0].style.transform = transform;
        return $intro[0].style.opacity = 1 - ($.window.scrollTop() / introMax.height());
      });
      $.window.on('resize.animate', function() {
        $.window.animate = {
          targets: [],
          offsets: [],
          delta: $.window.height()
        };
        return $('[data-animate]').map(function() {
          return [[$(this).offset().top, this]];
        }).sort(function(a, b) {
          return a[0] - b[0];
        }).each(function() {
          $.window.animate.offsets.push(this[0]);
          return $.window.animate.targets.push(this[1]);
        });
      });
      $.window.trigger('resize');
      return $.window.on('scroll.animate', function() {
        var viewport;
        viewport = $.window.scrollTop() + $.window.animate.delta;
        return $.window.animate.offsets.forEach(function(offset, i) {
          var $target;
          $target = $($.window.animate.targets[i]);
          if (viewport >= offset + ($.window.animate.delta / 3)) {
            if ($target.data('animate') === 'each') {
              return $target.children().each(function(i, el) {
                return setTimeout(function() {
                  return $(el).addClass('visible');
                }, 100 * i);
              });
            } else {
              return $target.addClass('visible');
            }
          }
        });
      });
    }
  });

}).call(this);
