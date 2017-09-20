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