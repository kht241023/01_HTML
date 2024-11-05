//변수를 선언해서 기능만들기
//document(문서) : HTML문서(파일) 안에서
//   get         : 얻다
//  Element      : 요소를 영어로 표기
//  ById         : Id가 일치하는
// -> HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다.
const 숫자1 = document.getElementById("input1");
const 숫자2 = document.getElementById("input2");

const 결과 = document.getElementById("계산결과");

//숫자1 숫자2 에 더한 값을 보여주는 더하기 기능 설정
function 더하기() {
  // input 태그에 작성된 값 = value   값 = value = 라틴어  의미 가치
  // 숫자1.값 과 숫자2.값 을 더해줌

  /*
            
            ->input 에서 type을 number로 설정해줘도
            input 태그 안에서 작성된 값은 무조건 글자형식
            type = number는 가나다 ABC와 같은 문자작성을 못하게 막아주는 역할을 할 뿐

            [해결방법]
            문자 -> 숫자로 변경하기를 해주면 됨
            -> 컴퓨터 용어 데이터 파싱(data parsing) : 데이터의 종류를 바꿈
                                                    ( 문자 -> 숫자 숫자 -> 문자 )
            숫자만 작성된 문자를 진짜 숫자로 변경하는 방법
            예 ) 123 이 있다면   Number(123) 작성하면 됨
                밑에서는 Number(숫자1.value);
            */

  /*두 수의 합을 아이디가 계산결과인 요소에
            내부글자(innerText)로 넣어주기*/
  const a = 숫자1.value;
  const b = 숫자2.value;
  결과.innerText = Number(a) + Number(b);
}

function 빼기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 - value2;
}
