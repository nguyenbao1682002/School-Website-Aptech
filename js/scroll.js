$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });
  // menu
  $(document).ready(function () {
    $(".col-3 div h1:nth-child(1)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none");
        $(".col-9 ul:nth-child(1)").css("display", "block");
    })
    $(".col-3 div h1:nth-child(2)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none")
        $(".col-9 ul:nth-child(2)").css("display", "block");
    })
    $(".col-3 div h1:nth-child(3)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none")
        $(".col-9 ul:nth-child(3)").css("display", "block");
    })
    $(".col-3 div h1:nth-child(4)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none")
        $(".col-9 ul:nth-child(4)").css("display", "block");
    })
    $(".col-3 div h1:nth-child(5)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none")
        $(".col-9 ul:nth-child(5)").css("display", "block");
    })
    $(".col-3 div h1:nth-child(6)").click(function () {
        $(".col-3 h1").css("opacity", "0.7")
        $(this).css("opacity", "1");
        $(".col-9 ul").css("display", "none")
        $(".col-9 ul:nth-child(6)").css("display", "block");
    })
  
    // close nav
    $(".close").click(function(){
        $(".nav-background").css("display","none");
    })
    // open nav 
    $(".menu").click(function(){
        $(".nav-background").css("display","flex");
    })
  })