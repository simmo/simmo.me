<?php

function i() {
  echo '<pre>';
  foreach (func_get_args() as $index => $arg) echo "\n=== " . ($index+1) . " ===\n\n" . print_r($arg, true);
  echo '</pre>';
}

function file_build_path() {
  return join(DIRECTORY_SEPARATOR, func_get_args());
}
