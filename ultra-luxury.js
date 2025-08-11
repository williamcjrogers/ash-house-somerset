// Ultra-Luxury JavaScript for Ash House Somerset
// Inspired by The Newt Somerset level of sophistication

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize preloader with estate crest animation
    initializePreloader();
    
    // Ultra-smooth navigation system
    initializeNavigation();
    
    // Hero masterpiece interactions
    initializeHeroExperience();
    
    // Sophisticated scroll animations
    initializeScrollAnimations();
    
    // Premium interaction effects
    initializeLuxuryInteractions();
    
    // Performance optimizations
    initializePerformanceOptimizations();
    
    console.log('🏛️ Ash House Somerset Ultra-Luxury Experience Initialized');
});

// Preloader with Estate Crest
function initializePreloader() {
    const preloader = document.querySelector('.preloader');
    const body = document.body;
    
    // Simulate estate loading experience
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        body.classList.remove('loading');
        
        // Trigger hero animations after preloader
        setTimeout(() => {
            triggerHeroAnimations();
        }, 300);
    }, 2500); // Luxury timing - not rushed
}

// Ultra Navigation System
function initializeNavigation() {
    const nav = document.getElementById('navigation');
    const reserveBtn = document.querySelector('.reserve-btn');
    let lastScrollY = window.scrollY;
    let scrollTimeout;
    
    // Sophisticated scroll behavior
    const handleNavScroll = throttle(() => {
        const currentScrollY = window.scrollY;
        
        // Add glass morphism effect on scroll
        if (currentScrollY > 100) {
            nav.classList.add('scrolled');
            nav.style.background = 'rgba(254, 254, 254, 0.90)';
            nav.style.borderBottomColor = 'rgba(212, 207, 192, 0.3)';
        } else {
            nav.classList.remove('scrolled');
            nav.style.background = 'rgba(254, 254, 254, 0.95)';
            nav.style.borderBottomColor = 'rgba(212, 207, 192, 0.2)';
        }
        
        // Elegant hide/show behavior
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }, 16); // 60fps throttling
    
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    
    // Luxury hover effects for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            
            const linkText = this.querySelector('.link-text');
            const linkSubtitle = this.querySelector('.link-subtitle');
            
            if (linkText) linkText.style.color = 'var(--estate-gold)';
            if (linkSubtitle) linkSubtitle.style.color = 'var(--estate-copper)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const linkText = this.querySelector('.link-text');
            const linkSubtitle = this.querySelector('.link-subtitle');
            
            if (linkText) linkText.style.color = 'var(--estate-charcoal)';
            if (linkSubtitle) linkSubtitle.style.color = 'var(--estate-sage)';
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 40;
                
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
}

