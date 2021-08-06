const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let input = data.toString().trim();
  let splitInput = "";
  let cmd;
  let fileName;
  if (input.includes(" ")) {
    splitInput = input.split(" ");
    cmd = splitInput[0];
    fileName = splitInput[1];
    console.log("split Input", splitInput);
  } else {
    cmd = input;
  }

  pwd(cmd);
  ls(cmd);
  cat(cmd, fileName);
});
