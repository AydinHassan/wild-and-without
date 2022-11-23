<h1 align="center">Wild & without blog</h1>

<p align="center">Our WP travel blog</p>

## Development

```sh
$ git clone git@github.com:AydinHassan/wild-and-without.git
$ cd wild-and-without
$ composer install
$ docker-compose up -d
$ npm start
```

### WP CLI

```sh
docker-compose exec php wp --allow-root --path="public/wp
```

### Varnish clear cache

```sh
sudo docker-compose -f docker-compose-prod.yml exec varnish varnishadm "ban req.url ~ ."
```

### Varnish page debugging

```
sudo docker-compose -f docker-compose-prod.yml exec varnish varnishlog -q 'ReqURL ~ "^/2021/08/25/georgia-canyons-ultimate-guide/"'
```

#### Monitor purge requests

```
sudo docker-compose -f docker-compose-prod.yml exec varnish varnishlog -g request -q 'ReqMethod eq "PURGE"'
```

## Production

### Starting containers

```shell
cd /var/www/html/current
sudo docker-compose -f docker-compose-prod.yml up -d
```

### Stopping

```shell
cd /var/www/html/current
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)
```

### Rebuild varnish

```
sudo docker-compose -f docker-compose-prod.yml up --build -d varnish
```

After restarting docker, need to allow firewall access to nginx from docker

```shell
sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' wild-and-without-host
sudo ufw allow from [ip] proto tcp to any port 8080
``` 

### Production db dump

```shell
sudo mysqldump --skip-extended-insert -u root -p wild_and_without > ~/wildandwithout.sql
```

### Local db import

```shell
docker exec -i wild-and-without-db mariadb -uwild_and_without -pwild_and_without wild_and_without < wildandwithout.sql
```