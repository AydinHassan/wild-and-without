<?php

/**
 * Register sidebars
 */
function cstheme_widgets_init() {
	
	//	Blog Sidebar
	register_sidebar( array(
		'name'          	=> esc_html__( 'Blog Sidebar', 'voyager' ),
		'id'            	=> 'blog-sidebar',
		'before_widget' 	=> '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  	=> '</aside>',
		'before_title'  	=> '<h4 class="widget-title"><span>',
		'after_title'   	=> '</span></h4>',
	) );

    register_sidebar([
        'name' => esc_html__("Footer sidebar 1", "voyager") ,
        'id' => "footer-sidebar-1",
        'description' => esc_html__('The footer sidebar widget area', 'voyager'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h4 class="widget-title"><span>',
        'after_title' => '</span></h4>',
    ]);
}
add_action( 'widgets_init', 'cstheme_widgets_init' );

