const fs = require("fs");
module.exports = function (fileName) {
    fs.readFile(fileName, function(error,data){
        process.stdout.write(data.toString().trim());
    })
}