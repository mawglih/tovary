jQuery(document).ready(function($) {
    $(".accordion-title").click(function(){
        var self = this;
        setTimeout(function() {
            theOffset = $(self).offset();
            $('body,html').animate({ scrollTop: theOffset.top - 100 });
        }, 100);
    });
});