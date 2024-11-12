function add(num) {
  // num = 파라미터 = 매개변수
  switch (num) {
    case "1":
      price.innerText = "금액확인하기 : 3000";
      break;
    case "2":
      price.innerText = "금액확인하기 : 5500";
      break;
    case "3":
      price.innerText = "금액확인하기 : 8800";
      break;
  }
}
/*
        const price = document.getElementById("price");
        function add( num   ) {
            price.innerText = "금액확인하기 : " + num;
        }
*/
