<header class="site-header">
    <div class="header_wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 logo_wrap_col">
                        <div class="cstheme-logo">
                            <?php $custom_logo_id = get_theme_mod('custom_logo'); ?>
                            <?php $logo = wp_get_attachment_image_src($custom_logo_id, 'full'); ?>
                            <a class="logo" href="<?= esc_url(home_url('/')) ?>">
                                <img data-pin-nopin="true" class="logo-img" src="<?= esc_url($logo[0]) ?>" alt="Wild &amp; Without">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-7 text-center header_container">
                        <div class="menu-primary-menu-container-wrap heading_font clearfix">
                            <a class="mobile_menu_btn" href="javascript:void(0)"><?php echo esc_html__( 'Menu', 'voyager') ?></a>
                            <?php wp_nav_menu(['menu_class' => 'nav-menu', 'theme_location' => 'primary', 'depth' => 3, 'container' => false, 'fallback_cb' => 'cstheme_Walker_Nav_Menu_Edit_Custom::fallback', 'walker' => new cstheme_MegaMenu_Walker]); ?>
                            <div class="social_links_wrap">
                                <?= cstheme_social_links(); ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-offset-1 col-md-1">
                        <div class="header_search pull-right">
                            <?php get_search_form(true) ?>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="social_links_wrap social_links_wrap_fixed">
                            <?= cstheme_social_links(); ?>
                        </div>
                    </div>
                </div>
            </div>
        <div class="header_wrap_bg"></div>
    </div>
</header>