<?php
/**
 * The blog post content
 */

global $post, $posts_in_a_row;

$post_metro = get_metabox('post_metro');
if( isset( $post_metro ) && $post_metro != '' ) {
	$post_class = ' sizing_' . $post_metro;
} else {
	$post_class = '';
}

$post_format = get_post_format();
$quote_text = get_post_meta($post->ID, 'format_quote_text', true);
$quote_author = get_post_meta($post->ID, 'format_quote_author', true);
$format_link_url = get_post_meta($post->ID, 'format_link_url', true);
$featured_image_url = wp_get_attachment_url(get_post_thumbnail_id());
?>

		<article id="post-<?php the_ID(); ?>" <?php post_class( $post_class ); ?> style="padding: <?php echo get_metabox('post_padding'); ?>px;">
			<div class="post-content-wrapper">
					
				<?php if($post_format == 'quote') { ?>
					
					<div class="post-content-quote-wrapper">
						<div class="featured_img_bg" 
							<?php if(has_post_thumbnail()) { ?>
								style="background-image:url(<?php echo $featured_image_url ?>);"
							<?php } ?>
						></div>
						<div class="quote-format-wrap text-center">
							<i class="heading_font">”</i>
							<span class="post-meta-date"><?php the_time('M j, Y') ?></span>
							<h2 class="post-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__('Permalink to %s', 'voyager'), the_title_attribute('echo=0') ); ?>" rel="bookmark">
								<?php if (!empty($quote_text)) {
									echo esc_attr( $quote_text );
								} else {
									the_title();
								} ?>
							</a></h2>
							<span class="quote-author"><?php echo esc_attr__( 'Say', 'voyager' ); ?></span>
							<p class="quote-author-name heading_font">
								<?php
									if ( !empty( $quote_author ) ) {
										echo esc_attr( $quote_author );
									} else {
										echo get_the_author_meta('display_name');
									}
								?>
							</p>
						</div>
					</div>
					
				<?php } elseif ($post_format == 'link') { ?>
					
					<div class="post-content-link-wrapper">
						<div class="featured_img_bg" 
							<?php if(has_post_thumbnail()) { ?>
								style="background-image:url(<?php echo $featured_image_url ?>);"
							<?php } ?>
						></div>
						<div class="link-format-wrap text-center">
							<i class="fa fa-link"></i>
							<span class="post-meta-date"><?php the_time('M j, Y') ?></span>
							<h2 class="post-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__('Permalink to %s', 'voyager'), the_title_attribute('echo=0') ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
							<a class="post-format-link-url heading_font" href="
								<?php
									if ( !empty( $format_link_url ) ) {
										echo esc_url( $format_link_url );
									} else {
										echo the_permalink();
									}
								?>
							"  target="_blank">
								<?php
									if ( !empty( $format_link_url ) ) {
										echo esc_attr( $format_link_url );
									} else {
										echo get_the_author_meta('display_name');
									}
								?>
							</a>
						</div>
					</div>
					
				<?php } else { ?>
					
					<div class="featured_img_bg" 
						<?php if( !empty( $featured_image_url )) { ?>
							style="background-image:url(<?php echo $featured_image_url ?>);"
						<?php } ?>
					></div>
					<div class="post-descr-wrap">
						<span class="post-meta-date"><?php the_time('M j, Y') ?></span>
						<h2 class="post-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__('Permalink to %s', 'voyager'), the_title_attribute('echo=0') ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
						<a class="read_more heading_font" href="<?php the_permalink(); ?>"><?php echo esc_html__('Read More','voyager') ?></a>
					</div>
					
				<?php } ?>
	
			</div>
		</article>