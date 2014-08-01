$ ->
  $.window = $(window)
  $.body = $(document.body)
  
  # Window nag
  $.window
    .data 'originalTitle', document.title
    .on 'blur', ->
      document.title = 'Hey! Where have you gone?'
    .on 'focus', ->
      document.title = $.window.data('originalTitle')
  
  # Smooth scroll
  $.body.on 'click', 'a[href^="#"]', (event) ->
    if location.pathname.replace(/^\//,'') is @pathname.replace(/^\//,'') and location.hostname is @hostname
      target = $(@hash)
      target = $('[name=' + @hash.slice(1) +']') unless target.length
      if target.length
        event.preventDefault()
        $('html,body').stop().animate({ scrollTop: target.offset().top }, 600, -> location.hash = target.prop('id'));
  
  # Parallax transform for intro
  $intro = $.body.find('.intro .intro__wrap')
  introMax = $.body.find('.intro')
  
  unless Modernizr.touch
    $.window.on 'scroll.intro', ->
      return if $.window.scrollTop() > introMax.height()
      offset = (($.window.scrollTop() / introMax.height())*-200)
      transform = "translate3d(0,#{offset}px,0)"
      $intro[0].style.webkitTransform = transform
      $intro[0].style.transform = transform
      $intro[0].style.opacity = (1 - ($.window.scrollTop() / introMax.height()))
      
    # Animation triggers
    $.window.on 'load.animate resize.animate', ->
      $.window.animate =
        targets: []
        offsets: []
        delta: $.window.height()
      
      $('[data-animate]')
        .map -> [[$(@).offset().top, @]]
        .sort (a, b) -> a[0] - b[0]
        .each ->
          $.window.animate.offsets.push(@[0])
          $.window.animate.targets.push(@[1])
    
    $.window.trigger('resize')
    $.window.on 'scroll.animate', ->
      viewport = $.window.scrollTop() + $.window.animate.delta
      
      $.window.animate.offsets.forEach (offset, i) ->
        $target = $($.window.animate.targets[i])
        
        if viewport >= offset + ($.window.animate.delta / 3)
          if $target.data('animate') is 'each'
            $target.children().each (i, el) ->
              setTimeout ->
                $(el).addClass('visible')
              , 100 * i
          else
            $target.addClass('visible')
