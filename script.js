const BAYERN_JERSEY_IMG = 'images/club/Bayern1.png';

function normalizeImagePath(value) {
    if (!value) return BAYERN_JERSEY_IMG;

    const trimmed = value.trim();
    if (!trimmed) return BAYERN_JERSEY_IMG;
    if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('data:')) {
        return trimmed;
    }

    const cleaned = trimmed.replace(/^\.\//, '').replace(/^\//, '');
    return cleaned.startsWith('images/') ? cleaned : `images/${cleaned}`;
}

function createJersey(id, title, price, category, files, description, oldPrice = null) {
    const folder = category === 'Nations' ? 'nation' : 'club';
    const images = files.map(file => `images/${folder}/${file}`);
    return {
        id,
        title,
        price,
        ...(oldPrice ? { oldPrice } : {}),
        sizes: ['M', 'L', 'XL', 'XXL'],
        category,
        image: images[0],
        images,
        description
    };
}

const unikTShirtColors = [
    'Vert', 'Vert menthe', 'Vert militaire', 'Vert ciment', 'Saumon',
    'Bleu ciel', 'Bleu marine', 'Bleu bic', 'Bleu de nuit', 'Blanc',
    'Noir', 'Orange', 'Rouge bordeaux', 'Rose', 'Marron',
    'Gris', 'Jaune moutarde', 'Jaune poussin', 'Jaune clair', 'Beige'
];

