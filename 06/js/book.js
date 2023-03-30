function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}
// 인스턴스 생성
var html = new Book('웹 표준의 정석', 'Ko', '608', '28,000');
var youtube = new Book('유튜브 영상 만들기', 'Kim', '368', '22,000');
var python = new Book('점프 투 파이썬', 'Park', '352', '18,000');
// 인스턴스를 배열에 담기
var bookList = [html, youtube, python];
// 화면에 띄우기
document.write("<h1>~BOOK LIST~</h1>");
for(var i = 0; i < bookList.length; i++) {
    document.write("<p>" + bookList[i].title + "</p>");
}