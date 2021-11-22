const fs = require("fs")

var data = 'Standard Input / Output Steams Library Header that defines the standard input/output stram objects.';

var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "UTF-8");

writerStream.close();

writerStream.on("finish", () => {
    console.log("Finished write file~~");
});

writerStream.on("error", (err) => {
    console.log(err.stack);
});

console.log("writerStream file write finished~~~");
