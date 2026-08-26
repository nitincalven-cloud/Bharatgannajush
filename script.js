// =========================================
// BHARAT GANNA JUICE CENTER
// PROFESSIONAL JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------
    // Smooth scrolling
    // -------------------------------------

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // -------------------------------------
    // Scroll reveal animation
    // -------------------------------------

    const revealElements = document.querySelectorAll(
        ".menu-card, .why-card, .review-card, .contact-card, .gallery-item, .point"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // -------------------------------------
    // Active navigation link
    // -------------------------------------

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    // -------------------------------------
    // Order button confirmation
    // -------------------------------------

    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = this.closest(".menu-card");

            if (!card) {
                return;
            }

            const productName =
                card.querySelector("h3")?.textContent.trim() ||
                "Juice";

            const price =
                card.querySelector(".price")?.textContent.trim() ||
                "";

            const phoneNumber = "919711071954";

            const message =
                "नमस्ते भारत गन्ना जूस सेंटर, मुझे " +
                productName +
                " चाहिए। कीमत: " +
                price;

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


    // -------------------------------------
    // Contact WhatsApp button
    // -------------------------------------

    const whatsappButtons =
        document.querySelectorAll(".whatsapp");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message =
                "नमस्ते, मुझे भारत गन्ना जूस सेंटर के बारे में जानकारी चाहिए।";

            const url =
                "https://wa.me/919711071954?text=" +
                encodeURIComponent(message);

            this.href = url;

        });

    });


    // -------------------------------------
    // Gallery click effect
    // -------------------------------------

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function (item) {

        item.addEventListener("click", function () {

            this.classList.toggle("gallery-selected");

        });

    });


    // -------------------------------------
    // Back to top button
    // -------------------------------------

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.id = "backToTop";

    document.body.appendChild(backToTop);


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    // -------------------------------------
    // Current year in footer
    // -------------------------------------

    const yearElement =
        document.querySelector(".footer-bottom p");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.innerHTML =
            "© " +
            currentYear +
            " भारत गन्ना जूस सेंटर. All Rights Reserved.";

    }


    // -------------------------------------
    // Console message
    // -------------------------------------

    console.log(
        "भारत गन्ना जूस सेंटर वेबसाइट successfully loaded!"
    );

});
