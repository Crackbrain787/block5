document.addEventListener('DOMContentLoaded', function() {
    // Swiper с пагинацией
    const swiper = new Swiper('.brands-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16, //отступ
        freeMode: true, //без фиксации
        watchOverflow: true, 
        //для точек
        pagination: {
            el: '.brands-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet', //любая точка
            bulletActiveClass: 'swiper-pagination-bullet-active', // активная точка
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            },
        },
        breakpoints: {
            768: {
                pagination: false //без точек
            }
        }
    });
    
    // для кнопки "Показать и Скрыть"
    const toggleButton = document.querySelector('.brands__toggle');
    const toggleText = document.querySelector('.brands__toggle-text');
    const toggleIcon = document.querySelector('.brands__toggle-icon');
    const hiddenItems = document.querySelectorAll('.brands__item.hidden');
    
    if (toggleButton && toggleText && toggleIcon && hiddenItems.length > 0) {
        toggleButton.addEventListener('click', function() {
            const isExpanded = toggleText.textContent.trim() === 'Скрыть';
            
            hiddenItems.forEach(item => {
                // Если было "Скрыть" (isExpanded=true), то добавляем класс hidden (чтобы скрылось)
                // Если было "Показать все", то убираем класс hidden (показываем)
                item.classList.toggle('hidden', isExpanded);
            });
            // перевернул кнопку при нажатии
            toggleText.textContent = isExpanded ? 'Показать все' : 'Скрыть';
            toggleIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
            
            // Обновляем Swiper после изменения количества слайдов
            setTimeout(() => {
                swiper.update();
                swiper.pagination.update();
                swiper.pagination.render();
            }, 300);
        });
    }
});