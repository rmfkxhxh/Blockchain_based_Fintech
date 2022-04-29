// const 
const canvas = document.getElementById("myCanvas"); //도형을 그릴 캔버스 제작
const canvas2 = document.getElementById("profileCanvas"); //도형을 그릴 캔버스 제작
const fight = document.getElementById("rockPaperScissors"); //rockPaperScissors
const shop = document.getElementById("shop"); //shop
const result = document.getElementById("result"); //result
const playerStats = document.getElementById("stats"); //stats
const currStatus = document.getElementById("status"); //status
const shopStatus = document.getElementById("shopStatus"); // shop status
const logDiv = document.getElementById("log"); //log
let logCount = 0;
let fightWin = false;
const btns = [];
btns[0] = document.getElementById("rock");
btns[1] = document.getElementById("paper");
btns[2] = document.getElementById("scissors");
btns[3] = document.getElementById("yes");
btns[4] = document.getElementById("no");

const context = canvas.getContext('2d');
const imgContext = canvas2.getContext('2d');

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

// checkRand()
// console.log(escapeCol, escapeRow, shopCol, shopRow)
const touchEvent = ('ontouchstart' in window ? 'touchend' :
  'click');


document.addEventListener('keydown', keydownEventHandler)
document.addEventListener('keyup', keyupEventHandler)
document.addEventListener(touchEvent, touchorClickEventHandler)

// document.addEventListener(, function (e) {
//   e.preventDefault();
//   e.target.click();
// });

//img

let img = new Image()
let img2 = new Image()

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
  constructor(left, top, right, bottom, color, level) {
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
    this.monsterPower = 10;
    this.escape = false;
    this.isShop = false;
    this.level = level;
    this.visited = false;
    this.inSight = false;
  }
  draw() {
    context.rect(this.left, this.top, tileWidth, tileHeight)
    if (this.inSight) {
      if (this.level == 1 && this.playerOn != true && this.visited == false && this.escape == false) {
        this.monsterOdds = Math.random() * 100 < 10;
        this.monsterPower = 10 * this.level;
        this.tileColor = 'blue';
        // this.tileColor = 'lightgray';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.level == 2 && this.playerOn != true && this.visited == false && this.escape == false) {
        this.monsterOdds = Math.random() * 100 < 40;
        this.monsterPower = 10 * this.level;
        this.tileColor = 'pink';
        // this.tileColor = 'lightgray';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.level == 3 && this.playerOn != true && this.visited == false && this.escape == false) {
        this.monsterOdds = Math.random() * 100 < 40;
        this.monsterPower = 10 * this.level;
        // this.tileColor = 'lightgray';
        this.tileColor = '#8A240E';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.isShop == true) {
        this.tileColor = shopColor;
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      }
      else if (this.escape == true) {
        this.tileColor = escapeColor;
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      }
    }
    if (this.visited == true) {
      if (this.playerOn) {
        this.tileColor = 'white';
        context.fillStyle = this.tileColor;
        context.fill();
        // this.borderColor = 'blue';
      } else if (this.escape == false && this.isShop == false) {
        this.tileColor = 'gray';
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
    } else if (this.visited == false && this.inSight == false) {
      if (this.playerOn) {
        this.tileColor = 'lightgray';
        context.fillStyle = this.tileColor;
        context.fill();
      } else if (this.escape == false && this.isShop == false) {
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.isShop == true) {
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.escape == true) {
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      }
      if (this.level == 1) {
        // this.monsterOdds = Math.random() * 100 < 30;
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.level == 2) {
        // this.monsterOdds = Math.random() * 100 < 50;
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      } else if (this.level == 3) {
        // this.monsterOdds = Math.random() * 100 < 100;
        this.tileColor = 'black';
        context.fillStyle = this.tileColor;
        // context.strokeStyle = this.borderColor;
        context.fill()
      }
    }
  }
}

function setTileDetail(color, monsterPower, monsterOdds) {

}
class ClearTile extends MapTile {
  constructor(left, top, right, bottom, color) {
    super(left, top, right, bottom);
    super.monsterOdds = false;
    super.escape = true;
    super.level = 0;
  }

}

class ShopTile extends MapTile {
  constructor(left, top, right, bottom, color) {
    super(left, top, right, bottom);
    super.monsterOdds = false;
    super.isShop = true;
    super.level = 0;
  }
}

// class Monster {
//   constructor()
// }

let tiles = [];
let player = new Player(15, 15, 35, 35, 'red')

// functions

//touch
var posX, posY;

