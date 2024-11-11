function check1() {
  let val; // undefined = 값없음 상태
  //처음부터 변수명에 특정 값을 담아두지 않고
  // 나중에 값을 담기 위해 값을 담기 위한 변수명만 선언

  //while문을 이용해서 취소를 누르기 전까지 반복
  // == 취소를 누르면 반복하지 않겠다 설정
  // prompt 버튼 ┌확인 = 빈 값이 초기에 들어있음
  // prompt 버튼 └취소 = null 값이 버튼 안에 들어있음
  while (val !== null) {
    //val 이 빈 값이 아닐 때
    /*
        동일 비교 연산자
        !== -> 값과 자료형이 모두 다른 경우 true
        === -> 값과 자료형이 모두 같은 경우 true
    */
    //입력한 값이 있는지 없는지 확인
    val = prompt("입력 후 확인하기"); // 변수에 prompt 값을 대입
    //확인 --> 입력한 값
    //취소 --> null

    alert(val + " 값을 확인했습니다.");
  }
}

function check2() {
  let age; // 들어있는 나이 숫자 x

  while (age !== null) {
    age = prompt("나이를 입력하세요");
    // else if 13 세 이상은 청소년 나머지는 어린이입니다.
    if (age >= 18) {
      alert("성인입니다.");
    } else if (age >= 13) {
      alert("청소년입니다.");
    } else {
      alert("어린이입니다.");
    }
  }
}
//check3 함수를 만들어서
//gender 변수명으로 여자인지 남자인지
//prompt 확인하는 코드 작성
function check3() {
  let gender;

  while (gender !== null) {
    gender = prompt("성별을 입력하세요.");
    if (gender === "여자") {
      alert("여자이군요!");
    } else if (gender === "남자") {
      alert("남자이군요!");
    } else {
      alert("잘못입력했습니다. 다시 입력해주세요.");
    }
  }
}
