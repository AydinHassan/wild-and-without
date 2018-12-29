<?php
/**
 * The template for displaying Category pages
 */

get_header();

?>
<?php $category = get_queried_object(); ?>
		
<div id="blog_list" class="container mt0 no_sidebar blog_list_style_grid-bg columns3 clearfix">

    <?php if ($category->description) : ?>
        <div class="category-feature">
            <img class="featured-image" src="<?= z_taxonomy_image_url($category->Cat_ID) ?>"/>
            <div class="category-info">
                <div class="page_title text-center">
                    <h1><?php printf( esc_html__( '%s', 'voyager' ), single_cat_title( '', false ) ); ?></h1>
                </div>
                <p class="description text-justify"><?= $category->description; ?></p>
            </div>
        </div>
    <?php endif ?>
    <div class="row">
        <?php while (have_posts()) : ?>
            <?php the_post(); ?>
            <?php get_template_part('templates/blog/loop-grid-bg'); ?>
        <?php endwhile ?>
    </div>
    <?php cstheme_pagination(); ?>

</div>

<?php get_footer(); ?>