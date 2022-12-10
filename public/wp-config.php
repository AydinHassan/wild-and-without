<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line



$scheme = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
define('WP_HOME', $scheme . ($_SERVER['HTTP_HOST'] ?? 'www.wildandwithout.com'));
define('WP_SITEURL', $scheme . ($_SERVER['HTTP_HOST'] ?? 'www.wildandwithout.com') . '/wp');

/*
* Define wp-content directory outside of WordPress core directory
*/
define( 'WP_CONTENT_DIR', __DIR__ . '/wp-content' );
define( 'WP_CONTENT_URL', WP_HOME . '/wp-content' );

// Include the Composer autoload file.
require_once( __DIR__ . '/../vendor/autoload.php' );

\Dotenv\Dotenv::createImmutable(__DIR__.'/../')->load();

$_SERVER['HTTPS'] = filter_var($_ENV['DEBUG_MODE'], FILTER_VALIDATE_BOOLEAN) ? 'off' : 'on';

define('DISABLE_WP_CRON', true);

// ** Cache Settings ** //
define('WP_CACHE', true);

// ** MySQL settings - You can get this info from your web host ** //
define('DB_NAME', $_ENV['MYSQL_DATABASE']);
define('DB_USER', $_ENV['MYSQL_USER']);
define('DB_PASSWORD', $_ENV['MYSQL_PASSWORD']);
define('DB_HOST', $_ENV['MYSQL_HOST']);
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

define('FS_METHOD','direct');

define('WP_REDIS_HOST', $_ENV['REDIS_HOST'] ?? '127.0.0.1');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', $_ENV['WP_AUTH_KEY']);
define('SECURE_AUTH_KEY', $_ENV['WP_SECURE_AUTH_KEY']);
define('LOGGED_IN_KEY', $_ENV['WP_LOGGED_IN_KEY']);
define('NONCE_KEY', $_ENV['WP_NONCE_KEY']);
define('AUTH_SALT', $_ENV['WP_AUTH_SALT']);
define('SECURE_AUTH_SALT', $_ENV['WP_SECURE_AUTH_SALT']);
define('LOGGED_IN_SALT', $_ENV['WP_WP_LOGGED_IN_SALT']);
define('NONCE_SALT', $_ENV['WP_NONCE_SALT']);


//S3
define('S3_UPLOADS_BUCKET', $_ENV['S3_UPLOADS_BUCKET']);
define('S3_UPLOADS_REGION', $_ENV['S3_UPLOADS_REGION']);

define('S3_UPLOADS_KEY', $_ENV['S3_UPLOADS_KEY']);
define('S3_UPLOADS_SECRET', $_ENV['S3_UPLOADS_SECRET']);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */

define('WP_DEBUG', filter_var($_ENV['DEBUG_MODE'], FILTER_VALIDATE_BOOLEAN));
define('WP_DEBUG_DISPLAY', filter_var($_ENV['DEBUG_MODE'], FILTER_VALIDATE_BOOLEAN));

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
