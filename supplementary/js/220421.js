/* 
  클래스 (class)

  함수 생성자

*/
// let brick = {
//   left: 0, right: 0, top: 0, bottom: 0,
//   collisionCount: 0,
//   column: 0, row: 0,
//   isAlive: true,
// }
// 벽돌 left, top, right, bottom, col, row, pos + 움직이는 기능

// 생성자는 대문자로 시작
// function Brick(left, top, right, bottom) {
//   this.left = left,
//   this.right = right,
//   this.top = top,
//   this.bottom = bottom,
// }

// Brick.prototype.movingAction = function () { this.left++; console.log('moving') }
// // 디자인패턴의 한 종류
// // 기능 구현 확인 시연제품



// for (let i = 0; i < 20; i++) {
//   let tempBrick = new Brick(0, 0, 10, 10);
//   tempBrick.movingAction();
// }

class Brick {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}

class MovingBrick extends Brick {
  movingAction() {
    this.left++;
  }
}



//도형을 그릴 캔버스 제작
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

//위치값 변수지정

//공 관련 변수
const arcRadius = 15;  //공의 원형정도
let arcPosX = canvas.width / 2 + 150; //공을 정가운데 + 150px 오른쪽으로 위치
let arcPosY = canvas.height / 2; //공을 정가운데 위치
let arcMoveDirX = -1; //공의 좌우 변경값
let arcMoveDirY = -1; //공의 높이 변경값
let arcMoveSpeed = 2; //공 이동 속도

let RreturnPoint = canvas.width - arcRadius;
let LreturnPoint = arcRadius;

let ball = { left: 0, right: 0, top: 0, bottom: 0 }
// 게임 진행
let deadBricksCount = 0;

// 벽돌
// let brick = {
//   left: 0, right: 0, top: 0, bottom: 0,
//   collisionCount: 0,
//   column: 0, row: 0,
//   isAlive: true,
// }
const brickWidth = 50; // 간격 10
const brickHeight = 25; // 간격 5
const brickColumn = 5; // 열
const brickRow = 4; // 행
let bricks = [];

// moving 벽돌
let blackBrick = new MovingBrick(canvas.width / 2 - brickWidth / 2, canvas.height / 2 - brickHeight / 2, canvas.width / 2 + brickWidth / 2, canvas.height / 2 + brickHeight / 2)

let brickMoveDirX = -1;
let brickMoveDirY = 0;
let brickMoveSpeed = 2;

let bRreturnPoint = canvas.width - brickWidth;
let bLreturnPoint = brickWidth / 2;

//바 관련 변수
let barWidth = 100; //바 길이
let barHeight = 20; //바 굵기
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let batMoveSpeed = 10;

let paddle = { left: 0, right: 0, top: 0, bottom: 0 }


document.addEventListener('keydown', keydownEventHandler)
document.addEventListener('keyup', keyupEventHandler)


//함수모음
function keydownEventHandler(e) {
  if (e.key == 'ArrowRight') {
    //바를 오른쪽으로 몇 만큼 움직인다
    if (barPosX + barWidth < canvas.width) {
      barPosX += batMoveSpeed;
    }
    if (arcMoveDirY == 0 && arcMoveDirX == 0) {
      arcPosX += batMoveSpeed;
    }
  }
  else if (e.key == 'ArrowLeft') {
    //바를 왼쪽으로 몇 만큼 움직인다
    if (barPosX > 0) {
      barPosX -= batMoveSpeed;
    }
    if (arcMoveDirY == 0 && arcMoveDirX == 0) {
      arcPosX -= batMoveSpeed;
    }
  } else if (e.key == ' ') {
    console.log(`arcPosX : ${arcPosX}, barPosX : ${barPosX}, blackBrick : ${blackBrick.left}`)
    if (arcMoveDirY == 0 && arcMoveDirX == 0) {
      arcMoveDirY = -1;
      if (arcPosX >= barPosX + barWidth / 2) {
        arcMoveDirX = 1;
      } else {
        arcMoveDirX = -1;
      }

    }


  }
  paddle.left = barPosX;
  paddle.right = barPosX + barWidth;
  paddle.top = barPosY;
  paddle.bottom = barPosY + barHeight;

}

function keyupEventHandler(e) {

}


// 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동

//캔버스 초기화
context.clearRect(0, 0, canvas.width, canvas.height);

