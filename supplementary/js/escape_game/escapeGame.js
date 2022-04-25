// const 
const canvas = document.getElementById("myCanvas"); //도형을 그릴 캔버스 제작
const fight = document.getElementById("rockPaperScissors"); //rockPaperScissors
const shop = document.getElementById("shop"); //shop
const result = document.getElementById("result"); //result
const playerStats = document.getElementById("stats"); //stats
const currStatus = document.getElementById("status"); //status
const shopStatus = document.getElementById("shopStatus"); // shop status
const btns = [];
btns[0] = document.getElementById("rock");
btns[1] = document.getElementById("paper");
btns[2] = document.getElementById("scissors");
btns[3] = document.getElementById("yes");
btns[4] = document.getElementById("no");

const context = canvas.getContext('2d');

const playerHeight = 20; // 플레이어 높이
const playerWidth = 20; // 플레이어 넓이
const tileHeight = 49; // 타일 높이
const tileWidth = 49; // 타일 넓이
const canvasTileRow = 10;
const canvasTileColumn = 10;
const mapTileColor = 'green'
const playerSpeed = 50;
const arcRadius = 10;

// exit
const escapeColor = 'lightgreen';
let escapeRow = Math.floor((Math.random() * (canvasTileRow - 1)));
let escapeCol = Math.floor((Math.random() * (canvasTileColumn - 1)));



// shop
const shopColor = 'yellow';
let shopRow = Math.floor((Math.random() * (canvasTileRow - 1)));
let shopCol = Math.floor((Math.random() * (canvasTileColumn - 1)));

checkRand()
console.log(escapeCol, escapeRow, shopCol, shopRow)



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
    this.borderColor = 'red'
    this.arcRadius = arcRadius;
    this.posX = 25;
    this.posY = 25;
    this.moveSpeed = playerSpeed;
    this.health = 100;
    this.canMove = true;
    this.gold = 0;
  }

  draw() {
    context.arc(this.posX, this.posY, this.arcRadius, 0, 2 * Math.PI);  //arc = 원형
    // context.rect(this.left, this.top, tileWidth, tileHeight)
    context.fillStyle = this.color;
    context.strokeStyle = this.borderColor;
    context.fill()
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
    this.monsterOdds = Math.random() * 100 < 10;
    this.escape = false;
    this.isShop = false;
  }
  draw() {
    context.rect(this.left, this.top, tileWidth, tileHeight)
    if (this.playerOn) {
      this.tileColor = 'blue';
      // this.borderColor = 'blue';
    } else if (this.escape == false && this.isShop == false) {
      this.tileColor = mapTileColor;
      context.fillStyle = this.tileColor;
      // context.strokeStyle = this.borderColor;
      context.fill()
    } else if (this.isShop == true) {
      this.tileColor = shopColor;
      context.fillStyle = this.tileColor;
      // context.strokeStyle = this.borderColor;
      context.fill()
    } else if (this.escape == true) {
      this.tileColor = escapeColor;
      context.fillStyle = this.tileColor;
      // context.strokeStyle = this.borderColor;
      context.fill()
    }
  }
}
class ClearTile extends MapTile {
  constructor(left, top, right, bottom, color) {
    super(left, top, right, bottom);
    super.monsterOdds = false;
    super.escape = true;
  }

}

class ShopTile extends MapTile {
  constructor(left, top, right, bottom, color) {
    super(left, top, right, bottom);
    super.monsterOdds = false;
    super.isShop = true;
  }
}

// class Monster {
//   constructor()
// }

let tiles = [];
let player = new Player(0, 0, 0, 0, 'red')

// functions

