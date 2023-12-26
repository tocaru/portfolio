$(function () {
  let Width = 768;
  let screenWidth = $(window).width();
  if (screenWidth > Width) {
    $(".multiple-items").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    });
  },
  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
});
