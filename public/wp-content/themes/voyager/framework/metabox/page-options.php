<?php

add_action('admin_init', 'cs_postoptions_init');
function cs_postoptions_init(){

    global $cs_custom_layout_settings;
	
	// Prefix
	$prefix = 'voyager_';

	$category = get_terms('category');
	$category_array[0] = esc_html__('All categories','voyager');
	if(isset($category)) {
		foreach($category as $categories) {
			$category_array[$categories->term_id] = $categories->name;
		}
	}
	
	$sidebar_layout_default = cstheme_option( 'sidebar_layout' );
	$prefooter_area_enable = cstheme_option( 'prefooter_area_enable' );
	$page_instagram_type = cstheme_option( 'page_instagram_type' );
	

    //	Page options
    $cs_custom_layout_settings = Array(
		Array(
			'name' 		=> esc_html__('Sidebar layout:', 'voyager'),
			'desc' 		=> esc_html__('only boxed layout style','voyager'),
			'id'   		=> 'sidebar_layout',
			'std' 		=> $sidebar_layout_default,
			'options' 	=> array(
								'no-sidebar' => esc_html__('Without sidebar', 'voyager'),
								'left-sidebar' => esc_html__('Left sidebar', 'voyager'),
								'right-sidebar' => esc_html__('Right sidebar', 'voyager'),
							),
			'type' 		=> 'select'
		),
		Array(
			'name' 		=> esc_html__('Instagram Type:', 'voyager'),
			'desc' 		=> esc_html__('select the type of Instagram Block for this page.','voyager'),
			'id'   		=> 'instagram_type',
			'std' 		=> $page_instagram_type,
			'options' 	=> array(
								'type1' => esc_html__('Type 1', 'voyager'),
								'type2' => esc_html__('Type 2', 'voyager'),
								'type3' => esc_html__('Type 3', 'voyager'),
							),
			'type' 		=> 'select'
		),
		Array(
			'name' 		=> esc_html__('Prefooter Area', 'voyager'),
			'desc' 		=> 'enable only for this page',
			'id'   		=> 'prefooter_area_enable',
			'std' 		=> $prefooter_area_enable,
			'options' 	=> array(
								'disabled' => esc_html__('Disabled', 'voyager'),
								'enabled' => esc_html__('Enabled', 'voyager'),
							),
			'type' 		=> 'select'
		),
	);

	//	Page Single Post options
	global $cs_post_settings;
	
	$cs_post_settings = Array(
		Array(
			'name' 		=> esc_html__('Metro Item Sizing', 'voyager'),
			'desc' 		=> esc_html__('This will only be used if you choose to display your Blog Posts in the "Metro Style" in element settings', 'voyager'),
			'id'   		=> 'post_metro',
			'std'  		=> '',
			'options' 	=> array(
								'' => esc_html__( 'Default', 'voyager' ),
								'width2' => esc_html__( 'Double Width', 'voyager' ),
								'height2' => esc_html__( 'Double Height', 'voyager' ),
								'wh2' => esc_html__( 'Double Width and Height', 'voyager' ),
							),
			'type' 		=> 'select'
		),
		Array(
			'name' 		=> esc_html__('Clean Card Sizing', 'voyager'),
			'desc' 		=> esc_html__('This will only be used if you choose to display your Blog Posts in the "Clean Card Style" in element settings', 'voyager'),
			'id'   		=> $prefix . 'post_clean_card_size',
			'std'  		=> '',
			'options' 	=> array(
								'' => esc_html__( 'Default', 'voyager' ),
								'img_top' => esc_html__( 'Top Image (double height)', 'voyager' ),
								'img_bg' => esc_html__( 'Background Image (square)', 'voyager' ),
							),
			'type' 		=> 'select'
		),
	);
	
	//	Page Portfolio options
	global $cs_page_portfolio_settings, $cs_portfolio_single, $cs_portfolio_single_gallery, $cs_portfolio_single_video, $cs_portfolio_single_audio;
	
	$portfolio_cat = '';
	if(class_exists('evatheme_cpt')) {
		$portfolio_cat 		= array(''=> 'Select category');  
		$portfolio_categories_obj 	= get_terms('portfolio_category', 'hide_empty=0');
		foreach ($portfolio_categories_obj as $of_cat) {
			$portfolio_cat[$of_cat->slug] = $of_cat->name;
		}
	}

	$cs_portfolio_single_gallery = array(
		array( 
			"name" 		=> esc_html__('Upload images', 'voyager'),
			"desc" 		=> esc_html__('Select the images that should be upload to this gallery', 'voyager'),
			"id" 		=> "gallery_image_ids",
			"type" 		=> 'gallery'
		),
		array( 
			"name" 		=> esc_html__('Carousel Gallery', 'voyager'),
			"desc" 		=> esc_html__('Enable this to show images in carousel', 'voyager'),
			"id" 		=> 'portfolio_single_carousel_enable',
			"type" 		=> 'checkbox'
		),
	);
	
	$cs_portfolio_single_video = array(
		array(
			"name" 		=> esc_html__('Embeded Code','voyager'),
			"desc" 		=> esc_html__('If you\'re not using self hosted video then you can include embeded code here.','voyager'),
			"id" 		=> "portfolio_single_video",
			"type" 		=> "textarea",
			'std' 		=> ''
		),
	);
	
	$cs_portfolio_single_audio = array(
		array(
			"name" 		=> esc_html__('Embeded Code','voyager'),
			"desc" 		=> esc_html__('If you\'re not using self hosted video then you can include embeded code here.','voyager'),
			"id" 		=> "portfolio_single_audio",
			"type" 		=> "textarea",
			'std' 		=> ''
		),
	);
    
    
	add_meta_box('page_custom_layout_settings',esc_html__( 'Custom Layout', 'voyager' ),'metabox_render','page','side','low',$cs_custom_layout_settings);
	add_meta_box('cs-format-gallery',__( 'Portfolio Gallery', 'voyager'),'metabox_render','portfolio','normal','high',$cs_portfolio_single_gallery);
	add_meta_box('cs-format-video',__( 'Portfolio Video', 'voyager'),'metabox_render','portfolio','normal','high',$cs_portfolio_single_video);
	add_meta_box('cs-format-audio',__( 'Portfolio Audio', 'voyager'),'metabox_render','portfolio','normal','high',$cs_portfolio_single_audio);
}
