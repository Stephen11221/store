// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});

    // Hide loader after 3 seconds
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 3000);
// Image Slider Logic

let currentIndex = 0;
const slides = document.querySelectorAll("#slider > div");
const totalSlides = slides.length;

function updateSlide() {
    document.getElementById("slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

function prevSlide() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlide();
}

        // Auto-slide for Customer Reviews
        let index = 0;
        function slideReviews() {
            const slider = document.getElementById("reviewSlider");
            index = (index + 1) % 2; // Change number based on total reviews
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(slideReviews, 3000);
        // brand animation 
        document.addEventListener("DOMContentLoaded", function () {
            const text = "EXCLUSIVE PERFUME BRANDS";
            const animatedText = document.getElementById("animatedBrandText");
            let index = 0;
        
            function typeText() {
              if (index < text.length) {
                let span = document.createElement("span");
                span.textContent = text[index];
                span.style.opacity = "0";
                span.style.animation = "fadeInLetter 0.5s ease-out forwards";
                span.style.animationDelay = `${index * 0.1}s`; // Delay each letter
                animatedText.appendChild(span);
                index++;
                setTimeout(typeText, 50); // Adjust speed here
              }
            }
        
            typeText();
          });
 
          // brand  animal
          
        
    document.addEventListener("DOMContentLoaded", function () {
        // Brand Slider (Auto-scroll)
        new Swiper(".brandSwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            breakpoints: {
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 }
            }
        });

        // New Arrivals Slider
        new Swiper(".newArrivalSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    });
