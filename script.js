const revealedSections = document.querySelectorAll(".reveal");

const showAll = () => {
    for (const section of revealedSections) {
        section.classList.add("is-visible");
    }
};

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    showAll();
} else {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -6% 0px",
        },
    );

    for (const section of revealedSections) {
        observer.observe(section);
    }
}
