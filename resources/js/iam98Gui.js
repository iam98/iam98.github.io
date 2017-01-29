
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

iam98Gui.prototype.initNavigation = function() {
    var self = this;
    var navbarItems = $("#myNavbar li");

    navbarItems.on("click", function () {
        self.setMenuActive(this);
    });

};

iam98Gui.prototype.setMenuActive = function(navItem) {
    var activeItem = $("#myNavbar li.active");
    this.changeFocus(activeItem, false);

    var selected = $(navItem);
    this.changeFocus(selected, true);

    var menu = $("#myNavbar.in");

    if (!_.isEmpty(menu)) {
        setTimeout(function () {
            $("#navigation .navbar-toggle").click();
        }, 200);
    }
};

iam98Gui.prototype.changeFocus = function (navItem, focus) {
    var a = $("a", navItem);
    var page = $(a.attr("href"));
    var content = $(".content-space", page);

    setTimeout(function () {
        if (focus) {
            navItem.addClass("active");
            content.addClass("in-view");
        } else {
            navItem.removeClass("active");
            content.removeClass("in-view");
        }
    }, 500);
};

iam98Gui.prototype.temp = function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
};
