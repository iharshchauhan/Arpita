// files/theme/js/eskju.parallax.js
function updateParallax() {
    scrollOffset = $(window).scrollTop() + $(window).height() / 4 * 5, $(".parallax").each(function(a, l) {
        objOffset = $(l).offset(), parallaxScale = .8, parallaxOpacity = 0, parallaxOffset = -100, scrollOffset > objOffset.top && (scrollValue = (scrollOffset - objOffset.top) / $(window).height() * 2, scrollValue = scrollValue > 1 ? 1 : scrollValue, parallaxScale += .2 * scrollValue, parallaxOpacity += 1 * scrollValue, parallaxOffset += parseInt(100 * scrollValue)), $(l).hasClass("-pop") && $(l).css({
            filter: "opacity(" + parallaxOpacity + ")",
            transform: "scale(" + parallaxScale + ")",
            transition: "all 500ms ease-out"
        }), $(l).hasClass("-slide-top") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( 0px, " + -1 * parallaxOffset + "px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-bottom") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( 0px, " + 1 * parallaxOffset + "px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-left") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( " + -1 * parallaxOffset + "px, 0px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-right") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( " + 1 * parallaxOffset + "px, 0px, 0px )",
            transition: "all 1000ms ease-out"
        })
    }), scrollOffset = $(window).scrollTop(), $(".parallax-inverted").each(function(a, l) {
        objOffset = $(l).offset(), parallaxOpacity = 1, parallaxOffset = 0, scrollOffset > objOffset.top && (scrollValue = (scrollOffset - objOffset.top) / $(window).height() * 2, scrollValue = scrollValue < 0 ? 0 : scrollValue, scrollValue = scrollValue > 1 ? 1 : scrollValue, parallaxOpacity -= 1 * scrollValue, parallaxOffset += parseInt(150 * scrollValue)), $(l).hasClass("-slide-top") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( 0px, " + -1 * parallaxOffset + "px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-bottom") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( 0px, " + 1 * parallaxOffset + "px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-left") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( " + -1 * parallaxOffset + "px, 0px, 0px )",
            transition: "all 1000ms ease-out"
        }), $(l).hasClass("-slide-right") && $(l).css({
            webkitFilter: "opacity(" + parallaxOpacity + ")",
            transform: "translate3d( " + 1 * parallaxOffset + "px, 0px, 0px )",
            transition: "all 1000ms ease-out"
        })
    })
}
$(document).ready(function() {
    updateParallax(), $(window).scroll(function() {
        updateParallax()
    }), $(window).resize(function() {
        updateParallax()
    })
});

// plugins/eskju-jquery-fancyindex/js/eskju.jquery.fancyindex.js 
/*$(document).ready(function() {
    $("body").FancyIndex()
}), $.fn.FancyIndex = function(i) {
    new FancyIndex(this, i)
}, FancyIndex = function(i, t) {
    this.init(i, t)
}, $.extend(FancyIndex.prototype, {
    init: function(i, t) {
        this.selector = $(i), this.items = [], this.disabled = !1, this.lastActivity = 0, this.options = $.extend({
            hideWhenInactive: !0,
            focusInitally: !0,
            focusOnResize: !0,
            focusOnScroll: !0,
            focusOnHover: !0,
            focusTimeout: 1e3,
            firstOnly: !1,
            forceLastActive: !0,
            scrollToDuration: 1e3,
            scrollOnClick: !0,
            maxPrioritizedItems: 3,
            flipPosition: !1
        }, t), this.loadHierarchy(), this.bindSelf(), this.bindScroll(), this.bindResize(), this.bindHover(), this.updateItems(), this.options.hideWhenInactive && (this.options.focusInitally ? this.setActive() : this.hide())
    },
    setActive: function() {
        var i = this;
        $("#esKju-fancyIndex").removeClass("inactive"), $("#esKju-fancyIndex").animate({
            minHeight: 0
        }, parseInt(this.options.focusTimeout), function() {
            i.hide()
        })
    },
    hide: function() {
        this.options.hideWhenInactive && $("#esKju-fancyIndex").addClass("inactive")
    },
    bindSelf: function() {
        var i = this;
        $("body").bind("refreshFancyIndex", function(t, e) {
            i.options = e
        })
    },
    bindScroll: function() {
        var i = this;
        $(window).scroll(function() {
            i.updateItems(), i.options.focusOnScroll && i.setActive()
        })
    },
    bindResize: function() {
        var i = this;
        $(window).resize(function() {
            i.updateItems(), i.options.focusOnResize && i.setActive()
        })
    },
    bindHover: function() {
        var i = this;
        $("#esKju-fancyIndex").hover(function() {
            i.options.focusOnHover && i.setActive()
        })
    },
    updateItems: function() {
        var t = this,
            e = $(window).scrollTop(),
            n = $(window).height(),
            s = !1,
            o = parseInt(this.options.maxPrioritizedItems),
            a = !1;
        $.each(t.items, function(d, c) {
            for ($(c.obj).removeClass("active"), $(c.obj).removeClass("prioritized"), i = 1; i <= parseInt(t.options.maxPrioritizedItems); i++) $(c.obj).removeClass("priority-" + i);
            e > parseInt(c.offset.top) + 50 && (a = $(c.obj)), e <= parseInt(c.offset.top) + 50 && e + n >= parseInt(c.offset.top) && (!t.options.firstOnly || !s) && (0 == parseInt(t.options.maxPrioritizedItems) || o > 0) && ($(c.obj).addClass("active"), $(c.obj).addClass("prioritized"), $(c.obj).addClass("priority-" + o), s = !0, o--)
        }), t.options.forceLastActive && 0 == $("#esKju-fancyIndex .active").length && ($(a).addClass("active"), $(a).addClass("prioritized"), $(a).addClass("priority-" + t.options.maxPrioritizedItems))
    },
    loadHierarchy: function() {
        var i = this;
        this.items = [], esKjuFancyIndex = $("<ul>").attr("id", "esKju-fancyIndex").addClass(this.options.flipPosition ? "left" : "right"), $("body").append(esKjuFancyIndex), $(this.selector.find("h1,h2,h3,h4,h5,h6,h7")).each(function(t, e) {
            if ("true" != $(e).attr("data-fancyindex-hide")) {
                var n = $(e).prop("tagName").toLowerCase(),
                    s = $(e).html(),
                    o = $(e).offset();
                $(e).attr("data-fancyIndex-title") && "" != $(e).attr("data-fancyIndex-title") && (s = $(e).attr("data-fancyIndex-title"));
                var a = $("<li>").addClass(n).html("<div>" + s + "</div>");
                esKjuFancyIndex.append(a), i.items.push({
                    offset: o,
                    obj: a
                }), i.options.scrollOnClick && $(a).find("div").click(function() {
                    o = $(e).offset(), $("html, body").animate({
                        scrollTop: o.top
                    }, parseInt(i.options.scrollToDuration))
                })
            }
        })
    }
});
*/
// google analytics
/*! function(e, a, t, n, c, o, s) {
    e.GoogleAnalyticsObject = c, e[c] = e[c] || function() {
        (e[c].q = e[c].q || []).push(arguments)
    }, e[c].l = 1 * new Date, o = a.createElement(t), s = a.getElementsByTagName(t)[0], o.async = 1, o.src = n, s.parentNode.insertBefore(o, s)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-57419810-1", "auto"), ga("send", "pageview");
*/