// method chaoning

const user = document.getElementById("username");
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");

let username = user.value;



btn.onclick = function () {
    username = user.value;

    function countCharacter(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ".") {
                count++;
            }
        }
        return count;
    }

    let dotCount = Number(countCharacter(username));

    if (dotCount == 0) {
        username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
        h1.textContent = username;
    }
    else if (dotCount == 1) {
        username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
        h1.textContent = username.replace(".", " ");
    } else if (dotCount == 2) {
        username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
        h1.textContent = username.replace(".", " ").replace(".", " ");
    } else if (dotCount > 2) {
        h1.textContent = "Please enter a valid name";
    }
    
}