(function() {
    'use strict';

    function hideNodes(nodeList) {
        var nodeIndex;
        for (nodeIndex = nodeList.length - 1; nodeIndex >= 0; nodeIndex--) {
            console.log(nodeIndex);
            nodeList[nodeIndex].style.display = 'none';
        }
    }

    xtag.register('x-simplebox', {
        lifecycle: {
            created: function() {
                hideNodes(this.children);
                this.children[0].style.display = '';
            },
        },
        events: {
            reveal: function(e){
                hideNodes(this.children);
                e.target.style.display = '';
            }
        }
    });
})();
