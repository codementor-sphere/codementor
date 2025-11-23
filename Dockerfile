FROM php:8.2-apache

# Install required PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Allow .htaccess overrides (already good)
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# -----------------------------------------------------------------
# NEW: Copy the custom Apache configuration file
# This file sets the DocumentRoot to /var/www/html/public
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
# -----------------------------------------------------------------

# Copy all application files (including the 'public' folder with Vue build)
# NOTE: Use a .dockerignore file to exclude node_modules and frontend source code
COPY . /var/www/html/

# Fix permissions
RUN chown -R www-data:www-data /var/www/html \
    && find /var/www/html -type d -exec chmod 755 {} \; \
    && find /var/www/html -type f -exec chmod 644 {} \;

EXPOSE 80

# The default 'CMD' in this image is to start Apache in