function keydownEventHandler(e) {
  
  checkMonster();
  

  if (player.canMove) {
    if (e.key == 'ArrowRight') {
      //바를 오른쪽으로 몇 만큼 움직인다
      if (player.posX + player.moveSpeed < canvas.width) {
        player.posX += player.moveSpeed;
      }
    } else if (e.key == 'ArrowLeft') {
      //바를 왼쪽으로 몇 만큼 움직인다
      if (player.posX - player.moveSpeed > 0) {
        player.posX -= player.moveSpeed;
      }

    } else if (e.key == 'ArrowDown') {
      //바를 왼쪽으로 몇 만큼 움직인다
      if (player.posY + player.moveSpeed < canvas.height) {
        player.posY += player.moveSpeed;
      }

    } else if (e.key == 'ArrowUp') {
      //바를 왼쪽으로 몇 만큼 움직인다
      if (player.posY - player.moveSpeed > 0) {
        player.posY -= player.moveSpeed;
      }

    } else if (e.key == ' ') {
      console.log(`player.posX : ${player.posX}, player.posX : ${player.posX}`) //, tile : ${}
      if (player.moveDirY == 0 && player.moveDirX == 0) {
        player.moveDirY = -1;
        let ranNum = Math.random() * ((Math.round(Math.random())) > 0 ? 1 : -1)
        if (player.posX >= player.posX + player.arcRadius / 2) {
          player.moveDirX += ranNum;
        } else {
          player.moveDirX -= ranNum;
        }

      }

    }


  }
  player.left = player.posX;
  player.right = player.posX + arcRadius;
  player.top = player.posY;
  player.bottom = player.posY + arcRadius;
  result.innerText = ""


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
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawTiles();
  // drawClear();
  // drawShop();
  drawPlayer();
}

function clickHandler(ev) {
  if (ev) {
    let rand = Math.floor(Math.random() * 3);
    let playerChoice = ev.target.innerText;
    let playerChoiceNum;
    if (playerChoice == '바위') playerChoiceNum = 0;
    if (playerChoice == '가위') playerChoiceNum = 1;
    if (playerChoice == '보') playerChoiceNum = 2;
    let computerChoice;
    if (rand == 0) computerChoice = '바위';
    if (rand == 1) computerChoice = '가위';
    if (rand == 2) computerChoice = '보';
    // console.log(`playerChoice ${playerChoice}, computerChoice ${computerChoice}`)
    if (playerChoiceNum - rand == -1 || (playerChoiceNum - rand == 2 && rand == 0)) {
      console.log("이겼습니다");
      player.canMove = true;
      let award = Math.floor(Math.random() * 100);
      player.gold += award
      currStatus.innerText = `승리\n승리 보상으로 ${award} gold 를 획들하였습니다  \n노랑 타일로 이동하면 game clear`;
      fight.style.display = "none";
      getCurrentTile().monsterOdds = false
      return true;
    } else if (rand == playerChoiceNum) {
      console.log("비겼습니다")
      player.canMove = false;
      currStatus.innerText = "무승부\n아쉽게 비겼습니다. \n다시 용맹하게 가위 바위 보!";
      return false;
    } else if (rand - playerChoiceNum == -1 || (rand - playerChoiceNum == 2 && playerChoiceNum == 0)) {
      console.log("졌습니다")
      player.health -= 1;
      player.canMove = false;
      currStatus.innerText = "패배\n개같이 졌겼습니다. \n다시 용맹하게 가위 바위 보!"
      return false;
    } else if (playerChoice == '예' && player.gold >= 150 && player.health < 100) {
      currStatus.style.display = "none";
      shopStatus.innerText = "회복이 완료되었습니다 \n용맹하게 계속 진행하세여."
      player.gold -= 150;
      player.health = 100;
      shop.style.display = "none";
      return true;
    } else if (playerChoice == '예' && player.gold < 150) {
      currStatus.style.display = "none";
      shopStatus.innerText = '골드가 부족합니다.';
      shop.style.display = "none";
      return true;
    } else if (playerChoice == '예' && player.health == 100) {
      currStatus.style.display = "none";
      shopStatus.innerText = 'HP가 이미 가득 찼습니다.';
      shop.style.display = "none";
      return true;
    } else if (playerChoice == '아니오') {
      currStatus.style.display = "none";
      shopStatus.innerText = '용맹하게 계속 진행하세여.';
      shop.style.display = "none";
      return true;
    }
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", clickHandler)
}

function checkMonster() {
  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (isCollisionRectToRect(tiles[i][j], player)) {
        if (tiles[i][j].monsterOdds) {
          fight.style.display = ""
          currStatus.innerText = "몬스터 출현\n가위바위보를 이겨주세여.\n가위 바위 보!"
          player.canMove = false;
          if (clickHandler()) {
            player.canMove = true
            // currStatus.style.display = 'none'
          };
        } else {
          currStatus.innerText = "밝은 초록으로 이동하면 game clear"
          result.style.display = ""
          fight.style.display = "none"
          player.canMove = true;
        }
      }
    }
  }
}


