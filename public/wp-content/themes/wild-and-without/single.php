<?php
/**
 * The template for displaying all single posts and attachments
 */

get_header();

$pf = get_post_format();

$voyager_single_post_sidebar_under = cstheme_option( 'single_post_sidebar_under' );
$single_post_sidebar = cstheme_option( 'single_post_sidebar' );
$single_post_sidebar_position = '';
if( $single_post_sidebar == 'left-sidebar' ) {
    $single_post_sidebar_position = 'pull-right';
}

/* ADD 1 view for this post */
$post_views = (get_post_meta(get_the_ID(), "post_views", true) > 0 ? get_post_meta(get_the_ID(), "post_views", true) : "0");
update_post_meta(get_the_ID(), "post_views", (int)$post_views + 1);

$single_post_featured_img = cstheme_option( 'single_post_featured_img' );

$featured_image_url = wp_get_attachment_url(get_post_thumbnail_id());
?>

<div class="container">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <div id="blog-single-wrap" class="<?= 'format-' . $pf . ' featured_img_' ?> clearfix">

            <div class="single_post_header">
                <h2 class="single-post-title"><?php the_title(); ?></h2>
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
                        <?php get_template_part( 'framework/post-format/post', $pf ); ?>
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
                    <?php if (function_exists('mc4wp_show_form')): ?>
                        <?php mc4wp_show_form($id = esc_html(cstheme_option('subscribe_popup_mailChimpid'))); ?>
                    <?php endif ?>
                    <p class="no-spam">(no spam ever, unsubscribe at any time)</p>
                </div>
                <div class="post-newsletter-signup-overlay"></div>
                <script type="text/javascript">
                    (function($) {
                        //2 because second form on page after default side bar newsletter
                        document.querySelector('#mc4wp-form-2').addEventListener('submit', function (e) {
                            e.preventDefault();
                            $(".mc4wp-response").remove();

                            //const formData = new FormData(e.target);
                            const form = $(e.target);
                            const formData = form.serializeArray();
                            const data = {};

                            $(formData).each(function(index, obj){
                                data[obj.name] = obj.value;
                            });

                            data['action'] = 'wild_without_subscribe';

                            const submitButton = form.find('input[type=submit]').first();

                            submitButton.val('Submitting...');
                            submitButton.prop('disabled', true);

                            $.ajax({
                                url: '<?= admin_url('admin-ajax.php') ?>',
                                data: data,
                                type: "POST",
                                dataType: 'JSON',
                                success: function(data){
                                    $(".mc4wp-response").remove();

                                    if (!data.success) {
                                        form.removeClass('mc4wp-form-error').addClass('mc4wp-form-success');

                                        var errorHtml = Object.keys(data.data.errors).map(function(key, index) {
                                            return '<div class="mc4wp-alert mc4wp-' + key + '"><p class="subscribe-error">' + data.data.errors[key] + '</p></div>';
                                        }).join('');

                                        var responseHtml = '<div class="mc4wp-response">' + errorHtml + '</div>';
                                        form.append(responseHtml);
                                        submitButton.val('Sign up');
                                        submitButton.prop('disabled', false);
                                        return;
                                    }

                                    var responseHtml = '<div class="mc4wp-response"><p class="subscribe-success">Thank you for subscribing. We have sent you a confirmation email.</p></div>';
                                    form.replaceWith(responseHtml);

                                    form.removeClass('mc4wp-form-success').addClass('mc4wp-form-error');
                                    submitButton.val('Sign up');
                                    submitButton.prop('disabled', false);
                                },
                                error: function(errorThrown){
                                    console.log(errorThrown);
                                    submitButton.val('Sign up');
                                    submitButton.prop('disabled', false);
                                }
                            });
                        });
                    })(jQuery);
                </script>
            </div>
            <?php get_template_part('templates/blog/related-posts') ?>

            <?php if ( comments_open() || get_comments_number() ) : ?>
                <?php comments_template(); ?>
            <?php endif ?>
        </div>

    <?php endwhile; endif; ?>

</div>

<?php get_footer(); ?>