const initialProducts = [
    {
        id: 't-shirt-unik',
        title: 'T-shirt Unik',
        price: 3000,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: unikTShirtColors,
        category: 'T-shirts',
        image: 'images/Unik.jpeg',
        images: ['images/Unik.jpeg', 'images/Uni.jpeg', 'images/unie.jpg', 'images/unique.jpg'],
        description: 'T-shirt Unik disponible en plusieurs couleurs.'
    },
    createJersey('bayern-munich', 'Maillots Bayern Munich', 6000, 'Clubs', ['Bayern1.png', 'Bayern.jpeg', 'Bayern3.jpeg'], 'Maillots Bayern Munich, plusieurs modèles et coloris.', 8000),
    createJersey('al-ahli', 'Maillot Al-Ahli', 6000, 'Clubs', ['Ad1.jpeg'], 'Maillot d’Al-Ahli.'),
    createJersey('arsenal', 'Maillots Arsenal', 6000, 'Clubs', ['Arsenal1.jpeg', 'Arsenal.jpeg', 'Arsenal2.jpeg'], 'Collection de maillots Arsenal.'),
    createJersey('aston-villa', 'Maillots Aston Villa', 6000, 'Clubs', ['Aston Villa 1.jpeg', 'Aston Villa.jpeg'], 'Collection de maillots Aston Villa.'),
    createJersey('auxerre', 'Maillot AJ Auxerre', 6000, 'Clubs', ['Auxerre.jpeg'], 'Maillot de l’AJ Auxerre.'),
    createJersey('barcelone', 'Maillots FC Barcelone', 6000, 'Clubs', ['Barca1.jpeg', 'Barca.jpeg'], 'Collection de maillots du FC Barcelone.'),
    createJersey('benfica', 'Maillot Benfica', 6000, 'Clubs', ['Benfica.jpeg'], 'Maillot du Benfica.'),
    createJersey('bolton', 'Maillot Bolton Wanderers', 6000, 'Clubs', ['1h.jpeg'], 'Maillot de Bolton Wanderers.'),
    createJersey('brighton', 'Maillot Brighton', 6000, 'Clubs', ['Brighton.jpeg'], 'Maillot de Brighton.'),
    createJersey('chelsea', 'Maillots Chelsea', 6000, 'Clubs', ['Chelsea1.jpeg', 'Chelsea2.jpeg'], 'Collection de maillots Chelsea.'),
    createJersey('flamengo', 'Maillot Flamengo', 6000, 'Clubs', ['Crf.jpeg'], 'Maillot de Flamengo.'),
    createJersey('dortmund', 'Maillot Borussia Dortmund', 6000, 'Clubs', ['Dortmund.jpeg'], 'Maillot du Borussia Dortmund.'),
    createJersey('everton', 'Maillot Everton', 6000, 'Clubs', ['Everton.jpeg'], 'Maillot d’Everton.'),
    createJersey('nottingham-forest', 'Maillot Nottingham Forest', 6000, 'Clubs', ['Forest.jpeg'], 'Maillot de Nottingham Forest.'),
    createJersey('galatasaray', 'Maillot Galatasaray', 6000, 'Clubs', ['Galatasaray.jpeg'], 'Maillot de Galatasaray.'),
    createJersey('al-hilal', 'Maillot Al-Hilal', 6000, 'Clubs', ['Hilal.jpeg'], 'Maillot d’Al-Hilal.'),
    createJersey('inter-miami', 'Maillots Inter Miami', 6000, 'Clubs', ['InterMD.jpeg', 'InterME.jpeg', 'InterMiami1.jpeg'], 'Collection de maillots Inter Miami.'),
    createJersey('juventus', 'Maillots Juventus', 6000, 'Clubs', ['Juventus1.jpeg', 'Juventus2.jpeg'], 'Collection de maillots Juventus.'),
    createJersey('leeds', 'Maillot Leeds United', 6000, 'Clubs', ['Leeds.jpeg'], 'Maillot de Leeds United.'),
    createJersey('lens', 'Maillot RC Lens', 6000, 'Clubs', ['Lens.jpeg'], 'Maillot du RC Lens.'),
    createJersey('liverpool', 'Maillots Liverpool', 6000, 'Clubs', ['Liverpool1.jpeg', 'Liverpool.jpeg', 'Liverpool2.jpeg', 'Liverpool3.jpeg'], 'Collection de maillots Liverpool.'),
    createJersey('manchester-city', 'Maillots Manchester City', 6000, 'Clubs', ['ManC1.jpeg', 'ManC2.jpeg', 'ManC3.jpeg'], 'Collection de maillots Manchester City.'),
    createJersey('manchester-united', 'Maillots Manchester United', 6000, 'Clubs', ['ManU1.jpeg', 'ManU2.jpeg'], 'Collection de maillots Manchester United.'),
    createJersey('marseille', 'Maillots Olympique de Marseille', 6000, 'Clubs', ['OM1.jpeg', 'Marseille.jpeg', 'OM2.jpeg', 'OM3.jpeg'], 'Collection de maillots de l’Olympique de Marseille.'),
    createJersey('metz', 'Maillots FC Metz', 6000, 'Clubs', ['Metz.jpeg', 'Metz2.jpeg'], 'Collection de maillots FC Metz.'),
    createJersey('ac-milan', 'Maillots AC Milan', 6000, 'Clubs', ['Milan1.jpeg', 'Milan2.jpeg'], 'Collection de maillots AC Milan.'),
    createJersey('monaco', 'Maillot AS Monaco', 6000, 'Clubs', ['Monaco.jpeg'], 'Maillot de l’AS Monaco.'),
    createJersey('newcastle', 'Maillot Newcastle United', 6000, 'Clubs', ['Newcastle.jpeg'], 'Maillot de Newcastle United.'),
    createJersey('paris-saint-germain', 'Maillots Paris Saint-Germain', 6000, 'Clubs', ['PSG1.jpeg', 'PSG2.jpeg', 'PSG3.jpeg'], 'Collection de maillots du Paris Saint-Germain.'),
    createJersey('real-madrid', 'Maillots Real Madrid', 6000, 'Clubs', ['Real M1.jpeg', 'Real M.jpeg'], 'Collection de maillots Real Madrid.'),
    createJersey('roma', 'Maillot AS Roma', 6000, 'Clubs', ['Roma.jpeg'], 'Maillot de l’AS Roma.'),
    createJersey('santos', 'Maillot Santos', 6000, 'Clubs', ['Santos.jpeg'], 'Maillot de Santos.'),
    createJersey('tottenham', 'Maillots Tottenham', 6000, 'Clubs', ['Tothenam1.jpeg', 'Tothenam.jpeg'], 'Collection de maillots Tottenham.'),
    createJersey('venezia', 'Maillot Venezia', 8000, 'Clubs', ['Venizia.jpeg'], 'Maillot Venezia.', 10000),
    createJersey('west-ham', 'Maillots West Ham', 6000, 'Clubs', ['Westham1.jpeg', 'Westham2.jpeg'], 'Collection de maillots West Ham.'),
    createJersey('allemagne', 'Maillot Allemagne', 7000, 'Nations', ['allemagne.jpeg'], 'Maillot de l’équipe nationale d’Allemagne.'),
    createJersey('argentine', 'Maillot Argentine', 7000, 'Nations', ['argentine.jpeg'], 'Maillot de l’équipe nationale d’Argentine.'),
    createJersey('belgique', 'Maillot Belgique', 7000, 'Nations', ['belgic.jpeg'], 'Maillot de l’équipe nationale de Belgique.'),
    createJersey('bresil', 'Maillot Brésil', 7000, 'Nations', ['brazil.jpeg'], 'Maillot de l’équipe nationale du Brésil.'),
    createJersey('angleterre', 'Maillot Angleterre', 7000, 'Nations', ['england.jpeg'], 'Maillot de l’équipe nationale d’Angleterre.'),
    createJersey('france', 'Maillot France', 7000, 'Nations', ['fr.jpeg'], 'Maillot de l’équipe nationale de France.'),
    createJersey('italie', 'Maillot Italie', 7000, 'Nations', ['italie.jpeg'], 'Maillot de l’équipe nationale d’Italie.'),
    createJersey('jamaique', 'Maillot Jamaïque', 7000, 'Nations', ['jamaic.jpeg'], 'Maillot de l’équipe nationale de Jamaïque.'),
    createJersey('coree', 'Maillot Corée', 7000, 'Nations', ['korea.jpeg'], 'Maillot de l’équipe nationale de Corée.'),
    createJersey('pays-bas', 'Maillot Pays-Bas', 7000, 'Nations', ['paysbas.jpeg'], 'Maillot de l’équipe nationale des Pays-Bas.'),
    createJersey('portugal', 'Maillot Portugal', 7000, 'Nations', ['portugal.jpeg'], 'Maillot de l’équipe nationale du Portugal.'),
    createJersey('senegal', 'Maillot Sénégal', 6000, 'Nations', ['sn.jpeg'], 'Maillot de l’équipe nationale du Sénégal.'),
    createJersey('espagne', 'Maillot Espagne', 7000, 'Nations', ['spain.jpeg'], 'Maillot de l’équipe nationale d’Espagne.'),
    createJersey('tunisie', 'Maillot Tunisie', 7000, 'Nations', ['tunis.jpeg'], 'Maillot de l’équipe nationale de Tunisie.'),
    createJersey('etats-unis', 'Maillot États-Unis', 7000, 'Nations', ['usa.jpeg'], 'Maillot de l’équipe nationale des États-Unis.')
];

