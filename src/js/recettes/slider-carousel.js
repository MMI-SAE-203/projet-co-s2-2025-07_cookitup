// Gestion des sliders et carrousels
export function initMainSlider() {
    const slides = document.querySelectorAll(".slider-slide")
    const prevBtn = document.getElementById("prevSlide")
    const nextBtn = document.getElementById("nextSlide")
    const dots = document.querySelectorAll(".slider-dot")

    let currentSlide = 0

    if (slides.length === 0) return

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none"
        })

        dots.forEach((dot, i) => {
            dot.className = i === index ? "w-3 h-3 rounded-full bg-black" : "w-3 h-3 rounded-full bg-white opacity-60"
        })
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        showSlide(currentSlide)
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener("click", nextSlide)
    if (prevBtn) prevBtn.addEventListener("click", prevSlide)

    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index
            showSlide(currentSlide)
        })
    })

    // Auto-play (optionnel)
    setInterval(nextSlide, 5000)

    // Initialiser
    showSlide(0)
}

export function initFavorisCarousel() {
    const container = document.getElementById("favorisContainer")
    const prevBtn = document.getElementById("prevFavoris")
    const nextBtn = document.getElementById("nextFavoris")

    if (!container) return

    const scrollAmount = 220 // Largeur d'une carte + gap

    function scrollLeftFunc() {
        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        })
    }

    function scrollRightFunc() {
        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        })
    }

    if (prevBtn) prevBtn.addEventListener("click", scrollLeftFunc)
    if (nextBtn) nextBtn.addEventListener("click", scrollRightFunc)

    // Gestion du touch/swipe sur mobile
    let startX = 0
    let initialScrollLeft = 0

    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX - container.offsetLeft
        initialScrollLeft = container.scrollLeft
    })

    container.addEventListener("touchmove", (e) => {
        if (!startX) return
        e.preventDefault()
        const x = e.touches[0].pageX - container.offsetLeft
        const walk = (x - startX) * 2
        container.scrollLeft = initialScrollLeft - walk
    })

    container.addEventListener("touchend", () => {
        startX = 0
    })
}
  