//Скрипт выводит сообщение о текущем положении прокрутки.
const scrollContainer = document.getElementById('scrollContainer');
const scrollMessage = document.createElement('div');
scrollMessage.textContent = "Keep scrolling!";
scrollContainer.appendChild(scrollMessage);

scrollContainer.addEventListener('scroll', function() {
    const scrollPosition = scrollContainer.scrollTop;
    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    
    if (scrollPosition === 0) {
        scrollMessage.textContent = "That's a Heaven !";
    } else if (scrollPosition >= maxScroll) {
        scrollMessage.textContent = "and that's a Hell";
    } else {
        scrollMessage.textContent = `Mouse at ${scrollPosition}px`;
    }
});
