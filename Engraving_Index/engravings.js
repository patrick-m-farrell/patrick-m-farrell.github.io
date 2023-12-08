$(document).ready(function() {
    $('#ributton').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#rhodeisland').offset().top
        }, 'slow');
    });
});
$(document).ready(function() {
    $('#mabutton').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#mass').offset().top
        }, 'slow');
    });
});