<?php
/**
 * The template for displaying search results pages.
 */

get_header(); ?>

<div id="blog_list" class="container blog_list_style_default search-result-list mt0 right_sidebar">
    <div class="page_title text-center">
        <h1><?php printf( esc_html__( 'Search Results for: %s', 'voyager' ), get_search_query() ); ?></h1>
    </div>
    <div class="row">
        <div class="col-md-9 pull-left">
            <div class="row">
                    <?php if (have_posts ()) : ?>

                        <?php while (have_posts ()) : the_post(); ?>

                            <?php $featured_image_url = wp_get_attachment_url(get_post_thumbnail_id()); ?>
                            <?php $featured_image = '<img src="' . $featured_image_url . '" alt="' . get_the_title() . '" />'; ?>

                            <article id="post-<?php the_ID(); ?>" <?php post_class( 'col-md-12' ); ?>>
                                <div class="post-content-wrapper clearfix <?= empty($featured_image_url) ? 'no-image' : '' ?>">
                                    <?php if(!empty( $featured_image_url )) { echo '<a class="featured_image" href="' . get_permalink() . '">' . $featured_image . '</a>'; } ?>
                                    <div class="post-descr-wrap">
                                        <div class="post-meta clearfix">
                                            <?php if ( has_category() ) { ?>
                                                <span class="blog_meta_category"><?= the_category_limit(' ', 2); ?></span>
                                            <?php } ?>
                                            <span class="post-meta-date"><?php the_time('M j, Y') ?></span>
                                        </div>
                                        <h2 class="post-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__('Permalink to %s', 'voyager'), the_title_attribute('echo=0') ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
                                        <div class="post-content clearfix text-justify">
                                            <p><?= cstheme_smarty_modifier_truncate(get_the_excerpt(), 250) ?></p>
                                        </div>
                                        <a class="post_content_readmore" href="<?= get_permalink() ?>"><?= esc_html__('Read More','voyager') ?></a>
                                    </div>
                                </div>
                            </article>

                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>

                    <?php else : ?>
                        <div id="error404-container">
                            <h4 class="error404"><?php esc_html_e('Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'voyager');?></h4>
                        </div>
                    <?php endif ?>
            </div>
            <php cstheme_pagination(); ?>
        </div>

        <div class="col-md-3 pull-right">
            <?php get_sidebar(); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>