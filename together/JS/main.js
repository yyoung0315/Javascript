



//ID값을 제어해서 버튼 클릭시 사진 변경 하기 
function funK1() {
    mainimg.src="./img/둘리.jfif";  // 사진의 src를 변경 하기 
    document.getElementById("mainimg").width="200";  // 사진의 넓이 변경 하기 
    document.getElementById("mainimg").height="200"; // 사진의 높이 변경 하기 
    document.getElementById("demo").innerHTML="둘리가 출력됩니다.";  //p태그 글 변경 하기 
    document.getElementById("demo").style.color="#ff00ff"; //p태그 글 색 변경 하기 
    document.getElementById("demo").style.fontSize="60px"; //p태그 글 크기 변경 하기 
}

function funK2() {
    mainimg.src="./img/img.jpg"
    document.getElementById("mainimg").width="150";
    document.getElementById("mainimg").height="150";
    document.getElementById("demo").innerHTML="미녀와야수가 출력됩니다.";
    document.getElementById("demo").style.color="#ff00ff";
    document.getElementById("demo").style.fontSize="60px";
}