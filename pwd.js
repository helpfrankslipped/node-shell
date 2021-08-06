function pwd(cmd) {
  if (cmd === "pwd") {
    process.stdout.write(__dirname);
  }
  process.stdout.write("\n prompt > ");
}

module.exports = pwd
