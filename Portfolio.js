$(document).ready(function() {
  widthCheck();
});
$(window).resize(function() {
  widthCheck();
});

function widthCheck() {
  if ($(document).width() < 800) {
    $("#mainNavbar").css("display", "none");
    $(".dropbtn").css("display", "block");
  } else {
    $(".dropbtn").css("display", "none");
    $("#mainNavbar").css("display", "block");
  }

  if ($(document).width() < 800) {
    var elem = document.getElementsByClassName("width");

    for (var i = 0; i < elem.length; i++) {
      $(elem[i])
        .removeClass("width")
        .addClass("width-small");
    }

    $("#classinfo").text("hey");
    $("#footer").css("flex-flow", "column");
    $("#intro").css("flex-flow", "column");
    $("#left-intro").css("order", "2");
    $("#right-intro").css("order", "1");
    $("#portfolio").css("flex-flow", "column");
    $("#contact").css("flex-flow", "column");
    $("#left-sub").css("width", "100%");
    $("#right-sub").css("width", "100%");
    $("#outer-port").css("width", "auto");
    $("#outer-intro").css("width", "100%");
    $("#outer-certs").css("width", "100%");
    $("#outer-sub").css("width", "100%");
    $("#right-port").css("max-width", "80%");
    $("#left-port").css("max-width", "80%");
  } else {
    var elem = document.getElementsByClassName("width-small");
    for (var i = 0; i < elem.length; i++) {
      $(elem[i])
        .removeClass("width-small")
        .addClass("width");
    }
    $("#portfolio").css("flex-flow", "row");
    $("#footer").css("flex-flow", "row");
    $("#contact").css("flex-flow", "row");
    $("#intro").css("flex-flow", "row");
    $("#left-intro").css("order", "1");
    $("#right-intro").css("order", "2");
    $("#left-sub").css("width", "100%");
    $("#right-sub").css("width", "100%");
    $("#outer-port").css("width", "800px");
    $("#outer-intro").css("width", "800px");
    $("#outer-certs").css("width", "800px");
    $("#outer-sub").css("width", "800px");
    $("#right-port").css("max-width", "50%");
    $("#left-port").css("max-width", "50%");
  }
}

$(".header-btn").hover(function() {
  $(this).toggleClass("header-btn-hover");
});

function myFunction() {
  if ($("#outer-intro").css("padding-top") < "25") {
    $("#outer-intro").css("padding-top", "60px");
  } else {
    $("#outer-intro").css("padding-top", "25px");
  }
  document.getElementById("myDropdown").classList.toggle("show");
}

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop:
        $($.attr(this, "href")).offset().top - ($("#header").height() + 20)
    },
    1000
  );
  if ($(document).width() < 800) {
    document.getElementById("myDropdown").classList.toggle("show");
  }
});
