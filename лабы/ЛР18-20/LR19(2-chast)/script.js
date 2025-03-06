document.getElementById('userDataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Сохранение данных в Cookie
    document.cookie = fullName = ${ encodeURIComponent(fullName) }; path = /; max-age=3600;
    document.cookie = email = ${ encodeURIComponent(email) }; path = /; max-age=3600;
    document.cookie = birthDate = ${ encodeURIComponent(birthDate) }; path = /; max-age=3600;
    document.cookie = birthPlace = ${ encodeURIComponent(birthPlace) }; path = /; max-age=3600;
    document.cookie = hobbies = ${ encodeURIComponent(hobbies) }; path = /; max-age=3600;

    alert('Данные сохранены в Cookie!');
});

document.getElementById('clearCookies').addEventListener('click', function () {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
    alert('Cookie очищены!');
});

// Функция для получения данных из Cookie
function getCookies() {
    const cookies = {};
    document.cookie.split(";").forEach(function (cookie) {
        const [name, value] = cookie.split("=");
        cookies[name.trim()] = decodeURIComponent(value);
    });
    return cookies;
}

// Пример использования функции получения данных из Cookie
console.log(getCookies());
