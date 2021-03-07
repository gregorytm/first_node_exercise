const fs = require('fs');
const process = require('process');

//1
function cat(path) {
    fs.readFile(path, 'utf8', (err,data) => {
        if(err) {
            console.log("ERROR:", err);
            process.kill(1);
        } 
        console.log("DATA:", data)
    })
}

cat (process.argv[2])


//from solutions

// function cat(path){
//     fs.readFile(path, 'utf8', function(err,data) {
//         if (err) {
//             console.error(`Error reading ${path}: ${err}`);
//             process.exit(1);
//         } else {
//             console.log(data);
//         }
//     });
// }

// cat(process.argv[2]);

