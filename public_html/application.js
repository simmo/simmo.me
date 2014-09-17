(function() {
  $(function() {
    var intro, introMax;
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
    intro = document.body.querySelector('.intro .intro__wrap');
    introMax = document.body.querySelector('.intro').clientHeight;
    if (!Modernizr.touch) {
      $.window.on('scroll.intro', function() {
        var offset, opacity, transform;
        opacity = 1 - ($.window.scrollTop() / introMax);
        if ($.window.scrollTop() > introMax) {
          return;
        }
        offset = ($.window.scrollTop() / introMax) * -100;
        transform = "translate3d(0," + offset + "px,0)";
        intro.style.webkitTransform = transform;
        intro.style.transform = transform;
        return intro.style.opacity = opacity;
      });
      $.window.on('load.animate resize.animate', function() {
        $.window.animate = {
          targets: [],
          offsets: [],
          delta: $.window.height()
        };
        return $('[data-animate=""], [data-animate="each"] > *').map(function() {
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
        var bottom_of_window, third_of_window, viewport;
        viewport = document.body.scrollTop + $.window.animate.delta;
        third_of_window = $.window.animate.delta / 3;
        bottom_of_window = document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight;
        return $.window.animate.offsets.forEach(function(offset, i) {
          var target;
          target = $.window.animate.targets[i];
          if (viewport >= offset + third_of_window || bottom_of_window) {
            return target.classList.add('visible');
          } else {
            return target.classList.remove('visible');
          }
        });
      });
    }
  });

}).call(this);
