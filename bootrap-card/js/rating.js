$(".stars a").on("click", function () {
  $(".stars span, .stars a").removeClass("active");

  $(this).addClass("active");
  $(".stars span").addClass("active");
});
