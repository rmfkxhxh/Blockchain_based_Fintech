// 클래스로 객체의 설계도를 만든디.
// 명사로 지칭되는 객체를 설계한다. 자동차, 책, 몬스터, 사람...

const arcRadius = 15;  //공의 원형정도
const barWidth = 150; //바 길이
const barHeight = 20; //바 굵기

class Ball {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.radius = arcRadius;
    this.moveDirX = 0;
    this.moveDirY = 0;
    this.moveSpeed = 2;
    this.rightMax = canvas.width - arcRadius; // - this.radius
    this.leftMax = 15;
    this.posX = canvas.width / 2;
    this.posY = canvas.height - barHeight - arcRadius; // - barHeight - this.radius
  }
}

class Paddle {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = barWidth;
    this.height = barHeight;
    this.posX = canvas.width / 2 - barWidth / 2;
    this.posY = canvas.height - barHeight;
    this.moveSpeed = 20;
  }
}

const brickWidth = 50; // 간격 10
const brickHeight = 25; // 간격 5
const brickColumn = 5; // 열
const brickRow = 4; // 행

class Brick {
  constructor(left, top, right, bottom, color) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = brickWidth;
    this.height = brickHeight;
    this.collisionCount = 0;
    this.isAlive = true;
    this.color = color;
  }
  draw() {
    if (this.isAlive) {
      context.rect(this.left, this.top, brickWidth, brickHeight)
      if (this.collisionCount == 1) {
        this.color = 'yellow';
      }
      context.fillStyle = this.color;
      context.fill()
    }
  }
}


class MovingBrick extends Brick {
  movingAction() {

  }
}




//도형을 그릴 캔버스 제작
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

//위치값 변수지정

//공 관련 변수
let ball = new Ball(0, 0, 0, 0)
// let arcPosX = ball.posX; //공을 정가운데 + 150px 오른쪽으로 위치
// let arcPosY = ball.posY; //공을 정가운데 위치
// let arcMoveDirX = -1; //공의 좌우 변경값
// let arcMoveDirY = -1; //공의 높이 변경값
// let arcMoveSpeed = 2; //공 이동 속도

// let RreturnPoint = canvas.width - arcRadius;
// let LreturnPoint = arcRadius;


// 게임 진행
let deadBricksCount = 0;

// 벽돌
// let brick = {
//   left: 0, right: 0, top: 0, bottom: 0,
//   collisionCount: 0,
//   column: 0, row: 0,
//   isAlive: true,
// }

let bricks = [];

// moving 벽돌
let blackBrick = new MovingBrick(canvas.width / 2 - brickWidth / 2, canvas.height / 2 - brickHeight / 2, canvas.width / 2 + brickWidth / 2, canvas.height / 2 + brickHeight / 2)

let brickMoveDirX = -1;
let brickMoveDirY = 0;
let brickMoveSpeed = 2;

let bRreturnPoint = canvas.width - brickWidth;
let bLreturnPoint = brickWidth / 2;

//바 관련 변수
// let barWidth = 100; //바 길이
// let barHeight = 20; //바 굵기


let paddle = new Paddle(canvas.width / 2 - barWidth / 2, canvas.height - barHeight, canvas.width / 2 + barWidth / 2, canvas.height);
;


document.addEventListener('keydown', keydownEventHandler)
document.addEventListener('keyup', keyupEventHandler)


