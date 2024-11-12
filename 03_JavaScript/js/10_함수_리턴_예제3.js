function 음식주문(xyz) {
  const result = document.getElementById("result");
  const price = 음식가격(xyz);
  if (price > 0) {
    result.innerText =
      xyz + " 주문 완료되었습니다. 가격은 " + price + " 원 입니다.";
  } else {
    result.innerText = "재료 소진된 메뉴로 주문이 불가능합니다.";
  }
}

function 음식가격(xyz) {
  if (xyz === "비빔밥") {
    //'' "" 구분 없음
    return 8000;
  } else if (xyz === " 김치찌개") {
    return 7000;
  } else if (xyz === "된장찌개") {
    return 7000;
  } else {
    return 0; //위 if else에서 0 이하는 모두 재료 소진된 메뉴로 주문불가에 보내기
  }
}
