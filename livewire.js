const products = [
    { title: "OverHead Headphone", category: "OH", img: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/categories/Headphones/AEM_CARDIFF_CATEGORY-PAGE_TILE-ANC.jpg/jcr:content/renditions/cq5dam.web.600.600.jpeg", description: "Premium noise cancellation Headphones." },
    { title: "Oled Television", category: "Oled", img: "https://th.bing.com/th?id=OIP.PTxR20LFE8HErX-Tg5j-OAHaEg&w=298&h=180&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=23.1", description: "Come together around the screen and immerse together in the scene with true-to-life picture and surround sound made for movies. Make the movies move you closer, see them in a new light, hear them in a new way." },
    { title: "In-Ear Headphone", category: "IEM", img: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/categories/Headphones/AEM_CARDIFF_CATEGORY-PAGE_TILE-EARBUDS.jpg/jcr:content/renditions/cq5dam.web.600.600.jpeg", description: "High quality of sound experience." },
    { title: "Mouse", category: "Mouse", img: "https://antesports.com/wp-content/themes/storefront/assets/theme-3/images/cat-mouse.webp?x37860", description: "Wide range of wired and wireless mouses." },
    { title: "Keyboards", category: "Keyboards", img: "https://antesports.com/wp-content/themes/storefront/assets/theme-3/images/cat-keyboard.webp?x37860", description: "RGB keys with haptics." },
    { title: "SmartPhones", category: "SmartPhones", img: "https://th.bing.com/th/id/OIP.oRUjFh0msWQ5kz1Q80Gm4wHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", description: "Customize your Mobile." },
    { title: "Pendrives", category: "Pendrives", img: "https://th.bing.com/th/id/OIP.RSNaeqjxrtDGLekeD8mvdQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7", description: "Compactable Storage device." },
    { title: "Home Theatres", category: "HT", img: "https://th.bing.com/th/id/OIP.lx6TRMTN8M77ABs9Um-kHQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", description: "Make the movies move you closer, see them in a new light, hear them in a new way. Fill the room with stories and make your living room a truly living space." }
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        productList.appendChild(div);
    });
}


function filterProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const filteredProducts = products.filter(product => product.category === category);
    filteredProducts.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        productList.appendChild(div);
    });
}

loadProducts();

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill2 = document.getElementById('hill2');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    
    if (value <= 500) {
        text.style.marginTop = value * 2.5 + 'px';
    }
});
