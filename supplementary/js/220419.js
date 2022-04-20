//도형을 그릴 캔버스 제작
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

//위치값 변수지정

//공 관련 변수
const arcRadius = 25;  //공의 원형정도
let arcPosX = canvas.width / 2 + 100; //공을 정가운데 + 100px 오른쪽으로 위치
let arcPosY = canvas.height / 2; //공을 정가운데 위치
let arcMoveDirX = -1; //공의 좌우 변경값
let arcMoveDirY = -1; //공의 높이 변경값
let arcMoveSpeed = 2; //공 이동 속도

let RreturnPoint = canvas.width -arcRadius;
let LreturnPoint = arcRadius;

let ball = { left : 0, right : 0, top : 0, bottom : 0 }

//바 관련 변수
let barWidth = 100; //바 길이
let barHeight =  20; //바 굵기
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let batMoveSpeed = 10;

let paddle = { left : 0, right : 0, top : 0, bottom : 0 }


document.addEventListener('keydown', keydownEventHandler)
document.addEventListener('keyup', keyupEventHandler)

function keydownEventHandler(e){
  if(e.key == 'ArrowRight'){
    //바를 오른쪽으로 몇 만큼 움직인다
    if( barPosX + barWidth < canvas.width )
    {
      barPosX += batMoveSpeed;
    }
  }
  else if(e.key == 'ArrowLeft'){
    //바를 왼쪽으로 몇 만큼 움직인다
    if(barPosX > 0 )
    {
      barPosX -= batMoveSpeed;
    }
  }
  paddle.left = barPosX;
  paddle.right = barPosX + barWidth;
  paddle.top = barPosY;
  paddle.bottom = barPosY + barHeight;

}

function keyupEventHandler(e){

}


// 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동

//캔버스 초기화
context.clearRect(0, 0, canvas.width, canvas.height);

function update(){
  //도형의 위치 이동

  if(arcPosX-arcRadius < 0){
    arcMoveDirX = 1;
  } else if(arcPosX > RreturnPoint) {
    arcMoveDirX = -1;
  }
  
  if(arcPosY < LreturnPoint){
    arcMoveDirY = 1;
  } else if (arcPosY > RreturnPoint){
    arcMoveDirY = -1;
  }
  
  arcPosX += arcMoveDirX * arcMoveSpeed;
  arcPosY += arcMoveDirY * arcMoveSpeed;

  ball.left = arcPosX - (arcRadius);
  ball.right = arcPosX + (arcRadius);
  ball.top = arcPosY - (arcRadius);
  ball.bottom = arcPosY + (arcRadius);

  //충돌확인
  if (isCollisionRectToRect(ball, paddle))
  {
    arcPosY = paddle.top - arcRadius;
    arcMoveDirY = -1
  }

}

function isCollisionRectToRect(rectA, rectB) {
  // a의 왼쪽과 b의 오른쪽
  // a의 오른쪽과 b의 왼쪽
  // a의 아래쪽과 b의 위쪽
  // a의 위쪽과 b의 아래쪽
  if(rectA.left > rectB.right ||
     rectA.right < rectB.left ||
     rectA.top > rectB.bottm  ||
     rectA.bottom < rectB.top)
     {
       return false;
     }

  return true;

}

function draw(){
  //화면 클리어
  context.clearRect(0, 0, canvas.width, canvas.height);
  //도형 생성
  drawRect();
  drawAcr();
  drawBricks();
}

//사각형 만들기
function drawRect() {
  context.beginPath(); //도형시작점
  context.rect(barPosX, barPosY, 100, 20);  //rect = 사각형
  context.fillStyle = 'red';
  context.fill();
  context.closePath(); //도형종결점  
}

//원형 만들기
function drawAcr() {
  context.beginPath(); //도형시작점
  context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);  //arc = 원형
  context.fillStyle = 'blue';
  context.fill();
  context.closePath(); //도형종결점
}

//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);