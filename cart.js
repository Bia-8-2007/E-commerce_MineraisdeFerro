// Minerais de Ferro - E-commerce Product Catalog and Shopping Cart System

// Global Product Catalog
const PRODUCTS = [
    {
        id: 1,
        name: "Quartzo Rosa Bruto",
        price: 89.00,
        category: "Brutos",
        tag: "DESTAQUE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBebxH43VrMLeeg4bJ3XoMxO9C4oVsTHQ4VbdAgkHXi30ycKek9lpKPcu4swxG-jQp2EKNutiEW0617gQoEYxo3n3KeiqhSHRjVLwRz_7ZEvmLt7guZBOBZgwmtTthZDR-ZI5Jn5xithE6uiilkVsgAY0dG9kyva-FXMgpgRyhVvKEv2hZbUiMvEOW2HJnRMk9KT5AGehDJc5CadmfYIN97dZHuG0NV79BAdMmMM6glufidwPedW8cFSAld7VvFL-QpXiHurrV3-6iM",
        description: "Belo exemplar de Quartzo Rosa bruto com formações cristalinas profundas, simbolizando harmonia e amor. Perfeito para decoração e colecionadores.",
        details: { weight: "450g", origin: "Minas Gerais, Brasil", size: "12cm x 8cm", rating: 5 }
    },
    {
        id: 2,
        name: "Pirita Colecionador",
        price: 145.00,
        category: "Brutos",
        tag: "RARO",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6RKjPMj_0Djx42JnVjHOQEJH7VrXIpwBJdZNhT23X1SoVepZKJBlrLXCamYVIAbTiEK1piwCsZC3eEG2RtuD02eVXmv7p40Gd7w-y23C-jmXJjbpXniIpqWCoDx5n7T1VdAgrK_koaMsR1XXg41Uc3Uo_F-3nEEAwr3XPRdCwD1V0M7waS3EOB4pecgF7hK4vkfqNyz_m9z5VChnKELc7taOu4ey_S_AnCoD6vCgxS7VeT6gPWTyR-Hh5dTQg3Ezl2SgF_dDStvMX",
        description: "Aglomerado de cristais de Pirita dourada, conhecida como o 'ouro dos tolos'. Apresenta brilho metálico exuberante em formato cúbico natural.",
        details: { weight: "320g", origin: "Peru", size: "8cm x 6cm", rating: 5 }
    },
    {
        id: 3,
        name: "Ametista Catedral",
        price: 210.00,
        category: "Lapidados",
        tag: "EXCLUSIVO",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMHjgZDwY6BO26Fzk5V0Zq7PfBgKQkiqk7R6lT089bAa0AhGjH_kYmeJODMJiCY0w4OTEDMUZNe31dn8il364jImdVjvt-w3_fPshbk82rOxiKiXrw_1MkPpevNeZhgRSEVs8ZVpwFZlEGdm-7ryCA3UGY-KefHDoShgLymiRNHbGqv3pF12yPaKF4h2Pc1NGnTO2CAdrU_fWNg2ImSIMMH4g7pcon4GUV5GY-YTgMPbCWOe2QDjO6HRoEOJuOiUSMplSyZXhcGQYm",
        description: "Drusa de Ametista roxa profunda originária de geodos vulcânicos. Suas pontas cristalinas refletem a luz criando um efeito místico único.",
        details: { weight: "1.2kg", origin: "Rio Grande do Sul, Brasil", size: "18cm x 11cm", rating: 5 }
    },
    {
        id: 4,
        name: "Hematita Metálica",
        price: 65.00,
        category: "Brutos",
        tag: "CLÁSSICO",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWZWSXyUwwrkO8m16njva_VRoMvoB8Cp8QLbv1XniJAhgB76O-YiAIhG94BhhCk1i4KJveZ27heHUVdkeNA9ApLZx6GF3YZVM8SENdRO9I0alO1n7brJDAZit3j0U1kA9SWudg7jQtHMsAO-xILVVBQyT1kxw6rynYoEwS7x59UuJEXywgM85VpCxiyQ-oJ_EPCsBavEa-qPKrAsX_mmr60-2-wT7IRqx_oEpOXMmu6Xw306YzWQdnIXQpPgxZqTFGkMyAydqG3PGE",
        description: "Espécime polido de Hematita com alto brilho metálico prateado-escuro. Um mineral denso de óxido de ferro muito valorizado.",
        details: { weight: "280g", origin: "Minas Gerais, Brasil", size: "7cm x 5cm", rating: 4 }
    },
    {
        id: 5,
        name: "Colar Turmalina Negra",
        price: 180.00,
        category: "Joias",
        tag: "NOVO",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA6gt-twwblY_217BLplahn3WjPibq0r5TymtVrNegUV5wnrwLSLFjmTo5k0guhM7mXP93ytgGtIEPE34V_QI0hc9izjutKDWecYPm9M5rTEelSkFDsEUm4DZGNEnrA4dIBz2z-Mo6dlpzCblFUdW423P3z8Du2tlXgQTXgN1GRr3jSe7sKPys8EUJUnn_hOiQRWxolX2ma4alFxqmkWjJ70_IPcJv7rftmW6b1CyIseLP2RCJ0vjGa4iMsN2X-shGWlmCJ66g8kRH",
        description: "Pingente de Turmalina Negra bruta montado em elegante corrente de prata 950. Proteção energética e sofisticação em uma única peça.",
        details: { weight: "45g (total)", origin: "Lapidado localmente", size: "Corrente 50cm, Pingente 3cm", rating: 5 }
    },
    {
        id: 6,
        name: "Escultura Jaspe Vermelho",
        price: 320.00,
        category: "Artesanato",
        tag: "EXCLUSIVO",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfuVhwLYERHToFVLjR-MlzE8A3qp1cutU60W8V7bdTSaFIP6p75y7DBtuXXcJko9ro_mY5z_hEnOyOmNEXzVFHuTa_VqcCm6wG1SRgdOO0eC9sF6OCRwcp0VemvMjQJQ7gsm7uRb8rlIg4qFVAKBGAQq-CC8PML6IGcge0abloMNpgs5tyPlIldsF1FRXi__557qSFkWEmKEv-nkSsFhkkSq4MBYOry_NzvA3WJk4Ur5JtCLx4zknZjQDUob2DgfFZJ4TATY0jZjEc",
        description: "Peça decorativa esculpida à mão em Jaspe Vermelho natural. Exibe padrões terrosos únicos e textura acetinada após polimento meticuloso.",
        details: { weight: "980g", origin: "Bahia, Brasil", size: "15cm x 10cm", rating: 5 }
    }
];

