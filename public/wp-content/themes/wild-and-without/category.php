<?php
/**
 * The template for displaying Category pages
 */

get_header();

?>

		
<div id="blog_list" class="container mt0 no_sidebar blog_list_style_grid-bg columns3 clearfix">
    <div class="page_title text-center">
        <h1><?php printf( esc_html__( '%s', 'voyager' ), single_cat_title( '', false ) ); ?></h1>
    </div>
    <div class="row">
        <?php while (have_posts()) : ?>
            <?php the_post(); ?>
            <?php get_template_part('templates/blog/loop-grid-bg'); ?>
        <?php endwhile ?>
    </div>
    <?php cstheme_pagination(); ?>

</div>

<?php get_footer(); ?>