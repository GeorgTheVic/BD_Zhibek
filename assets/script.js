

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 500,
        },
        loop: true,

    });

    const confetti = function (el) {
        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let titleWidth = el.offsetWidth;
        let confettiCountMultiplier = +el.dataset.confetti
        let totalConfetti = Math.floor(titleWidth * confettiCountMultiplier / 10);

        console.log(titleWidth, confettiCountMultiplier, totalConfetti)

        for (var i = 0; i <= totalConfetti; i++) {
            let confetto = "<i style='transform: translate3d(" + (randomNumber(1, 500) - 250) + "px, " + (randomNumber(1, 200) - 150) + "px, 0) rotate(" + randomNumber(1, 360) + "deg); background: hsla(" + randomNumber(1, 360) + ", 100%, 50%, 1);'></i>"
            el.insertAdjacentHTML("beforeend", confetto);
        }

        setTimeout(function () {
            let childConfetti = el.querySelectorAll('i');
            childConfetti.forEach(el => {
                el.remove();
            })
        }, 3000);
    }

    document.body.addEventListener('click', function (event) {
        event.preventDefault();

        const target = event.target;

        console.log(target);

        if (target.nodeName === 'BUTTON') {
            confetti(target);
        }
    })

    const clickSound = new Audio('assets/audio/sound_2.mp3');

    // Add an event listener to the button
    document.querySelector('.btn').addEventListener('click', () => {
        // Optional: Reset the sound to the beginning if it's already playing
        clickSound.currentTime = 0;
        clickSound.play();
    });
})
