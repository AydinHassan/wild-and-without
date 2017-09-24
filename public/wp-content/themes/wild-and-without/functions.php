<?php

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('voyager-parent-style', get_template_directory_uri() . '/style.css');
});

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