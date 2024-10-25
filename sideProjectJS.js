function submitGuess() {
    const colors = ["red", "blue", "yellow", "green"];
    const userGuess = document.getElementById("userGuess").value.toLowerCase();
    const resultMessage = document.getElementById("resultMessage");
    const colorSquare = document.getElementById("colorSquare");

    if (!colors.includes(userGuess)) {
        resultMessage.textContent = "Invalid guess. Please enter red, blue, yellow, or green.";
        return;
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorSquare.style.backgroundColor = randomColor;
    colorSquare.textContent = randomColor;
    colorSquare.style.display = "flex";

    if (userGuess === randomColor) {
        resultMessage.textContent = "Congratulations! You guessed correctly.";
    } else {
        resultMessage.textContent = "Sorry, you guessed wrong. Try again!";
    }
}