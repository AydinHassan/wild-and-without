<div id="related-posts-list">
	<div class="text-center"><h2><?= esc_html__('You Might Also Like', 'voyager') ?></h2></div>
    <div id="related-posts-container">
        <?php
        global $post;

        $categoryIds = array_map(function (WP_Term $term) {
            return $term->term_id;
        }, get_the_category($post->ID));

        $args = [
            'category__in'        => $categoryIds,
            'post__not_in'        => [$post->ID],
            'posts_per_page'      => 4,
            'ignore_sticky_posts' => 1,
            'orderby'             => 'rand'
        ];

        $query = new WP_Query($args);
        if ($query->have_posts()) {
            while ($query->have_posts()) : $query->the_post();
                ?>
                <div class="related-post">
                    <div class="related-post-img">
                        <a href="<?= get_permalink() ?>">
                            <img src="<?= aq_resize(wp_get_attachment_url(get_post_thumbnail_id()), 300, 180, true, true, true) ?>" alt="<?= get_the_title() ?>" />
                        </a>
                    </div>
                    <div class="related-post-meta">
                        <span class="related-post-meta-date"><?= get_the_time('M j, Y') ?></span>
                        <h2 class="related-post-title"><a href="<?= get_permalink() ?>"><?= get_the_title() ?></a></h2>
                    </div>
                </div>
            <?php endwhile;
            wp_reset_postdata();
        }
        ?>
    </div>
	<div class="related_posts_list_overlay"></div>
</div>