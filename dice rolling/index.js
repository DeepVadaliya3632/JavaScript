function diceRoll() {
    const NumDice = document.getElementById("NumDice").value;
    const result = document.getElementById("result");
    const diceImages = document.getElementById("diceImages");

    let values = [];
    let images = []; 

    for (let i = 0; i < NumDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice_Images/${value}.png" alt="dice${value}">`);
    }

    result.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}