function checkToWin() {
  if (isCollisionRectToRect(clearTile, player)) {
    window.location.reload();
    alert("게임 클리어");
  }
}

function checkShop() {
  if (isCollisionRectToRect(shopTile, player)) {
    // console.log('상점')
    fight.style.display = "none";
    shopStatus.style.display = "";
    shop.style.display = "";
    currStatus.innerText = "상점에 오셧습니다\n150 gold를 사용하여 체력을 회복하시겠습니까?"
    // if (clickHandler()) shop.style.display = "none";
    return true;
  } else {
    currStatus.style.display = "";
    shopStatus.style.display = "none";
    shop.style.display = "none";
    return false;
  }
}

function checkGameover() {
  // console.log(player.health)
  if (player.health < 0) {
    window.location.reload();
    alert("게임 오버");
  }
}

//원형 만들기
function drawPlayer() {
  context.beginPath(); //도형시작점
  player.draw();
  context.closePath(); //도형종결점  
}

// function drawClear() {
//   context.beginPath(); //도형시작점
//   clearTile.draw();
//   context.closePath(); //도형종결점  
// }

// function drawShop() {
//   context.beginPath(); //도형시작점
//   shopTile.draw();
//   context.closePath(); //도형종결점  
// }
function checkRand() {
  if (((escapeRow != 0 || escapeCol != 0) && (shopRow != 0 || shopCol != 0))) {
    if (escapeRow == shopRow && escapeCol == shopCol) {
      escapeRow = Math.floor((Math.random() * (canvasTileRow - 1)));
      shopRow = Math.floor((Math.random() * (canvasTileRow - 1)));
      escapeCol = Math.floor((Math.random() * (canvasTileRow - 1)));
      shopCol = Math.floor((Math.random() * (canvasTileRow - 1)));
      // console.log(escapeRow, shopRow, escapeCol, shopCol)
      checkRand()
    } else {
      console.log(`escapeRow : ${escapeRow}, shopRow : ${shopRow}, escapeCol : ${escapeCol}, shopCol: ${shopCol}`)
      return;
    }
  } else {
    escapeRow = Math.floor((Math.random() * (canvasTileRow - 1)));
    shopRow = Math.floor((Math.random() * (canvasTileRow - 1)));
    escapeCol = Math.floor((Math.random() * (canvasTileRow - 1)));
    shopCol = Math.floor((Math.random() * (canvasTileRow - 1)));
    // console.log(escapeRow, shopRow, escapeCol, shopCol)
    checkRand()
  }
}

//벽돌 만들기
function setTiles() {
  checkRand();
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
      if (i == escapeRow && j == escapeCol) {
        // console.log(i, j)
        tiles[i][j] = new ClearTile(
          (j * (tileWidth + 1)), // left
          (i * (tileHeight + 1)), //top
          (j * (tileWidth + 1)) + tileWidth, //right
          (i * (tileHeight + 1)) + tileHeight,  //bottom
          escapeColor, //color
        )
      }
      if (i == shopRow && j == shopCol) {
        // console.log(i, j)
        tiles[i][j] = new ShopTile(
          (j * (tileWidth + 1)), // left
          (i * (tileHeight + 1)), //top
          (j * (tileWidth + 1)) + tileWidth, //right
          (i * (tileHeight + 1)) + tileHeight,  //bottom
          shopColor, //color
        )
      }
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
  checkShop();
  checkToWin();
  checkGameover();
  // console.log(getCurrentTile())
 


  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (isCollisionRectToRect(tiles[i][j], player)) {
        tiles[i][j].playerOn = true;
      }
    }
  }

  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (!isCollisionRectToRect(tiles[i][j], player)) {
        tiles[i][j].playerOn = false;
      }
    }
  }
  playerStats.innerText = "플레이어 HP : " + player.health + "\n플레이어 Gold : " + player.gold;

}

function getCurrentTile() {
  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (tiles[i][j].playerOn == true) {
        return tiles[i][j];
      }
    }
  }
}

function keyupEventHandler(e) {

}

// function clickEventHandler() {
//   checkFightWin()
// }


setTiles();
let flatTiles = tiles.flat()
let clearTile = flatTiles.filter(tile => tile.escape == true)[0];
let shopTile = flatTiles.filter(tile => tile.isShop == true)[0];


// console.log(clearTile)
//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);
