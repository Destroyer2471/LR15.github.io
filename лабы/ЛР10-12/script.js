function calculateY(x) {
    try {
        var denominator = 4 * Math.pow(x, 2) - 1;

        if (denominator === 0) {
            throw new Error("Error: division on null!");
        }

        var y = (2 * Math.pow(x, 2)) / denominator;

        if (isNaN(y) || !isFinite(y)) {
            throw new Error("Error: result not a number!");
        }

        return y;
    } catch (error) {
        alert(error.message);
    }
}

// Пример использования функции
var x = 2;
var result = calculateY(x);
document.write("Result solving for x = " + x + ": " + result);