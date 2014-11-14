(function() {
    'use strict';
    xtag.register('x-simplebox', {
        lifecycle: {
            created: function() {
                var children = this.children;
                var childIndex;
                for (childIndex = 0; childIndex < children.length; childIndex++) {
                    children[childIndex].style.display = 'none';
                }

                this.children[0].style.display = '';
            },
        },
        events: {
            reveal: function(e){
                var children = this.children;
                var childIndex;
                for (childIndex = 0; childIndex < children.length; childIndex++) {
                    children[childIndex].style.display = 'none';
                }
                e.target.style.display = '';
            }
        }
    });
})();
