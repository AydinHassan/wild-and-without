<?php

declare(strict_types=1);

use GuzzleHttp\Client;
use InstagramScraper\Instagram;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Cache\Psr16Cache;

require_once __DIR__ . '/vendor/autoload.php';

\Dotenv\Dotenv::createImmutable(__DIR__)->load();

$instagram = Instagram::withCredentials(
    new Client(),
    $_ENV['INSTAGRAM_USER'],
    $_ENV['INSTAGRAM_PASSWORD'],
    new Psr16Cache(new FilesystemAdapter('insta', 0, __DIR__ .  '/cache'))
);
var_dump($instagram->login());
