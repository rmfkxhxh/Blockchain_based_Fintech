let canvasTileRow = 10
let canvasTileColumn = 10

const escapeColor = 'lightgreen';
let escapeRow = Math.floor((Math.random() * (canvasTileRow - 1) + 1)) * 50;
let escapeCol = Math.floor((Math.random() * (canvasTileColumn - 1) + 1)) * 50;

// shop
const shopColor = 'yellow';
let shopRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
let shopCol = Math.floor((Math.random() * canvasTileColumn - 1) + 1) * 50;

for (i = 0; i < 100; i++) {
    console.log('---------------------------------')
    escapeRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
    shopRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
    escapeCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
    shopCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
    console.log(escapeRow, shopRow, escapeCol, shopCol)
    checkRand()
    console.log(escapeRow, shopRow, escapeCol, shopCol)
    console.log('---------------------------------')
}


function checkRand() {
    // !(0, 0) && (0,0)
    if (((escapeRow != 0 || escapeCol != 0) && (shopRow != 0 || shopCol != 0))) {
        if (escapeRow == shopRow && escapeCol == shopCol) {
            escapeRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
            shopRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
            escapeCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
            shopCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
            console.log(escapeRow, shopRow, escapeCol, shopCol)
            checkRand()
        } else {
            console.log(escapeRow, shopRow, escapeCol, shopCol)
            return;
        }
    } else {
        escapeRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
        shopRow = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
        escapeCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
        shopCol = Math.floor((Math.random() * canvasTileRow - 1) + 1) * 50;
        console.log(escapeRow, shopRow, escapeCol, shopCol)
        checkRand()
    }
}



