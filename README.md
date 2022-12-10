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

## Deploy

```shell
dep deploy
```

## Production

### DB dump

```shell
sudo mysqldump --skip-extended-insert -u root -p wild_and_without > ~/wildandwithout.sql
```

### Local db import

```shell
docker exec -i wild-and-without-db mariadb -uwild_and_without -pwild_and_without wild_and_without < wildandwithout.sql
```