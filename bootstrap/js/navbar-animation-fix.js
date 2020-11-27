$('#nav navbar-default').on('show.bs.collapse', fuction() {
    $('.banner').css('transform', 'translate(-50%, 10%)');
});

$('#nav navbar-default').on('hide.bs.collapse', fuction() {
    $('.banner').css('transform', 'translate(50%, -50%)');
});