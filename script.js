// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section > .container, .hero-content, .hero-image');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// Treatment cards hover effects
document.addEventListener('DOMContentLoaded', function() {
    const treatmentCards = document.querySelectorAll('.treatment-card');
    treatmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Gallery lightbox effect (simple version)
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Here you could implement a lightbox modal
            // For now, we'll just add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Add loading states
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading state after everything is loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Utility function to add elegant entrance animations
function addEntranceAnimation(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    observer.observe(element);
}

// Apply entrance animations to key elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.treatment-card, .feature, .contact-item, .gallery-item'
    );
    
    animatedElements.forEach((element, index) => {
        addEntranceAnimation(element, index * 0.1);
    });
});

// Wendy Notes Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const notesForm = document.querySelector('.notes-form');
    if (notesForm) {
        notesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const section = document.getElementById('section-select').value;
            const request = document.getElementById('request-text').value;
            const priority = document.getElementById('priority-select').value;
            
            if (!section || !request.trim()) {
                alert('Please select a section and enter your request.');
                return;
            }
            
            // For now, just show an alert - in production you'd send this to a server
            alert(`Request submitted!\\n\\nSection: ${section}\\nPriority: ${priority}\\nRequest: ${request.substring(0, 100)}${request.length > 100 ? '...' : ''}`);
            
            // Clear the form
            notesForm.reset();
        });
    }

    // Photo Upload Handler
    const photoUpload = document.getElementById('photo-upload');
    const photoGrid = document.getElementById('photo-grid');
    const uploadZone = document.querySelector('.upload-zone');
    let uploadedPhotos = [];
    let selectedPhoto = null;

    // Handle drag and drop
    if (uploadZone) {
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = 'var(--golden-honey)';
            uploadZone.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        uploadZone.addEventListener('dragleave', () => {
            uploadZone.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            uploadZone.style.background = 'transparent';
        });
        
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            uploadZone.style.background = 'transparent';
            
            const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
            handlePhotoUpload(files);
        });
    }

    // Handle file input
    if (photoUpload) {
        photoUpload.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            handlePhotoUpload(files);
        });
    }

    function handlePhotoUpload(files) {
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const photoData = {
                    id: Date.now() + Math.random(),
                    name: file.name,
                    src: e.target.result,
                    assigned: null
                };
                
                uploadedPhotos.push(photoData);
                displayPhotos();
            };
            reader.readAsDataURL(file);
        });
    }

    function displayPhotos() {
        if (!photoGrid) return;
        
        if (uploadedPhotos.length === 0) {
            photoGrid.innerHTML = `
                <div class="photo-placeholder">
                    <p>No photos uploaded yet</p>
                    <p class="placeholder-hint">Upload images to manage your gallery</p>
                </div>
            `;
            return;
        }
        
        photoGrid.innerHTML = uploadedPhotos.map(photo => `
            <div class="photo-item ${selectedPhoto === photo.id ? 'selected' : ''}" data-photo-id="${photo.id}">
                <img src="${photo.src}" alt="${photo.name}" class="gallery-photo">
                <div class="photo-info">
                    <p class="photo-name">${photo.name}</p>
                    ${photo.assigned ? `<p class="assigned-to">→ ${photo.assigned}</p>` : ''}
                </div>
            </div>
        `).join('');
        
        // Add click handlers for photo selection
        document.querySelectorAll('.photo-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.photo-item').forEach(p => p.classList.remove('selected'));
                item.classList.add('selected');
                selectedPhoto = item.dataset.photoId;
            });
        });
    }

    // Photo assignment handler
    const assignButton = document.getElementById('assign-photo');
    if (assignButton) {
        assignButton.addEventListener('click', () => {
            const sectionSelect = document.getElementById('photo-section-select');
            const selectedSection = sectionSelect.value;
            
            if (!selectedPhoto) {
                alert('Please select a photo first.');
                return;
            }
            
            if (!selectedSection) {
                alert('Please select a section.');
                return;
            }
            
            // Update the photo assignment
            const photo = uploadedPhotos.find(p => p.id == selectedPhoto);
            if (photo) {
                photo.assigned = selectedSection;
                displayPhotos();
                alert(`Photo "${photo.name}" assigned to ${selectedSection} section!`);
                selectedPhoto = null;
                sectionSelect.value = '';
            }
        });
    }
});

