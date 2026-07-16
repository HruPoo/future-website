/* ======================================================
   FOR MY LOVE ❤️
   script.js

   Part 3.1
   Initialization + Loading Screen
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==================================
       DOM Elements
    ================================== */

    const loadingScreen = document.getElementById("loading-screen");
    const heartContainer = document.getElementById("heart-container");

    /* ==================================
       Loading Screen
    ================================== */

    function hideLoadingScreen() {

        if (!loadingScreen) return;

        loadingScreen.classList.add("hidden");

        setTimeout(() => {

            loadingScreen.remove();

        }, 1000);

    }

    /* ==================================
       Tap Anywhere
    ================================== */

    if (loadingScreen) {

        loadingScreen.addEventListener("click", () => {

            const heart = loadingScreen.querySelector(".big-heart");

            if (heart) {

                heart.classList.add("loading-expand");

            }

            setTimeout(hideLoadingScreen, 900);

        });

    }

    /* ==================================
       Initialize Effects
    ================================== */

    createFloatingHearts(35);
    createSparkles(45);
    createPetals(18);

});

/* ======================================================
   Part 3.2
   Hearts
   Sparkles
   Petals
======================================================*/

/* ==================================
   Floating Hearts
================================== */

function createFloatingHearts(amount) {

    const container = document.getElementById("heart-container");

    if (!container) return;

    const sizes = [
        "heart-xs",
        "heart-sm",
        "heart-md",
        "heart-lg",
        "heart-xl"
    ];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.classList.add(
            "floating-heart",
            sizes[Math.floor(Math.random() * sizes.length)]
        );

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            12 + Math.random() * 12 + "s";

        heart.style.animationDelay =
            Math.random() * 10 + "s";

        heart.style.opacity =
            0.08 + Math.random() * 0.25;

        heart.style.filter =
            `blur(${Math.random() * 1.2}px)`;

        container.appendChild(heart);

    }

}

/* ==================================
   Sparkles
================================== */

function createSparkles(amount) {

    const container = document.getElementById("heart-container");

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * 100 + "%";

        sparkle.style.top = Math.random() * 100 + "%";

        sparkle.style.animationDuration =
            6 + Math.random() * 6 + "s";

        sparkle.style.animationDelay =
            Math.random() * 5 + "s";

        sparkle.style.transform =
            `scale(${0.5 + Math.random()})`;

        container.appendChild(sparkle);

    }

}

/* ==================================
   Flower Petals
================================== */

function createPetals(amount) {

    const container = document.getElementById("heart-container");

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDuration =
            15 + Math.random() * 8 + "s";

        petal.style.animationDelay =
            Math.random() * 8 + "s";

        petal.style.opacity =
            0.15 + Math.random() * 0.25;

        petal.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(petal);

    }

}

/* ==================================
   Ambient Glow Particles
================================== */

(function createGlowParticles() {

    const container = document.getElementById("heart-container");

    if (!container) return;

    for (let i = 0; i < 6; i++) {

        const glow = document.createElement("div");

        glow.className = "glow-particle";

        glow.style.left =
            Math.random() * 100 + "%";

        glow.style.top =
            Math.random() * 100 + "%";

        glow.style.animationDuration =
            15 + Math.random() * 10 + "s";

        glow.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(glow);

    }

})();

/* ==================================
   Decorative Stars
================================== */

(function createStars() {

    const container = document.getElementById("heart-container");

    if (!container) return;

    const stars = ["✦", "✧", "·"];

    for (let i = 0; i < 35; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.innerHTML =
            stars[Math.floor(Math.random() * stars.length)];

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            2 + Math.random() * 4 + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(star);

    }

})();

/* ======================================================
   Part 3.3
   Hero + Conversation Animation
======================================================*/

/* ==================================
   Hero Animation
================================== */

function animateHero() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const title = hero.querySelector("h1");
    const subtitle = hero.querySelector(".hero-subtitle");
    const smallText = hero.querySelector(".small-text");
    const scroll = hero.querySelector(".scroll-indicator");

    if (smallText) {

        smallText.style.opacity = "0";
        smallText.style.transform = "translateY(25px)";

        setTimeout(() => {

            smallText.style.transition = "all .8s ease";
            smallText.style.opacity = "1";
            smallText.style.transform = "translateY(0)";

        }, 300);

    }

    if (title) {

        title.style.opacity = "0";
        title.style.transform = "translateY(40px)";

        setTimeout(() => {

            title.style.transition = "all 1s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";

        }, 900);

    }

    if (subtitle) {

        subtitle.style.opacity = "0";
        subtitle.style.transform = "translateY(30px)";

        setTimeout(() => {

            subtitle.style.transition = "all .9s ease";
            subtitle.style.opacity = "1";
            subtitle.style.transform = "translateY(0)";

        }, 1700);

    }

    if (scroll) {

        scroll.style.opacity = "0";

        setTimeout(() => {

            scroll.style.transition = "opacity 1s ease";
            scroll.style.opacity = "1";

        }, 2500);

    }

}

/* ==================================
   Conversation Animation
================================== */

function animateConversation() {

    const messages = document.querySelectorAll(".message");

    if (!messages.length) return;

    messages.forEach(msg => {

        msg.classList.remove("show");

    });

    messages.forEach((msg, index) => {

        setTimeout(() => {

            msg.classList.add("show");

        }, index * 1400);

    });

}

