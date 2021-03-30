role :web, %w{wildandwithout@wildandwithout}

set :branch, 'master'
set :deploy_to, '/var/www/html'
set :composer_install_flags, '--no-interaction --optimize-autoloader -q'

