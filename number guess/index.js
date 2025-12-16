let attempts = 0;
let maxnum = 100;
let minnum = 50;

let answer = Math.floor(Math.random() * (maxnum - minnum)) + minnum;

let running = true;
let guess;

while (running) {
    guess = window.prompt(`guess a number between ${minnum} and ${maxnum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < minnum || guess > maxnum) {
        alert(`Please enter a number between ${minnum} and ${maxnum}.`);
    } else {
        attempts++;
        if (guess < answer) {
            alert("Too low! Try again.");
        } else if (guess > answer) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }
    }
}