<?php
/**
 * The template for displaying the footer
 */
 
$instagram_enable = cstheme_option( 'instagram_enable' );
$instagram_userId = cstheme_option( 'instagram_userId' );
$prefooter_area_enable = get_metabox('prefooter_area_enable');
if ( is_single() ){
	$prefooter_area_enable = cstheme_option( 'single_post_prefooter_area_enable' );
	if ( $prefooter_area_enable ){
		$prefooter_area_enable = 'enabled';
	}
}
?>
		
		</div><!-- //page-content -->
		
		<?php if( !empty( $instagram_userId ) && ( $instagram_enable ) ) {
			get_template_part( 'templates/instagram' );
		} ?>
		
		<?php if( $prefooter_area_enable == 'enabled' ) { ?>
			<div id="prefooter_area">
				<div class="container">
					<div class="row">
						<?php get_sidebar('footer'); ?>
					</div>
				</div>
			</div>
		<?php } ?>
		
		<?php if( cstheme_option('footer_section') != 0 ) { ?>

			<footer>
				<div class="container">
					<div class="row">
						<div class="col-md-3 copyright_wrap">

                            <div class="copyright">Copyright Wild & Without <?= date('Y') ?></div>
							<?php $copyright_text = cstheme_option( 'copyright_text' ); ?>
							<?php if(!empty( $copyright_text ) ) { echo '<div class="copyright">'. esc_attr( $copyright_text ) .'</div>'; } ?>
						</div>
						<div class="col-md-6 social_links_wrap">
							<?php echo cstheme_social_links(); ?>
                            <div class="do-ref small mt-4"><p>Proudly hosted on <a class="link" href="https://m.do.co/c/cc90ea102df3">Digital Ocean</a>. If you need hosting, <a class="link" href="https://m.do.co/c/cc90ea102df3">get some free credit.</a></p></div>
						</div>
						<div class="col-md-3 scroll_top_wrap">
							<a class="btn-scroll-top heading_font" href="javascript:void(0);"><?php echo esc_html__( 'Back top', 'voyager' ) ?><i class="fa fa-chevron-up"></i></a>
						</div>
					</div>
				</div>
			</footer>
			
		<?php } ?>
		
	</div><!-- //Page Wrap -->

<?php wp_footer(); ?>
<script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>
</body>
</html>