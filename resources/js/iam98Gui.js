
function iam98Gui() {
    if (this instanceof iam98Gui) {
        this.scrollTop = 0;
        this.currentNavItem = "nav_home";
        this.previousNavItem = [];
    } else {
        return new iam98Gui();
    }
}

iam98Gui.prototype.resizePages = function() {
    var w = $( window );
    var contentPages = $(".content-pages");

    var height = w.height();

    contentPages.css("min-height", height);
    console.log("height changed to " + height);

    var homeContent = $("#home_content");
    var homeContentSpace = $("#home_content .content-space");
    var homeContentHeader = $(".header-space", homeContentSpace);
    var homeContentFooter = $(".footer-space", homeContentSpace);

    homeContent.css("height", height);
    homeContentSpace.css("min-height", height - homeContentHeader.height() - homeContentFooter.height());
};

iam98Gui.prototype.initNavigation = function() {
    var self = this;
    var navbarItems = $("#myNavbar li");

    navbarItems.on("click", function (e) {
        e.preventDefault();
        self.setMenuActive(this, true);
    });

};

iam98Gui.prototype.setMenuActive = function(navItem, isClick) {
    var activeItem = $("#myNavbar li.active");
    this.changeFocus(activeItem, false, isClick);

    var selected = $(navItem);
    this.changeFocus(selected, true, isClick);

    var menu = $("#myNavbar.in");

    if (!_.isEmpty(menu)) {
        setTimeout(function () {
            $("#navigation .navbar-toggle").click();
        }, 200);
    }
};

iam98Gui.prototype.changeFocus = function (navItem, focus, isClick) {
    var a = $("a", navItem);
    var page = $(a.attr("href"));

    var sectionName = page.attr("data-section-name");
    var content = $(".content-space", page);

    if (focus) {
        navItem.addClass("active");
        isClick && $.scrollify.move("#" + sectionName);
        setTimeout(function () {
            content.addClass("in-view");
        }, 500);
    } else {
        navItem.removeClass("active");
        setTimeout(function () {
            content.removeClass("in-view");
        }, 500);
    }
};

iam98Gui.prototype.checkIfInView = function() {
    var $window = $(window);

    var $animation_elements = $(".content-space");

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

    // $window.on('scroll resize', check_if_in_view);
    // $window.trigger('scroll');
};
