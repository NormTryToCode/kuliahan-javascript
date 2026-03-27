const fs = require('fs');
console.log("Start");


// sambil code nya baca, sambil dia run program nya
const data = fs.readFile('../100mb-examplefile-com.txt', 'utf8', (err, data) => {
    console.log(data.slice(0, 30));
});

// kalo read udh kelar, (err, data) => baru jalan

console.log("End");
