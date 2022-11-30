<?php
/**
 * Custom functions and definitions
 */

//	Add specific CSS class by filter
add_filter( 'body_class', 'cstheme_body_class' );
function cstheme_body_class( $classes ) {
	
	global $post;
	//top Slider Enabled
    $classes[] = 'top_slider_enabled';

	//	Header Layout
	$header_layout = "type7";
	$classes[] = 'header_' . $header_layout;
	
	//	if Page have Featured Image
	if( is_page() ){
		$featured_image_url = wp_get_attachment_url(get_post_thumbnail_id());
		if ( !empty( $featured_image_url ) ) {
			$classes[] = 'page_has_featured_img';
		}
	}
	
	return $classes;
}

function cstheme_likes()
{
    $all_likes = get_post_meta(get_the_ID(), 'cstheme_likes', true);
    if (!isset($all_likes) || absint($all_likes) < 1) {
        $all_likes = 0;
    }
    echo '
    <span class="cstheme_likes ' . (isset($_COOKIE['like' . get_the_ID()]) ? "already_liked" : "cstheme_add_like") . '" data-postid="' . get_the_ID() . '">
        <i class="fa ' . (isset($_COOKIE['like' . get_the_ID()]) ? "fa-heart" : "fa-heart-o") . '"></i>
        <span class="likes_count">' . $all_likes . '</span>
    </span>
    ';
}


/**
 * Page, Post custom metaboxes
 */
function get_metabox($name) {
    global $post;
    if ($post) {
        $metabox = get_post_meta($post->ID, 'cstheme_' . strtolower(THEMENAME) . '_options', true);
        return isset($metabox[$name]) ? $metabox[$name] : "";
    }
    return false;
}

function set_metabox($name, $val) {
    global $post;
    if ($post) {
        $metabox = get_post_meta($post->ID, 'cstheme_' . strtolower(THEMENAME) . '_options', true);
        $metabox[$name] = $val;
        return update_post_meta($post->ID, 'cstheme_' . strtolower(THEMENAME) . '_options', $metabox);
    }
    return false;
}

function cstheme_social_links(): void {
    echo '<a href="https://www.facebook.com/wildandwithout/" target="_blank" class="social_link facebook"><i class="fa fa-facebook"></i></a>';
    echo '<a href="https://www.flickr.com/photos/aydinh/" target="_blank" class="social_link flickr"><i class="fa fa-flickr"></i></a>';
    echo '<a href="https://www.instagram.com/wildandwithout/" target="_blank" class="social_link instagram"><i class="fa fa-instagram"></i></a>';
    echo '<a href="https://www.pinterest.co.uk/wildandwithout/" target="_blank" class="social_link pinterest"><i class="fa fa-pinterest"></i></a>';
    echo '<a href="/contact" class="social_link contact_us"><i class="fa fa-envelope-o"></i></a>';
}


/**
 * Post excerpt
 */
if (!function_exists('cstheme_smarty_modifier_truncate')) {
    function cstheme_smarty_modifier_truncate($string, $length = 80, $etc = '... ',
		$break_words = false)
    {
        if ($length == 0)
            return '';

        if (mb_strlen($string, 'utf8') > $length) {
            $length -= mb_strlen($etc, 'utf8');
            if (!$break_words) {
                $string = preg_replace('/\s+\S+\s*$/su', '', mb_substr($string, 0, $length + 1, 'utf8'));
            }
            return mb_substr($string, 0, $length, 'utf8') . $etc;
        } else {
            return $string;
        }
    }
}


/**
 * Single Post Comments List
 */

