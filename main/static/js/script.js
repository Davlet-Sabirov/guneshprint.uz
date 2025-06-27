document.addEventListener("DOMContentLoaded", function () {

    // 🔹 JavaScript for the hidden images
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

    // 🔹 Form button
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