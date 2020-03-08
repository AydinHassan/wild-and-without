FROM alpine:edge
MAINTAINER Aydin Hassan <aydin@hotmail.co.uk>

RUN apk add --no-cache varnish

COPY wordpress.vcl /etc/varnish/
COPY hit-miss.vcl /etc/varnish/

EXPOSE 80
CMD ["varnishd", "-a", ":80", "-F", "-f", "/etc/varnish/wordpress.vcl"]
