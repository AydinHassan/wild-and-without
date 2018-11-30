<?php

wp_enqueue_script('cstheme_owlcarousel_js', get_template_directory_uri() . '/js/owl.carousel.min.js', [], false, true);

$top_slider_style 				= get_metabox('top_slider_style');
$top_slider_category 			= get_metabox('top_slider_category');
$top_slider_count 				= get_metabox('top_slider_count');
$voyager_top_slider_orderby 	= get_metabox('top_slider_orderby');

$args = [
    'posts_per_page' 		=> (isset($top_slider_count) && $top_slider_count) ? $top_slider_count : '6',
    'post_type' 			=> 'post',
    'cat' 					=> (isset($top_slider_category) && $top_slider_category) ? $top_slider_category : 'all',
    'orderby' 				=> (isset($voyager_top_slider_orderby) && $voyager_top_slider_orderby) ? $voyager_top_slider_orderby : 'DESC',
    'post_status' 			=> 'publish',
    'ignore_sticky_posts' 	=> 1
];
$wp_query_2 = new WP_Query();
$wp_query_2->query($args);

?>

<div class="top_slider_blog_wrap">
	<div class="top_slider_preloader">
		<div class="top_slider_preloader_in"></div>
	</div>
	<div class="top_slider_blog owl-carousel clearfix type3">
        <?php while ($wp_query_2->have_posts()) : ?>
            <?php $wp_query_2->the_post(); ?>
			<div class="item">
				<div class="top_slider_blog_item">
					<?php if (has_post_thumbnail()) : ?>
						<div class="top_slider_blog_thumb" style="background-image:url(<?= get_field('slider_image') ?>)"></div>
					<?php endif ?>
						<div class="top_slider_blog_descr container">
							<div class="top_slider_blog_post_author">
								<div class="post-author-image">
									<a href="<?= get_author_posts_url(get_the_author_meta( 'ID' )) ?>"><?= get_avatar( get_the_author_meta('user_email'), '70', '' ) ?></a>
								</div>
								<div class="top_slider_blog_post_author_descr">
									<span><?= esc_html__('posted by','voyager') ?></span>
									<a class="post-author-name heading_font" href="<?= get_author_posts_url(get_the_author_meta( 'ID' )) ?>"><?= get_the_author() ?></a>
								</div>
							</div>
							<h2 class="top_slider_blog_title"><a href="<?= get_permalink() ?>"><?= get_the_title() ?></a></h2>
							<span class="post-meta-date"><?= get_the_time('M j, Y') ?></span>
							<div class="top_slider_blog_meta_category"><?= get_the_category_list(', ') ?></div>
						</div>
					</div>
				</div>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		</div>
</div>