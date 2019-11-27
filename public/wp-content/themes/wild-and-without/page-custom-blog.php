<?php
/*
 *	Template Name: Page - Blog Custom
 */

get_header();
the_post();

get_template_part( 'templates/slider/top_slider' );
?>

<div class="container">
    <?php the_content(); ?>
</div>

<div id="blog_list" class="right_sidebar container blog_list_style_left-image columns3 clearfix>
    <div class="row">
        <div class="col-md-9 pull-left ">
            <div class="row">
                <?php
                    if ( get_query_var('paged') ) {
                        $paged = get_query_var('paged');
                    } else if ( get_query_var('page') ) {
                        $paged = get_query_var('page');
                    } else {
                        $paged = 1;
                    }

                    $temp = $wp_query;  // re-sets query
                    $wp_query = null;   // re-sets query
                    $args = [
                        'post_type' => 'post',
                        'cat' => 'all',
                        'posts_per_page' => '10',
                        'paged' => $paged,
                        'post_status' => 'publish'
                    ];
                    $wp_query = new WP_Query();
                    $wp_query->query( $args );

                    while ($wp_query->have_posts()) {
                        $wp_query->the_post();
                        get_template_part('templates/blog/loop-left-image');
                    }
                ?>
            </div>
            <?php cstheme_pagination() ?>
        </div>
        <div class="col-md-3 pull-right">
            <?php get_sidebar() ?>
        </div>
    </div>
    <?php $wp_query = null; wp_reset_postdata() ?>
</div>

<?php comments_template(); ?>
<?php get_footer();
