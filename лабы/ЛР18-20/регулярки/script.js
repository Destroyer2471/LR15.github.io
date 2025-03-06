// Проверка email с использованием регулярного выражения
function checkEmail() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const result = emailRegex.test(email);
    document.getElementById('emailResult').innerText = result ? 'Email корректный!' : 'Некорректный email!';
}

// Поиск слова в строке
function searchWord() {
    const text = document.getElementById('searchTextInput').value;
    const word = document.getElementById('searchInput').value;
    const regex = new RegExp(word, 'i'); // 'i' - флаг для игнорирования регистра
    const result = regex.test(text);
    document.getElementById('searchResult').innerText = result ? 'Слово найдено!' : 'Слово не найдено.';
}

// Замена слов в строке
function replaceWord() {
    const text = document.getElementById('replaceInput').value;
    const wordToReplace = document.getElementById('wordToReplace').value;
    const replacementWord = document.getElementById('replacementWord').value;
    const regex = new RegExp(wordToReplace, 'g'); // 'g' - флаг для глобальной замены
    const result = text.replace(regex, replacementWord);
    document.getElementById('replaceResult').innerText = result;
}

// Разделение строки по запятой
function splitString() {
    const text = document.getElementById('splitInput').value;
    const regex = /,s*/; // Разделение по запятой с возможным пробелом после
    const result = text.split(regex);
    document.getElementById('splitResult').innerText = result.join(', ');
}