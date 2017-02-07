/**
 * iam98
 */

iam98 = typeof iam98 === "undefined" ? {} : iam98;

$( document ).ready(function () {
    var gui = new iam98Gui();

    gui.resizePages();
    gui.initNavigation();

    iam98.gui = gui;
    iam98.addWindowListeners();

    $(function() {
        $.scrollify({
            section : ".content-pages",
            // sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
            before:function(index, sections) {
                var focused = sections[index];
                var navItem = focused.attr("data-navitem");
                iam98.gui.setMenuActive($("#" + navItem));
            },
            after:function(index, sections) {
            },
            afterResize:function() {},
            afterRender:function() {}
        });
    });
});

iam98.addWindowListeners = function () {
    var $window = $(window);

    $window.resize(function () {
        iam98.gui.resizePages();
    });

    $window.on('scroll resize', function () {

    });

};