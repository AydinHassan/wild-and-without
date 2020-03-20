<?php

add_action(
        'wp_enqueue_scripts',
        function () {
            //dequeue plugin and theme CSS
            wp_dequeue_style('sb_instagram_styles');
            wp_dequeue_style('sb-font-awesome');
            wp_dequeue_style('contact-form-7');
            wp_dequeue_style('wp-block-library');
            wp_dequeue_style('bootstrap');
            wp_dequeue_style('fontawesome');
            wp_dequeue_style('voyager-default');
            wp_dequeue_style('voyager-theme');
            wp_dequeue_style('voyager-responsive');

            //dequeue plugin and theme JS
            wp_dequeue_script('bootstrap');
            wp_dequeue_script('voyager-jscrollpane');
            wp_dequeue_script('contact-form-7');
            wp_dequeue_script('voyager-theme');

            //deregister jquery
            if (!is_admin())  {
                wp_deregister_script('jquery');
            }

            //built css
            wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Oswald%3A300%2C400%2C700%7COpen+Sans%3A300%2C400%2C700&subset=latin&ver=4.9.8');
            wp_enqueue_style('wild-and-without-style', get_stylesheet_directory_uri() . '/dist/' . assetFileName('main.css'));

            //js
            wp_enqueue_script('wild-and-without-js', get_stylesheet_directory_uri() . '/dist/' . assetFileName('main.js'), [], false, true);

            if (is_page('photography')) {
                wp_enqueue_script('wild-and-without-photography-js', get_stylesheet_directory_uri() . '/dist/' . assetFileName('photography.js'), [], false, true);
            }
        },
        PHP_INT_MAX
);

add_filter('mc4wp_load_form_scripts', function () {
    wp_dequeue_script('mc4wp-forms-api');
});

add_action('wp_footer', function () {
    wp_deregister_script('mc4wp-forms-api');
}, PHP_INT_MAX);

add_action('wp_default_scripts', function ($scripts) {
    if (is_admin()) {
        return;
    }

    if (!empty($scripts->registered['jquery'])) {
        $scripts->registered['jquery']->deps = array_diff($scripts->registered['jquery']->deps, ['jquery-migrate']);
    }
});

add_action('wp_head', function () {
    return;
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


add_action('wp_head', function () {
    ?>
        <link rel="apple-touch-icon" sizes="57x57" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?= get_stylesheet_directory_uri(); ?>/icons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="<?= get_stylesheet_directory_uri(); ?>/icons//android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?= get_stylesheet_directory_uri(); ?>/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="<?= get_stylesheet_directory_uri(); ?>/icons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?= get_stylesheet_directory_uri(); ?>/icons/favicon-16x16.png">
        <link rel="manifest" href="<?= get_stylesheet_directory_uri(); ?>/icons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="<?= get_stylesheet_directory_uri(); ?>/iconsmanifest/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
    <?php
});

$forms = mc4wp('forms');

remove_action('init', [$forms, 'initialize']);

$rc = new ReflectionClass(MC4WP_Form_Manager::class);
$rp = $rc->getProperty('listener');
$rp->setAccessible(true);
$rp->setValue($forms, new MC4WP_Form_Listener);

$subscribe = function () {
    $listener = new MC4WP_Form_Listener();
    $listener->listen();

    $form = $listener->submitted_form;

    if (!$form->has_errors()) {
        wp_send_json_success(['message' => $form->messages]);
        return;
    }

    $errors = array_map(function (string $errorCode) use ($form) {
        return $form->get_message($errorCode);
    }, $form->errors);

    wp_send_json_error(['errors' => $errors]);
};

add_filter('mc4wp_form_response_position', function () {
    return 'none';
});

add_action('wp_ajax_nopriv_wild_without_subscribe', $subscribe);
add_action('wp_ajax_wild_without_subscribe', $subscribe);

//limit number of tags in tag cloud
add_filter('widget_tag_cloud_args', function ($args) {

    if (isset($args['taxonomy']) && $args['taxonomy'] == 'post_tag'){
        $args['number'] = 10;
    }

    return $args;
});

//Limit number of tags inside widget
function the_category_limit(string $separator = ', ', int $limit = null) : string
{
    global $wp_rewrite;

    $categories = apply_filters( 'the_category_list', get_the_category(false), false);

    if ($limit !== null) {
        $categories = array_slice($categories, 0, $limit);
    }

    $rel = ( is_object( $wp_rewrite ) && $wp_rewrite->using_permalinks() ) ? 'rel="category tag"' : 'rel="category"';

    $thelist = '';
    $i = 0;
    foreach ($categories as $category) {
        if (0 < $i) {
            $thelist .= $separator;
        }
        $thelist .= sprintf('<a href="%s" %s>%s</a>', esc_url(get_category_link($category->term_id)), $rel, $category->name);
        ++$i;
    }

    return $thelist;
}

function the_reading_time(int $postId) : string {
    $content        = get_post_field('post_content', $postId);
    $numberOfImages = substr_count(strtolower($content), '<img ' );
    $wpm            = 300;

    $content    = wp_strip_all_tags($content);
    $wordCount  = count(preg_split('/\s+/', $content));
    // Calculate additional time added to post by images.
    $wordCount  += calculate_images($numberOfImages, $wpm);
    $readingTime = (string) ceil($wordCount / $wpm);
    // If the reading time is 0 then return it as < 1 instead of 0.
    if ( 1 > $readingTime) {
        $readingTime = __( '< 1', 'reading-time-wp' );
    }
    return $readingTime;
}

function calculate_images(int $totalImages, int $wpm) : int {
    $additionalTime = 0;
    // For the first image add 12 seconds, second image add 11, ..., for image 10+ add 3 seconds.
    for ( $i = 1; $i <= $totalImages; $i++ ) {
        if ( $i >= 10 ) {
            $additionalTime += 3 * $wpm / 60;
        } else {
            $additionalTime += (12 - ($i - 1)) * $wpm / 60;
        }
    }
    return $additionalTime;
}

function assetFileName(string $assetName) : string {
    static $manifest = null;

    if ($manifest === null) {
        $manifest = json_decode(file_get_contents(__DIR__ . '/dist/manifest.json'), true);
    }

    if (!isset($manifest[$assetName])) {
        throw new \InvalidArgumentException("Asset '$assetName' not found in manifest file");
    }

    return $manifest[$assetName];
}

add_filter('pre_get_posts', function (WP_Query $query) {

    if (!$query->is_main_query() ) {
        return;
    }

    if ($query->is_category) {
        $query->set('posts_per_archive_page', 12);
    }
});

add_shortcode('tagcloud', function () {
    ob_start();
    the_widget(
        'taxonomy_list_widget',
        [
            'title' => '',
            'orderby' => 'count',
            'order' => 'DESC',
            'post_counts' => true,
            'view_all' => false
        ]
    );
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
});


