document.addEventListener('DOMContentLoaded', function () {
    // Получаем все блоки компаний
    const companyBoxes = document.querySelectorAll('.company-box');

    // Задержка перед добавлением класса анимации
    const delay = 100; // в миллисекундах

    // Функция для добавления класса анимации
    function animateCompanyBoxes() {
        companyBoxes.forEach(function (box, index) {
            // Задержка для каждого блока компании
            setTimeout(function () {
                box.classList.add('animate-in');
            }, index * delay);
        });
    }

    // Вызываем функцию появления блоков после полной загрузки страницы
    animateCompanyBoxes();
});


