$(function () {
    $('a[href$="' + window.location.host + '"]').parent().addClass("active");
    $('a[href$="' + window.location.pathname + '"]').parent().addClass("active");
    $('a[href$="' + window.location.host + window.location.pathname + '"]').parent().addClass("active");
});

