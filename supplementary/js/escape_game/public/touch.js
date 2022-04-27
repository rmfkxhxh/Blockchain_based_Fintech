var posX, posY;

function positionHandler(e) {
    posX = e.clientX;
    posY = e.clientY;
}

document.addEventListener('mousemove', positionHandler,
    false);

if ('ontouchstart' in window) {
    console.log(posX, posY)
}

var touchEvent = 'touchend';

document.addEventListener(touchEvent, function (e) {
    e.preventDefault();
    e.target.click();
    
});

document.addEventListener('click', (e) => {
    console.log(posX, posY);
    if(e) {
        if (e.target.innerText == "show")
        document.getElementById("arrowButtons").style.display = "";
    } else if (e.target.innerText == "up") {

    } else if (e.target.innerText == "down") {

    } else if (e.target.innerText == "left") {

    } else if (e.target.innerText == "right") {

    }

});
