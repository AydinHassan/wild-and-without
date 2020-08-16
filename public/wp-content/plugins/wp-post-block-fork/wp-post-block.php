<?php

/**
* Plugin Name: WP Post Block (fork) - Display your Posts using the new Block Editor
* Description: WP Post Block (fork) is an easy way to insert your posts into your content without a single line of code.
* Version: 1.0.1
* Author: Aydin Hassan
* Text Domain: wp-post-block
* Domain Path: /languages
* Network: true
*/

namespace WpPostBlock;

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// We load Composer's autoload file
require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';

/**
 * The code that runs during plugin activation.
 */
register_activation_hook(__FILE__, '\\WpPostBlock\\utils\\Activator::activate');

/**
 * The code that runs during plugin deactivation.
 */
register_deactivation_hook(__FILE__, '\\WpPostBlock\\utils\\Deactivator::deactivate');

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since   1.0.0
 */
$plugin = new Main(__FILE__);
$plugin->run();
