FROM php:7.3-fpm

RUN apt-get -qq update && apt-get install -qqy libzip-dev git zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-install pdo pdo_mysql mysqli zip \
	&& docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install gd

# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Xdebug
RUN pecl install xdebug-beta

ADD .docker/etc/php-xdebug.ini /usr/local/etc/php/conf.d/php-xdebug.ini
RUN docker-php-ext-enable xdebug

COPY . /var/www/html
WORKDIR /var/www/html

RUN cd /var/www/html && composer install -q --no-dev -o

CMD ["php-fpm"]