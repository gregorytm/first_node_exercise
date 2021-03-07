const axios = require('axios')
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

//2
 async function webCat(url) {
    try {
        res = await axios.get(url);
        console.log(res.data);
    } catch(err){
        console.log(`error ${err}`)
        process.exit(1)
    }
}

//from solutions
//oh just like js

let path =process.argv[2]


if (path.slice(0,4) ==='http') {
    webCat(path);
} else {
    cat(path);
}

