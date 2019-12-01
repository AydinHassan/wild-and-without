<?php

get_header(); ?>
	
<div id="error404_container" class="text-center">
    <div class="container">
        <h1><?= esc_html__('404') ?></h1>
        <h2><?= esc_html__('Oops...Page not found!') ?></h2>
        <?php get_search_form(true) ?>
        <div class="clearfix"></div>
        <a class="btnback" href="<?= esc_url(home_url( '/' )) ?>"><i class="fa fa-chevron-left"></i><?= esc_html_e('back to home page') ?></a>
    </div>
</div>

<?php get_footer(); ?>
