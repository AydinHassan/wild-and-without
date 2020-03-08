vcl 4.0;

include "hit-miss.vcl";
import std;

backend default {
    .host = "nginx";
    .port = "80";
}

acl purge {
    "localhost";
    "127.0.0.1";
    "dockerhost";
}

sub vcl_recv {
    # Allow purging from ACL
    if (req.method == "PURGE") {
        # If not allowed then a error 405 is returned
        if (!client.ip ~ purge) {
            return(synth(405, "This IP is not allowed to send PURGE requests."));
        }
        return (purge);
    }

    # Post requests will not be cached
    if (req.http.Authorization || req.method == "POST") {
        return (pass);
    }

    # Did not cache the RSS feed
    if (req.url ~ "/feed") {
        return (pass);
    }

    if (req.url ~ "/(login|admin)") {
        return (pass);
    }

    if (req.url ~ "/wp/wp-(login|admin)") {
        return (pass);
    }

    set req.http.Cookie = regsuball(req.http.Cookie, "has_js=[^;]+(; )?", "");
    set req.http.Cookie = regsuball(req.http.Cookie, "__utm.=[^;]+(; )?", "");
    set req.http.Cookie = regsuball(req.http.Cookie, "_ga=[^;]+(; )?", "");
    set req.http.Cookie = regsuball(req.http.Cookie, "_gat=[^;]+(; )?", "");
    set req.http.Cookie = regsuball(req.http.Cookie, "_gid=[^;]+(; )?", "");
    set req.http.Cookie = regsuball(req.http.Cookie, "session_depth=[^;]+(; )?", "");
    set req.http.cookie = regsuball(req.http.cookie, "wp-settings-\d+=[^;]+(; )?", "");
    set req.http.cookie = regsuball(req.http.cookie, "wp-settings-time-\d+=[^;]+(; )?", "");
    set req.http.cookie = regsuball(req.http.cookie, "wordpress_test_cookie=[^;]+(; )?", "");
    set req.http.cookie = regsuball(req.http.cookie, "wordpress_logged_in_[a-z0-9]+=[^;]+(; )?", "");

    if (req.http.cookie ~ "^ *$") {
        unset req.http.cookie;
    }

    if (req.url ~ "\.(css|js|png|gif|jp(e)?g|swf|ico)") {
        unset req.http.cookie;
    }

    if (req.http.Accept-Encoding) {
        if (req.url ~ "\.(jpg|png|gif|gz|tgz|bz2|tbz|mp3|ogg)$") {
            unset req.http.Accept-Encoding;
        } elsif (req.http.Accept-Encoding ~ "gzip") {
            set req.http.Accept-Encoding = "gzip";
        } elsif (req.http.Accept-Encoding ~ "deflate") {
            set req.http.Accept-Encoding = "deflate";
        } else {
            unset req.http.Accept-Encoding;
        }
    }

    if (req.http.Cookie ~ "wordpress_" || req.http.Cookie ~ "comment_") {
        return (pass);
    }

    if (!req.http.cookie) {
        unset req.http.cookie;
    }

    # Do not cache HTTP authentication and HTTP Cookie
    if (req.http.Authorization || req.http.Cookie) {
        return (pass);
    }

    # Cache all others requests
    return (hash);
}

sub vcl_backend_response {
    unset beresp.http.Server;
    unset beresp.http.X-Powered-By;

    # For static content strip all backend cookies
    if (bereq.url ~ "\.(css|js|png|gif|jp(e?)g)|swf|ico") {
        unset beresp.http.cookie;
    }

    # Only allow cookies to be set if we're in admin area
    if (beresp.http.Set-Cookie && bereq.url !~ "^/wp/wp-(login|admin)" && bereq.url !~ "^/(login|admin)") {
        unset beresp.http.Set-Cookie;
    }

    # don't cache response to posted requests or those with basic auth
    if (bereq.method == "POST" || bereq.http.Authorization ) {
        set beresp.uncacheable = true;
        set beresp.ttl = 120s;
        return (deliver);
    }

    # don't cache search results
    if (bereq.url ~ "\?s=" ){
        set beresp.uncacheable = true;
        set beresp.ttl = 120s;
        return (deliver);
    }

    # only cache status ok
    if (beresp.status != 200 ) {
        set beresp.uncacheable = true;
        set beresp.ttl = 120s;
        return (deliver);
    }

    set beresp.ttl = 24h;
    set beresp.grace = 30s;

    return (deliver);
}
