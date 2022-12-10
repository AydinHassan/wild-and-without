<?php get_header() ?>

<div class="container">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <div id="blog-single-wrap" class="clearfix">

            <div class="single_post_header">
                <h1 class="single-post-title"><?php the_title(); ?></h1>
                <div class="single_post_meta_category"><?php the_category(' '); ?></div>

                <div class="top_slider_blog_post_author">
                    <div class="post-author-image single-post-author-image">
                        <a href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"> <?= get_avatar( get_the_author_meta('user_email'), '70', '' ) ?></a>
                    </div>
                    <div class="top_slider_blog_post_author_descr">
                        <a class="post-author-name heading_font" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"> <?= get_the_author() ?></a>
                        <div class="single_post_meta">
                            <span class="single_post_meta_section post-meta-date"><?php the_time('M j, Y') ?></span>
                            <span class="single_post_meta_divider"></span>
                            <span class="single_post_meta_section post-meta-date"><?= the_reading_time(get_the_ID()) ?> min read</span>
                            <span class="single_post_meta_divider"></span>
                            <span class="single_post_meta_section post-meta-likes"><?= cstheme_likes(); ?></span>
                            <span class="single_post_meta_divider"></span>
                            <span class="single_post_meta_section post-meta-comments"><i class="fa fa-comments"></i><?= get_comments_number(get_the_ID()); ?></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="post_format_content mb55 text-center">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-image">
                                <img src="<?= wp_get_attachment_url(get_post_thumbnail_id()) ?>" alt="" />
                            </div>
                        <?php endif ?>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <div class="single-post-content clearfix">
                        <?php the_content(esc_html__('Read more!', 'voyager')); ?>
                        <?php wp_link_pages(['before' => '<div class="page-link">' . esc_html__('Pages', 'voyager') . ': ', 'after' => '</div>']); ?>
                    </div>

                    <div class="posts_nav_link"><?php posts_nav_link(); ?></div>

                    <div class="single_sharebox_wrap clearfix">
                        <div class="single_post_meta_tags pull-left">
                            <?php if (has_tag()) : ?>
                                <?php the_tags('', '', '') ?>
                            <?php endif ?>
                        </div>

                        <div class="pull-right">
                            <?php get_template_part('templates/blog/sharebox') ?>
                        </div>
                    </div>

                    <?php get_template_part('templates/blog/authorinfo') ?>

                    <!-- Post Navigation -->
                    <div class="single_post_nav clearfix">
                        <?php if ($prevPost = get_adjacent_post()) : ?>
                            <div class="pull-left">
                                <a href="<?= esc_url(get_permalink($prevPost->ID)) ?>" title="<?= $prevPost->post_title ?>">
                                    <p class="heading_font">
                                        <i class="fa fa-chevron-left"></i>
                                        <?= esc_html__('Previous', 'voyager') ?>
                                    </p>
                                    <b><?= $prevPost->post_title ?></b>
                                </a>
                            </div>
                        <?php endif ?>

                        <?php if ($nextPost = get_adjacent_post(false, '', false)) : ?>
                            <div class="pull-right text-right">
                                <a href="<?= esc_url(get_permalink($nextPost->ID)) ?>" title="<?= $nextPost->post_title ?>">
                                    <p class="heading_font">
                                        <?= esc_html__('Next', 'voyager') ?>
                                        <i class="fa fa-chevron-right"></i>
                                    </p>
                                    <b><?= $nextPost->post_title ?></b>
                                </a>
                            </div>
                        <?php endif ?>
                    </div>

                </div>
            </div>
            <div class="post-newsletter-signup">
                <div class="text-center">
                    <h2>Never miss a post!</h2>
                </div>
                <div class="post-newsletter-signup-container flex justify-center">
                    <p class="signup-text">If you enjoyed this article, subscribe to our mailing list and receive new posts direct to your e-mail!</p>
                    <?php mc4wp_show_form(get_theme_mod('newsletter_id')); ?>
                    <p class="no-spam">(no spam ever, unsubscribe at any time)</p>
                </div>
                <div class="post-newsletter-signup-overlay"></div>
            </div>
            <?php get_template_part('templates/blog/related-posts') ?>

            <?php if ( comments_open() || get_comments_number() ) : ?>
                <?php comments_template(); ?>
            <?php endif ?>
        </div>

    <?php endwhile; endif; ?>

</div>

<?php get_footer(); ?>
