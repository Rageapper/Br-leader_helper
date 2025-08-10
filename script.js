document.addEventListener('DOMContentLoaded', function() {
    // Меню для мобильных устройств
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        const navList = document.querySelector('.nav-list');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Фильтрация гайдов
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Здесь можно добавить логику фильтрации
            const filter = this.textContent.toLowerCase();
            console.log(`Фильтр: ${filter}`);
        });
    });

    // Подсветка активного пункта меню
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });

    // Эффект при скролле для шапки
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});