const catalogMigrationKey = 'time_trend_catalog_additions_2026_10_v7';
const legacyCatalogIds = new Set([
    '1', 'aston-villa-6000', 'barcelone-6000', 'brighton-6000', 'chelsea-6000',
    'inter-miami-domicile-6000', 'marseille-6000', 'milan-6000', 'real-madrid-6000',
    'tottenham-6000', 'auxerre-6000', 'inter-miami-exterieur-6000', 'liverpool-6000',
    'manchester-united-6000', 'manchester-city-6000', 'arsenal-8000', 'juventus-8000',
    'liverpool-8000', 'metz-8000', 'venezia-8000', 't-shirt-unik'
]);
let products = JSON.parse(localStorage.getItem('time_trend_products')) || initialProducts;
if (!localStorage.getItem(catalogMigrationKey)) {
    const catalogProductIds = new Set([
        ...legacyCatalogIds,
        ...initialProducts.map(product => product.id)
    ]);
    const customProducts = products.filter(product => !catalogProductIds.has(product.id));
    products = [...initialProducts, ...customProducts];
    localStorage.setItem('time_trend_products', JSON.stringify(products));
    localStorage.setItem(catalogMigrationKey, 'true');
}
const unikProduct = products.find(product => product.id === 't-shirt-unik');
if (unikProduct && unikProduct.image === 'images/Unik.jpeg' && (!unikProduct.images || unikProduct.images.length < 2)) {
    unikProduct.images = ['images/Unik.jpeg', 'images/Uni.jpeg', 'images/unie.jpg', 'images/unique.jpg'];
    localStorage.setItem('time_trend_products', JSON.stringify(products));
}
if (unikProduct && JSON.stringify(unikProduct.colors) !== JSON.stringify(unikTShirtColors)) {
    unikProduct.colors = [...unikTShirtColors];
    localStorage.setItem('time_trend_products', JSON.stringify(products));
}
const clubPriceMigrationKey = 'time_trend_club_prices_2026_10_v1';
if (!localStorage.getItem(clubPriceMigrationKey)) {
    const targetPrices = new Map([
        ['arsenal', 6000],
        ['arsenal-8000', 6000],
        ['arsenal-6000', 6000],
        ['juventus', 6000],
        ['juventus-8000', 6000],
        ['juventus-6000', 6000],
        ['liverpool', 6000],
        ['liverpool-8000', 6000],
        ['liverpool-6000', 6000],
        ['metz', 6000],
        ['metz-8000', 6000],
        ['metz-6000', 6000]
    ]);
    products.forEach(product => {
        if (targetPrices.has(product.id)) {
            product.price = targetPrices.get(product.id);
            delete product.oldPrice;
        }
    });
    localStorage.setItem('time_trend_products', JSON.stringify(products));
    localStorage.setItem(clubPriceMigrationKey, 'true');
}
let cart = JSON.parse(localStorage.getItem('time_trend_cart')) || [];
let currentSelectedProduct = null;
let selectedSize = 'M';
let selectedColor = '';
let currentQuantity = 1;
let isAdminLoggedIn = false;
let activeCategory = 'all';
let productSearchQuery = '';