// Cart State Manager
let cart = [];

// Initialize Cart System
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    injectCartDrawerUI();
    bindCartEvents();
    updateCartUI();
});

// Load cart from LocalStorage
function loadCartFromStorage() {
    const storedCart = localStorage.getItem("site_minerios_cart");
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
        } catch (e) {
            cart = [];
        }
    }
}

// Save cart to LocalStorage
function saveCartToStorage() {
    localStorage.setItem("site_minerios_cart", JSON.stringify(cart));
}

// Inject Sliding Cart Drawer UI Dynamically
function injectCartDrawerUI() {
    if (document.getElementById("cart-drawer-panel")) return;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "cart-drawer-overlay";
    overlay.className = "cart-overlay";
    document.body.appendChild(overlay);

    // Create drawer
    const drawer = document.createElement("div");
    drawer.id = "cart-drawer-panel";
    drawer.className = "cart-drawer font-body-md text-primary";
    drawer.innerHTML = `
        <div class="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container">
            <h3 class="font-headline-lg text-headline-lg flex items-center gap-2">
                <span class="material-symbols-outlined">shopping_bag</span> Seu Carrinho
            </h3>
            <button id="cart-drawer-close" class="text-on-surface-variant hover:text-secondary premium-transition">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <div id="cart-items-container" class="flex-grow overflow-y-auto p-6 space-y-6">
            <!-- Items injected here -->
        </div>
        <div class="p-6 border-t border-outline-variant/30 bg-surface-container-low space-y-4">
            <div class="flex justify-between items-center text-body-lg font-bold">
                <span>Subtotal:</span>
                <span id="cart-subtotal-val">R$ 0,00</span>
            </div>
            <p class="text-sm text-on-surface-variant">O envio e taxas serão calculados no atendimento via WhatsApp.</p>
            <button id="cart-checkout-btn" class="w-full bg-secondary text-surface-bright py-4 font-label-md hover:bg-primary premium-transition flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">chat</span> FINALIZAR PEDIDO VIA WHATSAPP
            </button>
        </div>
    `;
    document.body.appendChild(drawer);

    // Overlay click closes drawer
    overlay.addEventListener("click", toggleCartDrawer);
    // Close button click closes drawer
    document.getElementById("cart-drawer-close").addEventListener("click", toggleCartDrawer);
    // Checkout button click
    document.getElementById("cart-checkout-btn").addEventListener("click", handleCheckout);
}

