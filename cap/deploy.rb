require 'yaml'

set :application, 'wildandwithout'
set :repo_url, 'git@github.com:AydinHassan/wild-and-without.git'
set :pty, true
set :log_level, :debug
set :keep_releases, 3
set :linked_files, %w{.env public/robots.txt}
set :linked_dirs, %w(public/wp-content/uploads public/wp-content/w3tc-config public/wp-content/cache backup)

namespace :deploy do

end
