(function ($) {
    $(document).on('ready', function () {
        "use strict";
        /**Preload**/
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();
        });
        /** slider**/


        //Search option
        $('.nav-left li ').click(function () {
            $('.active-nav').removeClass('active-nav');
            $(this).addClass('active-nav');

        });

        $(".nav-scroll").niceScroll();
    });
})(jQuery);