// Toggle Cart Drawer Visibility
function toggleCartDrawer() {
    const drawer = document.getElementById("cart-drawer-panel");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

// Add Item to Cart
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === parseInt(productId));
    if (!product) return;

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    
    // Auto open drawer to show success
    const drawer = document.getElementById("cart-drawer-panel");
    if (drawer && !drawer.classList.contains("active")) {
        toggleCartDrawer();
    }
}

// Remove Item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId));
    saveCartToStorage();
    updateCartUI();
}

// Update Item Quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === parseInt(productId));
    if (!item) return;

    item.quantity = parseInt(quantity);
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

// Calculate Total Price
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update Header Badges and Cart Drawer Items UI
function updateCartUI() {
    // 1. Update all shopping bag counter badges
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    const badges = document.querySelectorAll("button[aria-label='Carrinho'] span.absolute, button[aria-label='shopping_bag'] span.absolute");
    badges.forEach(badge => {
        badge.textContent = totalItems;
        if (totalItems === 0) {
            badge.style.display = "none";
        } else {
            badge.style.display = "flex";
        }
    });

    // 2. Render items in drawer container
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <span class="material-symbols-outlined text-5xl text-outline-variant">shopping_bag</span>
                <p class="text-body-lg text-on-surface-variant font-bold">Seu carrinho está vazio</p>
                <button onclick="toggleCartDrawer()" class="text-secondary border-b border-secondary font-label-md">VOLTAR À LOJA</button>
            </div>
        `;
        document.getElementById("cart-subtotal-val").textContent = "R$ 0,00";
        document.getElementById("cart-checkout-btn").disabled = true;
        document.getElementById("cart-checkout-btn").classList.add("opacity-50", "cursor-not-allowed");
        return;
    }

    document.getElementById("cart-checkout-btn").disabled = false;
    document.getElementById("cart-checkout-btn").classList.remove("opacity-50", "cursor-not-allowed");

    let html = "";
    cart.forEach(item => {
        html += `
            <div class="flex gap-4 items-center border-b border-outline-variant/20 pb-4">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover border border-outline-variant/30"/>
                <div class="flex-grow space-y-1">
                    <h4 class="font-bold text-body-md">${item.name}</h4>
                    <p class="text-secondary text-sm">R$ ${item.price.toFixed(2)}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 border border-outline-variant/40 flex items-center justify-center hover:bg-surface-container premium-transition">-</button>
                        <span class="w-8 text-center font-bold">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 border border-outline-variant/40 flex items-center justify-center hover:bg-surface-container premium-transition">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-outline hover:text-secondary premium-transition self-start">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        `;
    });
    container.innerHTML = html;

    // Update subtotal
    document.getElementById("cart-subtotal-val").textContent = `R$ ${getCartTotal().toFixed(2)}`;
}

// Bind Global click events (Add to cart & open cart buttons)
function bindCartEvents() {
    // Open cart click bindings
    document.querySelectorAll("button[aria-label='Carrinho'], button[aria-label='shopping_bag']").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleCartDrawer();
        });
    });

    // Add to cart click bindings on elements with custom attributes
    document.body.addEventListener("click", (e) => {
        const target = e.target.closest("[data-cart-add]");
        if (target) {
            e.preventDefault();
            const productId = target.getAttribute("data-cart-add");
            addToCart(productId);
        }
    });

    // Sticky nav behavior on scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("nav, header");
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        }
    });
}

// Compile WhatsApp Checkout Order Summary and Open WhatsApp
function handleCheckout() {
    if (cart.length === 0) return;

    let message = "Olá! Gostaria de fazer um pedido de minerais de luxo:\n\n";
    cart.forEach(item => {
        message += `• *${item.name}* (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Subtotal:* R$ ${getCartTotal().toFixed(2)}\n\n`;
    message += "Por favor, me informe o valor do frete e opções de pagamento.";

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
}
