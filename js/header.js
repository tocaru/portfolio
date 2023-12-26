$(function () {
  var navHeight = $(window).height();
  $("header").hide();
  //스크롤시 나타날 객체 미리 숨기기

  $(window).scroll(function () {
    // 윈도우 스크롤 기능 작동
    var rollIt = $(this).scrollTop() >= navHeight;
    // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

    /*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/

    if (rollIt) {
      //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
      $("header").show().css({ position: "fixed" });
    } else {
      $("header").hide();
    }
  });
});