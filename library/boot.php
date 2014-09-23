<?php

require 'helpers.php';

// Load composer
require_once file_build_path('.', 'vendor', 'autoload.php');

// Initialize Slim
$app = new \Slim\Slim([
  'templates.path' => file_build_path('.', 'templates'),
  'view' => new \Slim\Views\Twig()
]);

$app->configureMode('production', function() use ($app) {
  ini_set('display_errors', false);

  $app->config(array(
    'log.enable' => true,
    'debug' => false
  ));
});

$app->configureMode('development', function() use ($app) {
  ini_set('display_errors', true);

  $app->config(array(
    'log.enable' => false,
    'debug' => true
  ));
});

$app->hook('slim.before', function() use ($app) {
  
  $request = $app->request;
  
  # Provide view with request and session data
  $app->view()->setData(array(
    'env' => array(
      'mode' => $app->getMode()
    ),
    // 'session' => $_SESSION,
    'cookies' => $request->cookies(),
    'request' => array(
      'is_ajax' => $request->isAjax(),
      'is_secure' => ($request->getScheme() == 'https'),
      'path' => $request->getPath(),
      'ip' => $request->getIp(),
      'user_agent' => $request->getUserAgent(),
      'referrer' => $request->getReferrer(),
      'uri' => $_SERVER['REQUEST_URI'],
      'server_name' => $request->getHost(),
      'method' => $request->getMethod(),
      'params' => $request->params()
    )
  ));
  
});

require 'twig.php';
