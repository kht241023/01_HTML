/* name으로 요소 접근하기 */

function checkbox로valueChecked속성확인() {
  //name의 속성값이 "취미" 인 요소를 모두 얻어와
  // hobbys에 저장
  // 보통 radio 나 checkbox는 두 가지 이상의 input을 작성하고
  // 취미나 마케팅 수신동의 결혼여부처럼
  // 각 input을 묶어주는 역할을 하는 것이 name
  // name 최소 2가지 이상을 가져와서 사용
  const hobbys = document.getElementsByName("취미");
  //alert("1 번 hobbys 만 작성 : " + hobbys); //object NodeList 유사한 배열형태다
  //alert("2 번 hobbys[0] 만 작성 : " + hobbys[0]); // object HTMLInputElement html input 요소다
  //alert("3 번 hobbys[0].value 모두 작성 : " + hobbys[0].value); // 유사배열에서 0번째에 있는 값은 게임이다.

  // 취미라는 것을 모두 가져와서 확인할 수 있음
  for (let i = 0; i < hobbys.length; i++) {
    // hobbys 취미들은 현재 게임과 음악감상밖에 없으므로
    // index = 0, 1 만 존재 length는 2의 값을 가짐
    console.log(hobbys[i].value);
  }

  // 선택한 모든 취미를 확인하는 작업을 진행할 것

  /***** checkbox, radio 전용 속성 (.checked) *****/

  // input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
  // input요소.checked = true -> 해당 요소가 체크가 되어 있는 것
  // input요소.checked = false -> 해당 요소가 체크가 안되어 있는 것

  console.log("*******************************");
  console.log("input 게임 요소 checked 로 체크 확인하기");
  console.log(hobbys[0].checked);

  console.log("input 음악감상 요소 checked 로 체크 확인하기");
  console.log(hobbys[1].checked);
}

/* checked를 이용해서 취미 몇개 선택했는지 확인하기 */
function nameBtn() {
  const hobbyList = document.getElementsByName("취미");

  let str = ""; //체크된 값 누적
  let count = 0; //체크된 수 총 계산 카운트

  for (let i = 0; i < hobbyList.length; i++) {
    //for문으로 i를 순회할 때  i값이 true인 경우만 count 추가
    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " "; //글자를 이어 붙이기
      count++; //true일 때 숫자가 더해짐
    }

    // #result 요소에 내용으로 결과 출력

    // innerText = 태그나 html에서 작성하는 코딩이 작동을 하지 않음
    // innerHTML = 태그 및 html에서 작성하는 코딩이 작동됨
    //document.getElementById("result").innerText = `${str} <br>선택된 취미 개수 : ${count}`;
    document.getElementById(
      "result"
    ).innerHTML = `${str} <br>선택된 취미 개수 : ${count}`;
  }
}
