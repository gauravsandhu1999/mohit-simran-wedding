<<<<<<< HEAD

// Image Carousel
const carouselImages = [
    "assets/gallery/img1.JPG",
    "assets/gallery/img2.JPG",
    "assets/gallery/img3.JPG",
    "assets/gallery/img4.JPG",
    "assets/gallery/img5.JPG"
];

const carouselSlide = document.querySelector('.carousel-slide');
const indicatorsContainer = document.getElementById('carouselIndicators');

if (carouselSlide && indicatorsContainer) {
    // Initialize Carousel
    carouselImages.forEach((src, index) => {
        // Create Image
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        carouselSlide.appendChild(img);

        // Create Indicator
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'indicator active' : 'indicator';
        dot.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const totalSlides = carouselImages.length;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentSlide = index;
        const offset = -currentSlide * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;

        // Update indicators
        document.querySelectorAll('.indicator').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });

        resetTimer();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000); // 3 seconds
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Start Auto Play
    resetTimer();
}
=======

// Image Carousel
const carouselImages = [
    "assets/gallery/img1.JPG",
    "assets/gallery/img2.JPG",
    "assets/gallery/img3.JPG",
    "assets/gallery/img4.JPG",
    "assets/gallery/img5.JPG"
];

const carouselSlide = document.querySelector('.carousel-slide');
const indicatorsContainer = document.getElementById('carouselIndicators');

if (carouselSlide && indicatorsContainer) {
    // Initialize Carousel
    carouselImages.forEach((src, index) => {
        // Create Image
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        carouselSlide.appendChild(img);

        // Create Indicator
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'indicator active' : 'indicator';
        dot.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const totalSlides = carouselImages.length;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentSlide = index;
        const offset = -currentSlide * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;

        // Update indicators
        document.querySelectorAll('.indicator').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });

        resetTimer();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000); // 3 seconds
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Start Auto Play
    resetTimer();
}
>>>>>>> 22950adf6b97eb37f376c6b0f46c20dddfc06a3f
