function check1() {
  //onclick = function
  /*
    for([1]초기식 ;   [2]조건식;   [4]증감식) {
    
        [3] 조건식이 true인 경우 반복 수행할 코드

    }
    */

  //for (   ) 안에서 공간을 구분짓는 기준은 ; 으로 구분짓는다.
  /*
    for(최초 1회만 어떤 값인지 보여지는 공간  ;  
                            {} 안에 들어가서 작성되어있는 코드를 실행할 수 있는 권한의 조건;
                                                                                        더하거나 뺄 값 ++  --) {
                            조건이 true 일 때 실행할 공간
    }
    */

  // for 문 안에는 const(상수) 대신 let(변수)를 사용함

  //문자열 형식으로 모든 숫자 출력해서 숫자들이 모두 나왔는지 확인해보기

  let 결과 = ""; //빈 문자 제공
  //숫자를 1부터 5까지 출력

  /**
   * 숫자++   ===>     숫자 = 숫자 +1;
   **/
  for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
    // 결과라는 변수명에 숫자를 1부터 5까지 누적해서 이어 붙이기를 원함
    결과 += 숫자; // 결과 = 결과 + 숫자;
    console.log("결과 : " + 결과);
  }

  console.log("====================");
  console.log("최종으로 출력되는 결과 값은 ");
  console.log(결과 + "  입니다.");
}
/* 1부터 10까지 연속 출력 하는 숫자들 표기 */
function check2() {
  for (let a = 1; a <= 10; a++) {
    console.log("1 ~ 10 : " + a);
  }
}

/***** 1부터 20까지 console.log 출력 *****/
function check3() {
  for (let a = 1; a <= 20; a++) {
    console.log("1 ~ 20 :" + a);
    //누적이 안된 상태에서 새롭게 a로 계속 다시 출력
    // 왜 ? 결과로 += 써서 이어작성하기를 안했기 때문!
  }
}
/***** 5부터 15까지 console.log 출력 *****/
// true로 들어왔을 때 중괄호 안에 작성된
// for 반복문이 끝나고 나면 alert 창으로
// 최종 으로 출력된 수들을 보여주기

function check4() {
  //최종으로 5~15까지 모두 보여주기
  let 결과2 = "";

  for (let b = 5; b <= 15; b++) {
    // 결과 2 이라는 아무것도 들어있지 않은 변수에다가
    // 숫자들을 누적시켜서 이어 붙여 출력
    결과2 += b; //b = 5  결과2 = 5 , b=6  결과2 = 56, ....
    console.log("5 ~ 15 : " + b);
    // b의 값이 바뀔 때마다 15까지 b가 모두 바뀌어서 출력
  }
  // b는    for 안에서 작성한 변수명이기 때문에 {} 를 나오고 나서는 사용 x
  // 나올 수 없는 b 대신 전역변수인 결과2에 b의 모든 값을
  // 담고 결과2로 b의 모든 값을 출력
  alert(결과2);
}

/*
while 문 기본 구조
while (조건) {
  //반복할 코드

}
*/

// while1 기능의 버튼을 누르면 1부터 5까지 숫자를 더한 값을 출력
function while1() {
  let num = 1; // let 변할 수 있는 변수명을 작성 const 변할 수 없는 상수명을 작성

  while (num <= 5) {
    //조건이 true일 때 실행할 구문 작성
    alert("num 의 숫자값은 " + num + " 입니다.");
    // 계속 num 값이 1이기 때문에 무한 반복
    // num 숫자를 1씩 증가시켜서 숫자가 5가 되면 while문을 종료하기
    num++; // num = num + 1;
  }
}
// while2 기능의 버튼을 누르면 1부터 10까지 더한 숫자값 출력
// console.log 로 abc라는 변수명의 들어있는 값 출력
function while2() {
  let abc = 1;

  while (abc <= 10) {
    console.log("========= while2의 버튼 =========");
    console.log("abc의 값 : " + abc);
    abc++;
  }
}

// while3 기능의 버튼을 누르면 1부터 10까지 더한 숫자값 출력
// console.log 로 abc라는 변수명의 들어있는 값 출력
// while3 break 를 이용해서 숫자 5에서 멈추고 기존의 console.log 출력
function while3() {
  //break 맨 마지막에 오게 작성
  let abc = 1;
  while (abc <= 10) {
    console.log("========= while3의 버튼 =========");
    console.log("abc의 값 : " + abc);
    abc++;

    // 숫자가 5까지오면 멈추기
    if (abc == 5) {
      break;
    }
  }
}

//while4 라는 지역변수 안에서만 사용하는 변수명을 설정할 경우에는
// {} 안에 변수명을 작성
// xyz 숫자 5를 확인
function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}

//07_반복문.html 과 07_반복문.js 에 while5() 버튼 생성한다.
// 생성한다음
// 시작숫자를 5로 시작하고 20으로 끝나는 while 조건 작성
// 중간에 15라는 숫자를 만나면 while 중지
function while5() {
  let start = 5;

  while (start <= 20) {
    console.log("숫자는 " + start + " 입니다.");
    start++;

    if (start == 15) {
      break; // 숫자가 15가 되면 위에서 진행하던 코드 모두 중지
    }
  }
}
