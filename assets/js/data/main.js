/* loader */
$.get("/assets/vendors/andrep/loader/index.html", function(data){
    $("#loader-animation").replaceWith(data);
});

/* Sidebar */
$.get("/assets/vendors/andrep/sidebar/header.html", function(data){
    $("#sidebar").replaceWith(data);
});

$.get("/assets/vendors/andrep/home/lainnya.html", function(data){
    $("#lainnya").replaceWith(data);
});

/* Blog */
$.get("/assets/vendors/andrep/blog/popular-article.html", function(data){
    $("#popular-articel").replaceWith(data);
});

$.get("/assets/vendors/andrep/blog/right-sidebar.html", function(data){
    $("#right-sidebar").replaceWith(data);
});

/* Video */
$.get("/assets/vendors/andrep/video/sidebar.html", function(data){
    $("#sidebar-video").replaceWith(data);
});

/* game */
$.get("/assets/vendors/andrep/game/sidebar.html", function(data){
    $("#sidebar-game").replaceWith(data);
});