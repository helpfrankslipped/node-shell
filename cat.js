const fs = require('fs')

function cat(cmd, fileName) {
  if(cmd === 'cat'){
    fs.readFile(`${process.cwd()}.${fileName}`, (err, data) => {
      if (err) {
        throw err;
        } else {
          console.log(data)
          }
    }
  )}
}

module.exports = cat;
