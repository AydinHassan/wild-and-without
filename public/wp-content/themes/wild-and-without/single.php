<?php
/**
 * The template for displaying all single posts and attachments
 */

get_header();

$pf = get_post_format();

$voyager_single_post_sidebar_under = cstheme_option( 'single_post_sidebar_under' );
$single_post_sidebar = cstheme_option( 'single_post_sidebar' );
$single_post_sidebar_position = '';
if( $single_post_sidebar == 'left-sidebar' ) {
    $single_post_sidebar_position = 'pull-right';
}

/* ADD 1 view for this post */
$post_views = (get_post_meta(get_the_ID(), "post_views", true) > 0 ? get_post_meta(get_the_ID(), "post_views", true) : "0");
update_post_meta(get_the_ID(), "post_views", (int)$post_views + 1);

$single_post_featured_img = cstheme_option( 'single_post_featured_img' );

$featured_image_url = wp_get_attachment_url(get_post_thumbnail_id());
?>

<div class="container">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <div id="blog-single-wrap" class="<?php echo 'format-' . $pf . ' featured_img_fullwidth' ?> clearfix">

            <div class="single_post_header">
                <div class="featured_img_bg" style="background-image:url(<?php echo $featured_image_url; ?>);"></div>
                <div class="single_post_meta_category"><?php the_category(', '); ?></div>
                <h2 class="single-post-title"><?php the_title(); ?></h2>
                <div class="single_post_header_bottom">
                    <div class="single_post_meta">
                        <span class="post-meta-date"><?php the_time('M j, Y') ?></span>
                        <span class="post_meta_views"><i class="fa fa-eye"></i> <span><?php echo (get_post_meta(get_the_ID(), "post_views", true) > 0 ? get_post_meta(get_the_ID(), "post_views", true) : "0"); ?></span></span>
                        <span class="post-meta-likes"><?php echo cstheme_likes(); ?></span>
                        <span class="post-meta-comments"><i class="fa fa-comments"></i><?php echo get_comments_number(get_the_ID()); ?></span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <div class="post_format_content mb55 text-center">
                        <?php get_template_part( 'framework/post-format/post', $pf ); ?>
                    </div>
                    <div class="single-post-content clearfix">

                        <?php the_content(esc_html__('Read more!', 'voyager')); ?>
                        <?php wp_link_pages(['before' => '<div class="page-link">' . esc_html__('Pages', 'voyager') . ': ', 'after' => '</div>']); ?>
                    </div>

                    <div class="posts_nav_link"><?php posts_nav_link(); ?></div>

                    <div class="single_sharebox_wrap clearfix">
                        <div class="single_post_meta_tags pull-left">

                            <?php if (has_tag()) : ?>
                                <?php the_tags('','', '') ?>
                            <?php endif ?>

                        </div>

                        <div class="pull-right">
                            <?php if(cstheme_option('single_post_sharebox') != 0): ?>
                                <?php get_template_part('templates/blog/sharebox') ?>
                            <?php endif ?>
                        </div>
                    </div>

                    <?php if(cstheme_option('single_post_authorinfo') != 0) : ?>
                        <?php get_template_part( 'templates/blog/authorinfo' ) ?>
                    <?php endif ?>

                    <?php if(cstheme_option('single_post_navigation') != 0) : ?>
                        <div class="single_post_nav clearfix">
                            <?php
                            $prev_post = get_adjacent_post(false, '', true);
                            $next_post = get_adjacent_post(false, '', false);

                            if($prev_post){
                                $post_url = get_permalink($prev_post->ID);
                                echo '<div class="pull-left"><a href="' . esc_url( $post_url ) . '" title="' . $prev_post->post_title . '"><p class="heading_font"><i class="fa fa-chevron-left"></i>' . esc_html__('Previous','voyager') . '</p><b>' . $prev_post->post_title . '</b></a></div>';
                            }

                            if($next_post) {
                                $post_url = get_permalink($next_post->ID);
                                echo '<div class="pull-right text-right"><a href="' . esc_url( $post_url ) . '" title="' . $next_post->post_title . '"><p class="heading_font">' . esc_html__('Next','voyager') . '<i class="fa fa-chevron-right"></i></p><b>' . $next_post->post_title . '</b></a></div>';
                            }
                            ?>
                        </div>
                    <?php endif ?>
                </div>
            </div>

            <?php if(cstheme_option('single_post_relatedposts') != 0) : ?>
                <?php get_template_part('templates/blog/related-posts') ?>
            <?php endif ?>

            <?php if ( comments_open() || get_comments_number() ) : ?>
                <?php comments_template(); ?>
            <?php endif ?>
        </div>

    <?php endwhile; endif; ?>

</div>

<?php get_footer(); ?>
