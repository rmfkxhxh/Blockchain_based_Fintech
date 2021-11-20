const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
    let input = []
    let a 
    let b
  
  readline.on('line', function(data) {
    
    input = data.toString().trim().split(' ')
  
  }).on("close", function() {
    if (input.length > 1) {
      a = Number(input[0])
      b = Number(input[1])

    
    var c = a + b
    console.log(c, '\n')
    process.exit();
    }
  });