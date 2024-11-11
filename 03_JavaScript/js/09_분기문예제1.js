function selectMenu() {
  let choice;
  const result = document.getElementById("result");

  while (choice !== null) {
    choice = prompt("메뉴 번호를 입력해주세요. \n 1, 2, 3, 종료 만 입력 가능");

    switch (choice) { 
      case "1": case "아메리카노":
        result.innerText = "아메리카노를 선택하셨습니다.";
        break;
      case "2": case "카페라떼":
        result.innerText = "카페라떼를 선택하셨습니다.";
        break;
      case "3": case "프라푸치노":
        result.innerText = "프라푸치노를 선택하셨습니다.";
        break;
      case "종료":
        result.innerText = "메뉴선택을 종료합니다.";
        return;
      default:
        result.innerText = "잘못된 입력입니다. 다시 선택해주세요.";
        break;
    }
  }
}