function positionHandler(e) {
  posX = e.clientX;
  posY = e.clientY;
}

document.addEventListener('mousemove', positionHandler,
  false);


function touchorClickEventHandler(e) {
  checkMonster();
  // console.log(posX, posY);
  logCount++;
  let rand = Math.floor(Math.random() * 3);
  let playerChoice = e.target.innerText;
  let playerChoiceNum;
  if (playerChoice == '바위') playerChoiceNum = 0;
  if (playerChoice == '가위') playerChoiceNum = 1;
  if (playerChoice == '보') playerChoiceNum = 2;
  let computerChoice;
  if (rand == 0) computerChoice = '바위';
  if (rand == 1) computerChoice = '가위';
  if (rand == 2) computerChoice = '보';

  if (playerChoiceNum - rand == -1 || (playerChoiceNum - rand == 2 && rand == 0)) {
    console.log("이겼습니다");
    // let img2 = new Image()
    if (getCurrentTile().level == 3) {
      img2.src = "./monster3Dead.PNG"
      img2.onload = function () {
        imgContext.drawImage(img2, 100, 25, 150, 150);
      };
    } else {
      img2.src = "./monsterDead.PNG"
      img2.onload = function () {
        imgContext.drawImage(img2, 100, 25, 150, 150);
      };
    }
    let award = Math.floor(Math.random() * 100) * (getCurrentTile().level / 2);
    logDiv.innerText += `\n${logCount}. playerChoice ${playerChoice}, computerChoice ${computerChoice}\n이겼습니다\n${award} gold 획득`
    player.canMove = true;
    player.gold += award
    currStatus.innerText = `승리\n승리 보상으로 ${award} gold 를 획득하였습니다  \n노랑 타일로 이동하면 game clear`;
    fight.style.display = "none";
    getCurrentTile().monsterOdds = false
    fightWin = true;
  } else if (rand == playerChoiceNum) {
    console.log("비겼습니다")
    logDiv.innerText += `\n${logCount}. playerChoice ${playerChoice}, computerChoice ${computerChoice}\n비겼습니다`
    player.canMove = false;
    currStatus.innerText = "무승부\n아쉽게 비겼습니다. \n다시 용맹하게 가위 바위 보!";
    fightWin = false;
  } else if (rand - playerChoiceNum == -1 || (rand - playerChoiceNum == 2 && playerChoiceNum == 0)) {
    console.log("졌습니다")
    logDiv.innerText += `\n${logCount}. playerChoice ${playerChoice}, computerChoice ${computerChoice}\n졌습니다.`
    player.health -= getCurrentTile().monsterPower;
    player.canMove = false;
    currStatus.innerText = "패배\n개같이 졌습니다. \n다시 용맹하게 가위 바위 보!"
    fightWin = false;
  } else if (playerChoice == '예' && player.gold >= 150 && player.health < 100) {
    currStatus.style.display = "none";
    shopStatus.innerText = "회복이 완료되었습니다 \n용맹하게 계속 진행하세여."
    player.gold -= 150;
    player.health = 100;
    shop.style.display = "none";
    fightWin = true;
  } else if (playerChoice == '예' && player.gold < 150) {
    currStatus.style.display = "none";
    shopStatus.innerText = '골드가 부족합니다.';
    shop.style.display = "none";
    fightWin = true;
  } else if (playerChoice == '예' && player.health == 100) {
    currStatus.style.display = "none";
    shopStatus.innerText = 'HP가 이미 가득 찼습니다.';
    shop.style.display = "none";
    fightWin = true;
  } else if (playerChoice == '아니오') {
    currStatus.style.display = "none";
    shopStatus.innerText = '용맹하게 계속 진행하세여.';
    shop.style.display = "none";
    fightWin = true;
  }

  if (player.canMove) {
    imgContext.clearRect(0, 0, canvas.width, canvas.height);
    if (e) {
      // console.log(e.target.innerText == "down");
      if (e.target.innerText == "show") {
        document.getElementById("arrowButtons").style.display = "";
      } else if (e.target.innerText == "up") {
        if (player.posY - player.moveSpeed > 0) {
          player.posY -= player.moveSpeed;
        }
      } else if (e.target.innerText == "down") {
        console.log('down')
        if (player.posY + player.moveSpeed < canvas.height) {
          player.posY += player.moveSpeed;
        }
      } else if (e.target.innerText == "left") {
        if (player.posX - player.moveSpeed > 0) {
          player.posX -= player.moveSpeed;
        }
      } else if (e.target.innerText == "right") {
        if (player.posX + player.moveSpeed < canvas.width) {
          player.posX += player.moveSpeed;
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


//keydown
function keydownEventHandler(e) {
  checkMonster();
  // console.log(tiles)


  if (player.canMove) {
    imgContext.clearRect(0, 0, canvas.width, canvas.height);
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
      // console.log(`player.posX : ${player.posX}, player.posX : ${player.posX}`) //, tile : ${}
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

function isCollisionRectForSight(rectA, rectB) {
  // a의 왼쪽과 b의 오른쪽
  // a의 오른쪽과 b의 왼쪽
  // a의 아래쪽과 b의 위쪽
  // a의 위쪽과 b의 아래쪽
  if (rectA.left - 35 > rectB.right ||
    rectA.right + 35 < rectB.left ||
    rectA.bottom + 35 < rectB.top ||
    rectA.top - 35 > rectB.bottom) {
    return false;
  }

  return true;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawTiles();
  drawPlayer();
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", touchorClickEventHandler)
}

function checkFightWin() {
  return fightWin;
}
function checkMonster() {
  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (isCollisionRectToRect(tiles[i][j], player)) {

        if (tiles[i][j].monsterOdds) {
          fightWin = false;
          fight.style.display = "";
          imgContext.font = "20px malgun gothic"
          imgContext.fillStyle = "black"
          imgContext.fillText(`monster level : ${tiles[i][j].level}`, 100, 20, 150)
          if (tiles[i][j].level == 1) {
            img.src = "./monster1.png"
            img.onload = function () {
              imgContext.drawImage(img, 100, 25, 150, 150);
            };
          } else if (tiles[i][j].level == 2) {
            img.src = "./monster2.PNG"
            img.onload = function () {
              imgContext.drawImage(img, 100, 25, 150, 150);
            };
          } else if (tiles[i][j].level == 3) {
            img.src = "./monster3.png"
            img.onload = function () {
              imgContext.drawImage(img, 100, 25, 150, 150);
            };
          }
          let img3 = new Image();
          imgContext.fillText(`player`, 168, 300, 50)
          img3.src = "./player.png"
          img3.onload = function () {
            imgContext.drawImage(img3, 168, 325, 35, 35);
          };

          currStatus.innerText = "몬스터 출현\n가위바위보를 이겨주세여.\n가위 바위 보!"
          player.canMove = false;
          if (checkFightWin()) {
            player.canMove = true
            console.log('win')
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
  if (player.health <= 0) {
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
      escapeCol = Math.floor((Math.random() * (canvasTileColumn - 1)));
      shopCol = Math.floor((Math.random() * (canvasTileColumn - 1)));
      // console.log(escapeRow, shopRow, escapeCol, shopCol)
      checkRand()
    } else {
      // console.log(`escapeRow : ${escapeRow}, shopRow : ${shopRow}, escapeCol : ${escapeCol}, shopCol: ${shopCol}`)
      return;
    }
  } else {
    escapeRow = Math.floor((Math.random() * (canvasTileRow - 1)));
    shopRow = Math.floor((Math.random() * (canvasTileRow - 1)));
    escapeCol = Math.floor((Math.random() * (canvasTileColumn - 1)));
    shopCol = Math.floor((Math.random() * (canvasTileColumn - 1)));
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
        Math.floor((Math.random() * 3)) + 1, // level
      )
      if (i == escapeRow && j == escapeCol) {
        // console.log(i, j)
        tiles[i][j] = new ClearTile(
          (j * (tileWidth + 1)), // left
          (i * (tileHeight + 1)), //top
          (j * (tileWidth + 1)) + tileWidth, //right
          (i * (tileHeight + 1)) + tileHeight,  //bottom
          escapeColor, //color
          // console.log("escape", i, j)
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
  // console.log(tiles)



  for (let i = 0; i < canvasTileRow; i++) {
    for (let j = 0; j < canvasTileColumn; j++) {
      if (isCollisionRectToRect(tiles[i][j], player)) {
        tiles[i][j].playerOn = true;
        tiles[i][j].visited = true;
      } else {
        tiles[i][j].playerOn = false;
      }
      if (isCollisionRectForSight(tiles[i][j], player)) {
        tiles[i][j].inSight = true;
      } else {
        tiles[i][j].inSight = false;
      }
    }
  }

  // for (let i = 0; i < canvasTileRow; i++) {
  //   for (let j = 0; j < canvasTileColumn; j++) {
  //     if (!isCollisionRectToRect(tiles[i][j], player)) {

  //     }
  //   }
  // }
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
// setInterval(draw2, 10);
