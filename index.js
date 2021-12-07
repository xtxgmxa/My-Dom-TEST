const TextA ="輸出文字A";
const TextB ="輸出文字B";

//javascript
const showContentA = document.getElementsByClassName('showContent_index')[0];
const showContentB = document.getElementsByClassName('showContent_inside')[0];
showContentA.innerHTML = TextA;
showContentB.innerHTML = TextB;

//jquery
// const showContentA = $('.showContent_index');
// const showContentB = $('.showContent_inside');
// showContentA.html(TextA);
// showContentB.html(TextB);
