// Toggle mobile menu for small screens
const toggleMenu = document.querySelector('.fa-align-justify');
const navPanelOpt = document.querySelector('.nav-panel-opt');

toggleMenu.addEventListener('click', () => {
    navPanelOpt.classList.toggle('show');
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const searchSelect = document.querySelector('.search-select');

searchIcon.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const searchTerm = searchInput.value.trim();
    const category = searchSelect.value;
    if (searchTerm !== '') {
        console.log(`Searching for "${searchTerm}" in category: ${category}`);
        // Implement actual search functionality here
    } else {
        alert('Please enter a search term');
    }
}

// Sign-in button functionality
const signInButton = document.querySelector('.sign-in-button');
const personalizedRecs = document.querySelector('.personalized-recs');

signInButton.addEventListener('click', () => {
    personalizedRecs.innerHTML = '<p>Your personalized recommendations will appear here.</p>';
    // Implement actual sign-in functionality here
});

// Smooth scroll to top
const backToTopLink = document.querySelector('a[href="#top"]');

backToTopLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Display dynamic content on hover for product boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const boxContent = box.querySelector('.box-content');
    const originalHTML = boxContent.innerHTML;
    
    box.addEventListener('mouseenter', () => {
        box.classList.add('hovered');
        boxContent.innerHTML += '<div class="quick-view">Quick View</div>';
    });
    
    box.addEventListener('mouseleave', () => {
        box.classList.remove('hovered');
        boxContent.innerHTML = originalHTML;
    });

    box.addEventListener('click', () => {
        console.log(`Clicked on ${box.querySelector('h2').textContent}`);
        // Implement product view or add to cart functionality here
    });
});

// Language and country selector functionality
const languageSelector = document.querySelector('.language-selector select');
const countrySelector = document.querySelector('.country-selector select');

languageSelector.addEventListener('change', (e) => {
    console.log(`Language changed to: ${e.target.value}`);
    // Implement language change functionality here
});

countrySelector.addEventListener('change', (e) => {
    console.log(`Country changed to: ${e.target.value}`);
    // Implement country change functionality here
});

// Footer links functionality
const footerLinks = document.querySelectorAll('.footer-column ul a, .foot-panel5 a');

footerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Navigating to: ${link.textContent}`);
        // Implement actual navigation or modal display here
    });
});

// Cart hover effect
const navCart = document.querySelector('.nav-cart');

navCart.addEventListener('mouseenter', () => {
    navCart.classList.add('highlight');
});

navCart.addEventListener('mouseleave', () => {
    navCart.classList.remove('highlight');
});

// Hero message close functionality
const heroMsg = document.querySelector('.hero-msg');
if (heroMsg) {
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    heroMsg.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        heroMsg.style.display = 'none';
    });
}

// Implement lazy loading for images
const lazyImages = document.querySelectorAll('.box-img');
const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.backgroundImage = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    lazyLoadObserver.observe(img);
});

// Add to cart functionality (simplified)
const addToCartButtons = document.querySelectorAll('.box .box-content p');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the box click event
        cartCount++;
        updateCartCount();
        console.log(`Added ${button.closest('.box').querySelector('h2').textContent} to cart`);
    });
});

function updateCartCount() {
    const cartElement = document.querySelector('.nav-cart p');
    cartElement.textContent = `Cart (${cartCount})`;
}