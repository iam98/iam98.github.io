
function iam98Gui() {
}

iam98Gui.prototype.resizePages = function() {
    var w = $( window );
    var contentPages = $(".content-pages");

    var height = w.height();

    contentPages.css("min-height", height);
    console.log("height changed to " + height);

    var homeContentSpace = $("#home_content .content-space");

    homeContentSpace.css("min-height", height - 50);
};