function isUnikTShirt(product) {
    return product.id === 't-shirt-unik';
}

function calculateProductTotal(product, quantity) {
    if (isUnikTShirt(product)) {
        const bundles = Math.floor(quantity / 4);
        const remainingShirts = quantity % 4;
        return bundles * 10000 + remainingShirts * product.price;
    }
    return product.price * quantity;
}

function calculateCartTotals(items) {
    const shirtQuantity = items
        .filter(item => isUnikTShirt(item))
        .reduce((total, item) => total + item.quantity, 0);
    const shirtBaseTotal = items
        .filter(item => isUnikTShirt(item))
        .reduce((total, item) => total + item.price * item.quantity, 0);
    const shirtDiscount = shirtBaseTotal - calculateProductTotal(
        { id: 't-shirt-unik', price: items.find(item => isUnikTShirt(item))?.price || 3000 },
        shirtQuantity
    );
    const otherProductsTotal = items
        .filter(item => !isUnikTShirt(item))
        .reduce((total, item) => total + item.price * item.quantity, 0);

    return {
        total: shirtBaseTotal - shirtDiscount + otherProductsTotal,
        shirtDiscount
    };
}

function saveProductsToStorage() {
    localStorage.setItem('time_trend_products', JSON.stringify(products));
    renderBestSeller();
    renderProducts();
    renderAdminTable();
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (isDark) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    } else {
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    }
}

if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
} else {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
}

function updateScrollTopButton() {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (!scrollTopButton) return;

    const shouldShow = window.scrollY > 300;
    scrollTopButton.classList.toggle('visible', shouldShow);
}

window.addEventListener('scroll', updateScrollTopButton, { passive: true });

function openBestSellerProduct() {
    const featured = products[0];
    if (!featured) return;
    openFullscreenModal(featured.id);
}

function renderBestSeller() {
    const titleEl = document.getElementById('best-seller-title');
    const priceEl = document.getElementById('best-seller-price');
    const sizesEl = document.getElementById('best-seller-sizes');

    if (!titleEl || !priceEl || !sizesEl) return;

    const featured = products[0];
    if (!featured) {
        titleEl.textContent = 'Aucun produit';
        priceEl.textContent = '0 FCFA';
        sizesEl.textContent = 'Tailles disponibles: -';
        return;
    }

    titleEl.textContent = featured.title;
    priceEl.textContent = `${Number(featured.price).toLocaleString()} FCFA`;
    sizesEl.textContent = `Tailles disponibles: ${featured.sizes.join(' • ')}`;
}

function normalizeSearchText(value) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('fr');
}

function renderProducts(filter = activeCategory) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const normalizedQuery = normalizeSearchText(productSearchQuery.trim());
    const filteredProducts = products.filter(product => {
        const matchesCategory = filter === 'all' || product.category === filter;
        const searchableText = normalizeSearchText([
            product.title,
            product.category,
            product.description,
            ...(product.colors || [])
        ].join(' '));
        return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });

    if (filteredProducts.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">${
            normalizedQuery
                ? 'Aucun article ne correspond à votre recherche dans cette catégorie.'
                : 'Aucun maillot trouvé dans cette catégorie.'
        }</div>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'group bg-white dark:bg-darkcard border border-gray-200 dark:border-darkborder rounded-2xl overflow-hidden shadow-lg hover:border-gold transition-all duration-300 flex flex-col justify-between gold-border-glow';
        const hasDiscount = Number(product.oldPrice) > Number(product.price);

        card.innerHTML = `
            <div class="relative bg-gray-100 dark:bg-darkbg p-6 flex items-center justify-center overflow-hidden cursor-pointer h-72" onclick="openFullscreenModal('${product.id}')">
                <img src="${product.image}" alt="${product.title}"
                     onerror="this.src='https://placehold.co/500x600/0b0b0b/D4AF37?text=Maillot+Bayern'"
                     class="max-h-60 w-auto object-contain group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-gold border border-gold/40 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    ${product.category}
                </span>
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="bg-gold text-black font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl">
                        <i class="fa-solid fa-expand"></i> Voir en plein écran
                    </span>
                </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-gold transition" onclick="openFullscreenModal('${product.id}')">
                        ${product.title}
                    </h3>
                    <div class="mb-2">
                        ${hasDiscount ? `<div class="text-sm text-gray-400 line-through mb-1">${Number(product.oldPrice).toLocaleString()} FCFA</div>` : ''}
                        <div class="text-2xl font-extrabold text-gold">
                            ${product.price.toLocaleString()} FCFA
                        </div>
                        ${isUnikTShirt(product) ? '<p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">4 pour 10 000 FCFA</p>' : ''}
                    </div>

                    <div class="mb-6">
                        <span class="text-xs text-gray-400 block mb-2 font-medium uppercase tracking-wider">Tailles disponibles :</span>
                        <div class="flex flex-wrap gap-1.5">
                            ${product.sizes.map(size => `
                                <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-darkborder">
                                    ${size}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    ${product.colors && product.colors.length ? `
                    <div class="mb-6">
                        <span class="text-xs text-gray-400 block mb-2 font-medium uppercase tracking-wider">Couleurs disponibles :</span>
                        <div class="flex flex-wrap gap-1.5">
                            ${product.colors.map(color => `
                                <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-darkborder">
                                    ${color}
                                </span>
                            `).join('')}
                        </div>
                    </div>` : ''}
                </div>

                <div class="pt-2 border-t border-gray-100 dark:border-darkborder">
                    <button onclick="openFullscreenModal('${product.id}')" class="w-full bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-gray-200 hover:text-gold font-semibold py-3 rounded-xl text-sm transition">
                        Détails
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-gold', 'text-black', 'border-gold', 'active');
        btn.classList.add('border-gray-300', 'dark:border-darkborder');
    });
    const selectedButton = [...document.querySelectorAll('.cat-btn')]
        .find(button => button.getAttribute('onclick') === `filterCategory('${cat}')`);
    if (selectedButton) {
        selectedButton.classList.add('bg-gold', 'text-black', 'border-gold', 'active');
    }
    renderProducts();
}

