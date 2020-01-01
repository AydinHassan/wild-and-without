<?php get_header(); ?>

<div id="blog_list" class="container mt0 right_sidebar blog_list_style_left-image columns2 clearfix">
    <div class="page_title text-center">
        <h1>
            <?php
                if ( is_day() ) :
                    echo esc_html_e( 'DAILY ARCHIVES ', 'voyager' );
                    printf( esc_html__( '%s', 'voyager' ), get_the_date() );

                elseif ( is_month() ) :
                    echo esc_html_e( 'MONTHLY ARCHIVES ', 'voyager' );
                    printf( esc_html__( '%s', 'voyager' ), get_the_date( esc_html_x( 'F Y', 'monthly archives date format', 'voyager' ) ) );

                elseif ( is_year() ) :
                    echo esc_html_e( 'YEARLY ARCHIVES ', 'voyager' );
                    printf( esc_html__( '%s', 'voyager' ), get_the_date( esc_html_x( 'Y', 'yearly archives date format', 'voyager' ) ) );

                else :
                    single_tag_title('ARCHIVES: ');
                endif;
            ?>
        </h1>
    </div>
    <div class="row">
        <div class="col-md-9 pull-left">
            <div class="row">
                    <?php while (have_posts()) : ?>
                        <?php the_post() ?>
                        <?php get_template_part('templates/blog/loop-left-image') ?>
                    <?php endwhile ?>
                </div>
                <?= cstheme_pagination() ?>
            </div>
            <div class="col-md-3 pull-right">
                <?php get_sidebar(); ?>
            </div>
    </div>
</div>

<?php get_footer(); ?>
