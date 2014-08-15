/**
 * Created by schmatz on 6/30/14.
 */

$(document).ready(function(){
    $("#gopherbox_gopher_head").delay(500).animate({top:'-=125px'}, 500); // logo_width / 2
    gopherboxHover();
    readMore();
});

function gopherboxHover() {
    $("#gopherbox_logo_image").hover(function() {
        $("#gopherbox_gopher_head").animate({top:'+=83px'}, 100); // logo_width / 3
    }, function() {
        $("#gopherbox_gopher_head").animate({top:'-=83px'}, 100); // logo_width / 3
    });
}

function readMore() {
    var button = $("#readMore_button_container");
    button.css("cursor", "pointer");
    button.click(function() {
        $('html, body').animate({
            scrollTop: $("#pageTwo").offset().top
        }, 1000);
    });
}