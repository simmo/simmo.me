<?php

require 'library/boot.php';

$app->get('/', function () {
    $projects = [
        [
            'name' => 'Virgin: Pitch to Rich',
            'url' => 'http://www.virginmediabusiness.co.uk/pitch-to-rich',
            'employer' => 'Zone',
            'description' => 'A nationally marketed campaign where entrants pitch business ideas to Richard Branson. The winner receives &pound;1m of investment. Kickstarter meets Dragon\'s&nbsp;Den.',
            'image' => 'virgin.jpg',
            'cta' => 'Pitch to Rich'
        ],
        [
            'name' => 'BBC: Audio/Visual',
            'url' => false,
            'employer' => 'Zone',
            'description' => 'Building high fidelity, next generation, HTML5 audio/video prototypes as well as <abbr title="User Interface">UI</abbr>/<abbr title="User Experiance">UX</abbr> consultancy for the BBC\'s AVKX&nbsp;team.',
            'image' => 'bbc.jpg'
        ],
        [
            'name' => 'Prezzo',
            'url' => 'http://www.prezzorestaurants.co.uk',
            'employer' => 'Zone',
            'description' => 'Responsive site and email build of the UK\'s largest restaurant&nbsp;chains.',
            'image' => 'prezzo.jpg'
        ],
        [
            'name' => 'Real Business',
            'url' => 'http://realbusiness.co.uk',
            'employer' => 'Caspian Media',
            'description' => 'Responsive design and build for an ad-driven site with a large user&nbsp;base.',
            'image' => 'real-business.jpg'
        ],
        [
            'name' => 'Real Deals',
            'url' => 'http://realdeals.eu.com',
            'employer' => 'Caspian Media',
            'description' => 'Responsive design &ndash; a first for the private equity industry &ndash; with a focus on legacy browser&nbsp;support.',
            'image' => 'real-deals.jpg'
        ],
        [
            'name' => 'Atkins: Angles',
            'url' => 'http://angles.atkinsglobal.com',
            'employer' => 'Caspian Media',
            'description' => 'Responsive web app, built on Wordpress, making use of HTML5 cache and pushstate for super-fast loading and offline&nbsp;portfolio.',
            'image' => 'angles.jpg',
            'cta' => 'Angles'
        ],
        [
            'name' => 'Oktra',
            'url' => 'http://oktra.co.uk',
            'employer' => 'Draw (Freelance)',
            'description' => 'Part of the team responsible for delivering a front end build for the UK\'s leading office interior\'s&nbsp;firm.',
            'image' => 'oktra.jpg'
        ]
    ];
    
    $skills = [
        ['name' => 'PHP', 'total' => '95%'],
        ['name' => 'Ruby/Ruby on Rails', 'total' => '60%'],
        ['name' => 'HTML5/CSS', 'total' => '99%'],
        ['name' => 'JavaScript', 'total' => '80%'],
        ['name' => 'Linux/Apache', 'total' => '70%'],
        ['name' => 'MySQL', 'total' => '85%'],
        ['name' => 'Git/Subversion', 'total' => '90%'],
        ['name' => 'Google Analytics', 'total' => '90%'],
        ['name' => 'Amazon Web Services', 'total' => '85%'],
        ['name' => 'Photoshop', 'total' => '90%'],
        ['name' => 'Illustrator', 'total' => '50%'],
        ['name' => 'Wordpress', 'total' => '85%'],
        ['name' => 'cross-browser/legacy testing', 'total' => '98%']
    ];
    
    $employment = [
        [
            'company' => 'Zone',
            'start_date' => strtotime('2014/09/29'),
            'end_date' => null,
            'description' => 'Senior front-end developer',
            'recommendations' => null,
            'achievements' => [
                'Front-end integration with .NET frameworks',
                'Consultant for BBC Audio/Visual team',
                'Line management and team support',
                'Worked for top end clients such as BBC, Virgin, Swinton and Prezzo'
            ]
        ],
        [
            'company' => 'Caspian Media',
            'start_date' => strtotime('2009/03/16'],
            'end_date' => strtotime('2014/09/26'],
            'description' => 'Lead developer',
            'recommendations' => 'http://lnkd.in/2T4KbK',
            'achievements' => [
                'Designed and built a custom CMS that has been in use for over 5 years and manages Caspian\'s web portfolio',
                'Created bespoke PHP framework that runs the CMS and all sites/applications in Caspian\'s web portfolio',
                'Responsively designed and built Real Business - one of the UK\'s largest, ad driven online magazine for entrepreneurs',
                'Designed and built Real Deals, currently the only responsively designed private equity magazine',
                'Rebuilt Caspian\'s entire web portfolio to be responsive',
                'Set business up with version control, initally Subversion then over to Git/GitHub',
                'Integration with third party systems - Most notable being Workbooks (CRM) and Bureau van Dijk\'s Amadeus (financial information for public and private companies)',
                'Moved web portfolio to Amazon Web Services',
                'Managing client expectations'
            ]
        ],
        [
            'company' => 'Sainsbury\'s',
            'start_date' => strtotime('2002/08/01'),
            'end_date' => strtotime('2009/03/14'),
            'description' => 'Online co-ordinator',
            'recommendations' => null,
            'achievements' => [
                'Learning how to manage a large, diverse, team with different wants and needs',
                'Dealing with customers',
                'Learning how to take a process, refine it and how to deploy change',
                'Organisation and efficiency'
            ]
        ]
    ];

    $app->render('index.html', array('projects' => $projects, 'skills' => $skills, 'employment' => $employment));
});

$app->get('/mr-dixons-tea', function() use ($app) {
    $app->render('mr-dixons-tea.html');
});

$app->run();