function searchProducts(query) {
    productSearchQuery = query;
    renderProducts();
}

function openFullscreenModal(productId) {
    currentSelectedProduct = products.find(p => p.id === productId);
    if (!currentSelectedProduct) return;

    const oldPriceValue = Number(currentSelectedProduct.oldPrice) || 0;
    const oldPriceEl = document.getElementById('modal-old-price');
    if (oldPriceValue > Number(currentSelectedProduct.price)) {
        oldPriceEl.innerText = `${oldPriceValue.toLocaleString()} FCFA`;
        oldPriceEl.classList.remove('hidden');
    } else {
        oldPriceEl.innerText = '';
        oldPriceEl.classList.add('hidden');
    }

    const modalImage = document.getElementById('modal-img');
    const productImages = currentSelectedProduct.images && currentSelectedProduct.images.length
        ? currentSelectedProduct.images
        : [currentSelectedProduct.image];
    modalImage.src = productImages[0];
    modalImage.alt = currentSelectedProduct.title;
    modalImage.onerror = function () {
        this.src = 'https://placehold.co/500x600/0b0b0b/D4AF37?text=Maillot+Bayern';
    };
    const thumbnails = document.getElementById('modal-thumbnails');
    thumbnails.innerHTML = productImages.map((image, index) => `
        <button type="button" onclick="selectProductImage(${index})"
                class="modal-thumbnail${index === 0 ? ' active' : ''}"
                aria-label="Voir la variante ${index + 1} de ${currentSelectedProduct.title}"
                aria-pressed="${index === 0}">
            <img src="${image}" alt="" onerror="this.src='https://placehold.co/100x100/0b0b0b/D4AF37?text=Maillot'">
        </button>
    `).join('');
    document.getElementById('modal-gallery').classList.toggle('hidden', productImages.length < 2);
    document.getElementById('modal-title').innerText = currentSelectedProduct.title;
    document.getElementById('modal-price').innerText = `${currentSelectedProduct.price.toLocaleString()} FCFA`;
    document.getElementById('modal-bundle-offer').classList.toggle('hidden', !isUnikTShirt(currentSelectedProduct));
    document.getElementById('modal-bundle-color-note').classList.toggle('hidden', !isUnikTShirt(currentSelectedProduct));
    document.getElementById('modal-category').innerText = currentSelectedProduct.category;
    document.getElementById('modal-desc').innerText = currentSelectedProduct.description || 'Maillot officiel d\'excellente finition.';

    selectedSize = currentSelectedProduct.sizes[0] || 'M';
    const sizeContainer = document.getElementById('modal-sizes-container');
    sizeContainer.innerHTML = currentSelectedProduct.sizes.map(size => `
        <button onclick="selectModalSize('${size}')" id="size-btn-${size}" class="size-btn font-bold px-4 py-2 rounded-xl text-sm border ${size === selectedSize ? 'border-gold bg-gold text-black' : 'border-gray-300 dark:border-darkborder text-gray-300'} transition">
            ${size}
        </button>
    `).join('');

    const colorSection = document.getElementById('modal-colors-section');
    const colorContainer = document.getElementById('modal-colors-container');
    selectedColor = '';
    colorContainer.innerHTML = currentSelectedProduct.colors
        ? currentSelectedProduct.colors.map(color => `
            <button type="button" onclick="selectModalColor('${color}')" class="color-btn font-semibold px-3 py-2 rounded-xl text-sm border border-gray-300 dark:border-darkborder text-gray-700 dark:text-gray-200 transition">
                ${color}
            </button>
        `).join('')
        : '';
    colorSection.classList.toggle('hidden', !currentSelectedProduct.colors || currentSelectedProduct.colors.length === 0);

    currentQuantity = 1;
    document.getElementById('modal-quantity').innerText = currentQuantity;
    updateModalOrderTotal();
    document.getElementById('fullscreen-modal').classList.remove('hidden');
}

