let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        document.body.style.backgroundImage = "url('4.gif')";
        document.getElementById('message').innerText = 'Please, write number from 1 to 100.';
    } else if (userGuess === randomNumber) {
        document.body.style.backgroundImage = "url('1.gif')";
        document.getElementById('message').innerText = `Congratulations! You guess the number ${randomNumber} with ${attempts} steps.`;
    } else if (userGuess < randomNumber) {
        document.body.style.backgroundImage = "url('3.gif')";
        document.getElementById('message').innerText = 'Too low! Try again.';
    } else {
        document.body.style.backgroundImage = "url('2.gif')";
        document.getElementById('message').innerText = 'Too high! Try again.';
    }

    setTimeout(() => {
        document.body.style.backgroundImage = "none"; // Убираем фон
        document.body.style.backgroundColor = "white"; // Устанавливаем белый фон
    }, 5000);

}