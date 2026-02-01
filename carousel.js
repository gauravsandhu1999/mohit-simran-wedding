// Image Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = [

        "./assets/gallery/img1.JPG",
        "./assets/gallery/img2.JPG",
        "./assets/gallery/img3.JPG",
        "./assets/gallery/img4.JPG",
        "./assets/gallery/img5.JPG"
    ];

    const carouselSlide = document.querySelector('.carousel-slide');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Only proceed if carousel elements exist
    if (carouselSlide && indicatorsContainer && prevBtn && nextBtn) {

        // Clear existing content just in case
        carouselSlide.innerHTML = '';
        indicatorsContainer.innerHTML = '';

        // Initialize Carousel
        carouselImages.forEach((src, index) => {
            // Create Image
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery Image ${index + 1}`;
            // Handle image load error
            img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
                img.style.display = 'none';
            };
            carouselSlide.appendChild(img);

            // Create Indicator
            const dot = document.createElement('div');
            dot.className = index === 0 ? 'indicator active' : 'indicator';
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetTimer();
            });
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

        // Event Listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        // Start Auto Play
        resetTimer();
        console.log("Carousel initialized with " + totalSlides + " images.");
    } else {
        console.error("Carousel elements not found in DOM.");
    }
});