if (!function_exists('cstheme_comment')) {
    function cstheme_comment( $comment, $args, $depth ) {
		$GLOBALS['comment'] = $comment;
		$comment_author_url = get_comment_author_url(); ?>
	
		<li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
			<div id="comment-<?php comment_ID(); ?>" class="comment-body clearfix">
				<div class="comment-avatar">
					<?php if( $comment_author_url != '' ){ ?>
						<a href="<?php echo esc_url( $comment_author_url ); ?>" target="_blank">
					<?php } ?>
							<?php echo get_avatar($comment, $size = '70'); ?>
					<?php if( $comment_author_url != '' ){ ?>
						</a>
					<?php } ?>
				</div>
				<div class="comment-meta clearfix">
					<span><?php echo esc_html__('posted by','voyager') ?></span>
					<h6 class="comment_author">
						<?php if( $comment_author_url != '' ){ ?>
							<a href="<?php echo esc_url( $comment_author_url ); ?>" target="_blank">
						<?php } ?>
								<?php comment_author(); ?>
						<?php if( $comment_author_url != '' ){ ?>
							</a>
						<?php } ?>
						<?php edit_comment_link( esc_html__( 'Edit', 'voyager'),' ','' ) ?>
					</h6>
					<span class="comment-date"><?php comment_date('M j, Y'); ?></span>
					<?php comment_reply_link(array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'], 'reply_text' => esc_attr__('Reply', 'voyager') ))) ?>
				</div>
				<div class="comment-content">
					<div class="comment-text clearfix">
						<?php comment_text() ?>
						<?php if ( $comment->comment_approved == '0' ) : ?>
							<em><?php esc_html_e( 'Your comment is awaiting moderation.', 'voyager') ?></em>
							<br>
						<?php endif; ?>
					</div>
				</div>
			</div>
	<?php
	}
}


//	Pagination
if (!function_exists('cstheme_pagination')) {
    function cstheme_pagination($type = "") {
		
		global $wp_query;
		
		$text_prev = esc_html__('Older Posts','voyager');
		$text_next = esc_html__('Newer Posts','voyager');

		if ($type == "query2") {
			
			$wp_query->query_vars['paged'] > 1 ? $current = $wp_query->query_vars['paged'] : $current = 1;
			
			echo "<div class='eva-pagination container'>";
				echo "<div class='eva_pagination_wrap heading_font'>";

					$pagination = paginate_links( array(
						'base' 			=> @add_query_arg('page','%#%'),
						'format' 		=> '',
						'total' 		=> $wp_query->max_num_pages,
						'current' 		=> $current,
						'show_all' 		=> false,
						'type' 			=> '',
						'prev_text' 	=> '<i class="fa fa-chevron-left"></i>' . $text_next,
						'next_text' 	=> $text_prev . '<i class="fa fa-chevron-right"></i>'
					) );

					echo $pagination;

				echo "</div>";
			echo "</div>";
			
		} else {
			
			$pages = $wp_query->max_num_pages;
			if (empty($pages)) {
				$pages = 1;
			}
			if ( get_query_var('paged') ) {
				$paged = get_query_var('paged');
			} elseif ( get_query_var('page') ) {
				$paged = get_query_var('page');
			} else {
				$paged = 1;
			}
			
			if (1 != $pages) {
				$big = 9999; // need an unlikely integer
				echo "<div class='blog-pagination heading_font'>";
					echo "<div class='blog-pagination-wrap heading_font'>";
						$pagination = paginate_links(
							array(
								'base' 			=> str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
								'format' 		=> '',
								'current' 		=> max(1, $paged),
								'total' 		=> $pages,
								'type' 			=> '',
								'prev_text' 	=> '<i class="fa fa-chevron-left"></i>' . $text_next,
								'next_text' 	=> $text_prev . '<i class="fa fa-chevron-right"></i>'
							)
						);
						echo $pagination;
					echo "</div>";
				echo "</div>";
			}	
		}
    }
}

/**
 *	Author Social Icons
 */

function cstheme_social_author_profile( $contactmethods ) {

	$contactmethods['evatheme_author_google_profile'] = 'Google Profile URL';
	$contactmethods['evatheme_author_twitter_profile'] = 'Twitter Profile URL';
	$contactmethods['evatheme_author_facebook_profile'] = 'Facebook Profile URL';
	$contactmethods['evatheme_author_linkedin_profile'] = 'Linkedin Profile URL';
	$contactmethods['evatheme_author_instagram_profile'] = 'Instagram Profile URL';
	$contactmethods['evatheme_author_tumblr_profile'] = 'Tumblr Profile URL';
   
	return $contactmethods;
}
add_filter( 'user_contactmethods', 'cstheme_social_author_profile', 10, 1);


/**
 *	Add thumbnails to post admin dashboard
 */
add_filter( 'manage_post_posts_columns', 'eva_posts_columns' );
add_action( 'manage_posts_custom_column', 'eva_posts_custom_columns', 10, 2 );

add_filter( 'manage_page_posts_columns', 'eva_posts_columns' );
add_action( 'manage_pages_custom_column', 'eva_posts_custom_columns', 10, 2 );

if ( ! function_exists( 'eva_posts_columns' ) ) {
	function eva_posts_columns( $defaults ){
		$defaults['eva_post_thumbs'] = esc_html__( 'Featured Image', 'voyager' );
		return $defaults;
	}
}

if ( ! function_exists( 'eva_posts_custom_columns' ) ) {
	function eva_posts_custom_columns( $column_name, $id ){
		if( $column_name != 'eva_post_thumbs' ) {
			return;
		}
		if ( has_post_thumbnail( $id ) ) {
			$img_src = wp_get_attachment_image_src( get_post_thumbnail_id( $id ), 'thumbnail', false );
			if( ! empty( $img_src[0] ) ) { ?>
					<img src="<?php echo $img_src[0]; ?>" alt="<?php the_title(); ?>" style="max-width:100%;max-height:90px;" />
				<?php
			}
		} else {
			echo '&mdash;';
		}
	}
}

//	Posts per author posts page
add_filter( 'pre_option_posts_per_page', 'evatheme_author_posts_per_page' );
function evatheme_author_posts_per_page( $posts_per_page ) {
	global $wp_query;
	if ( is_author() ) {
		return 9;
	}
	
	if ( is_search() ) {
		return 20;
	} 

	return $posts_per_page;
}

//	Custom Post Formats
function voyager_rename_post_formats( $safe_text ) {
    if ( $safe_text == 'Aside' )
        return 'Twitter';
	
	if ( $safe_text == 'Status' )
        return 'Instagram';

    return $safe_text;
}
add_filter( 'esc_html', 'voyager_rename_post_formats' );

//	rename Aside, Status in posts list table
function voyager_live_rename_formats() { 
    global $current_screen;

    if ($current_screen && $current_screen->id == 'edit-post' ) { ?>
        <script type="text/javascript">
        jQuery('document').ready(function() {

            jQuery("span.post-state-format").each(function() { 
                if ( jQuery(this).text() == "Aside" )
                    jQuery(this).text("Twitter");
				
				if ( jQuery(this).text() == "Status" )
                    jQuery(this).text("Instagram");
            });

        });      
        </script>
<?php }
}
add_action('admin_head', 'voyager_live_rename_formats');
