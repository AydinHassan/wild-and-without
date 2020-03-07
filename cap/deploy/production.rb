role :web, %w{wildandwithout@198.211.120.174}

set :branch, 'master'
set :deploy_to, '/var/www/html'
set :composer_install_flags, '--no-interaction --optimize-autoloader -q'

