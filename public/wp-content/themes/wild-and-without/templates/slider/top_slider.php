<?php

$args = [
    'posts_per_page' 		=> 6,
    'post_type' 			=> 'post',
    'cat' 					=> 0,
    'orderby' 				=> 'date',
    'post_status' 			=> 'publish',
    'ignore_sticky_posts' 	=> 1
];
$wp_query_2 = new WP_Query();
$wp_query_2->query($args);

?>

<div class="swiper home-slider">
    <div class="swiper-wrapper">
        <?php while ($wp_query_2->have_posts()) : ?>
            <?php $wp_query_2->the_post(); ?>
                <?php if (has_post_thumbnail()) : ?>
                <div class="swiper-slide home-slider-slide">
                    <img data-no-lazy="1" class="home-slider-post-img" src="<?= get_field('slider_image') ?>">
                    <div class="home-slider-post-info">
                        <div class="home-slider-post-author">
                            <div class="home-slider-post-author-image">
                                <a href="<?= get_author_posts_url(get_the_author_meta( 'ID' )) ?>"><?= get_avatar( get_the_author_meta('user_email'), '70', '' ) ?></a>
                            </div>
                            <div class="home-slider-post-author-description">
                                <span><?= esc_html__('posted by','voyager') ?></span>
                                <a class="home-slider-post-author-description-name heading_font" href="<?= get_author_posts_url(get_the_author_meta( 'ID' )) ?>"><?= get_the_author() ?></a>
                            </div>
                        </div>
                        <h2 class="home-slider-post-info-title"><a href="<?= get_permalink() ?>"><?= get_the_title() ?></a></h2>
                        <span class="home-slider-post-info-date"><?= get_the_time('M j, Y') ?></span>
                        <div class="home-slider-post-info-category"><?= get_the_category_list(', ') ?></div>
                    </div>
                </div>
            <?php endif ?>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button swiper-button-prev">
        <i class="fa fa-chevron-left"></i>
    </div>
    <div class="swiper-button swiper-button-next">
        <i class="fa fa-chevron-right"></i>
    </div>
</div>

