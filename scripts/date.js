document.addEventListener('DOMContentLoaded', function () {
    // Функция для форматирования даты
    function formatDate(date) {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric', weekday: 'long' };
        return new Date(date).toLocaleDateString('ru-RU', options);
    }

    // Получаем текущую дату и день недели
    const currentDate = new Date();
    const formattedCurrentDate = formatDate(currentDate);
    
    // Получаем дату последней модификации документа
    const lastModifiedDate = new Date(document.lastModified);
    const formattedLastModifiedDate = formatDate(lastModifiedDate);

    // Создаем элемент для вставки результата
    const resultContainer = document.getElementById('resultContainer');

    // Выводим результат в созданный элемент
    const result = `Сегодня: ${formattedCurrentDate}<br>Дата последней модификации: ${formattedLastModifiedDate}`;
    resultContainer.innerHTML = result;
});
