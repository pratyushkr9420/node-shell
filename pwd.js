module.exports = function pwd() {
    let pwd = process.cwd();
    process.stdout.write(pwd);
}