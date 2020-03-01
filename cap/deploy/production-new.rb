role :web, %w{wildandwithout@198.211.120.174}

set :composer_install_flags, '--no-interaction --optimize-autoloader -q'
set :deploy_to, '/var/www/html'
set :linked_files, %w{.env public/robots.txt}

