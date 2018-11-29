<?php

//	Admin Styles
function cstheme_admin_style() {
    wp_enqueue_style('cstheme_admin', get_template_directory_uri() . '/framework/assets/css/cstheme-admin.css');
}
add_action('admin_enqueue_scripts', 'cstheme_admin_style');

#Frontend
if (!function_exists('cstheme_css_js_register')) {
    function cstheme_css_js_register() {

        #CSS
        wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '3.3.4', 'all');
		wp_enqueue_style('fontawesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '4.6.3', 'all' );
		wp_enqueue_style('fluidbox', get_template_directory_uri() . '/css/fluidbox.css');
		wp_enqueue_style('voyager-owlcarousel', get_template_directory_uri() . '/css/owl.carousel.css');
		if (cstheme_woo_enabled()) {
			wp_enqueue_style('voyager-woo', get_template_directory_uri() . '/css/woo.css');
		}
		wp_enqueue_style('voyager-default', get_stylesheet_uri());
		wp_enqueue_style('voyager-theme', get_template_directory_uri() . '/css/theme-style.css');
		wp_enqueue_style('voyager-responsive', get_template_directory_uri() . '/css/responsive.css');

        #JS
		wp_enqueue_script("jquery");
		wp_enqueue_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '3.3.4', true);
		if ( cstheme_option('magnific_popup') != 'disabled') {
			wp_enqueue_script('voyager-magnificpopup', get_template_directory_uri() . '/js/jquery.magnific-popup.min.js', 'jquery', '', true);
			wp_enqueue_script('voyager-fluidbox', get_template_directory_uri() . '/js/jquery.fluidbox.min.js', 'jquery', '', true);
		}
		wp_enqueue_script('voyager-jscrollpane', get_template_directory_uri() . '/js/jquery.jscrollpane.min.js', 'jquery', '', true);
		wp_enqueue_script('voyager-owlcarousel', get_template_directory_uri() . '/js/owl.carousel.min.js', array(), false, true);
		if ( cstheme_option('function_fixed_sidebar_enable') != 0) {
			wp_enqueue_script('voyager-stickysidebar', get_template_directory_uri() . '/js/theia-sticky-sidebar.min.js', array(), false, true);
		}
		if (cstheme_woo_enabled()) {
			wp_enqueue_script('voyager-woo', get_template_directory_uri() . '/js/woo.js', 'jquery', '', true);
		}
		wp_enqueue_script('voyager-theme', get_template_directory_uri() . '/js/cstheme-script.js', 'jquery', '', true);
		
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
    }
}
add_action('wp_enqueue_scripts', 'cstheme_css_js_register');
