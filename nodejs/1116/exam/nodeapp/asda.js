const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.on(`line`, name => {
    name = name.toString();
    a = Number(name[0]);
    b = Number(name[2]);
    console.log(a - b);
    readline.close()
  })