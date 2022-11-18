<?php
namespace Deployer;

require 'recipe/composer.php';

// Project name
set('application', 'wildandwithout');

// Project repository
set('repository', 'git@github.com:AydinHassan/wild-and-without.git');

set('git_tty', true);

// Shared files/dirs between deploys 
add('shared_files', ['.env' , 'public/robots.txt', 'public/ads.txt']);
add('shared_dirs', ['public/wp-content/uploads', 'public/wp-content/w3tc-config', 'public/wp-content/cache', 'backup', 'cache']);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('wildandwithout')
    ->set('deploy_path', '/var/www/html');
    
// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');


