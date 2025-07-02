document.addEventListener("DOMContentLoaded", function () {

    // 🔹 Navbar Mobile
    const checkbox = document.getElementById('check');
    const navMob = document.querySelector('.nav-mob');

    checkbox.addEventListener('change', () => {
        navMob.classList.toggle('active', checkbox.checked);
    });

    document.querySelectorAll('.nav-mob a').forEach(link => {
        link.addEventListener('click', () => {
            navMob.classList.remove('active');
            checkbox.checked = false;
        });
    });

    // 🔹 Button Show More
    document.querySelector(".btn-show-more").addEventListener("click", function () {
        const hidden = document.querySelector(".hidden-gallery");
        const visible = window.getComputedStyle(hidden).display !== "none";

        if (visible) {
            hidden.style.display = "none";
            this.innerHTML = 'Показать больше <i class="bi bi-chevron-down"></i>';
        } else {
            hidden.style.display = "block";
            this.innerHTML = 'Скрыть <i class="bi bi-chevron-up"></i>';
        }
    });

    // 🔹 Modal Window
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".modal-close");
    const images = document.querySelectorAll(".img-block img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target === closeBtn) {
            modal.style.display = "none";
        }
    });

    // 🔹 Swiper video
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

    // 🔹 Play button video
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const video = wrapper.querySelector('.video-item');
        const playButton = wrapper.querySelector('.play-button');

        // Click to the Play button
        playButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Останавливаем всплытие клика, чтобы не сработало на родителе

            // Stopping the rest
            document.querySelectorAll('.video-item').forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.load(); // покажет постер снова
                    const btn = v.closest('.video-wrapper')?.querySelector('.play-button');
                    if (btn) btn.style.display = 'flex'; // Показываем кнопку Play у других видео
                }
            });

            // Launch the current video and hide the Play button
            video.play();
            playButton.style.display = 'none';
        });

        // Pause button video
        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
                playButton.style.display = 'flex'; // Showing Play button when it stopped
            }
        });

        // When it ends, show the Play button again
        video.addEventListener('ended', () => {
            playButton.style.display = 'flex';
        });
    });

    // 🔹 Accordion
    const items = document.querySelectorAll('.accordion .QA');

    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // Закрываем все остальные
                items.forEach(otherItem => {
                    const otherCheckbox = otherItem.querySelector('input[type="checkbox"]');
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });

    // 🔹 Form button-file
    const fileInput = document.getElementById('file');
    const fileNameDisplay = document.getElementById('file-name');

    fileInput.addEventListener('change', function () {
        if (this.files.length > 0) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = 'Файл не выбран';
        }
    });

    // 🔹 Form button-send
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