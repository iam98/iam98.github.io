/**
 * iam98
 */

iam98 = typeof iam98 === "undefined" ? {} : iam98;

$( document ).ready(function () {
    var gui = new iam98Gui();

    gui.resizePages();
    gui.initNavigation();

    iam98.gui = gui;

});

$( window ).resize(function () {
    iam98.gui.resizePages();
});