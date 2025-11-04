// Simple script for enhancing the gallery experience

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle video loading and autoplay
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Add loading animation for videos
        video.addEventListener('loadstart', function() {
            this.style.opacity = '0.5';
        });
        
        video.addEventListener('loadeddata', function() {
            this.style.opacity = '1';
        });

        // Ensure videos play on page load (some browsers may block autoplay)
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    });

    // Add fade-in effect for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe video frames for fade-in effect
    document.querySelectorAll('.video-frame').forEach(frame => {
        frame.style.opacity = '0';
        frame.style.transform = 'translateY(20px)';
        frame.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(frame);
    });

    // Log console message
    console.log('If Gaza Were Here - Online Gallery');
    console.log('Website loaded successfully');
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (!window.location.pathname.endsWith('index.html') && 
            window.location.pathname !== '/') {
            window.location.href = 'index.html';
        }
    }
    
    // Press 'A' to go to About
    if (e.key === 'a' || e.key === 'A') {
        if (!window.location.pathname.includes('about.html')) {
            window.location.href = 'about.html';
        }
    }
    
    // Press 'S' to go to Artist Statement
    if (e.key === 's' || e.key === 'S') {
        if (!window.location.pathname.includes('artist-statement.html')) {
            window.location.href = 'artist-statement.html';
        }
    }
});

