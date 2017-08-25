<?php
function my_theme_enqueue_styles() {

    $parent_style = 'twentyseventeen-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
    wp_enqueue_style(
        'wild-and-without-style',
        get_stylesheet_directory_uri() . '/style.css',
        [$parent_style],
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

add_action('wp_head', function () {
    ?>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9221923268071583",
            enable_page_level_ads: true
        });
    </script>
    <?php
});