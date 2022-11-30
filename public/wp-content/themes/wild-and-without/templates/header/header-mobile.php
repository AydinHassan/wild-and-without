<div id="header_mobile_wrap">
    <header>
        <div class="container">
            <div class="mobile_elements_wrap">
                <div class="cstheme-logo">
                    <?php $custom_logo_id = get_theme_mod('custom_logo'); ?>
                    <?php $logo = wp_get_attachment_image_src($custom_logo_id, 'full'); ?>
                    <a class="logo" href="<?= esc_url(home_url('/')) ?>">
                        <img data-pin-nopin="true" class="logo-img" src="<?= esc_url($logo[0]) ?>" alt="Wild &amp; Without">
                    </a>
                </div>
                <div class="social_links_wrap">
                    <?php echo cstheme_social_links(); ?>
                </div>
                <div class="header_search">
                    <?php get_search_form(true) ?>
                </div>
                <a class="mobile_menu_btn heading_font" href="javascript:void(0)"><i class="fa fa-bars"></i></a>
            </div>
            <div class="menu-primary-menu-container-wrap heading_font">
                <?php wp_nav_menu(['menu_class' => 'nav-menu', 'theme_location' => 'primary']); ?>
            </div>
        </div>
    </header>
    <div class="header_wrap_bg"></div>
</div>