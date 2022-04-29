let ipAddress;
let port;
let msg;

const onClickHandler = (e) => {
    // console.log(e)
    // e.preventDefault();
    switch (e.target.id) {
        case 'connect':
            ipAddress = document.getElementById("ipAddress").value;
            port = document.getElementById("port").value;
            // console.log(`ipAddress: ${ipAddress}, port: ${port}`)
            console.log(ipAddress)
            console.log(port)

            let fullAddress = "ws://" + ipAddress + ":" + port;
            console.log(fullAddress)
            
            break
        case 'enter':
            msg = document.getElementById("inputValue").value
            console.log(msg)
            break
    }
}

document.getElementById("connect").onclick = onClickHandler;
document.getElementById("enter").onclick = onClickHandler;
// document.addEventListener("submit", (e) => {
//     // e.preventDefault();
//     console.log('post from js')
// })





