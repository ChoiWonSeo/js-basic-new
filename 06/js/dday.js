var now = new Date();
var firstDay = new Date("2020-03-09");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";

// // 100일 시작 날짜 구하기
// var future = toFirst + 100 * (1000 * 60 * 60 * 24);
// var someday = new Date(future);

// var year = someday.getFullYear();
// var month = someday.getMonth() + 1;
// var date = someday.getDate();

// document.querySelector("#date100").innerText = year + "년 " + month + "월 " + date + "일";


// 함수 실행
callDate(100);
callDate(200);
callDate(365);
callDate(500);

// 함수로 시작 날짜 구하기 - 함수 선언
function callDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}
