const particles = 35;

for (let i = 0; i < particles; i++) {
    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";

    particle.style.opacity =
        0.2 + Math.random() * 0.5;

    document.body.appendChild(particle);
}


const music = document.getElementById("ambient-music");
const musicToggle = document.getElementById("music-toggle");

music.volume = 0.15;

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicToggle.classList.add("playing");

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        musicToggle.setAttribute(
            "aria-label",
            "Mute ambient music"
        );

    } else {

        music.pause();

        musicToggle.classList.remove("playing");

        musicToggle.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

        musicToggle.setAttribute(
            "aria-label",
            "Play ambient music"
        );
    }

});