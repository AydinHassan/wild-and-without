require 'yaml'

set :application, 'wildandwithout'
set :repo_url, 'git@github.com:AydinHassan/wild-and-without.git'
set :branch, 'master'
set :deploy_to, '/var/www/wildandwithout.com'
set :pty, true
set :log_level, :debug
set :keep_releases, 3
set :linked_files, %w{.env robots.txt}
set :linked_dirs, %w(public/wp-content/uploads)

namespace :deploy do

end