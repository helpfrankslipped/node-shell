const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js')

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let input = data.toString().split(" ")
  if(input.includes(' ')){
    input = data
  }
  const cmd = input[0].toString().trim();
  const file = input[1]
  pwd(cmd);
  ls(cmd);
  cat(cmd, file);
});
