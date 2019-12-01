<?php

get_header();

$profiles = array_filter([
    'google-plus' => get_the_author_meta('evatheme_author_google_profile'),
    'twitter' => get_the_author_meta('evatheme_author_twitter_profile'),
    'facebook' => get_the_author_meta('evatheme_author_facebook_profile'),
    'linkedin' => get_the_author_meta('evatheme_author_linkedin_profile'),
    'instagram' => get_the_author_meta('evatheme_author_instagram_profile'),
]);
?>

<div id="author_posts_page">
    <?php if (have_posts() ) : the_post(); ?>
        <div id="author_posts_info" class="clearfix">
            <div class="container text-center">
                <div class="author_posts_avatar"><?= get_avatar(get_the_author_meta('user_email'), '120', '')?></div>
                <div class="author_posts_descr">
                    <div class="author_posts_count"><?= count_user_posts(get_the_author_meta('ID'), 'post') . ' ' . esc_html__('articles') ?></div>
                    <h5 class="author_posts_name"><?php the_author(); ?></h5>
                    <?php if (count($profiles)) : ?>
                        <div class="author_icons">
                            <?php foreach ($profiles as $class => $profile): ?>
                                <a class="social_link <?= $class ?>" href="<?= esc_url($profile) ?>" target="_blank">
                                    <i class="fa fa-<?= $class ?>"></i>
                                </a>
                            <?php endforeach ?>
                        </div>
                    <?php endif ?>
                </div>
            </div>
        </div>

        <?php rewind_posts(); ?>

        <div class="container">
            <div class="page_title text-center">
                <h1><?php echo esc_html__( 'Author Posts', 'voyager' ); ?></h1>
            </div>
            <div class="row">
                <?php while ( have_posts() ) : the_post(); ?>
                    <?php get_template_part('templates/blog/loop-grid-bg'); ?>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
            <?php cstheme_pagination(); ?>
        </div>
    <?php endif; ?>
</div>
<?php get_footer(); ?>
