const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
    let input = []
    let a 

  
  readline.on('line', function(data) {
    
    input = data.toString().split(' ')
  
  }).on("close", function() {
    a = Number(input[0])
    let arr = []

    for (var i = 0; i < 9; i++) {
      
      arr += `${a} * ${i+1} = ${a*(i+1)}\n`
    }
    console.log(arr)
    process.exit();
  });