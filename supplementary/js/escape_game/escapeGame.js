// const 
const canvas = document.getElementById("myCanvas"); //도형을 그릴 캔버스 제작
const context = canvas.getContext('2d');

const playerHeight = 20; // 플레이어 높이
const playerWidth = 20; // 플레이어 넓이
const tileHeight = 50; // 타일 높이
const tileWidth = 50; // 타일 넓이
const canvasTileRow = 10;
const canvasTileColumn = 10;
const mapTileColor = 'green'
const playerSpeed = 5;

document.addEventListener('keydown', keydownEventHandler)
document.addEventListener('keyup', keyupEventHandler)



// class 
class Player {
  constructor(left, top, right, bottom, color) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.color = color;
    this.posX = playerHeight / 2;
    this.posY = playerWidth / 2;
    this.player = playerSpeed;
  }
}

class MapTile {
  constructor(left, top, right, bottom, color) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = tileWidth;
    this.height = tileHeight;
    this.tileColor = color;
    this.borderColor = 'white'
    this.playerOn = false;
  }
  draw() {
    context.rect(this.left, this.top, tileWidth, tileHeight)
    if (this.playerOn) {
      this.tileColor = 'darkgray';
      this.borderColor = 'black'
    }
    context.fillStyle = this.tileColor;
    context.strokeStyle = this.borderColor;
    context.fill()
  }
}


let tiles = [];
let player = new Player(0, 0, 0, 0, 'blue')


// functions
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
  drawPlayer();
  // drawAcr();
  // drawWallBrick()
  drawTiles();
}

//사각형 만들기
function drawPlayer() {
  context.beginPath(); //도형시작점
  context.rect(player.posX, player.posY, playerWidth, playerHeight);  //rect = 사각형
  context.fillStyle = 'red';
  context.fill();
  context.closePath(); //도형종결점  
}

//벽돌 만들기
function setTiles() {
  for (let i = 0; i < canvasTileRow; i++) {
    tiles[i] = [];
    for (let j = 0; j < canvasTileColumn; j++) {
      tiles[i][j] = new MapTile(
        (j * (tileWidth + 1)), // left
        (i * (tileHeight + 1)), //top
        (j * (tileWidth + 1)) + tileWidth, //right
        (i * (tileHeight + 1)) + tileHeight,  //bottom
        mapTileColor, //color
      )
    }
  }
}

function drawTiles() {
  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      context.beginPath();
      tiles[i][j].draw();
      context.closePath();
    }
  }
}

//캔버스 초기화
context.clearRect(0, 0, canvas.width, canvas.height);

async function update() {

  //도형의 위치 이동
  // if (player.posX - arcRadius < 0) {
  //   player.moveDirX = 1;
  // } else if (player.posX > player.rightMax) {
  //   player.moveDirX = -1;
  // }

  // if (player.posY < player.leftMax) {
  //   player.moveDirY = 1;
  // } else if (player.posY > player.rightMax) {
  //   window.location.reload();
  //   alert('game over');
  // }
  // 볼 이동
  // player.posX += player.moveDirX * player.moveSpeed;
  // player.posY += player.moveDirY * player.moveSpeed;

  // player.left = player.posX - (arcRadius);
  // player.right = player.posX + (arcRadius);
  // player.top = player.posY - (arcRadius);
  // player.bottom = player.posY + (arcRadius);
  // 벽돌 이동
  // if (blackBrick.left < 0) {
  //   brickMoveDirX = 1;
  // } else if (blackBrick.left > bRreturnPoint) {
  //   brickMoveDirX = -1;
  // }

  // blackBrick.left += brickMoveDirX * brickMoveSpeed;

  // blackBrick.right = blackBrick.left + (brickWidth / 2);



  // player 충돌확인
  // if (isCollisionRectToRect(ball, player)) {
  //   // let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 10 : -10)
  //   player.moveDirY *= -1
  //   if (player.moveDirX != 0) {
  //     player.moveDirX += Math.random()
  //   } else {
  //     player.moveDirX *= Math.random()
  //   }

  //   // console.log(player.moveDirX)
  // }

  // brick 충돌확인
  // for (let i = 0; i < brickRow; i++) {
  //   for (let j = 0; j < brickColumn; j++) {
  //     if (isCollisionRectToRect(bricks[i][j], ball)) {
  //       player.moveDirY *= -1
  //       player.moveDirX *= -1
  //       bricks[i][j].collisionCount += 1
  //       if (deadBricksCount == (brickRow * brickColumn) - 1 && bricks[i][j].collisionCount == 2) {
  //         brickBlink(bricks[i][j]);

  //       } else if (bricks[i][j].collisionCount == 2 && deadBricksCount != (brickRow * brickColumn) - 1) {
  //         bricks[i][j].isAlive = false;
  //         deadBricksCount++;
  //       }
  //     }
  //   }
  // }

  // blackBrick 충돌확인
  // if (isCollisionRectToRect(ball, blackBrick)) {
  //   player.moveDirY *= -1;
  //   player.moveDirX *= -1;
  //   if (player.bottom > blackBrick.top && player.bottom < blackBrick.bottom) { // ball
  //     player.posY += blackBrick.top - player.bottom;
  //   } else if (player.top < blackBrick.bottom && player.top > blackBrick.top) {
  //     player.posY += blackBrick.bottom - player.top;
  //   }

  // player.moveDirY *= 0
  // player.moveDirX *= 0
  // }

}