function update() {
  //게임 클리어
  checkToWin();

  //도형의 위치 이동
  if (arcPosX - arcRadius < 0) {
    arcMoveDirX = 1;
  } else if (arcPosX > RreturnPoint) {
    arcMoveDirX = -1;
  }

  if (arcPosY < LreturnPoint) {
    arcMoveDirY = 1;
  } else if (arcPosY > RreturnPoint) {
    location.reload();
    alert('game over');
  }
  // 볼 이동
  arcPosX += arcMoveDirX * arcMoveSpeed;
  arcPosY += arcMoveDirY * arcMoveSpeed;

  ball.left = arcPosX - (arcRadius);
  ball.right = arcPosX + (arcRadius);
  ball.top = arcPosY - (arcRadius);
  ball.bottom = arcPosY + (arcRadius);
  // 벽돌 이동
  if (blackBrick.left < 0) {
    brickMoveDirX = 1;
  } else if (blackBrick.left > bRreturnPoint) {
    brickMoveDirX = -1;
  }

  blackBrick.left += brickMoveDirX * brickMoveSpeed;
  // blackBrick.top += brickMoveDirX * brickMoveSpeed;

  // ball.left = arcPosX - (brickWidth);
  blackBrick.right = blackBrick.left + (brickWidth / 2);
  // ball.top = arcPosY - (brickWidth/2);
  // ball.bottom = arcPosY + (brickWidth/2);


  // paddle 충돌확인
  if (isCollisionRectToRect(ball, paddle)) {
    let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 1 : -1)
    arcMoveDirY *= -1
    arcMoveDirX += ranNum
  }
  // brick 충돌확인
  for (let i = 0; i < brickRow; i++) {
    for (let j = 0; j < brickColumn; j++) {
      if (bricks[i][j]) {
        if (bricks[i][j].isAlive == true && isCollisionRectToRect(bricks[i][j], ball)) {
          arcMoveDirY *= -1
          arcMoveDirX *= -1
          bricks[i][j].collisionCount += 1
          // console.log(`bricks[${i}][${j}], ${bricks[i][j].collisionCount}`)
          if (bricks[i][j].collisionCount == 2) {
            bricks[i][j].isAlive = false;
            deadBricksCount++;
          }

        }
      }
    }
  }

  // blackBrick 충돌확인
  if (isCollisionRectToRect(ball, blackBrick)) {
    console.log('11111')
    arcMoveDirY *= -1
    arcMoveDirX *= -1
    // arcMoveDirY *= 0
    // arcMoveDirX *= 0
  }
}



function checkToWin() {
  // 1. 배열에 있는 정보로 처리

  // let bricks = []
  // bricks[0] = []
  // bricks[1] = []
  // bricks[2] = []
  // bricks[3] = []
  let flatBricks = bricks.flat()
  // console.log(flatBricks);

  let deadBricks = flatBricks.filter(brick => brick.isAlive == false);
  if (deadBricks.length == brickRow * brickColumn) {
    // 게임 클리어
    window.location.reload();
    alert("게임 클리어");
  }
  // 2. 카운트를 세는 변수를 만들어서 처리
  // if (deadBricksCount == brickRow * brickColumn)
  // {
  //   //게임 클리어
  // }

}

function isFalse(el, index, arr) {
  if (el.isAlive == true) {
    console.log("true " + index)
  }
  // console.log(el.isAlive)
  // console.log("false " + index)
  return (el.isAlive == false)
}
function isCollisionRectToRect(rectA, rectB) {
  // a의 왼쪽과 b의 오른쪽
  // a의 오른쪽과 b의 왼쪽
  // a의 아래쪽과 b의 위쪽
  // a의 위쪽과 b의 아래쪽
  if (rectA.left > rectB.right ||
    rectA.right < rectB.left ||
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom) {
    return false;
  }

  return true;

}


function draw() {
  //화면 클리어
  context.clearRect(0, 0, canvas.width, canvas.height);
  //도형 생성
  drawRect();
  drawAcr();
  drawWallBrick()
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
//벽돌 만들기
function setBricks() {
  for (let i = 0; i < brickRow; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickColumn; j++) {
      // TODO : right : left + 50 해보기 -> 안됨
      bricks[i][j] = {
        left: 55 + (j * (brickWidth + 10)),
        right: 55 + (j * (brickWidth + 10)) + brickWidth,
        top: 30 + (i * (brickHeight + 5)),
        bottom: 30 + (i * (brickHeight + 5)) + brickHeight,
        collisionCount: 0,
        column: i, row: j,
        isAlive: true,
      }
    }
  }
}

// 무빙벽돌 만들기
function drawWallBrick() {
  context.beginPath(); //도형시작점
  context.rect(blackBrick.left, blackBrick.top, brickWidth, brickHeight);  //rect = 사각형
  context.fillStyle = 'black';
  context.fill();
  context.closePath(); //도형종결점  
}

function drawBricks() {
  for (let i = 0; i < brickRow; i++) {
    for (let j = 0; j < brickColumn; j++) {
      context.beginPath();
      if (bricks[i][j].isAlive) {
        context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
        context.fillStyle = 'green'
        context.fill();
        if (bricks[i][j].collisionCount == 1) {
          context.fillStyle = 'yellow'
          context.fill();
        }
        context.closePath();
      }
    }
  }
}

setBricks();
//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);