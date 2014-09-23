<?php

class SimmoTwigExtension extends Twig_Extension {
  public function getName() {
    return 'Simmo';
  }
  
  private function is_uri($uri) {
    return preg_match('/^[-a-z]+:\/\/|^\/\//', $uri);
  }
  
  private function tag($name, $attributes = array(), $content = false) {
    $html = "<$name";
    foreach ($attributes as $key => $value) {
      if ($value !== false) {
        $html .= " $key";
        if ($value !== true) {
          if (is_array($value)) {
            if ($key == 'name') {
              $value = array_shift($value) . '[' . implode('][', $value) . ']';
            } else {
              $value = implode('_', $value);
            }
          }
          
          $html .= "=\"$value\"";
        }
      }
    }
    $html .= ">";
    
    // Does it need a closing tag?
    if (!in_array($name, array('input', 'img', 'link'))) {
      // Got content?
      if ($content !== false) $html .= $content;
      $html .= "</$name>";
    }
    
    return $html;
  }
  
  private function stylesheet_path($file) {
    if (!$this->is_uri($file)) {
      $file = file_build_path('', 'css', $file);
      if (!strstr($file, '.css')) $file .= '.css';
      if (file_exists('public/' . $file)) $file .= '?' . filemtime('public/' . $file);
    }
    return $file;
  }
  
  private function script_path($file) {
    if (!$this->is_uri($file)) {
      $file = file_build_path('', 'javascripts', $file);
      if (!strstr($file, '.js')) $file .= '.js';
      if (file_exists('public/' . $file)) $file .= '?' . filemtime('public/' . $file);
    }
    return $file;
  }
  
  private function image_path($file) {
    if (!$this->is_uri($file)) {
      $file = file_build_path('', 'images', $file);
      if (file_exists('public/' . $file)) $file .= '?' . filemtime('public/' . $file);
    }
    return $file;
  }
  
  public function getFunctions() {
    return array(
      new Twig_SimpleFunction('checkbox_field', function($model, $name, $checked = false, $html_options = array()) {
        $checked = !!$checked;
        $attributes = array_merge(array('type' => 'checkbox', 'name' => array($model, $name), 'value' => '1', 'id' => array($model, $name), 'checked' => $checked), $html_options);
        return $this->tag('input', array('type' => 'hidden', 'name' => array($model, $name), 'value' => '0')) . $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('email_field', function($model, $name, $value, $html_options = array()) {
        $attributes = array_merge(array('type' => 'email', 'name' => array($model, $name), 'value' => $value, 'id' => array($model, $name)), $html_options);
        return $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('password_field', function($model, $name, $value, $html_options = array()) {
        $attributes = array_merge(array('type' => 'password', 'name' => array($model, $name), 'value' => $value, 'id' => array($model, $name)), $html_options);
        return $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('radio_field', function($model, $name, $value, $checked = false, $html_options = array()) {
        $checked = ($checked == $value);
        $attributes = array_merge(array('type' => 'radio', 'name' => array($model, $name), 'value' => $value, 'id' => array($model, $name, $value), 'checked' => $checked), $html_options);
        return $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('select_field', function($model, $name, $options, $selected = false, $html_options = array()) {
        $attributes = array_merge(array('name' => array($model, $name), 'id' => array($model, $name)), $html_options);
        
        $options_have_set_keys = (array_keys($options) !== array_keys(array_values($options)));
        
        $content = '';
        foreach ($options as $key => $value) {
          $option_attributes = array();
          if ($options_have_set_keys) $option_attributes['value'] = $key;
          if ($selected !== false and (($options_have_set_keys and $selected == $key) || (!$options_have_set_keys and $selected == $value))) $option_attributes['selected'] = true;
          
          $content .= $this->tag('option', $option_attributes, $value);
        }
        
        return $this->tag('select', $attributes, $content);
      }),
      new Twig_SimpleFunction('submit_field', function($value, $html_options = array()) {
        $attributes = array_merge(array('type' => 'submit', 'value' => $value), $html_options);
        return $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('text_field', function($model, $name, $value, $html_options = array()) {
        $attributes = array_merge(array('type' => 'text', 'name' => array($model, $name), 'value' => $value, 'id' => array($model, $name)), $html_options);
        return $this->tag('input', $attributes);
      }),
      new Twig_SimpleFunction('textarea_field', function($model, $name, $value, $html_options = array()) {
        $attributes = array_merge(array('name' => array($model, $name), 'id' => array($model, $name)), $html_options);
        return $this->tag('textarea', $attributes, $value);
      }),
      new Twig_SimpleFunction('stylesheet_path', function($file) {
        return $this->stylesheet_path($file);
      }),
      new Twig_SimpleFunction('script_path', function($file) {
        return $this->script_path($file);
      }),
      new Twig_SimpleFunction('image_path', function($file) {
        return $this->image_path($file);
      }),
      new Twig_SimpleFunction('stylesheet_tag', function($file, $html_options = array()) {
        $attributes = array_merge(array('rel' => 'stylesheet', 'type' => 'text/css', 'href' => $this->stylesheet_path($file)), $html_options);
        return $this->tag('link', $attributes);
      }),
      new Twig_SimpleFunction('script_tag', function($file, $html_options = array()) {
        $attributes = array_merge(array('type' => 'text/javascript', 'src' => $this->script_path($file)), $html_options);
        return $this->tag('script', $attributes);
      }),
      new Twig_SimpleFunction('image_tag', function($file, $html_options = array()) {
        $attributes = array_merge(array('src' => $this->image_path($file)), $html_options);
        return $this->tag('img', $attributes);
      })
    );
  }
  
  public function getFilters() {
    return array(
      new Twig_SimpleFilter('inspect', 'i'),
      new Twig_SimpleFilter('gravatar', function($string, $size = 60, $default = 'blank') {
        return "http://www.gravatar.com/avatar/" . md5(strtolower(trim($string))) . "?d=$default&s=$size";
      }),
      new Twig_SimpleFilter('repeat', 'str_repeat')
    );
  }
}

$app->view()->parserOptions = array(
  'debug' => true,
  'cache' => file_build_path('cache'),
  'autoescape' => false
);

$app->view()->parserExtensions = array(
  new \Slim\Views\TwigExtension(),
  new SimmoTwigExtension()
);
