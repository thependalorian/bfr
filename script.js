// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(53, 66, 74, 0.9)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--primary-color)';
            header.style.boxShadow = 'none';
        }
    });

    // Feature hover effect
    const features = document.querySelectorAll('.feature-box');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'scale(1.05)';
        });
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'scale(1)';
        });
    });

    // Video slider functionality
    const videoContainer = document.querySelector('.video-container');
    const videoGrid = document.querySelector('.video-grid');
    let isDown = false;
    let startX;
    let scrollLeft;

    videoContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - videoContainer.offsetLeft;
        scrollLeft = videoContainer.scrollLeft;
    });

    videoContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    videoContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    videoContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - videoContainer.offsetLeft;
        const walk = (x - startX) * 2;
        videoContainer.scrollLeft = scrollLeft - walk;
    });

    // Team member info toggle
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        const info = member.querySelector('p');
        const link = member.querySelector('a');
        info.style.display = 'none';
        link.style.display = 'none';

        member.addEventListener('click', () => {
            info.style.display = info.style.display === 'none' ? 'block' : 'none';
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Simple form validation for demo purposes
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name && email) {
                alert('Thank you for your interest! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
