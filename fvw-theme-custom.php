<?php 

/* 
  Plugin Name: Fouad Vollmer – Theme Custom
  Plugin URI: https://github.com/fouadvollmer/plugin-easy-init
  Plugin Author: Fouad Vollmer Werbeagentur
  Author URI: https://www.fouadvollmer.de
*/

// Register custom modules
add_filter('gdymc_modules', function ($module_types) {
  $external_module_types = glob(plugin_dir_path( __FILE__ ) . 'src/modules/*', GLOB_ONLYDIR);
  return array_merge($module_types, $external_module_types);
});

// Register custom scripts
add_action('wp_enqueue_scripts', function() {
  wp_enqueue_style( 'custom_themestyle', plugin_dir_url( __FILE__ ) . 'src/scripts/main.css', array('themestyle') );
  wp_enqueue_script( 'custom_themescript', plugin_dir_url( __FILE__ ) . 'src/scripts/main.js' );
});

// Include custom functions
include(plugin_dir_path( __FILE__ ) . 'src/functions.php');