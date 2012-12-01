/**
 * jQuery Centerfill
 * http://javascripted.me
 *
 * Copyright 2012 Lab 9 Interactive
 * Released under the MIT license
 * Version 0.9
 */
(function ($, undefined) {
    $.fn.centerfill = function () {
        return this.each(function () {
            var iWidth = $(this).width();
            var iHeight = $(this).height();

            var parent = $(this).parent();
            parent.css('position', 'relative');
            var pWidth = $(parent).width();
            var pHeight = $(parent).height();
            var scaleW = iWidth / pWidth;
            var scaleH = iHeight / pHeight;
            var scale = Math.min(scaleW, scaleH);
            var rWidth = iWidth / scale;
            var rHeight = iHeight / scale;
            $(this).width(rWidth).height(rHeight).css({
                'position': 'absolute',
                'left': (rWidth - pWidth) / -2,
                'top': (rHeight - pHeight) / -2
            });
        });
    };
})(jQuery);
