const axios = require('axios');
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
        printToFile(data, out)
    })
}

//2
 async function webCat(url) {
    try {
        res = await axios.get(url);
        console.log(res.data);
        printToFile(resp.data, out);
    } catch(err){
        console.log(`error ${err}`)
        process.exit(1)
    }
}

//3
function printToFile(text, out) {
if (out) {
    fs.writeFile(out, text, 'utf8', function(err) {
        if(err) {
            console.log(`Error ${err}`);
            process.exit(1)
        }
    });
} else{
    console.log(text)
    }
}


//solutions help

let path;
let out;

if(process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}


if (path.slice(0,4) ==='http') {
    webCat(path, out);
} else {
    cat(path, out);
}