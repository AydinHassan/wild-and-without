<?php
$section = wp_get_post_categories($post->ID);
$sectionId = !empty($section[0]) ? $section[0] : '';

$authors[] = [
    'name' => get_the_author_meta('display_name', $post->post_author),
    'imageUrl' => get_avatar_url($post->post_author)
];
$authors = apply_filters('dip_gutenberg_post_author', $authors, $post->ID);

$relatedPosts = [];
$relatedPosts = apply_filters('dip_gutenberg_post_related', $relatedPosts, $post->ID);
$title = apply_filters('dip_gutenberg_post_title', $post->post_title, $post);
$excerpt = apply_filters('dip_gutenberg_post_excerpt', get_the_excerpt($post), $post);

$textShadowClass = '';
if (!empty($attributes['useTextShadow'])) {
    $textShadowClass = 'article-block-content-shadow';
}

$pubDate = apply_filters('dip_gutenberg_post_date', get_the_date(get_option('date_format'), $post->ID), $post);
$comments = get_comments_number($post);
?>
<?php if (!empty($attributes['showContent'])) : ?>
    <div class="article-block-content <?php echo $textShadowClass; ?>">
        <?php if (!empty($attributes['showSection']) && !empty($sectionId)) : ?>
            <div class="article-block-section">
                <a href="<?php echo get_category_link($sectionId); ?>"><?php echo get_cat_name($sectionId); ?></a>
            </div>
        <?php endif; ?>

        <a href="<?php echo esc_url($postUrl) ?>" class="article-block-title">
            <h4><?php echo $title ?></h4>
        </a>

        <?php if (!empty($attributes['showLead']) && !empty($excerpt)) : ?>
            <p class="article-block-excerpt"><?php echo $excerpt; ?></p>
        <?php endif; ?>

        <?php if (!empty($attributes['showAuthor']) && !empty($authors)) : ?>
            <?php foreach ($authors as $author) : ?>
                <div class="article-block-author">
                    <?php if (!empty($attributes['showAuthorPhoto']) && !empty($author['imageUrl'])) : ?>
                        <img src="<?php echo esc_url($author['imageUrl']); ?>" alt="<?php echo $author['name']; ?>">
                    <?php endif; ?>
                    <span><?php echo $author['name']; ?></span>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>

        <div class="article-block-meta">
            <?php if (!empty($attributes['showDate']) && !empty($pubDate)) : ?>
                <div class="article-block-date"><?php echo $pubDate; ?></div>
            <?php endif; ?>
            <?php if (!empty($attributes['showComments'])) : ?>
                <div class="article-block-comments">
                    <span class="dashicons dashicons-admin-comments"></span>
                    <?php echo $comments; ?>
                </div>
            <?php endif; ?>
        </div>

        <?php if (!empty($attributes['showRelated']) && !empty($relatedPosts)) : ?>
            <hr>
            <ul class="article-block-related">
                <?php foreach ($relatedPosts as $relatedPost) : ?>
                    <?php if (isset($relatedPost['url']) && isset($relatedPost['title'])) : ?>
                        <li>
                            <a href="<?php echo esc_url($relatedPost['url']); ?>">
                                <?php echo $relatedPost['title'] ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </div>
<?php endif; ?>
