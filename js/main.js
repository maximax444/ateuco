$('.lend-kinds__block').on({
    mouseenter: function () {
        $(this).find('.lend-kinds__descr').slideDown();
    },
    mouseleave: function () {
        $(this).find('.lend-kinds__descr').slideUp();
    }
});