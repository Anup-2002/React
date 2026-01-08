export let title="Greetings from JavaScript";
let msg="Hello, world with JavaScript!";
function Hello() {
    return msg;
}
function welcome() {
    return "welcome"+msg;
}
export default msg;
export { Hello, welcome };
//only one default export allowed and it doen't need to be in curly braces to import