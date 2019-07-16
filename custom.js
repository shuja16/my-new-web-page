$(document).ready(function() {
    const page = location.pathname.split('/').slice(-1)[0].replace('.html', '');
    $(`#${page}`).addClass('active');
});