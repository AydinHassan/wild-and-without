<?php get_header() ?>
    <div id="default_page">
        <?php if (!empty($featuredImageUrl = wp_get_attachment_url(get_post_thumbnail_id()))) : ?>
            <div class="page_featured_image" style="background-image:url(' <?= $featuredImageUrl ?>');"></div>
        <?php endif ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="page_title text-center">
                        <h1><?php the_title(); ?></h1>
                    </div>

                    <div class="contentarea clearfix">

                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <?php the_content(esc_html__('Read more!', 'voyager')); ?>
                            <?php wp_link_pages(['before' => '<div class="page-link">' . esc_html__('Pages', 'voyager') . ': ', 'after' => '</div>']); ?>
                            <?php
                                if ( comments_open() || get_comments_number() ) :
                                    comments_template();
                                endif;
                            ?>
                        <?php endwhile; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>
