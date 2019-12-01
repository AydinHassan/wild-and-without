<?php

add_action('admin_init', function (){
    add_meta_box(
        'page_custom_layout_settings',
        esc_html__('Custom Layout', 'voyager'),
        'metabox_render',
        'page',
        'side',
        'low',
        [
            [
                'name' 		=> esc_html__('Sidebar layout:'),
                'desc' 		=> esc_html__('only boxed layout style'),
                'id'   		=> 'sidebar_layout',
                'std' 		=> cstheme_option('sidebar_layout'),
                'options' 	=> [
                    'no-sidebar' => esc_html__('Without sidebar'),
                    'left-sidebar' => esc_html__('Left sidebar'),
                    'right-sidebar' => esc_html__('Right sidebar'),
                ],
                'type' => 'select'
            ],
        ]
    );
});

