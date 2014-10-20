(function () {
    xtag.register('x-simplebox', {
        lifecycle: {
            created: function() {
                $(this).children().css('display', 'none');
                $(this).children().first().css('display', 'block');
            },
        },
        events: {
          reveal: function(e){
            $(this).children().css('display', 'none');
            $(e.target).css('display', 'block');
          }
        }
    });
})();
