FROM nginx:stable
COPY /github/jekyll_build /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80