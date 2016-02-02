$(document).ready(function() {
    $('.panel-body').hide(); //.delay( 600 ).slideDown(1000);
    
    //TODO: create a panels array and then properly iterate
    $('.panel-body').each(function() {
        var index=1;
        $( this ).delay( index*1000 ).slideDown(500);
        index++;
    });
    
    $('.panel').on('click' , function() {
        $( this ).children(".panel-body").slideToggle(1000);
    });
});