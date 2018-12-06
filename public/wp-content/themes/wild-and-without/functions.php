<?php

add_action(
        'wp_enqueue_scripts',
        function () {
            //css
            wp_dequeue_style('sb_instagram_styles');
            wp_dequeue_style('sb-font-awesome');
            wp_dequeue_style('contact-form-7');

            wp_enqueue_style('voyager-parent-style', get_template_directory_uri() . '/style.css');
            wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Oswald%3A300%2C400%2C700%7COpen+Sans%3A300%2C400%2C700&subset=latin&ver=4.9.8');

            wp_enqueue_style('wild-and-without-style', get_stylesheet_directory_uri() . '/dist/main.css', ['voyager-parent-style']);

            //js
            wp_enqueue_script('wild-and-without-js', get_stylesheet_directory_uri() . '/dist/bundle.js', [], false, true);
        },
        PHP_INT_MAX
);

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
    $listener->listen($request = mc4wp('request'));

    $formId = $request->post->get( '_mc4wp_form_id' );
    $form = mc4wp_get_form($formId);

    if (!$form->has_errors()) {
        wp_send_json_success(['message' => $form->messages]);
    }

    $errors = array_map(function (string $errorCode) use ($form) {
        return $form->get_message($errorCode);
    }, $form->messages);

    wp_send_json_error(['errors' => $errors]);
};

add_action('wp_ajax_nopriv_wild_without_subscribe', $subscribe);
add_action('wp_ajax_wild_without_subscribe', $subscribe);