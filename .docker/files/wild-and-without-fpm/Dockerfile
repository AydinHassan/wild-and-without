FROM php:7.4-fpm

RUN apt-get -qq update && apt-get install -qqy apt-utils libzip-dev git zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-install pdo pdo_mysql mysqli zip \
	&& docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
	&& docker-php-ext-install gd

# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Xdebug
#ADD .docker/etc/php-xdebug.ini /usr/local/etc/php/conf.d/php-xdebug.ini
#RUN pecl install xdebug && docker-php-ext-enable xdebug

RUN curl -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
RUN chmod +x /usr/local/bin/wp

WORKDIR /var/www/html

RUN cd /var/www/html

CMD ["php-fpm"]