/* ==================================
   Scroll Observer
================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        /* Conversation */

        if (entry.target.classList.contains("apology")) {

            animateConversation();

        }

        /* Fade Utilities */

        entry.target
            .querySelectorAll(".fade-up,.scale-in")
            .forEach(el => {

                el.classList.add("show");

            });

    });

}, {

    threshold: 0.35

});

/* ==================================
   Observe Sections
================================== */

window.addEventListener("DOMContentLoaded", () => {

    animateHero();

    const sections = document.querySelectorAll(

        ".apology, .letter-section, .ending"

    );

    sections.forEach(section => {

        observer.observe(section);

    });

});

/* ======================================================
   Part 3.4
   Letter Animation + Photos + Signature
======================================================*/

/* ==================================
   Letter Animation
================================== */

let letterPlayed = false;

function animateLetter() {

    if (letterPlayed) return;

    letterPlayed = true;

    const intro = document.querySelector(".letter-intro");
    const letter = document.querySelector(".letter");

    if (intro) {

        intro.style.transition = "opacity .8s ease";

        setTimeout(() => {

            intro.style.opacity = ".45";

        }, 1200);

    }

    if (letter) {

        setTimeout(() => {

            letter.classList.add("open");

        }, 700);

    }

    revealLetterContent();

}

/* ==================================
   Reveal Letter Content
================================== */

function revealLetterContent() {

    const elements = document.querySelectorAll(

        ".letter-content > *"

    );

    elements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("visible");

        }, 1800 + index * 700);

    });

    setTimeout(drawSignature, 6500);

    setTimeout(showPhotos, 2800);

}

/* ==================================
   Signature
================================== */

function drawSignature() {

    const signature = document.querySelector(".signature");

    if (!signature) return;

    signature.classList.add("draw");

}

/* ==================================
   Photos
================================== */

function showPhotos() {

    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, index * 350);

    });

}

/* ==================================
   Photo Interaction
================================== */

document.querySelectorAll(".photo").forEach(photo => {

    photo.addEventListener("click", () => {

        photo.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 350,

            easing: "ease-out"

        });

    });

});

/* ==================================
   Intro Heart
================================== */

(function animateIntroHeart() {

    const heart = document.querySelector(".intro-heart");

    if (!heart) return;

    setInterval(() => {

        heart.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.25)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 700,

            easing: "ease-in-out"

        });

    }, 2500);

})();

/* ==================================
   Observer
================================== */

const letterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateLetter();

            }

        });

    },

    {

        threshold: 0.45

    }

);

const letterSection = document.querySelector(".letter-section");

if (letterSection) {

    letterObserver.observe(letterSection);

}

/* ======================================================
   Part 3.5
   Ending Animation + Final Observer + Utilities
======================================================*/

/* ==================================
   Ending Animation
================================== */

let endingPlayed = false;

function animateEnding() {

    if (endingPlayed) return;

    endingPlayed = true;

    const heart = document.querySelector(".heart-final");
    const title = document.querySelector(".ending h2");
    const subtitle = document.querySelector(".ending p");

    if (heart) {

        setTimeout(() => {

            heart.classList.add("show");

        }, 400);

    }

    if (title) {

        setTimeout(() => {

            title.classList.add("show");

        }, 1500);

    }

    if (subtitle) {

        setTimeout(() => {

            subtitle.classList.add("show");

        }, 2600);

    }

}

/* ==================================
   Ending Observer
================================== */

const endingObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateEnding();

            }

        });

    },

    {

        threshold: 0.45

    }

);

const endingSection = document.querySelector(".ending");

if (endingSection) {

    endingObserver.observe(endingSection);

}

/* ==================================
   Floating Footer Hearts
================================== */

function createFooterHearts() {

    const footer = document.querySelector("footer");

    if (!footer) return;

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.className = "footer-floating-heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            8 + Math.random() * 8 + "s";

        heart.style.animationDelay =
            Math.random() * 8 + "s";

        heart.style.fontSize =
            12 + Math.random() * 12 + "px";

        footer.appendChild(heart);

    }

}

createFooterHearts();

/* ==================================
   Floating Ending Hearts
================================== */

function createEndingHearts() {

    const ending = document.querySelector(".ending");

    if (!ending) return;

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.className = "ending-heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.bottom = "-20px";

        heart.style.animationDuration =
            10 + Math.random() * 6 + "s";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        ending.appendChild(heart);

    }

}

createEndingHearts();

/* ==================================
   Random Sparkles
================================== */

function createEndingSparkles() {

    const ending = document.querySelector(".ending");

    if (!ending) return;

    for (let i = 0; i < 25; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "ending-sparkle";

        sparkle.style.left = Math.random() * 100 + "%";

        sparkle.style.top = Math.random() * 100 + "%";

        sparkle.style.animationDuration =
            4 + Math.random() * 4 + "s";

        sparkle.style.animationDelay =
            Math.random() * 4 + "s";

        ending.appendChild(sparkle);

    }

}

createEndingSparkles();

/* ==================================
   Gentle Scroll Fade
================================== */

const fadeObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.2

    }

);

document.querySelectorAll(".fade-up, .scale-in").forEach(el => {

    fadeObserver.observe(el);

});

/* ==================================
   Tiny Performance Improvement
================================== */

window.addEventListener(

    "resize",

    () => {

        document.body.style.setProperty(

            "--vh",

            window.innerHeight * 0.01 + "px"

        );

    }

);

window.dispatchEvent(new Event("resize"));

/* ==================================
   Console Message ❤️
================================== */

console.log(

`❤️

If you're reading this...

I hope she smiled.

Every line here
was written with love.

`
);