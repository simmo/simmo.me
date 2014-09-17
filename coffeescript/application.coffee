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
  intro = document.body.querySelector('.intro .intro__wrap')
  introMax = document.body.querySelector('.intro').clientHeight
  
  unless Modernizr.touch
    $.window.on 'scroll.intro', ->
      opacity = 1 - ($.window.scrollTop() / introMax)
      return if $.window.scrollTop() > introMax
      offset = (($.window.scrollTop() / introMax) * -100)
      transform = "translate3d(0,#{offset}px,0)"
      intro.style.webkitTransform = transform
      intro.style.transform = transform
      intro.style.opacity = opacity
      
    # Animation triggers
    $.window.on 'load.animate resize.animate', ->
      $.window.animate =
        targets: []
        offsets: []
        delta: $.window.height()
      
      $('[data-animate=""], [data-animate="each"] > *')
        .map -> [[$(@).offset().top, @]]
        .sort (a, b) -> a[0] - b[0]
        .each ->
          $.window.animate.offsets.push(@[0])
          $.window.animate.targets.push(@[1])
    
    $.window.trigger('resize')
    
    $.window.on 'scroll.animate', ->
      viewport = document.body.scrollTop + $.window.animate.delta
      third_of_window = $.window.animate.delta / 3
      bottom_of_window = document.body.scrollHeight - document.body.scrollTop is document.body.clientHeight
      
      # Run through each offset position and animate associated target in/out
      # depending on position in viewport
      $.window.animate.offsets.forEach (offset, i) ->
        target = $.window.animate.targets[i]
        
        if viewport >= offset + third_of_window or bottom_of_window
          target.classList.add('visible')
        else
          target.classList.remove('visible')
      
