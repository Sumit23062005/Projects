let username;
document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("mytext").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

let userid;
userid = window.prompt("What's your username?");
console.log(userid);


