# Ash House Somerset - Luxury Retreat Website

## Project Overview

A sophisticated, luxury website for Ash House Somerset - a wellness and creative retreat in Somerset, England. The website showcases the property's elegant manor house setting, professional treatments, and luxury accommodation.

## Features

### Design & Aesthetics
- **Luxury Color Palette**: Warm earth tones with rich browns (#8B4513) and gold accents
- **Typography**: Elegant combination of Playfair Display (serif) and Inter (sans-serif)
- **Responsive Design**: Optimized for all devices from desktop to mobile
- **Smooth Animations**: Intersection Observer API for elegant entrance effects
- **Modern UI**: Clean, sophisticated layout with premium visual hierarchy

### Sections
1. **Hero Section**: Captivating introduction with call-to-action buttons
2. **About**: Property overview with key features highlighted
3. **Treatments**: Detailed showcase of wellness services (Massage, Facials, Reiki)
4. **Accommodation**: Luxury room features and amenities
5. **Gallery**: Visual showcase of the property (placeholder structure ready)
6. **Contact**: Contact information and inquiry form

### Technical Features
- **Fixed Navigation**: Smooth scrolling with backdrop blur effects
- **Mobile Menu**: Responsive hamburger navigation
- **Form Handling**: Contact form with validation
- **Performance**: Optimized CSS with smooth transitions
- **SEO Ready**: Proper meta tags and semantic HTML structure

## File Structure

```
AshHouseSomerset/
├── index.html          # Main website file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This documentation
```

## Next Steps for Image Integration

Since automated image extraction from Instagram and Airbnb proved challenging due to their dynamic content loading, here are recommended approaches:

### Manual Image Collection
1. **Instagram (@ashhousesomerset)**:
   - Visit: https://www.instagram.com/ashhousesomerset/
   - Right-click and save high-quality images of:
     - Manor house exterior
     - Interior shots (bedrooms, bathrooms, common areas)
     - Treatment rooms
     - Gardens and grounds
     - Food/dining areas

2. **Airbnb Listing**:
   - Visit: https://www.airbnb.co.uk/rooms/21547447
   - Save professional property photos
   - Focus on room interiors and amenities

### Image Optimization
- **Recommended sizes**:
  - Hero image: 1920x1080px
  - Gallery images: 800x600px
  - Treatment cards: 600x400px
- **Formats**: WebP for modern browsers, JPEG fallbacks
- **Compression**: Maintain quality while optimizing file sizes

### Image Placement Guide
Replace the `.image-placeholder` divs with actual images:

```html
<!-- Example replacement -->
<div class="image-placeholder">
  <img src="images/manor-house-hero.jpg" alt="Ash House Somerset Manor House" />
</div>
```

## Recommended Image Structure

Create an `images/` folder with:
```
images/
├── hero/
│   └── manor-house-main.jpg
├── about/
│   └── interior-lounge.jpg
├── treatments/
│   ├── massage-room.jpg
│   ├── facial-treatment.jpg
│   └── reiki-space.jpg
├── accommodation/
│   ├── bedroom-suite.jpg
│   ├── bathroom.jpg
│   └── room-view.jpg
└── gallery/
    ├── exterior-01.jpg
    ├── gardens-02.jpg
    ├── interior-03.jpg
    └── [additional gallery images]
```

## Running the Website

1. Open `index.html` in a modern web browser
2. For development server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000`

## Browser Compatibility

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features Used**: CSS Grid, Flexbox, Intersection Observer API, CSS Custom Properties
- **Fallbacks**: Graceful degradation for older browsers

## Customization

### Colors
Main color variables can be adjusted in the CSS:
- Primary: `#8B4513` (Warm Brown)
- Secondary: `#d4af37` (Gold)
- Background: `#fafafa` (Light Gray)

### Typography
Font stacks can be modified in the `:root` CSS section for different brand personalities.

### Content
All text content can be easily updated in the HTML file. The structure is semantic and SEO-friendly.

## Performance Optimization

- **CSS**: Single file with optimized selectors
- **JavaScript**: Vanilla JS, no external dependencies
- **Images**: Placeholder structure ready for WebP/JPEG optimization
- **Loading**: Intersection Observer for performance-conscious animations

## Contact Information

Based on research, the property can be contacted through:
- Instagram: @ashhousesomerset
- Airbnb: Listed property for direct booking
- Email: info@ashhousesomerset.co.uk (suggested)

---

*This luxury website framework is ready for content population and provides a solid foundation for showcasing Ash House Somerset's premium retreat experience.*