function selectProductImage(index) {
    if (!currentSelectedProduct) return;
    const productImages = currentSelectedProduct.images && currentSelectedProduct.images.length
        ? currentSelectedProduct.images
        : [currentSelectedProduct.image];
    if (!productImages[index]) return;

    const modalImage = document.getElementById('modal-img');
    modalImage.src = productImages[index];
    modalImage.alt = `${currentSelectedProduct.title} – variante ${index + 1}`;
    document.querySelectorAll('.modal-thumbnail').forEach((thumbnail, thumbnailIndex) => {
        const isSelected = thumbnailIndex === index;
        thumbnail.classList.toggle('active', isSelected);
        thumbnail.setAttribute('aria-pressed', String(isSelected));
    });
}

function closeFullscreenModal() {
    document.getElementById('fullscreen-modal').classList.add('hidden');
}

function selectModalSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('border-gold', 'bg-gold', 'text-black');
        btn.classList.add('border-gray-300', 'dark:border-darkborder', 'text-gray-300');
    });
    const selectedBtn = document.getElementById(`size-btn-${size}`);
    if (selectedBtn) {
        selectedBtn.classList.add('border-gold', 'bg-gold', 'text-black');
    }
}

function selectModalColor(color) {
    selectedColor = color;
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('border-gold', 'bg-gold', 'text-black');
        btn.classList.add('border-gray-300', 'dark:border-darkborder', 'text-gray-700', 'dark:text-gray-200');
    });
    const selectedButton = [...document.querySelectorAll('.color-btn')].find(button => button.textContent.trim() === color);
    if (selectedButton) {
        selectedButton.classList.remove('border-gray-300', 'dark:border-darkborder', 'text-gray-700', 'dark:text-gray-200');
        selectedButton.classList.add('border-gold', 'bg-gold', 'text-black');
    }
}

function changeQuantity(delta) {
    if (currentQuantity + delta >= 1) {
        currentQuantity += delta;
        document.getElementById('modal-quantity').innerText = currentQuantity;
        updateModalOrderTotal();
    }
}

function updateModalOrderTotal() {
    if (!currentSelectedProduct) return;
    document.getElementById('modal-order-total').innerText =
        `Total pour ${currentQuantity} : ${calculateProductTotal(currentSelectedProduct, currentQuantity).toLocaleString()} FCFA`;
}

function orderOnWhatsApp() {
    if (!currentSelectedProduct) return;
    if (currentSelectedProduct.colors && currentSelectedProduct.colors.length && !selectedColor) {
        alert('Veuillez choisir une couleur avant de confirmer votre commande.');
        return;
    }

    const phone = '221766840494';
    const totalPrice = calculateProductTotal(currentSelectedProduct, currentQuantity);
    const message = `Bonjour *TIME & TREND SÉNÉGAL* 👋,\nJe souhaite commander l’article suivant :\n\n` +
        `🏆 *Produit* : ${currentSelectedProduct.title}\n` +
        `📏 *Taille* : ${selectedSize}\n` +
        `${selectedColor ? `🎨 *Couleur* : ${selectedColor}\n` : ''}` +
        `🔢 *Quantité* : ${currentQuantity}\n` +
        `💰 *Prix Total* : ${totalPrice.toLocaleString()} FCFA\n\n` +
        `Merci de me confirmer la disponibilité et les modalités de livraison à Dakar !`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
}

function directWhatsAppOrder(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentSelectedProduct = product;
    selectedSize = product.sizes[0] || 'M';
    selectedColor = '';
    currentQuantity = 1;
    if (product.colors && product.colors.length) {
        openFullscreenModal(productId);
        return;
    }
    orderOnWhatsApp();
}

