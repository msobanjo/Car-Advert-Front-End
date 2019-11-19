FROM httpd:2.4

COPY ./target/Car-Advert-Front-End.jar /usr/local/apache2/htdocs/

ENTRYPOINT ["java","-jar","usr/app/Car-Advert-Front-End.jar"]
