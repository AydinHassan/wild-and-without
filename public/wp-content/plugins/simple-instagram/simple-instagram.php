<?php
/**
 * Plugin Name: Simple Instagram
 * Description: Very simple instagram plugin
 * Version: 1.0
 * Author: Aydin Hassan
 **/

use GuzzleHttp\Client;
use InstagramScraper\Instagram;
use InstagramScraper\Model\Media;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Cache\Psr16Cache;

add_shortcode('simple-instagram', function ($atts = [], $content = null, $tag = '') {

    $atts = array_change_key_case((array) $atts, CASE_LOWER);
    $atts = shortcode_atts(['type' => 'grid',], $atts, $tag);

    $html = <<<EOT
        <div class="instagram-container instagram-{$atts['type']}"><div class="loader"></div></div>
    EOT;

    return $html;
});

$requestHandler = function () {
    $type = $_GET['type'] ?? 'grid';
    if (false === ($posts = get_transient('instagram_posts'))) {
        $instagram = Instagram::withCredentials(
            new Client(),
            $_ENV['INSTAGRAM_USER'],
            $_ENV['INSTAGRAM_PASSWORD'],
            new Psr16Cache(new FilesystemAdapter('insta', 0, __DIR__ .  '/../../../../cache'))
        );
        $instagram->login();
        try {
            $posts = $instagram->getMedias('wildandwithout');
        } catch (\Exception $e) {
            wp_send_json_error(['message' => "Something went wrong: {$e->getMessage()}"]);
            return;
        }

        set_transient('instagram_posts', $posts, DAY_IN_SECONDS);
    }

    $widget = new InstagramWidget($posts);

    if ($type === 'grid') {
        $html = $widget->doGrid();
    } else {
        $html = $widget->doCarousel();
    }

    wp_send_json_success(['html' => $html]);
};

add_action('wp_ajax_instagram_posts', $requestHandler);
add_action('wp_ajax_nopriv_instagram_posts', $requestHandler);


class InstagramWidget {

    /** @var array */
    private $posts;

    /** @var string */
    private $user;

    /** @var string */
    private $userImageUrl;

    /** @var string */
    private $userTitle;

    /**
     * @param Media[] $posts
     */
    public function __construct(array $posts = [])
    {

        $this->posts = $posts;
        $this->user = $this->posts[0]->getOwner()->getUsername();
        $this->userImageUrl = $this->posts[0]->getOwner()->getProfilePicUrlHd();
        $this->userTitle = $this->posts[0]->getOwner()->getFullName();
    }

    public function doGrid() : string
    {
        $images = array_map(function (Media $post) {
            return [
                'user' => $post->getOwner()->getUsername(),
                'thumbnail' => $post->getImageThumbnailUrl(),
                'link' => $post->getLink(),
            ];
        }, $this->posts);
        $images = array_slice($images, 0, 12);

        $html  = <<<EOT
        <div class="simple-instagram-grid">
            <div class="simple-instagram-header">
                <a href="https://www.instagram.com/{$this->user}" target="_blank" title="@{$this->user}">
                    <div><img class="simple-instagram-header-image" src="{$this->userImageUrl}" alt="{$this->userTitle}" width="50" height="50"></div>
                    <div><h3 class="simple-instagram-header-text">{$this->user}</h3></div>
                </a>
            </div>
        EOT;

        foreach ($images as $image) {
            $html .= sprintf(
                '<div class="simple-instagram-image"><a target="_blank" href="%s"><img src="%s" alt="%s" /></a></div>',
                $image['link'],
                $image['thumbnail'],
                $image['user']
            );
        }
        $html .= '</div>';

        return $html;
    }

    public function doCarousel() : string
    {
        $images = array_map(function (Media $post) {
            return [
                'user' => $post->getOwner()->getUsername(),
                'img' => $post->getImageHighResolutionUrl(),
                'link' => $post->getLink(),
            ];
        }, $this->posts);

        $images = array_slice($images, 0, 8);

        $html = '<div class="simple-instagram-carousel"><div class="img-container">';
        foreach ($images as $image) {
            $html .= sprintf(
                '<div class="simple-instagram-image"><a style="background-image: url(%s)" target="_blank" href="%s"><img src="%s" alt="%s" /></a></div>',
                $image['img'],
                $image['link'],
                $image['img'],
                $image['user'],
            );
        }

        $html .= <<<EOT
            </div>
            <div class="follow-me-instagram">
                <a class="follow-me-instagram-btn" href="https://www.instagram.com/{$this->user}"><svg class="svg-inline--fa fa-instagram follow-me-instagram-svg" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>Follow on Instagram</a>
            </div>
        </div>
        EOT;
        return $html;
    }
}