function addToCart() {
    if (!currentSelectedProduct) return;
    if (currentSelectedProduct.colors && currentSelectedProduct.colors.length && !selectedColor) {
        alert('Veuillez choisir une couleur avant d’ajouter cet article au panier.');
        return;
    }

    const existingItem = cart.find(item => item.id === currentSelectedProduct.id && item.size === selectedSize && (item.color || '') === selectedColor);

    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            id: currentSelectedProduct.id,
            title: currentSelectedProduct.title,
            price: currentSelectedProduct.price,
            size: selectedSize,
            color: selectedColor,
            quantity: currentQuantity,
            image: currentSelectedProduct.image
        });
    }

    localStorage.setItem('time_trend_cart', JSON.stringify(cart));
    renderCartModal();
    closeFullscreenModal();
    openCartModal();
}

function openCartModal() {
    renderCartModal();
    document.getElementById('cart-modal').classList.remove('hidden');
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function renderCartModal() {
    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = '<p class="text-center text-gray-500 py-4">Votre panier est vide.</p>';
        document.getElementById('cart-promo-savings').classList.add('hidden');
        document.getElementById('cart-total-price').innerText = '0 FCFA';
        document.getElementById('cart-badge').innerText = '0';
        return;
    }

    const totals = calculateCartTotals(cart);
    cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'flex justify-between items-center pt-2';
        itemEl.innerHTML = `
            <div>
                <p class="font-bold text-sm">${item.title}</p>
                <p class="text-xs text-gray-400">Taille: ${item.size}${item.color ? ` | Couleur: ${item.color}` : ''} | Qte: ${item.quantity}</p>
                <p class="text-xs text-gold font-bold">${(item.price * item.quantity).toLocaleString()} FCFA</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 text-xs font-bold">Supprimer</button>
        `;
        list.appendChild(itemEl);
    });

    document.getElementById('cart-promo-savings').classList.toggle('hidden', totals.shirtDiscount === 0);
    document.getElementById('cart-promo-savings').innerText =
        `Réduction T-shirt Unik : −${totals.shirtDiscount.toLocaleString()} FCFA`;
    document.getElementById('cart-total-price').innerText = `${totals.total.toLocaleString()} FCFA`;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-badge').innerText = totalItems;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('time_trend_cart', JSON.stringify(cart));
    renderCartModal();
}

function sendCartToWhatsApp() {
    if (cart.length === 0) return;
    const phone = '221766840494';
    let message = `Bonjour *TIME & TREND SÉNÉGAL* 👋,\nVoici le récapitulatif de ma commande :\n\n`;
    cart.forEach((item, idx) => {
        const sum = item.price * item.quantity;
        message += `${idx + 1}. *${item.title}* (Taille: ${item.size}${item.color ? `, Couleur: ${item.color}` : ''}) - x${item.quantity} = ${sum.toLocaleString()} FCFA\n`;
    });

    const totals = calculateCartTotals(cart);
    if (totals.shirtDiscount > 0) {
        message += `\n🎁 Réduction T-shirt Unik : −${totals.shirtDiscount.toLocaleString()} FCFA`;
    }
    message += `\n💰 *TOTAL GLOBAL* : ${totals.total.toLocaleString()} FCFA\n\nMerci de me contacter pour finaliser la livraison !`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function updateImagePreview(imageSource = '') {
    const preview = document.getElementById('article-image-preview');
    const previewImg = document.getElementById('article-image-preview-img');
    if (!preview || !previewImg) return;

    if (!imageSource) {
        preview.classList.add('hidden');
        previewImg.src = '';
        return;
    }

    previewImg.src = imageSource;
    preview.classList.remove('hidden');
}

function handleImageUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        const hiddenInput = document.getElementById('article-image');
        if (!hiddenInput) return;

        hiddenInput.value = reader.result;
        updateImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
}

function resetArticleImage() {
    const fileInput = document.getElementById('article-image-file');
    const hiddenInput = document.getElementById('article-image');
    if (fileInput) fileInput.value = '';
    if (hiddenInput) hiddenInput.value = '';
    updateImagePreview(BAYERN_JERSEY_IMG);
}

function openAdminModal() {
    if (isAdminLoggedIn) {
        showSection('admin');
    } else {
        document.getElementById('login-modal').classList.remove('hidden');
    }
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
    const error = document.getElementById('admin-login-error');
    if (error) {
        error.classList.add('hidden');
        error.textContent = 'Mot de passe incorrect.';
    }
}

function handleAdminLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('admin-pass-input').value.trim();
    const error = document.getElementById('admin-login-error');

    if (pass === '072005') {
        isAdminLoggedIn = true;
        closeLoginModal();
        showSection('admin');
        document.getElementById('admin-pass-input').value = '';
        if (error) {
            error.classList.add('hidden');
        }
    } else {
        if (error) {
            error.textContent = 'Mot de passe incorrect.';
            error.classList.remove('hidden');
        }
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    showSection('catalog');
}

