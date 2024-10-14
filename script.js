// Example JavaScript for filtering products
document.querySelector('input[type="range"]').addEventListener('input', function() {
    let value = this.value;
    let products = document.querySelectorAll('.product-card');
    
    products.forEach(function(product) {
        let price = parseFloat(product.querySelector('.product-info p').innerText.replace('$', ''));
        
        if (price <= value) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
// 



// filter product RANGE
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const productCards = document.querySelectorAll('.product-card');

    // Update the displayed value when the slider is moved
    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
        filterProductsByPrice(priceRange.value);
    });

    function filterProductsByPrice(maxPrice) {
        productCards.forEach(card => {
            const price = parseFloat(card.querySelector('.product-info p').textContent.replace('$', ''));
            if (price <= maxPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const filterElements = document.querySelectorAll('.filter-section input[type="checkbox"]');
    
    filterElements.forEach(element => {
        element.addEventListener('change', function() {
            // Tanlangan filtrlar
            const selectedFilters = Array.from(filterElements)
                .filter(el => el.checked)
                .map(el => el.value);
            
            // Mahsulotlarni yangilash
            fetchProducts(selectedFilters);
        });
    });
});

function fetchProducts(filters) {
    fetch('filterProducts.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `filters=${JSON.stringify(filters)}`
    })
    .then(response => response.json())
    .then(data => {
        // Mahsulotlarni yangilash
        updateProductList(data.products);
    })
    .catch(error => console.error('Error:', error));
}

function updateProductList(products) {
    const productContainer = document.querySelector('.product-list .products');
    productContainer.innerHTML = ''; // Mahsulotlarni tozalash

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <span class="rating">${product.rating} ★</span>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
}






// Submenuni almashtirish
document.querySelector('.menu-link').addEventListener('click', function(e) {
    e.preventDefault();
    const submenu = this.nextElementSibling;
    const icon = this.querySelector('.submenu-toggle i');

    // Submenuni ko'rinishini almashtirish
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
    } else {
        submenu.style.display = 'block';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    }
});

// har bir elementni ekranga chiqarish





function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}


// shop html

// Example JavaScript to handle filter functionality

const priceRange = document.getElementById('price-range');
const items = document.querySelectorAll('.trending-section .item');

priceRange.addEventListener('input', function() {
    const maxPrice = parseInt(this.value);

    items.forEach(item => {
        const price = parseInt(item.querySelector('p').textContent.replace('$', ''));
        if (price <= maxPrice) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

