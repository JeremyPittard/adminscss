<?php

/*
Plugin Name: My Admin Theme
Plugin URI: http://example.com/my-crazy-admin-theme
Description: My WordPress Admin Theme - Upload and Activate.
Author: Ms. WordPress
Version: 1.0
Author URI: http://example.com
*/

function my_admin_theme_style() {
    wp_enqueue_style('my-admin-theme', plugins_url('admin.css', __FILE__));
}
add_action('admin_enqueue_scripts', 'my_admin_theme_style');
add_action('login_enqueue_scripts', 'my_admin_theme_style');

//allow stylesheet for login page
function my_login_css() {
  echo '<link rel="stylesheet" type="text/css" href="' .plugins_url('admin.css  ', __FILE__). '">';
}

add_action('login_head', 'my_login_css');

//admin footer message
function my_crazy_admin_footer() {
    echo '<p>This theme was made by <a href="http://example.com">Ms. WordPress</a>.</p>';
 }
 
 add_action('admin_footer', 'my_crazy_admin_footer');