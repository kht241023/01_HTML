function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = document.getElementById("error-msg");
  //kh_t_kyungran@kht.com
  /*
        /^  = 정규식 시작 표기
        [a-zA-z0-9.-_]    = @(at) 이 작성되기 전에 영어소문자 대문자 숫자 특수문자(.-_) 포함해서 작성 가능
        +@                = +@   앞에 작성한 아이디 표기 뒤에 무조건 @(at) 가 뒤에 작성되어야함
        [a-zA-Z0-9.-가-힇] = @(at) 뒤에 회사명과 같은 도메인명이 작성되어야함 
        +\.                = 회사명(도메인명)이 작성된 후 무조건 뒤에 .(dot, period) 붙여져야함
        [a-zA-z가-힇]      = . 뒤에 kr 이나 com이나 한국 과 같은 도메인명이 올 수 있도록 설정
        {2,}              = 위 규칙을 모두 지키는 기준으로 최소 2자 이상 작성
        $/
       
        
        
        */
  const emailPattern =
    /^[a-zA-z0-9.-_]+@[a-zA-Z0-9.-가-힇]+\.[a-zA-z가-힇]{2,}$/;

  if (!emailPattern.test(userEmail)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}
