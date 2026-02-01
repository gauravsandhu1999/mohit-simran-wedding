
// Bride & Groom
const brideName = "Simranjit Kaur";
const groomName = "Mohit Sandhu";

// Wedding Date (YYYY, MM - 1, DD, HH, MM)
const weddingDate = new Date(2026, 2, 1, 10, 0); // 1st March 10:00 AM

// Events
const events = [
    {
        title: "Path Shri Sukhmani Sahib",
        date: "28 Feb 2026",
        time: "10:00 AM - 12:00 PM",
        venue: "At Sandhu's Residence",
        map: "https://maps.app.goo.gl/doCAqEvPtYBTxfPU9"
    },
    {
        title: "Tea Party / Lunch",
        date: "28 Feb 2026",
        time: "12:30 PM",
        venue: "At Sandhu's Residence",
        map: "https://maps.app.goo.gl/doCAqEvPtYBTxfPU9"
    },
    {
        title: "Mehndi / Ladies Sangeet / Jaggo",
        date: "28 Feb 2026",
        time: "7:00 PM",
        venue: "At Sandhu's Residence",
        map: "https://maps.app.goo.gl/doCAqEvPtYBTxfPU9"
    },
    {
        title: "Dinner",
        date: "28 Feb 2026",
        time: "8:00 PM",
        venue: "At Sandhu's Residence",
        map: "https://maps.app.goo.gl/doCAqEvPtYBTxfPU9"
    },
    {
        title: "Departure of Barat",
        date: "1 March 2026",
        time: "10:00 AM",
        venue: "ARV Royal Castle Resort, Kainaur",
        map: "https://maps.google.com/?q=ARV+Royal+Castle+Resort+Kainaur+Punjab"
    },
];

// Background Music
const musicFile = "assets/audio/wedding_audio.mp3";


// Insert names
document.querySelectorAll(".bride-name").forEach(e => e.textContent = brideName);
document.querySelectorAll(".groom-name").forEach(e => e.textContent = groomName);

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 The Wedding Celebration has Begun!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Event Cards
const eventContainer = document.getElementById("event-list");
if (eventContainer) {
    // Get unique dates to preserve order
    const uniqueDates = [...new Set(events.map(e => e.date))];

    uniqueDates.forEach(date => {
        // Create Date Wrapper
        const dateWrapper = document.createElement("div");
        dateWrapper.className = "date-section";

        // Date Header
        const dateHeader = document.createElement("h3");
        dateHeader.className = "event-date-title";
        dateHeader.textContent = date;
        dateWrapper.appendChild(dateHeader);

        // Grid for cards of this date
        const cardsGrid = document.createElement("div");
        cardsGrid.className = "event-grid";

        // Filter and render events for this date
        events.filter(e => e.date === date).forEach(event => {
            const div = document.createElement("div");
            div.className = "event-card";
            div.innerHTML = `
                <h3>${event.title}</h3>
                <div class="event-detail">
                    <span class="event-label">Time:</span> 
                    <span class="event-value">${event.time}</span>
                </div>
                <div class="event-detail">
                    <span class="event-label">Venue:</span> 
                    <span class="event-value">${event.venue}</span>
                </div>
                <a href="${event.map}" target="_blank" class="location-btn">📍 View Location</a>
            `;
            cardsGrid.appendChild(div);
        });

        dateWrapper.appendChild(cardsGrid);
        eventContainer.appendChild(dateWrapper);
    });
}

// Background Music Control
const music = new Audio(musicFile);
music.loop = true;

const musicBtn = document.getElementById("music-btn");
if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent bubbling
        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸";
        } else {
            music.pause();
            musicBtn.textContent = "▶";
        }
    });

    // Try Auto-play
    // Try Auto-play
    music.volume = 1.0;
    const playPromise = music.play();

    const startAudio = () => {
        music.play().then(() => {
            musicBtn.textContent = "⏸";
            // Remove listeners once played
            ['click', 'touchstart', 'keydown'].forEach(event =>
                document.removeEventListener(event, startAudio)
            );
        }).catch(err => console.log("Audio play failed on interaction:", err));
    };

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            musicBtn.textContent = "⏸";
        }).catch(error => {
            console.log("Autoplay prevented. Waiting for interaction.");
            // Add listeners for any user interaction
            ['click', 'touchstart', 'keydown'].forEach(event =>
                document.addEventListener(event, startAudio, { once: true })
            );
        });
    }
}

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});



// Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".animate").forEach(el => observer.observe(el));
