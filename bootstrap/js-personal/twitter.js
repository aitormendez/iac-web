/**
 El siguiente script es para twitter.
 Documentación: http://joelb.me/blog/2012/tutorial-creating-a-custom-tweet-button-with-counter/
 Modificado para eliminar hashtags y via@
*/

var API_URL = "http://cdn.api.twitter.com/1/urls/count.json",
    TWEET_URL = "https://twitter.com/intent/tweet";

$(".tweet").each(function() {
    var elem = $(this),
    // Use current page URL as default link
    url = encodeURIComponent(elem.attr("data-url") || document.location.href),
    // Use page title as default tweet message
    text = elem.attr("data-text") || document.title,
    related = encodeURIComponent(elem.attr("data-related")) || "";

    // Set href to tweet page
    elem.attr({
        href: TWEET_URL + "?original_referer=" +
                encodeURIComponent(document.location.href) + "&related=" + related +
                "&source=tweetbutton&text=" + text + "&url=" + url

    });

    // Get count and set it as the inner HTML of .count
    $.getJSON(API_URL + "?callback=?&url=" + url, function(data) {
        elem.find(".count").html(data.count);
    });
});
