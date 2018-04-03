$(document).ready(function(){
  var slideCount = $(".slide").length;

  $(".slide-step").click(function(){
    var slideActiveNum = $(".slide-active").data("slidenumber");
    var slideDirection;
    var slideSetActive;
    if ($(this).hasClass("slide-back")) {
      slideDirection = "ltr";
      if (slideActiveNum === 0) {
        slideSetActive = slideCount-1;
      }
      else{
        slideSetActive = slideActiveNum-1;
      }
    }
    else{
      slideDirection = "rtl";
      if (slideActiveNum === slideCount-1) {
        slideSetActive = 0;
      }
      else{
        slideSetActive = slideActiveNum+1;
      }
    }
    $(".slide").attr('class',"slide");
    $(".slide").eq(slideSetActive).addClass("slide-active slide-active-"+slideDirection);
    $(".slide").eq(slideActiveNum).addClass("slide-past-"+slideDirection);
  });
});