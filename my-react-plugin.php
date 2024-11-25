<?php
/*
Plugin Name: My React Plugin
Description: A WordPress plugin using React and Tailwind CSS with Vite.
Version: 1.0
Author: Your Name
*/

if(! defined('ABSPATH')) : exit(); endif;

define('MY_REACT_PATH',trailingslashit(plugin_dir_path(__FILE__)));
define('MY_REACT_URL',trailingslashit(plugin_dir_url('/',__FILE__)));

add_action('admin_enqueue_scripts', 'my_react_admin_enqueue_scripts');

function my_react_admin_enqueue_scripts(){
    wp_enqueue_script('my-react-plugin',MY_REACT_URL.'my-react-plugin/build/index.js',array('jquery'),wp_rand(),true);

    wp_localize_script('my-react-plugin', 'appLocalizer', array(
        'apiUrl' => home_url('/wp-json'),
        'nonce' => wp_create_nonce('my-react-plugin'),
    ));
}

require_once MY_REACT_PATH.'classes/class-create-admin-menu.php';
