FROM nginx:stable

COPY ./dist/rnd-pm /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
