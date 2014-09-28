<?php

require 'library/boot.php';

$app->get('/', function() use ($app) {
  $projects = array(
    array(
      'name' => 'Real Business',
      'url' => 'http://realbusiness.co.uk',
      'description' => 'Responsive design for an ad-driven site with a large user&nbsp;base.',
      'image' => 'real-business.jpg'
    ),
    array(
      'name' => 'Real Deals',
      'url' => 'http://realdeals.eu.com',
      'description' => 'Responsive design &ndash; a first for the private equity industry &ndash; with a focus on legacy browser&nbsp;support.',
      'image' => 'real-deals.jpg'
    ),
    array(
      'name' => 'Atkins: Angles',
      'url' => 'http://angles.atkinsglobal.com',
      'description' => 'Responsive web app, built on Wordpress, making use of HTML5 cache and pushstate for super-fast loading and offline&nbsp;portfolio.',
      'image' => 'angles.jpg'
    ),
    array(
      'name' => 'Oktra',
      'url' => 'http://oktra.co.uk',
      'description' => 'Part of the team responsible for delivering a responsive front end build for the UK\'s leading office interior\'s&nbsp;firm.',
      'image' => 'oktra.jpg'
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
  
  $app->render('index.html', array('projects' => $projects, 'skills' => $skills));
});

$app->get('/mr-dixons-tea', function() use ($app) {
  $app->render('mr-dixons-tea.html');
});

$app->run();