// Hero Masterpiece Experience
function initializeHeroExperience() {
    const heroImage = document.querySelector('.hero-primary-image');
    const titleWords = document.querySelectorAll('.title-word');
    const pillarCards = document.querySelectorAll('.pillar-card-mini');
    const scrollIndicator = document.querySelector('.scroll-indicator-luxury');
    
    // Cinematic parallax effect
    let ticking = false;
    const parallaxHero = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.4;
                
                if (heroImage) {
                    heroImage.style.transform = `translate3d(0, ${rate}px, 0) scale(1.05)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', parallaxHero, { passive: true });
    
    // Pillar card interactions
    pillarCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.18)';
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.borderColor = 'rgba(184, 151, 90, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });
        
        // Add staggered entrance animation
        setTimeout(() => {
            card.style.animation = `pillarCardReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`;
        }, 800 + (index * 200));
    });
    
    // Scroll indicator interaction
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const estateStory = document.querySelector('#estate-story');
            if (estateStory) {
                const navHeight = document.querySelector('.ultra-nav').offsetHeight;
                const targetPosition = estateStory.offsetTop - navHeight;
                smoothScrollTo(targetPosition, 1200);
            }
        });
    }
}

// Trigger hero animations after preloader
function triggerHeroAnimations() {
    const titleWords = document.querySelectorAll('.title-word');
    const heroContent = document.querySelector('.hero-content-wrapper');
    
    if (heroContent) {
        heroContent.style.animation = 'heroContentReveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) both';
    }
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.animation = `titleWordReveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) both`;
        }, 200 + (index * 200));
    });
}

// Sophisticated Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: [0.1, 0.3, 0.6],
        rootMargin: '0px 0px -80px 0px'
    };
    
    // Intersection Observer for luxury reveals
    const luxuryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fadeInUp';
                const delay = element.dataset.delay || '0';
                
                setTimeout(() => {
                    element.classList.add('animate-in');
                    element.style.animation = `${animationType} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`;
                }, parseInt(delay));
                
                luxuryObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.narrative-introduction, .heritage-composition, .experience-card-masterpiece, .location-markers, .footer-brand-section'
    );
    
    animatedElements.forEach(element => {
        luxuryObserver.observe(element);
    });
    
    // Heritage statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const finalValue = number.textContent;
                animateNumber(number, 0, parseInt(finalValue) || finalValue, 2000);
                statsObserver.unobserve(number);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Premium Interaction Effects
function initializeLuxuryInteractions() {
    // Experience cards luxury interactions
    const experienceCards = document.querySelectorAll('.experience-card-masterpiece');
    
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 30px 80px rgba(26, 26, 26, 0.2)';
            
            // Image zoom effect
            const cardImage = this.querySelector('.card-image');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.08)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 50px rgba(26, 26, 26, 0.08)';
            
            const cardImage = this.querySelector('.card-image');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.05)';
            }
        });
    });
    
    // Luxury button interactions
    const luxuryButtons = document.querySelectorAll('.btn-primary-luxury, .btn-secondary-luxury');
    
    luxuryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.btn-arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.btn-arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
        
        // Ripple effect on click
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
        });
    });
    
    // Location markers interaction
    const markers = document.querySelectorAll('.marker-item');
    markers.forEach((marker, index) => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.borderColor = 'var(--estate-gold)';
            this.style.background = 'rgba(184, 151, 90, 0.05)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            this.style.background = 'transparent';
        });
        
        // Staggered entrance animation
        setTimeout(() => {
            marker.style.animation = 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both';
        }, index * 200);
    });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Image lazy loading with intersection observer
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    const criticalImages = [
        'images/Outdoor dining.jpeg',
        'images/manor-exterior-moody-evening.jpg',
        'images/Sauna.jpeg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, 250);
    });
}

// Utility Functions

// Smooth scroll function
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();
    
    function animation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutCubic = progress < 0.5 
            ? 4 * progress * progress * progress 
            : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
        
        window.scrollTo(0, start + distance * easeInOutCubic);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Number animation function
function animateNumber(element, start, end, duration) {
    const isNumberValue = !isNaN(end);
    const increment = isNumberValue ? (end - start) / (duration / 16) : 0;
    let current = start;
    
    const timer = setInterval(() => {
        if (isNumberValue) {
            current += increment;
            if (current >= end) {
                element.textContent = end;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        } else {
            element.textContent = end;
            clearInterval(timer);
        }
    }, 16);
}

// Ripple effect for buttons
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        background-color: rgba(255, 255, 255, 0.3);
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Handle window resize
function handleResize() {
    // Recalculate any position-dependent elements
    const nav = document.querySelector('.ultra-nav');
    if (nav) {
        nav.style.transform = 'translateY(0)'; // Reset nav position
    }
}

// Custom CSS animations via JavaScript
const customAnimations = `
@keyframes pillarCardReveal {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.loaded {
    opacity: 1 !important;
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

img[data-src] {
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
`;

// Inject custom animations
const styleSheet = document.createElement('style');
styleSheet.textContent = customAnimations;
document.head.appendChild(styleSheet);

// Estate ambient sound (optional luxury touch)
function initializeAmbientExperience() {
    // Could add subtle ambient countryside sounds
    // This would be loaded only on user interaction to respect autoplay policies
    let ambientInitialized = false;
    
    const initAmbient = () => {
        if (!ambientInitialized) {
            // Future: Add subtle ambient audio
            ambientInitialized = true;
            document.removeEventListener('click', initAmbient);
        }
    };
    
    document.addEventListener('click', initAmbient, { once: true });
}

// Initialize ambient experience
initializeAmbientExperience();