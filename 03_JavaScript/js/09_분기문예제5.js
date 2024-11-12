let totalPrice = 0; //초기 총 금액 0원

function 선택(let drink = 'soda') {// 파라미터 매개변수
    switch (drink) {
        case "cola":
            totalPrice += 500;
            break;
        case "fanta":
            totalPrice += 600;
            break;
        case "soda":
            totalPrice += 700;
            break;
    }
}