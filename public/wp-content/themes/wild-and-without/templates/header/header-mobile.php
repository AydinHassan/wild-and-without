		<div id="header_mobile_wrap">
			<header>
				<div class="container">
					<div class="mobile_elements_wrap">
						<?php cstheme_logo(); ?>
                        <div class="social_links_wrap">
                            <?php echo cstheme_social_links(); ?>
                        </div>
                        <div class="header_search">
                            <?php get_search_form(true) ?>
                        </div>
						<a class="mobile_menu_btn heading_font" href="javascript:void(0)"><i class="fa fa-bars"></i></a>
					</div>
					<div class="menu-primary-menu-container-wrap heading_font">
						<?php wp_nav_menu( array( 'menu_class' => 'nav-menu', 'theme_location' => 'primary' ) ); ?>
					</div>
				</div>
			</header>
			<div class="header_wrap_bg"></div>
		</div>