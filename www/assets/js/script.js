"use strict";
! function() {
    document.querySelectorAll(".dropdown-menu a.dropdown-toggle").forEach((function(e) {
        e.addEventListener("click", (function(e) {
            if (!this.nextElementSibling.classList.contains("show")) { this.closest(".dropdown-menu").querySelectorAll(".show").forEach((function(e) { e.classList.remove("show") })) }
            this.nextElementSibling.classList.toggle("show");
            const t = this.closest("li.nav-item.dropdown.show");
            t && t.addEventListener("hidden.bs.dropdown", (function(e) { document.querySelectorAll(".dropdown-submenu .show").forEach((function(e) { e.classList.remove("show") })) })), e.stopPropagation()
        }))
    }));
    var e = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    e.length && e.forEach((function(e) { new bootstrap.Tooltip(e) })), document.querySelectorAll(".input-group").forEach((function(e) {
        e.addEventListener("click", (function(e) {
            e.target.classList.contains("button-plus") ? function(e) {
                e.preventDefault();
                var t = e.target,
                    n = t.getAttribute("data-field"),
                    o = t.closest("div").querySelector('input[name="' + n + '"]'),
                    a = parseInt(o.value, 10) || 0;
                o.value = a + 1
            }(e) : e.target.classList.contains("button-minus") && function(e) {
                e.preventDefault();
                var t = e.target,
                    n = t.getAttribute("data-field"),
                    o = t.closest("div").querySelector('input[name="' + n + '"]'),
                    a = parseInt(o.value, 10) || 0;
                a > 0 && (o.value = a - 1)
            }(e)
        }))
    }));
    var t = document.querySelectorAll('[data-bs-toggle="popover"]');
    t.length && t.forEach((function(e) { new bootstrap.Popover(e) })), document.querySelectorAll(".rater").forEach((function(e, t) { raterJs({ starSize: 20, element: e, rateCallback: function(e, t) { this.setRating(e), t() } }) }));
    var n = document.querySelectorAll(".sidebar-nav-fixed a");
    n.length && n.forEach((function(e) {
        e.addEventListener("click", (function(e) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = document.querySelector(this.hash);
                if (t = t || document.querySelector("[name=" + this.hash.slice(1) + "]")) {
                    e.preventDefault(), window.scrollTo({ top: t.offsetTop - 90, behavior: "smooth" });
                    var o = document.querySelector(this.hash);
                    o && !o.matches(":focus") && (o.setAttribute("tabindex", "-1"), o.focus())
                }
            }
            n.forEach((function(e) { e.classList.remove("active") })), this.classList.add("active")
        }))
    }));
    var o = document.querySelectorAll(".flatpickr");
    o.length && o.forEach((function(e) { flatpickr(e, { disableMobile: !0 }) }));
    var a = document.querySelectorAll(".stopevent");
    a.length && a.forEach((function(e) { e.addEventListener("off.bs.collapse.data-api", (function(e) { e.stopPropagation() })) }));
    const r = document.querySelector("#checkAll");
    r && r.addEventListener("click", (function() { document.querySelectorAll('input[type="checkbox"]').forEach((function(e) { e !== r && (e.checked = r.checked) })) }));
    var c = document.getElementById("liveAlertPlaceholder");
    if (c) {
        var i = document.getElementById("liveAlertBtn");
        i && i.addEventListener("click", (function() {
            var e, t, n;
            e = "Nice, you triggered this alert message!", t = "success", (n = document.createElement("div")).innerHTML = `\n        <div class="alert alert-${t} alert-dismissible" role="alert">\n          <div>${e}</div>\n          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n        </div>`, c.append(n)
        }))
    }
    var l = document.getElementById("priceRange");
    if (l) {
        noUiSlider.create(l, { connect: !0, behaviour: "tap", start: [49, 199], range: { min: [6], max: [300] }, format: wNumb({ decimals: 1, thousand: ".", prefix: "$" }) });
        var s = document.getElementById("priceRange-value");
        l.noUiSlider.on("update", (function(e) { s.innerHTML = e.join(" - ") }))
    }
    var u = document.querySelectorAll(".file-input");
    u.length && u.forEach((function(e) {
        e.addEventListener("change", (function() {
            var t = e.parentElement.parentElement.querySelector(".image"),
                n = new FileReader;
            n.onload = function(e) { t.setAttribute("src", e.target.result) }, n.readAsDataURL(e.files[0])
        }))
    }))



    $("#btn_close").on('click', function(e) {
        e.preventDefault();


        $(".navbar-vertical").animate({
            left: "-280px"
        });
        setTimeout(function() {
            $("#offcanvasMenu").toggleClass("offcanvas");
        }, 200)

        menuShow();
    })


    $("#btn_show").click(function(e) {
        e.preventDefault();
        $(".navbar-vertical").animate({
            left: "0px"
        });
        $("#offcanvasMenu").removeClass("offcanvas");
        $(this).css({ left: '-30px' });
    })

    $(".nav-bottom__link__menu").click(function(e) {
        e.preventDefault();

        $(".navbar-vertical").animate({
            left: "0px"
        });
        $("#offcanvasMenu").removeClass("offcanvas");


    });


    function menuShow() {
        // $("#btn_show").attr('style', function(i, s) { return s + 'display:block !important' });
        $("#btn_show").animate({
            left: '10px',
        });

    }


    document.addEventListener("DOMContentLoaded", function() {
        window.innerWidth <= 1200 ? ($("#offcanvasMenu").addClass("offcanvas"), $(".navbar-vertical").css({ left: "-280px" })) : ($("#offcanvasMenu").removeClass("offcanvas"), $(".navbar-vertical").css({ left: "0" }));

    })

    window.addEventListener("resize", function() {
        window.innerWidth <= 1200 ? ($("#offcanvasMenu").addClass("offcanvas"), $(".navbar-vertical").css({ left: "-280px" })) : ($("#offcanvasMenu").removeClass("offcanvas"), $(".navbar-vertical").css({ left: "0" }));

    })

}();