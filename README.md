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
docker-compose exec varnish varnishadm "ban req.url ~ ."
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

After restarting docker, need to allow firewall access to nginx from docker

```shell
sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' wild-and-without-host
sudo ufw allow from [ip] proto tcp to any port 8080
``` 
