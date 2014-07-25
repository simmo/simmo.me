<?
$projects = array(
  array(
    'name' => 'Real Business',
    'url' => 'http://realbusiness.co.uk',
    'description' => 'Responsive design for an ad-driven site with a large user&nbsp;base.',
    'image' => '/real-business.jpg'
  ),
  array(
    'name' => 'Real Deals',
    'url' => 'http://realdeals.eu.com',
    'description' => 'Responsive design &ndash; a first for the private equity industry &ndash; with a focus on legacy browser&nbsp;support.',
    'image' => '/real-deals.jpg'
  ),
  array(
    'name' => 'Atkins: Angles',
    'url' => 'http://angles.atkinsglobal.com',
    'description' => 'Responsive web app, built on Wordpress, making use of HTML5 cache and pushstate for super-fast loading and offline&nbsp;portfolio.',
    'image' => '/angles.jpg'
  ),
  array(
    'name' => 'Oktra',
    'url' => 'http://oktra.co.uk',
    'description' => 'Responsive frontend build for the UK\'s leading office interior\'s&nbsp;firm.',
    'image' => '/oktra.jpg'
  ),
);

$skills = array(
  array('name' => 'PHP', 'total' => '95%'),
  array('name' => 'Ruby/Ruby on Rails', 'total' => '60%'),
  array('name' => 'HTML5/CSS', 'total' => '99%'),
  array('name' => 'JavaScript', 'total' => '80%'),
  array('name' => 'Linux/Apache', 'total' => '70%'),
  array('name' => 'MySQL', 'total' => '85%'),
  array('name' => 'Git/Subversion', 'total' => '90%'),
  array('name' => 'Google Analytics', 'total' => '90%'),
  array('name' => 'Amazon Web Services', 'total' => '85%'),
  array('name' => 'Photoshop', 'total' => '90%'),
  array('name' => 'Illustrator', 'total' => '50%'),
  array('name' => 'Wordpress', 'total' => '85%'),
  array('name' => 'cross-browser/legacy testing', 'total' => '98%')
);

function skill($skill) {?>
  <li class="progress"><?= $skill['name'] ?><div class="progress__bar"><div class="progress__total" style="width:<?= $skill['total'] ?>"></div></div></li>
<?}

