(function() {
    xtag.register('x-simplebox', {
        lifecycle: {
            created: function() {
                $(this).children().hide();
                $(this).children().first().show();
            },
        },
        events: {
          reveal: function(e){
            $(this).children().hide();
            $(e.target).show();
          }
        }
    });
})();
