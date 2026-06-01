/* ==========================
   FAQ ACCORDION
========================== */

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        document.querySelectorAll(".faq-content").forEach((item) => {

            if (item !== content) {
                item.style.display = "none";
            }

        });

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

    });

});


/* ==========================
   CALCULATOR VOLUME
========================== */

const volumeSlider = document.getElementById("volume");
const volumeValue = document.getElementById("volumeValue");

if (volumeSlider && volumeValue) {

    volumeValue.innerHTML =
        Number(volumeSlider.value).toLocaleString("id-ID") + " pcs";

    volumeSlider.addEventListener("input", () => {

        volumeValue.innerHTML =
            Number(volumeSlider.value).toLocaleString("id-ID") + " pcs";

    });

}


/* ==========================
   CALCULATOR ESTIMATION
========================== */

const summaryCard = document.querySelector(".summary-card");

if (volumeSlider && summaryCard) {

    volumeSlider.addEventListener("input", () => {

        const volume = Number(volumeSlider.value);

        let estimasi;

        if (volume <= 5000) {
            estimasi = "± 30 Hari";
        }

        else if (volume <= 20000) {
            estimasi = "± 45 Hari";
        }

        else {
            estimasi = "± 60 Hari";
        }

        let estimasiElement =
            document.getElementById("estimasiProduksi");

        if (!estimasiElement) {

            estimasiElement = document.createElement("p");

            estimasiElement.id = "estimasiProduksi";

            summaryCard.appendChild(estimasiElement);

        }

        estimasiElement.innerHTML =
            "<strong>Estimasi Produksi:</strong> " + estimasi;

    });

}


/* ==========================
   CONTACT FORM -> WHATSAPP
========================== */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs =
            contactForm.querySelectorAll("input");

        const nama =
            inputs[0].value;

        const whatsapp =
            inputs[1].value;

        const brand =
            inputs[2].value;

        const pesan =
            contactForm.querySelector("textarea").value;

        const text =
`Halo PT Minera Pangan Indonesia

Nama : ${nama}
WhatsApp : ${whatsapp}
Brand : ${brand}

Detail Kebutuhan :

${pesan}`;

        const nomorAdmin =
            "6281234567890";

        const url =
            `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}


/* ==========================
   NAVBAR ACTIVE SCROLL
========================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


/* ==========================
   COUNTER ANIMATION HERO
========================== */

function animateCounter(element, target) {

    let current = 0;

    const increment =
        target / 100;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        if (target >= 1000000) {

            element.innerText =
                (target / 1000000) + "M+";

        }

        else {

            element.innerText =
                Math.floor(current) + "+";

        }

    }, 15);

}


const statNumbers =
    document.querySelectorAll(".stats h3");

let animated = false;

window.addEventListener("scroll", () => {

    const stats =
        document.querySelector(".stats");

    if (!stats) return;

    const position =
        stats.getBoundingClientRect().top;

    if (
        position < window.innerHeight &&
        !animated
    ) {

        animated = true;

        animateCounter(statNumbers[0], 100);

        animateCounter(statNumbers[1], 15);

        statNumbers[2].innerText = "10M+";

    }

});


/* ==========================
   FLOATING WA BUTTON
========================== */

const floatingWa =
    document.querySelector(".floating-wa");

if (floatingWa) {

    floatingWa.addEventListener("click", (e) => {

        e.preventDefault();

        window.open(
            "https://wa.me/6281234567890",
            "_blank"
        );

    });

}


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .category-card, .quality-item, .vision-box"
    );

const reveal = () => {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 100;

        if (top < visible) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();