function showSection(section) {
    const footer = document.getElementById('site-footer');

    if (section === 'admin') {
        document.getElementById('catalog-section').classList.add('hidden');
        document.getElementById('admin-section').classList.remove('hidden');
        if (footer) footer.classList.add('hidden');
        renderAdminTable();
    } else {
        document.getElementById('catalog-section').classList.remove('hidden');
        document.getElementById('admin-section').classList.add('hidden');
        if (footer) footer.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    tbody.innerHTML = '';
    document.getElementById('admin-item-count').innerText = products.length;

    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-darkbg/50 transition';
        tr.innerHTML = `
            <td class="p-4">
                <img src="${product.image}" alt="" class="w-12 h-12 object-contain rounded-lg bg-black border border-darkborder"
                     onerror="this.src='https://placehold.co/100x100/0b0b0b/D4AF37?text=Maillot'">
            </td>
            <td class="p-4 font-bold">${product.title}</td>
            <td class="p-4 text-gold font-bold">${product.price.toLocaleString()} FCFA</td>
            <td class="p-4">${product.sizes.join(', ')}</td>
            <td class="p-4">${product.category}</td>
            <td class="p-4 text-center space-x-2">
                <button onclick="editArticle('${product.id}')" class="text-blue-500 hover:text-blue-400 p-2"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteArticle('${product.id}')" class="text-red-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openArticleModal() {
    document.getElementById('article-modal-title').innerText = 'Ajouter un Maillot';
    document.getElementById('article-form').reset();
    document.getElementById('article-id').value = '';
    document.getElementById('article-image').value = '';
    document.getElementById('article-old-price').value = '';
    const fileInput = document.getElementById('article-image-file');
    if (fileInput) fileInput.value = '';
    updateImagePreview(BAYERN_JERSEY_IMG);
    document.getElementById('article-modal').classList.remove('hidden');
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.add('hidden');
}

function editArticle(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('article-modal-title').innerText = 'Modifier le Maillot';
    document.getElementById('article-id').value = product.id;
    document.getElementById('article-title').value = product.title;
    document.getElementById('article-price').value = product.price;
    document.getElementById('article-old-price').value = product.oldPrice || '';
    document.getElementById('article-category').value = product.category;
    document.getElementById('article-sizes').value = product.sizes.join(', ');
    document.getElementById('article-colors').value = (product.colors || []).join(', ');
    const selectedImage = product.image === BAYERN_JERSEY_IMG ? '' : normalizeImagePath(product.image);
    document.getElementById('article-image').value = selectedImage;
    const fileInput = document.getElementById('article-image-file');
    if (fileInput) fileInput.value = '';
    updateImagePreview(selectedImage || BAYERN_JERSEY_IMG);
    document.getElementById('article-desc').value = product.description;

    document.getElementById('article-modal').classList.remove('hidden');
}

function saveArticle(e) {
    e.preventDefault();
    const id = document.getElementById('article-id').value;
    const title = document.getElementById('article-title').value;
    const price = parseFloat(document.getElementById('article-price').value);
    const oldPriceValue = parseFloat(document.getElementById('article-old-price').value);
    const category = document.getElementById('article-category').value;
    const sizesInput = document.getElementById('article-sizes').value;
    const colorsInput = document.getElementById('article-colors').value;
    const imageInput = document.getElementById('article-image').value.trim();
    const desc = document.getElementById('article-desc').value;

    const sizes = sizesInput.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const colors = colorsInput.split(',').map(color => color.trim()).filter(color => color.length > 0);
    const image = imageInput !== '' ? normalizeImagePath(imageInput) : BAYERN_JERSEY_IMG;
    const oldPrice = Number.isFinite(oldPriceValue) && oldPriceValue > 0 ? oldPriceValue : null;

    if (id) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            const existingProduct = products[index];
            const images = existingProduct.image === image
                ? existingProduct.images || [image]
                : [image];
            products[index] = { id, title, price, oldPrice, category, sizes, colors, image, images, description: desc };
        }
    } else {
        const newProduct = {
            id: Date.now().toString(),
            title,
            price,
            oldPrice,
            category,
            sizes: sizes.length ? sizes : ['M', 'L', 'XL', 'XXL'],
            colors,
            image,
            images: [image],
            description: desc
        };
        products.push(newProduct);
    }

    saveProductsToStorage();
    closeArticleModal();
}

function deleteArticle(id) {
    if (confirm('Voulez-vous vraiment supprimer ce maillot de la boutique ?')) {
        products = products.filter(p => p.id !== id);
        saveProductsToStorage();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('article-image-file');
    if (fileInput) {
        fileInput.addEventListener('change', handleImageUpload);
    }

    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 1600);
    }

    updateImagePreview(BAYERN_JERSEY_IMG);
    renderBestSeller();
    renderProducts();
    renderCartModal();
});
