const fs = require('fs');
console.log("Start");

// baca
const data = fs.readFileSync('../100mb-examplefile-com.txt', 'utf8');


// baru ditampilin
console.log(data.slice(0, 30));
console.log("End");
