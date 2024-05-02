(function ($) {
    "use strict";

/*=================================================
	Scroll Page on Swipe
==================================================*/

    jQuery("body").swipe({
        swipe: function (event, direction, distance, duration, fingerCount) {
            if ((direction == "left") && (pagemove < (total_num_pages - 1))) {
                pagemove++;
                HORILLAX.ANIM.instance.move(pagemove);
            } else if (direction == "right") {
                if (pagemove > 0) {
                    pagemove--;
                    HORILLAX.ANIM.instance.move(pagemove);
                }
            }
        }
    });



})(jQuery);