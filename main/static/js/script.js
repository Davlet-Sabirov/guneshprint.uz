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
    const btn = document.querySelector(".btn-show-more");
    if (btn) {
        btn.addEventListener("click", function () {
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
    }

    // 🔹 Modal Window
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".modal-close");
    const images = document.querySelectorAll(".img-block img");

    if (modal && modalImg && closeBtn && images.length > 0) {
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
    }

    // 🔹 Swiper video
    if (typeof Swiper !== "undefined") {
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
            },
        });
    }

    // 🔹 Play button video
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const video = wrapper.querySelector('.video-item');
        const playButton = wrapper.querySelector('.play-button');

        // Click to the Play button
        playButton.addEventListener('click', function (event) {
            event.stopPropagation();

            // Stopping the rest
            document.querySelectorAll('.video-item').forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.load();
                    const btn = v.closest('.video-wrapper')?.querySelector('.play-button');
                    if (btn) btn.style.display = 'flex';
                }
            });

            video.play();
            playButton.style.display = 'none';
        });

        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
                playButton.style.display = 'flex';
            }
        });

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
        el.innerHTML = "Отправлено " + "(" + counter + ")";
        el.disabled = true;
        el.style.background = "green";
        el.style.color = "white";
        el.style.border = "1px solid green";
        el.style.cursor = "wait";
        alert("Заявка отправлена! Спасибо!");

        setTimeout(function () {
            el.innerHTML = "Отправить заявку";
            el.disabled = false;
            el.style.background = "none";
            el.style.color = "black";
            el.style.border = "1px solid black";
            el.style.cursor = "pointer";
        }, 5000);
    }

    const phoneInput = document.getElementById("phoneNumber");

    if (phoneInput) {
        const im = new Inputmask({
            mask: "+\\9\\9\\8(99)999-99-99",
            placeholder: "_",
            showMaskOnHover: false,
            showMaskOnFocus: true,
        });

        im.mask(phoneInput);

        phoneInput.addEventListener("focus", function () {
            const prefixLength = 5;
            setTimeout(() => {
                if (phoneInput.selectionStart < prefixLength) {
                    phoneInput.setSelectionRange(prefixLength, prefixLength);
                }
            }, 0);
        });
    }

    // 🔹 Telegram Noty
    const botToken = "7041464484:AAGPjCJCDXxX3BOpVF1ps9nFtOhQqROeTBw";
    const chatIds = [
        "2049973205", // Dave Codess
        "6185989"     // Shams
    ];

    document.getElementById("tg-form").addEventListener("submit", async function (e) {
        e.preventDefault();
        const form = e.target;
        const file = form.file.files[0];
        const btn = form.querySelector("button");

        const name = form.name.value;
        const phone = form.phone.value;
        const messageText = form.message.value;

        const message = `🔔 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Комментарий: ${messageText}`;

        try {
            for (let chatId of chatIds) {
                await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                    }),
                });

                if (file) {
                    const formData = new FormData();
                    formData.append("chat_id", chatId);
                    formData.append("document", file);

                    await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
                        method: "POST",
                        body: formData,
                    });
                }
            }

            sendButton(btn);
            form.reset();

        } catch (err) {
            alert("Ошибка при отправке. Попробуйте позже.");
            console.error(err);
        }
    });
});