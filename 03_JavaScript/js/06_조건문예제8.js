function gender() {
  let gdr = prompt("성별을 입력해주세요.(남성 / 여성만 입력 가능)");
  //어떤 조건이 도착했을 때
  switch (gdr) {
    case "남성": //조건에 부합하는게 남성일 때
      alert("남성을 입력했네요!");
      break;
    //break; 작성해줄 것!
    /*
    case뒤에 break 문이나 return문을 작성하지 않으면
    뒤에 case 들이 의미가 사라짐
    
    예를 들어 
    case "남성" 에 부합하는 조건을 실행한 후 확인해보면
    case "남성" 밑에 있는 case와 default의 구분에 관계없이
    여성과 default에 작성된 모든 코드들이 실행됨
    그래서 break나 return 문을 작성해서 
    조건에 부합하는 case를 실행 후 switch문을 탈출해야함
    */
    case "여성":
      alert("여성을 입력했네요!");
      break; //or return
    default:
      alert("올바른 성별을 입력해주세요. 남성 / 여성");
      break;
  }
}
/* \n enter 처럼 줄바꿈 javaScript 표기 */
function order() {
  let menu; //

  while (menu !== null) {
    // 아래 menu는 위 변수명 menu에 들어갈 값을 사용한다는의미
    menu = prompt(
      "메뉴를 선택해주세요. \n 삼겹살, 부대찌개, 김치찌개 만 입력가능 \n 종료 작성하면 메뉴선택 종료됩니다."
    );
    switch (menu) {
      case "삼겹살":
        alert("삼겹살을 선택하셨습니다. \n가격은 12,000원 입니다.");
        break; //break문은 switch  까지만 나가는 제어문
      case "부대찌개":
        alert("부대찌개를 선택하셨습니다. \n가격은 10,000원 입니다.");
        break;
      case "김치찌개":
        alert("김치찌개를 선택하셨습니다. \n가격은 9,000원 입니다.");
        break;
      case "종료":
        alert("주문이 종료되었습니다.");
        return; //break 대신에 return 작성
      //return 문   while까지 모두 종료하는 구문
      //break는 특정 while문을 반복하고자 할 때 사용
      //return은 모든 반복문을 종료하고자 할 때 사용
      default:
        alert(
          "잘못 입력하셨습니다. \n 올바른 메뉴를 선택하세요. \n (예)삼겹살"
        );
    }
  }
}