function keydownEventHandler(e) {
  if (e.key == 'ArrowRight') {
    //바를 오른쪽으로 몇 만큼 움직인다
    if (player.posX <= canvas.width) {
      player.posX += player.moveSpeed;
    }
    // if (player.moveDirY == 0 && player.moveDirX == 0) {
    //   player.posX += player.moveSpeed;
    // }
    console.log(player)
  }
  else if (e.key == 'ArrowLeft') {
    //바를 왼쪽으로 몇 만큼 움직인다
    if (player.posX >= 0) {
      player.posX -= player.moveSpeed;
    }
    // if (player.moveDirY == 0 && player.moveDirX == 0) {
    //   player.posX -= player.moveSpeed;
    // }
    console.log(player)
  } else if (e.key == ' ') {
    console.log(`player.posX : ${player.posX}, player.posX : ${player.posX}, blackBrick : ${blackBrick.left}`)
    if (player.moveDirY == 0 && player.moveDirX == 0) {
      player.moveDirY = -1;
      let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 1 : -1)
      if (player.posX >= player.posX + barWidth / 2) {
        player.moveDirX += ranNum;
      } else {
        player.moveDirX -= ranNum;
      }

    }


  } else if (e.key == 'ArrowUp') {
    player.moveSpeed++;
  } else if (e.key == 'ArrowDown') {
    player.moveSpeed--;
  }
  player.left = player.posX;
  player.right = player.posX + playerWidth;
  player.top = player.posY;
  player.bottom = player.posY + playerHeight;

}

function keyupEventHandler(e) {

}

// --------------------------------------------------------------------
// class Brick {
//   constructor(left, top, right, bottom, color) {
//     this.left = left;
//     this.right = right;
//     this.top = top;
//     this.bottom = bottom;
//     this.width = brickWidth;
//     this.height = brickHeight;
//     this.collisionCount = 0;
//     this.isAlive = true;

//   }

// }


// class MovingBrick extends Brick {
//   movingAction() {

//   }
// }







//공 관련 변수
// let ball = new Ball(0, 0, 0, 0)


// 게임 진행
// let deadBricksCount = 0;



// moving 벽돌
// let blackBrick = new MovingBrick(canvas.width / 2 - brickWidth / 2, canvas.height / 2 - brickHeight / 2, canvas.width / 2 + brickWidth / 2, canvas.height / 2 + brickHeight / 2)

// let brickMoveDirX = -1;
// let brickMoveDirY = 0;
// let brickMoveSpeed = 2;

// let bRreturnPoint = canvas.width - brickWidth;
// let bLreturnPoint = brickWidth / 2;

//바 관련 변수
// let barWidth = 100; //바 길이
// let barHeight = 20; //바 굵기


// let player = new player(canvas.width / 2 - barWidth / 2, canvas.height - barHeight, canvas.width / 2 + barWidth / 2, canvas.height);
// ;




// 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동



// async function changeBrickColor(last_brick) {
//   // let starttTime = new Date().getTime();
//   // while (new Date().getTime() - starttTime < 2500) {
//   // console.log(last_brick);
//   setTimeout(() => {
//     if (last_brick.color == 'yellow') {
//       last_brick.color = 'lightgray'
//     } else {
//       last_brick.color = 'yellow'
//     }
//   }, 200)

//   // }
//   // return 0;
// }
// async function brickBlink(last_brick) {
//   // let starttTime = new Date().getTime();
//   // while (new Date().getTime() - starttTime < 2500) {
//   setTimeout(() => {
//     changeBrickColor(last_brick);
//     setTimeout(() => {
//       player.moveSpeed = 0;
//       changeBrickColor(last_brick);
//       setTimeout(() => {
//         changeBrickColor(last_brick);
//         setTimeout(() => {
//           changeBrickColor(last_brick);
//           setTimeout(() => {
//             changeBrickColor(last_brick);
//             setTimeout(() => {
//               last_brick.isAlive = false;
//               deadBricksCount++;
//             }, 200)
//           }, 200)
//         }, 200)
//       }, 200)
//     }, 200)
//   }, 0)
//   // changeBrickColor(last_brick);
//   // }
//   // return 0;
// }


// function checkToWin() {

//   let flatBricks = bricks.flat()

//   let deadBricks = flatBricks.filter(brick => brick.isAlive == false);
//   if (deadBricks.length == brickRow * brickColumn) {


//     // brickBlink();
//     setTimeout(() => {
//       // 게임 클리어
//       window.location.reload();
//       alert("게임 클리어");
//       // return 0;
//     }, 500)

//   }
//   // 2. 카운트를 세는 변수를 만들어서 처리
//   // if (deadBricksCount == brickRow * brickColumn)
//   // {
//   //   //게임 클리어
//   // }

// }






setTiles();
//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);
