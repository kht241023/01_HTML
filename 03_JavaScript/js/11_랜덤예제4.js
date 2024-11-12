function pickFruit() {
  const result = document.getElementById("result");
  const fruits = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "딸기",
    "파인애플",
    "블루베리",
    "복숭아",
  ];
  //1. 과일들의 총 갯수
  console.log("총 과일의 갯수 : " + fruits.length);

  //2. index 5에 있는 과일 이름 출력
  console.log("index 5 위치한 과일 : " + fruits[5]);

  //3. 랜덤으로 과일 하나 뽑기
  // floor 를 주로 쓰는 이유는 숫자가 5까지 있는데
  // 실수로 5.5 가 나왔을 때 6으로 반올림되거나 올림되면
  // 빈 값이 출력되기 때문
  const randomIndex = Math.floor(Math.random() * fruits.length);
  const randomFruit = fruits[randomIndex];

  // 랜덤으로 뽑은 과일의 결과를 화면에 표시
  result.innerText = "랜덤으로 뽑힌 과일 :" + randomFruit;

  // ***** TIP ***** //
  // 큰따옴표나 작은따옴표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
  // 역따옴표는 문자열과 변수명을 모두 한 번에 작성하는 방법
  // 변수명에는 ${변수명} 으로 표기를 하면 위에있는 변수명으로표기;
  result.innerText = `랜덤으로 뽑힌 과일 :  ${randomFruit}`;
}
