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
  
  $employment = array(
    array(
      'company' => 'Caspian Media',
      'start_date' => strtotime('2009/03/16'),
      'end_date' => strtotime('2014/09/26'),
      'description' => 'Lead developer',
      'recommendations' => 'http://lnkd.in/2T4KbK',
      'achievements' => array(
        'Designed and built a custom CMS that has been in use for over 5 years and manages Caspian\'s web portfolio',
        'Created bespoke PHP framework that runs the CMS and all sites/applications in Caspian\'s web portfolio',
        'Responsively designed and built Real Business - one of the UK\'s largest, ad driven online magazine for entrepreneurs',
        'Designed and built Real Deals, currently the only responsively designed private equity magazine',
        'Rebuilt Caspian\'s entire web portfolio to be responsive',
        'Set business up with version control, initally Subversion then over to Git/GitHub',
        'Integration with third party systems - Most notable being Workbooks (CRM) and Bureau van Dijk\'s Amadeus (financial information for public and private companies)',
        'Moved web portfolio to Amazon Web Services',
        'Managing client expectations'
      )
    ),
    array(
      'company' => 'Sainsbury\'s',
      'start_date' => strtotime('2002/08/01'),
      'end_date' => strtotime('2009/03/14'),
      'description' => 'Online co-ordinator',
      'recommendations' => null,
      'achievements' => array(
        'Learning how to manage a large, diverse, team with different wants and needs',
        'Dealing with customers',
        'Learning how to take a process, refine it and how to deploy change',
        'Organisation and efficiency'
      )
    )
  );

  $app->render('index.html', array('projects' => $projects, 'skills' => $skills, 'employment' => $employment));
});

$app->get('/mr-dixons-tea', function() use ($app) {
  $app->render('mr-dixons-tea.html');
});

$app->run();
