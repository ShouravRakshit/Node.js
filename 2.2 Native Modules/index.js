const fs = require("fs");

fs.writeFileSync("hollow.txt", "Bankai Kyten Kyokutsu Karamatsuno Shiniju \n", (err)=>{

    if (err) throw err; 
    console.log("The file has been saved!");

})

fs.appendFile('hollow.txt', 'Tea', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  

fs.readFile('hollow.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