//함수모음
function keydownEventHandler(e) {
  if (e.key == 'ArrowRight') {
    //바를 오른쪽으로 몇 만큼 움직인다
    if (paddle.posX + barWidth < canvas.width) {
      paddle.posX += paddle.moveSpeed;
    }
    if (ball.moveDirY == 0 && ball.moveDirX == 0) {
      ball.posX += paddle.moveSpeed;
    }
  }
  else if (e.key == 'ArrowLeft') {
    //바를 왼쪽으로 몇 만큼 움직인다
    if (paddle.posX > 0) {
      paddle.posX -= paddle.moveSpeed;
    }
    if (ball.moveDirY == 0 && ball.moveDirX == 0) {
      ball.posX -= paddle.moveSpeed;
    }
  } else if (e.key == ' ') {
    console.log(`ball.posX : ${ball.posX}, paddle.posX : ${paddle.posX}, blackBrick : ${blackBrick.left}`)
    if (ball.moveDirY == 0 && ball.moveDirX == 0) {
      ball.moveDirY = -1;
      let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 1 : -1)
      if (ball.posX >= paddle.posX + barWidth / 2) {
        ball.moveDirX += ranNum;
      } else {
        ball.moveDirX -= ranNum;
      }

    }


  } else if (e.key == 'ArrowUp') {
    ball.moveSpeed++;
  } else if (e.key == 'ArrowDown') {
    ball.moveSpeed--;
  }
  paddle.left = paddle.posX;
  paddle.right = paddle.posX + barWidth;
  paddle.top = paddle.posY;
  paddle.bottom = paddle.posY + barHeight;

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
  if (ball.posX - arcRadius < 0) {
    ball.moveDirX = 1;
  } else if (ball.posX > ball.rightMax) {
    ball.moveDirX = -1;
  }

  if (ball.posY < ball.leftMax) {
    ball.moveDirY = 1;
  } else if (ball.posY > ball.rightMax) {
    window.location.reload();
    alert('game over');
  }
  // 볼 이동
  ball.posX += ball.moveDirX * ball.moveSpeed;
  ball.posY += ball.moveDirY * ball.moveSpeed;

  ball.left = ball.posX - (arcRadius);
  ball.right = ball.posX + (arcRadius);
  ball.top = ball.posY - (arcRadius);
  ball.bottom = ball.posY + (arcRadius);
  // 벽돌 이동
  if (blackBrick.left < 0) {
    brickMoveDirX = 1;
  } else if (blackBrick.left > bRreturnPoint) {
    brickMoveDirX = -1;
  }

  blackBrick.left += brickMoveDirX * brickMoveSpeed;
  // blackBrick.top += brickMoveDirX * brickMoveSpeed;

  // ball.left = ball.posX - (brickWidth);
  blackBrick.right = blackBrick.left + (brickWidth / 2);
  // ball.top = ball.posY - (brickWidth/2);
  // ball.bottom = ball.posY + (brickWidth/2);


  // paddle 충돌확인
  if (isCollisionRectToRect(ball, paddle)) {
    // let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 10 : -10)
    ball.moveDirY *= -1
    if (ball.moveDirX != 0) {
      ball.moveDirX += Math.random()
    } else {
      ball.moveDirX *= Math.random()
    }

    // console.log(ball.moveDirX)
  }
  // brick 충돌확인
  for (let i = 0; i < brickRow; i++) {
    for (let j = 0; j < brickColumn; j++) {
      if (bricks[i][j]) {
        if (bricks[i][j].isAlive == true && isCollisionRectToRect(bricks[i][j], ball)) {
          ball.moveDirY *= -1
          ball.moveDirX *= -1
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
    ball.moveDirY *= -1;
    ball.moveDirX *= -1;
    if (ball.bottom < blackBrick.top && ball.bottom < blackBrick.bottom) { // ball
      ball.posY -= blackBrick.bottom - ball.bottom;
    } else if (ball.top > blackBrick.bottom && ball.top > blackBrick.top) {
      ball.posY += ball.top - blackBrick.top;
    }
    // console.log('11111')

    // ball.moveDirY *= 0
    // ball.moveDirX *= 0
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

// function isFalse(el, index, arr) {
//   if (el.isAlive == true) {
//     console.log("true " + index)
//   }
//   // console.log(el.isAlive)
//   // console.log("false " + index)
//   return (el.isAlive == false)
// }


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
  context.rect(paddle.posX, paddle.posY, barWidth, barHeight);  //rect = 사각형
  context.fillStyle = 'red';
  context.fill();
  context.closePath(); //도형종결점  
}

//원형 만들기
function drawAcr() {
  context.beginPath(); //도형시작점
  context.arc(ball.posX, ball.posY, arcRadius, 0, 2 * Math.PI);  //arc = 원형
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
      // bricks[i][j] = {
      //   left: 55 + (j * (brickWidth + 10)),
      //   right: 55 + (j * (brickWidth + 10)) + brickWidth,
      //   top: 30 + (i * (brickHeight + 5)),
      //   bottom: 30 + (i * (brickHeight + 5)) + brickHeight,
      //   collisionCount: 0,
      //   column: i, row: j,
      //   isAlive: true,
      // }
      bricks[i][j] = new Brick(
        55 + (j * (brickWidth + 10)), // left
        30 + (i * (brickHeight + 5)), //top
        55 + (j * (brickWidth + 10)) + brickWidth, //right
        30 + (i * (brickHeight + 5)) + brickHeight,  //bottom
        'green', //color
      )
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
      // if (bricks[i][j].isAlive) {
      //   context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
      //   context.fillStyle = 'green'
      //   context.fill();
      //   if (bricks[i][j].collisionCount == 1) {
      //     context.fillStyle = 'yellow'
      //     context.fill();
      //   } 
      // }
      bricks[i][j].draw();
      context.closePath();
    }
  }
}
setBricks();
//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);