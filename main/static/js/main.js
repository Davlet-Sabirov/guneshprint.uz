document.addEventListener("DOMContentLoaded", function () {

    // 🔹 Навигация по сайту Burger
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener("scroll", () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));

                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) { activeLink.classList.add('active') };
            };
        });
    });

    // 🔹 Закрытие бургера при клике на ссылку
    document.querySelectorAll("#offcanvasNavbar a").forEach(link => {
        link.addEventListener("click", () => {
            let offcanvasElement = document.getElementById("offcanvasNavbar");
            let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {offcanvas.hide()};
        });
    });

    // 🔹 Модальные окна с изображениями
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImg = document.getElementById("modalImg");

    document.querySelectorAll(".img-thumbnail").forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.show();
        });
    });

    // Закрытие модального окна по клику на него
    modalImg.addEventListener("click", function () {
        modal.hide();
    });

    // 🔹 JavaScript для показа скрытых изображений
    document.getElementById("showMoreBtn").addEventListener("click", function () {
        let hiddenGallery = document.querySelector(".hidden-gallery");
        if (hiddenGallery.classList.contains("d-none")) {
            hiddenGallery.classList.remove("d-none");
            this.innerHTML = 'Скрыть <i class="bi bi-chevron-up"></i>';
        } else {
            hiddenGallery.classList.add("d-none");
            this.innerHTML = 'Показать больше <i class="bi bi-chevron-down"></i>';
        }
    });

    // 🔹 Инициализация Swiper для видео
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });


    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const video = wrapper.querySelector('.video-item');
        const playButton = wrapper.querySelector('.play-button');

        // Клик на кнопку Play
        playButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Останавливаем всплытие клика, чтобы не сработало на родителе

            // Останавливаем все остальные видео
            document.querySelectorAll('.video-item').forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.load(); // покажет постер снова
                    const btn = v.closest('.video-wrapper')?.querySelector('.play-button');
                    if (btn) btn.style.display = 'flex'; // Показываем кнопку Play у других видео
                }
            });

            // Запускаем текущее видео и скрываем кнопку
            video.play();
            playButton.style.display = 'none';
        });

        // Клик на видео — пауза
        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
                playButton.style.display = 'flex'; // Показываем кнопку Play при паузе
            }
        });

        // При окончании видео показываем кнопку Play
        video.addEventListener('ended', () => {
            playButton.style.display = 'flex';
        });
    });

    // Form button Send
    var counter = 0;

    function sendButton(el) {
        counter++;
        el.innerHTML = "Отправлено! " + counter;
        el.disabled = true;
        el.style.background = "green";
        alert("Заявка отправлена! Спасибо!");

        setTimeout(function () {
            el.innerHTML = "Отправить";
            el.disabled = false;
            el.style.background = "#0d6efd";
        }, 5000);
    }

});