// Booking Calendar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let selectedDates = [];
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Sample booked dates (in a real app, this would come from your backend)
    const bookedDates = [
        '2025-01-15', '2025-01-16', '2025-01-17', // Sample wedding weekend
        '2025-02-14', '2025-02-15', // Valentine's weekend
        '2025-03-20', '2025-03-21', '2025-03-22', // Sample retreat
    ];
    
    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const calendarGrid = document.querySelector('.calendar-grid');
        const currentMonthElement = document.getElementById('current-month');
        
        // Update month/year display
        if (currentMonthElement) {
            currentMonthElement.textContent = `${monthNames[month]} ${year}`;
        }
        
        if (!calendarGrid) return;
        
        // Clear existing calendar days (keep headers)
        const existingDays = calendarGrid.querySelectorAll('.calendar-day');
        existingDays.forEach(day => day.remove());
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayDate = new Date(year, month, day);
            
            // Check if date is in the past
            if (dayDate < currentDate.setHours(0, 0, 0, 0)) {
                dayElement.classList.add('past');
                dayElement.style.opacity = '0.3';
                dayElement.style.cursor = 'not-allowed';
            }
            // Check if date is booked
            else if (bookedDates.includes(dateString)) {
                dayElement.classList.add('booked');
            }
            // Available dates
            else {
                dayElement.classList.add('available');
                dayElement.addEventListener('click', () => selectDate(dateString, dayElement));
            }
            
            // Check if date is already selected
            if (selectedDates.includes(dateString)) {
                dayElement.classList.add('selected');
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }
    
    function selectDate(dateString, dayElement) {
        if (selectedDates.length === 0) {
            // First date selection (check-in)
            selectedDates.push(dateString);
            dayElement.classList.add('selected');
            const checkinInput = document.getElementById('check-in');
            if (checkinInput) checkinInput.value = dateString;
        } else if (selectedDates.length === 1) {
            // Second date selection (check-out)
            const checkInDate = new Date(selectedDates[0]);
            const clickedDate = new Date(dateString);
            
            if (clickedDate > checkInDate) {
                selectedDates.push(dateString);
                dayElement.classList.add('selected');
                const checkoutInput = document.getElementById('check-out');
                if (checkoutInput) checkoutInput.value = dateString;
                
                // Highlight dates in between
                highlightDateRange();
            } else {
                // If clicked date is before check-in, reset and start over
                clearSelectedDates();
                selectedDates.push(dateString);
                dayElement.classList.add('selected');
                const checkinInput = document.getElementById('check-in');
                const checkoutInput = document.getElementById('check-out');
                if (checkinInput) checkinInput.value = dateString;
                if (checkoutInput) checkoutInput.value = '';
            }
        } else {
            // Reset selection
            clearSelectedDates();
            selectedDates.push(dateString);
            dayElement.classList.add('selected');
            const checkinInput = document.getElementById('check-in');
            const checkoutInput = document.getElementById('check-out');
            if (checkinInput) checkinInput.value = dateString;
            if (checkoutInput) checkoutInput.value = '';
        }
    }
    
    function clearSelectedDates() {
        selectedDates = [];
        document.querySelectorAll('.calendar-day.selected').forEach(day => {
            day.classList.remove('selected');
        });
    }
    
    function highlightDateRange() {
        if (selectedDates.length === 2) {
            const startDate = new Date(selectedDates[0]);
            const endDate = new Date(selectedDates[1]);
            
            document.querySelectorAll('.calendar-day.available').forEach(day => {
                const dayText = day.textContent;
                if (dayText && dayText.trim()) {
                    const dayDate = new Date(currentYear, currentMonth, parseInt(dayText));
                    if (dayDate >= startDate && dayDate <= endDate) {
                        day.classList.add('selected');
                    }
                }
            });
        }
    }
    
    // Navigation buttons
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        });
    }
    
    // Booking form submission
    const bookingForm = document.querySelector('.booking-form-content');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const experienceInput = document.getElementById('experience-type');
            const checkinInput = document.getElementById('check-in');
            const checkoutInput = document.getElementById('check-out');
            const guestsInput = document.getElementById('guests');
            const nameInput = document.getElementById('full-name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const requestsInput = document.getElementById('special-requests');
            
            const formData = {
                experience: experienceInput ? experienceInput.value : '',
                checkin: checkinInput ? checkinInput.value : '',
                checkout: checkoutInput ? checkoutInput.value : '',
                guests: guestsInput ? guestsInput.value : '',
                name: nameInput ? nameInput.value : '',
                email: emailInput ? emailInput.value : '',
                phone: phoneInput ? phoneInput.value : '',
                requests: requestsInput ? requestsInput.value : ''
            };
            
            if (!formData.experience || !formData.checkin || !formData.name || !formData.email) {
                alert('Please fill in all required fields and select your dates.');
                return;
            }
            
            // In a real app, you would send this to your backend
            alert(`Booking enquiry submitted!\\n\\nExperience: ${formData.experience}\\nCheck-in: ${formData.checkin}\\nGuests: ${formData.guests}\\n\\nWe'll respond within 24 hours!`);
            
            // Clear form
            bookingForm.reset();
            clearSelectedDates();
        });
    }
    
    // Initialize calendar
    generateCalendar(currentMonth, currentYear);
});
