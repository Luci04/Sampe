// $(window).on("load", function () {
//   $(".loader .inner").fadeOut(1000, function () {
//     $(".loader").fadeOut(500);
//   });
// });

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 7000,
    pagination: false
  });

  var typed = new Typed(".Typed", {
    strings: [
      "I' am a Protagonist._",
      "I' am a Student._",
      "I' am a Web Developer._",
      "I' am a Gamer._"
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    backSpeed: 100, // Default value
    shuffle: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 500) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  $("body").css("display", "none");
  $("body").fadeIn(7000);
});

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());