const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

window.addEventListener('load', () => {
    document.documentElement.style.scrollBehavior = 'auto';
    requestAnimationFrame(raf);
});

const video = document.querySelector('.hero video');
if (video) {
    video.addEventListener('loadeddata', () => {
        video.classList.add('loaded');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.querySelectorAll('footer p').forEach(p => {
        p.innerHTML = p.innerHTML.replace('2026', year);
    });
});
