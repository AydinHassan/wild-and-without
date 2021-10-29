<?php
// Determine if we have to apply a shadow to article image
$imageShadowClass = '';


$postStatusMarkup = '';
$postStatus = apply_filters('dip_gutenberg_post_flag', '', $post);
if (!empty($postStatus) && !empty($attributes['showStatus'])) {
    $postStatusMarkup = '<span class="article-block-status">' . $postStatus . '</span>';
}

?>

<a href="<?php echo esc_url($postUrl) ?>" class="article-block-media <?php echo $imageShadowClass; ?>">
    <?php echo get_the_post_thumbnail($post->ID, 'thumbnail', $thumbnail_attrs); ?>
    <?php echo $postStatusMarkup; ?>
</a>