function project($project) {?>
<article class="page">
  <div class="container">
    <header class="page__header" data-animate>
      <h2 class="page__title"><?= $project['name'] ?></h2>
      <p class="page__subtitle"><?= $project['description'] ?></p>
      <p class="page__cta"><a href="<?= $project['url'] ?>" class="cta" target="_blank">View <?= $project['name'] ?></a></p>
    </header>
    <figure class="browser" data-animate>
      <div class="browser__content"><img src="<?= $project['image'] ?>" class="project__image"></div>
    </figure>
  </div>
</article>
<?} ?><!DOCTYPE html>
<html lang="en-gb" class="no-js">
  <head>
    <title>Mike Simmonds</title>
    <meta name="description" content="PHP, Ruby and JavaScript developer, living in Sussex and working in London, UK.">
    <meta name="author" content="Mike Simmonds">
    <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,minimal-ui">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400">
    <link rel="stylesheet" href="application.css">
    <script src="modernizr.js"></script>
    <? if ($_SERVER['SERVER_NAME'] == 'localhost') : ?><script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js"></' + 'script>')</script><? endif ?>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-9639535-1', 'simmo.me');
      ga('send', 'pageview');
    </script>
  </head>
  <body>
    <header class="intro" id="top">
      <div class="intro__wrap">
        <div class="vert">
          <div class="vert__content">
            <div class="container">
              <h1 class="intro__title">Mike Simmonds</h1>
              <h2 class="h3 intro__lead">Web Developer and UI Designer</h2>
              <nav class="intro__next">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="100px" viewBox="0 0 60 100" enable-background="new 0 0 60 100" xml:space="preserve">
                  <path fill="#fff" d="M30,3c14.888,0,27,12.112,27,27v40c0,14.888-12.112,27-27,27S3,84.888,3,70V30C3,15.112,15.112,3,30,3M30,0C13.5,0,0,13.5,0,30v40c0,16.5,13.5,30,30,30s30-13.5,30-30V30C60,13.5,46.5,0,30,0L30,0z"/>
                  <line fill="none" stroke="#fff" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="6" x1="30" y1="13" x2="30" y2="44"/>
                </svg>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="spacer"></div>
    <div class="wrapper">
      <main>
        <section class="section" id="work">
          <div class="section__title">
            <h1 class="h3 container">Work</h1>
          </div>
          <? foreach ($projects as $project) echo project($project) ?>
        </section>
        
        <section class="section" id="employment">
          <div class="section__title">
            <h1 class="h3 container">Employment</h1>
          </div>
          
          <article class="page">
            <div class="container">
              <header class="page__header" data-animate>
                <h2 class="page__title">Caspian Media</h2>
                <p class="page__subtitle">March 2009 - Present</p>
                <p>Lead developer, responsible for the architecture and making sure the business is on the cutting edge, as well as overseeing the work of other&nbsp;developers.</p>
                <p class="page__cta"><a href="http://lnkd.in/2T4KbK" class="cta" target="_blank">View recommendations</a></p>
              </header>
              <div class="achievements">
                <h3 class="achievements__title" data-animate>Achievements</h3>
                <ol class="achievements__items" data-animate="each">
                  <li>Designed and built a custom CMS that has been in use for over 5 years and manages Caspian's web portfolio</li>
                  <li>Created bespoke PHP framework that runs the CMS and all sites/applications in Caspian's web portfolio</li>
                  <li>Responsively designed and built Real Business - one of the UK's largest, ad driven online magazine for entrepreneurs</li>
                  <li>Designed and built Real Deals, currently the only responsively designed private equity magazine</li>
                  <li>Rebuilt Caspian's entire web portfolio to be responsive</li>
                  <li>Set business up with version control, initally Subversion then over to Git/GitHub</li>
                  <li>Integration with third party systems - Most notable being Workbooks (CRM) and Bureau van Dijk's Amadeus (financial information for public and private companies)</li>
                  <li>Moved web portfolio to Amazon Web Services</li>
                  <li>Managing client expectations</li>
                </ol>
              </div>
            </div>
          </article>
          
          <article class="page">
            <div class="container">
              <header class="page__header" data-animate>
                <h2 class="page__title">Sainsbury's</h2>
                <p class="page__subtitle">August 2002 - March 2009</p>
                <p>Online co-ordinator, managing a department of 50, scheduling deliveries and store route planning.</p>
              </header>
              <div class="achievements">
                <h3 class="achievements__title" data-animate>Achievements</h3>
                <ol class="achievements__items" data-animate="each">
                  <li>Learning how to manage a large, diverse, team with different wants and needs</li>
                  <li>Dealing with customers</li>
                  <li>Learning how to take a process, refine it and how to deploy change</li>
                  <li>Organisation and efficiency</li>
                </ol>
              </div>
            </div>
          </article>
        </section>
        
        <section class="section" id="about">
          <div class="section__title">
            <h1 class="h3 container">About</h1>
          </div>
          
          <div class="page">
            <div class="container">
              <div class="grid">
                <div class="grid__cell unit-2-3--medium">
                  <h1 class="h2 about__title">A little more about me</h1>
                  <p>I love to share knowledge and explore new ideas with other developers. I often go to web gatherings to listen to talks and keep up to speed. I care deeply about the projects I work on, be design or development and I have an obsessive eye for detail. Some call it a party trick, but I'm proud of being able to spot elements a pixel out and code errors at a distance!</p>
                  <p>When I'm not working, I love spending time with my son, <a href="https://twitter.com/Charlie_Simmo" target="_blank">Charlie</a>, taking lots of <a href="http://instagram.com/mikesimmonds" target="_blank">photos</a>, and listening to music with the odd bit of mixing. I'm also a keen runner.</p>
                  <p>You can also find me on; <a href="http://twitter.com/mikesimmonds" target="_blank">Twitter</a>, <a href="http://github.com/simmo" target="_blank">GitHub</a>, <a href="http://instagram.com/mikesimmonds" target="_blank">Instagram</a> and <a href="http://lnkd.in/2T4KbK" target="_blank">LinkedIn</a>.</p>
                  <p>I am always interested in working with new clients or hearing about exciting opportunities. If you have something I can help with, I'd love to hear from you.</p>
                  <p><a href="mailto:mike@simmo.me" class="cta">Get in touch</a></p>
                </div>
                <div class="grid__cell unit-1-3--medium">
                  <h2>Skills</h2>
                  <ul>
                  <? foreach ($skills as $skill) echo skill($skill) ?>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="jquery.js"><\/script>')</script>
    <script src="application.min.js"></script>
  </body>
</html>
