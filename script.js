function ibg(className) {
  let ibj = document.querySelector(className);
  console.log(ibj);
  console.log(ibj.querySelector("img").getAttribute("src"));
  ibj.style.backgroundImage =
    "url(" + ibj.querySelector("img").getAttribute("src") + ")";
}
ibg(".header_wrapper");
ibg(".get_in_touch_wrap");
ibg(".photo_1");
ibg(".photo_2");
ibg(".photo_3");
$(document).ready(function () {
  $(".head_burger").click(function (e) {
    $(".head_burger, .nav_menu_links_ws").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

const arrayClass = [".nav_menu_links_ws a", ".nav_menu_links a"];
for (let i in arrayClass) {
  $(arrayClass[i]).click(function (event) {
    const screenWidth = window.innerWidth;

    if ($(event.target).attr("href") == "#story" && screenWidth <= 767) {
      $("section.story").css("margin-top", "100px");
    } else if (
      $(event.target).attr("href") == "#capabilities" &&
      screenWidth <= 767
    ) {
      $("section.capabilities").css("margin-top", "30px");
      $("section.story").css("margin-top", "50px");
    } else if (
      $(event.target).attr("href") == "#footer" &&
      screenWidth <= 479
    ) {
      $(".foot_wrap").css("padding-top", "85px");
    } else {
      $("section.capabilities").css("margin-top", "0");
      $("section.story").css("margin-top", "50px");
      $(".foot_wrap").css("padding-top", "42px");
    }
    $(".head_burger").click();
    $("body").removeClass("lock");
  });
}
$(".png").click(function (event) {
  console.log($(event.target).parent().attr("id"));
  switch ($(event.target).parent().attr("id")) {
    case "i1":
      document.location.href = "http://www.facebook.com";
      break;
    case "i2":
      document.location.href = "http://www.twitter.com";
      break;
    case "i3":
      document.location.href = "http://www.google.com";
      break;
    default:
      console.log("Нет таких значений");
  }
});
