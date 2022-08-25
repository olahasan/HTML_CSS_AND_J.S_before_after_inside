let before = document.getElementById("before");
let append = document.getElementById("append");
let after = document.getElementById("after");
// let img = document.getElementById("img");
let content = document.getElementById("content");
let container = document.getElementById("container");
console.log(before);
console.log(append);
console.log(after);
console.log(content);
console.log(container);

after.onclick = function () {
    container.after(content);
}

before.onclick = function () {
    container.before(content);
}

append.onclick = function () {
    container.append(content);
}

window.onload = function () {
    container.append(content);
}


