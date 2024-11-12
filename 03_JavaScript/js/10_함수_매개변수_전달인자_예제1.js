const result = document.getElementById("result");
// 소개팅대상 = 매개변수    홍길동, 박영철, 강철수 = 전달인자
// 전달인자가 들어있는 매개변수로 인해 결정사 기능이 진행된다.
function 결정사(소개팅대상) {
  switch (소개팅대상) {
    case "홍길동":
      alert("귀농을 시작합니다.");
      break;
    case "박영철":
      alert("세계 여행을 시작합니다.");
      break;
    case "강철수":
      alert("바다의 삶을 함께 시작합니다.");
      break;
  }
}
