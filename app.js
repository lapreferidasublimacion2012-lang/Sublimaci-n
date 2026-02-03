/**
 * La Preferida Sublimaciones - App JavaScript
 * Versión optimizada para marketing y consultas
 */

// Datos de productos reales del negocio (sin precios)
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Camisa Personalizada Premium",
        categoria: "camisas",
        descripcion: "Camisa de alta calidad con diseños vibrantes y duraderos, 100% poliéster.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNY9m2aFzYA2_0Jh3_qnpvMD7TGr0uqHwThkP4jWTRlp0lvGWEyjdJDopMeI6Qc25p2KUMT3jmhnHHvYKqJEuCRHvHW52HhbFKelyAJuRTxYpAuzcb4CjXIGFjtE_B4tv1tI19aCMdlPt542AzQWiNlEjEWor64KnWY1DBCYWcoDyTxIN2SMAm941wUzGdPIVS83S5ygMcv4yDdi6-INdGooQ9a67MOn5hTvtLnLitTAGYKPIxeZ8MhdrkUAjKcW81zd6pKt01GBHc",
        destacado: true,
        tags: ["personalizada", "vibrante", "duradera", "poliester"]
    },
    {
        id: 2,
        nombre: "Taza de Cerámica Brillante",
        categoria: "tazas",
        descripcion: "Taza premium de 11oz con acabado brillante y bordes perfectos.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGRfk8BNznVjimhc9jQNySh_-ik2UsNgDo6l3_BGWN6pirvBP2qgS6CSQFBciCkIFYHqFH9E60NHhOFrKVshTSkEifeEwh1vBBvfP3r60rA5V5iVwi0VbrF1Xve1085EcDCmqtDOnPCSLikkJFSBbFzGsr5KHy_fbZqcOiXDJjFTlurBOzTwgHtMlTLUVx-BOWhKW8or-KAy0mXdS7EDMz_e_qoB-dUAR5BnQ8K_CLS4XYpFs7wS3SYiL0_0H4N7qugyOTSkvqtzS5",
        destacado: true,
        tags: ["cerámica", "brillante", "11oz", "taza"]
    },
    {
        id: 3,
        nombre: "Medias Estampadas Creativas",
        categoria: "medias",
        descripcion: "Diseños divertidos y originales para medias con acolchado extra.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbm0HNQOPAsC5YOxx7kQpOGbeNnsW0lrN7V6jB-qyldaYLCJXnBxuAOzjIwXH7rDwYg82EbY-2Gh7ZShFS27QARy4Owx5j4br9KQvmAo7orvOrJ5c10iQ9cXxBww5RX9-jUbPGvf6ezNOZms_hQ-6SoSCLchfoqieXtpHxJrFK7MWAklr_4oQLUB5FpKFimNhlA6vGFSB2wkwyqyMbIGbyv30X97EbA64rvycu-h7lan29bzy0XsUe1N3Zqehruy-Q7PWw4dnh268c",
        destacado: false,
        tags: ["creativas", "acolchado", "originales", "medias"]
    },
    {
        id: 4,
        nombre: "Termo Aislante Personalizado",
        categoria: "termos",
        descripcion: "Termo de acero inoxidable que mantiene la temperatura por horas.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZY-V_PxkayK-wtCN9kyISUdi_wuIcOItdEE9AIBOh04TohjuQhehnceXk3SUQUEu4jMm1i4Z1338lwVKE3_8jgRQTcnfjJEezwdwoxaKsAQCLefL6CRXmvZ3xu3ObBnbHbSNNtIC2Y6EqM31so3BQFls91oSH7xvwE6YzqzrqWRxOAPB-FVq-kNHh3iPQ124j0ojz6AbNAptDOFJjJYQeQ2HkLlboxKLMPzJMr3V_ShhFH1PvpblpazI8-JUfotiRT_IMzET0Gih",
        destacado: true,
        tags: ["aislante", "inoxidable", "personalizado", "termo"]
    },
    {
        id: 5,
        nombre: "Boxer Brief Cyber-Geom",
        categoria: "boxers",
        descripcion: "Boxer de lycra premium con diseños geométricos modernos.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvzAcpFTMqRj16EOguvhphRc6grM8VK0jmB0Mc6JHnXVHKsntWAnNP8hvKs3qpT7TBkXr6vYI0dIW_On8No54PNy32r5V2mchy-K6PPIhEQDv0V0AR_nfsnoGROoiz7IScqfY4ce6sKMHsGqHVjuuedWLbQBXbbZjP-OHJBg2PshxVEpWwV7enim_qpFJlQO9iFnVCzhiWeuPn1Vbkl9mg0W6KH92Vcm2o-VsVm2gHrSSWIxqOMHtAEQEFr00R0HUpNAp_PuHa0Tic",
        destacado: false,
        tags: ["lycra", "moderno", "boxer", "geometrico"]
    },
    {
        id: 6,
        nombre: "Popsocket Personalizado",
        categoria: "popsockets",
        descripcion: "Popsocket para celular con diseños únicos y agarre seguro.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd3HzLSVc9pJMQM1-rhPqP57ibDQOffWm-7LMWYmATe2fndvDZuax7NoXPHBVac9O4uiKnzgo0JRm9iaCRWjFiCFEAf3tBojjryOIJkJGznbBc9tC-pM9NuaiLP-pazqiwgAN7XaaRd0h0nAZBEzZcGBe9f0NOGZGOVsCogz-1yyzoiBEeA4yfUAaU3H5JX4WBmTmncD7RjB7kgyqfW82_dxmU7On4mJ-2Ub3tBwvhJkanYq1KwGo3BYRaHu1CtRY6VqSFBftBTTsH",
        destacado: false,
        tags: ["celular", "seguro", "único", "popsocket"]
    },
    {
        id: 7,
        nombre: "Taza Mágica Térmica",
        categoria: "tazas",
        descripcion: "Taza que cambia de color con el calor, perfecta para sorpresas.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMdJ9W0oXU95V6pnqI_6aMTJ7I9m1LO0dSn6QPgMqt9VnJFxaqg0F22EQh-QIntZysR89XkWORVHQthC8g58R27RhYuhPKe-zcCuvJN9lZGsAiJf7D_fdr5Q1piRH2dtyZL2W9nw5YrnrcvZmo2Uf7ofszhMHynXTyayi6RnQMGAyKZvE91LtrDtD_RwlSjS2NPB-iPf5H3rQRRYND415bUk4GPkKyJ5pilScMlzHwiSBwgOxhSl4Gmku3_PKpzvXpPGGqlTX8aXU8",
        destacado: true,
        tags: ["mágica", "térmica", "color", "taza"]
    },
    {
        id: 8,
        nombre: "Jarrito Enlozado Retro",
        categoria: "tazas",
        descripcion: "Jarrito clásico enlozado con diseño retro personalizado.",
        precio: "Consultar",
        imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKlUhzZCQ-_Kluw39Fnm4BUeYn5xszdfXmOe_suFqxZKz0Dj4XtFJP3n1ilcTrFMP1dY9izh0GjdzHfYL7NXa1RmYNTvsE8FGDbYBj6kH_CoLg108xKhW4BvMj1RiLWrI3-onbuFnAY_VlGqeBE2stfmNNsINZCvxg1wQlVrqe0RHdhP4kgsYOPJ24xdYc27enF4Czj9nslrzzQ3yWvzc8zNHBLeIjsBhvdRSfHRHYV8uW1vWXDZJmg2b2CQirpXztWxDt0raPntLJ",
        destacado: false,
        tags: ["retro", "enlozado", "jarrito", "clásico"]
    }
];

// Clase Carrito para manejar la lista de consulta
class Carrito {
    constructor() {
        this.items = this.cargarCarrito();
        this.renderBadge();
    }

    cargarCarrito() {
        try {
            const carritoGuardado = localStorage.getItem('carrito');
            return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        } catch (error) {
            console.error('Error al cargar la lista:', error);
            return [];
        }
    }

    guardarCarrito() {
        try {
            localStorage.setItem('carrito', JSON.stringify(this.items));
        } catch (error) {
            console.error('Error al guardar la lista:', error);
        }
        this.renderBadge();
    }

    agregar(producto) {
        const itemExistente = this.items.find(item => item.id === producto.id);
        
        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            this.items.push({
                ...producto,
                cantidad: 1
            });
        }
        
        this.guardarCarrito();
        this.mostrarNotificacion(`${producto.nombre} agregado a tu lista`, 'success');
    }

    eliminar(id) {
        const producto = this.items.find(item => item.id === id);
        this.items = this.items.filter(item => item.id !== id);
        this.guardarCarrito();
        if (producto) {
            this.mostrarNotificacion(`${producto.nombre} eliminado de tu lista`, 'info');
        }
    }

    actualizarCantidad(id, cambio) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.cantidad += cambio;
            if (item.cantidad < 1) {
                this.eliminar(id);
                return;
            }
            this.guardarCarrito();
        }
    }

    vaciar() {
        if (this.items.length > 0) {
            if (confirm('¿Estás seguro de que quieres vaciar tu lista?')) {
                this.items = [];
                this.guardarCarrito();
                this.mostrarNotificacion('Lista vaciada', 'info');
            }
        }
    }

    getTotalProductos() {
        return this.items.reduce((total, item) => total + item.cantidad, 0);
    }

    renderBadge() {
        const badge = document.getElementById('cartBadge');
        const total = this.getTotalProductos();
        
        if (badge) {
            badge.textContent = total;
            badge.classList.toggle('hidden', total === 0);
        }
    }

    renderItems() {
        const container = document.getElementById('cartItems');
        const totalElement = document.getElementById('cartTotal');
        
        if (!container) return;
        
        if (this.items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 fade-in">
                    <span class="material-symbols-outlined text-6xl text-gray-300 mb-4">list</span>
                    <p class="text-gray-500">Tu lista de consulta está vacía</p>
                    <p class="text-sm text-gray-400 mt-2">Agrega productos para consultar</p>
                </div>
            `;
            if (totalElement) totalElement.textContent = '0';
            return;
        }
        
        let html = '';
        this.items.forEach(item => {
            html += `
                <div class="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 fade-in" data-id="${item.id}">
                    <div class="flex items-center gap-4">
                        <div class="size-16 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                            <img src="${item.imagen}" alt="${item.nombre}" class="w-full h-full object-cover" loading="lazy">
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-gray-900 dark:text-white">${this.escapeHTML(item.nombre)}</h4>
                            <p class="text-sm text-gray-500">${item.cantidad} unidad(es)</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="size-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#222] transition-colors decrement-btn" data-id="${item.id}" aria-label="Reducir cantidad">
                            <span class="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span class="w-8 text-center font-medium text-gray-900 dark:text-white">${item.cantidad}</span>
                        <button class="size-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#222] transition-colors increment-btn" data-id="${item.id}" aria-label="Aumentar cantidad">
                            <span class="material-symbols-outlined text-[16px]">add</span>
                        </button>
                        <button class="ml-4 text-red-500 hover:text-red-700 remove-btn" data-id="${item.id}" aria-label="Eliminar producto">
                            <span class="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        if (totalElement) totalElement.textContent = this.getTotalProductos();
        
        // Agregar event listeners a los botones del carrito
        this.agregarEventListenersCarrito();
    }

    mostrarNotificacion(mensaje, tipo = 'success') {
        // Remover notificaciones anteriores
        document.querySelectorAll('.toast').forEach(toast => toast.remove());
        
        const toast = document.createElement('div');
        toast.className = `toast ${tipo}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        
        let icon = 'check_circle';
        if (tipo === 'error') icon = 'error';
        if (tipo === 'warning') icon = 'warning';
        if (tipo === 'info') icon = 'info';
        if (tipo === 'gold') icon = 'star';
        
        toast.innerHTML = `
            <span class="material-symbols-outlined">${icon}</span>
            <span>${mensaje}</span>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remover después de 3 segundos
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(20px)';
                setTimeout(() => toast.remove(), 300);
            }
        }, 3000);
    }

    generarMensajeWhatsApp(datosCliente) {
        const productosTexto = this.items.map(item => 
            `• ${item.nombre}: ${item.cantidad} unidad(es)`
        ).join('\n');
        
        const totalProductos = this.getTotalProductos();
        const fecha = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `¡Hola! Solicito información y cotización de los siguientes productos personalizados:

📋 **PRODUCTOS DE INTERÉS (${totalProductos} items):**
${productosTexto}

👤 **MIS DATOS:**
Nombre: ${datosCliente.nombre}
Teléfono: ${datosCliente.telefono}
${datosCliente.email ? `Email: ${datosCliente.email}` : ''}
${datosCliente.direccion ? `Dirección: ${datosCliente.direccion}` : ''}

💡 **Necesito información sobre:**
• Precios individuales y por cantidad
• Tiempos de entrega
• Opciones de personalización
• Requisitos para los diseños

📍 **Ubicación del local:** https://maps.app.goo.gl/p38Q9K4NACXtRibg6

📅 *Consulta realizada el ${fecha}*

Por favor envíenme toda la información necesaria para proceder. ¡Gracias!

*La Preferida Sublimaciones*`;
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    agregarEventListenersCarrito() {
        // Botones de incrementar/decrementar
        document.querySelectorAll('.increment-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').dataset.id);
                this.actualizarCantidad(id, 1);
                this.renderItems();
            });
        });

        document.querySelectorAll('.decrement-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').dataset.id);
                this.actualizarCantidad(id, -1);
                this.renderItems();
            });
        });

        // Botones de eliminar
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').dataset.id);
                this.eliminar(id);
                this.renderItems();
            });
        });
    }
}

// Clase principal de la aplicación
class LaPreferidaApp {
    constructor() {
        this.carrito = new Carrito();
        this.currentCategory = 'all';
        this.isLoading = false;
        this.init();
    }

    init() {
        this.renderProductos();
        this.setupEventListeners();
        this.setupSearch();
        this.setupSmoothScroll();
    }

    renderProductos(productos = PRODUCTOS) {
        const grid = document.getElementById('productsGrid');
        const loading = document.getElementById('loadingProducts');
        const empty = document.getElementById('emptyProducts');
        
        if (!grid) return;
        
        // Mostrar loading
        if (loading) loading.classList.remove('hidden');
        if (empty) empty.classList.add('hidden');
        
        setTimeout(() => {
            const productosFiltrados = this.currentCategory === 'all' 
                ? productos 
                : productos.filter(p => p.categoria === this.currentCategory);
            
            if (productosFiltrados.length === 0) {
                grid.innerHTML = '';
                if (loading) loading.classList.add('hidden');
                if (empty) empty.classList.remove('hidden');
                return;
            }
            
            let html = '';
            productosFiltrados.forEach(producto => {
                html += `
                    <div class="product-card fade-in" data-category="${producto.categoria}">
                        <div class="product-image-container">
                            <img src="${producto.imagen}" 
                                 alt="${producto.nombre}" 
                                 class="w-full h-full object-cover"
                                 loading="lazy"
                                 onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80'">
                            
                            ${producto.destacado ? `
                                <span class="product-badge">
                                    DESTACADO
                                </span>
                            ` : ''}
                            
                            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div class="flex justify-center gap-2">
                                    <button class="bg-accent-gold text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors quick-view-btn" data-id="${producto.id}">
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                                        ${this.formatCategory(producto.categoria)}
                                    </p>
                                    <h3 class="font-bold text-lg leading-tight line-clamp-1 text-gray-900 dark:text-white">${producto.nombre}</h3>
                                </div>
                                <span class="text-sm font-bold text-accent-gold">${producto.precio}</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">${producto.descripcion}</p>
                            <button onclick="app.agregarAlCarrito(${producto.id})" 
                                    class="w-full py-3 bg-accent-gold/10 hover:bg-accent-gold text-accent-gold hover:text-black rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                                    data-id="${producto.id}">
                                <span class="material-symbols-outlined text-[20px]">add</span>
                                Agregar a mi Lista
                            </button>
                        </div>
                    </div>
                `;
            });
            
            grid.innerHTML = html;
            if (loading) loading.classList.add('hidden');
            
            // Agregar event listeners a los botones de vista rápida
            this.setupQuickViewButtons();
            
        }, 300); // Pequeño delay para mejor UX
    }

    formatCategory(category) {
        const categories = {
            'camisas': 'Camisas',
            'tazas': 'Tazas',
            'medias': 'Medias',
            'boxers': 'Boxers',
            'termos': 'Termos',
            'popsockets': 'Popsockets'
        };
        return categories[category] || category;
    }

    agregarAlCarrito(id) {
        const producto = PRODUCTOS.find(p => p.id === id);
        if (producto) {
            this.carrito.agregar(producto);
            this.carrito.renderItems();
        }
    }

    setupQuickViewButtons() {
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(e.target.closest('button').dataset.id);
                const producto = PRODUCTOS.find(p => p.id === id);
                if (producto) {
                    this.mostrarVistaRapida(producto);
                }
            });
        });
    }

    mostrarVistaRapida(producto) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 fade-in';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'quick-view-title');
        
        modal.innerHTML = `
            <div class="bg-white dark:bg-[#1a1a1a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-accent-gold/20">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-6">
                        <h3 id="quick-view-title" class="text-2xl font-bold text-gray-900 dark:text-white">${producto.nombre}</h3>
                        <button class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 close-quick-view" aria-label="Cerrar vista rápida">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="rounded-xl overflow-hidden bg-gray-100 dark:bg-[#222]">
                            <img src="${producto.imagen}" 
                                 alt="${producto.nombre}" 
                                 class="w-full h-64 object-cover"
                                 onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80'">
                        </div>
                        
                        <div>
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Descripción</h4>
                                <p class="text-gray-600 dark:text-gray-300">${producto.descripcion}</p>
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Precio</h4>
                                <p class="text-lg font-bold text-accent-gold">${producto.precio} por WhatsApp</p>
                                <p class="text-sm text-gray-500 mt-1">Precios varían según diseño y cantidad</p>
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="font-bold text-lg mb-2 text-gray-900 dark:text-white">Categoría</h4>
                                <span class="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-sm font-bold rounded-full">
                                    ${this.formatCategory(producto.categoria)}
                                </span>
                            </div>
                            
                            <div class="flex gap-3">
                                <button class="flex-1 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-[#222] transition-colors close-quick-view text-gray-700 dark:text-gray-300">
                                    Cerrar
                                </button>
                                <button class="flex-1 py-3 bg-accent-gold text-black rounded-lg hover:bg-yellow-500 transition-colors add-to-cart-from-quickview" data-id="${producto.id}">
                                    <span class="material-symbols-outlined mr-2">add</span>
                                    Agregar a mi Lista
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners del modal
        modal.querySelector('.close-quick-view').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.add-to-cart-from-quickview').addEventListener('click', () => {
            this.agregarAlCarrito(producto.id);
            modal.remove();
            this.carrito.mostrarNotificacion(`${producto.nombre} agregado a tu lista`, 'gold');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Cerrar con ESC
        const closeModal = () => modal.remove();
        modal._closeHandler = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', modal._closeHandler);
        
        // Remover event listener cuando se cierra el modal
        modal._removeListeners = () => {
            document.removeEventListener('keydown', modal._closeHandler);
        };
        
        // Focus en el primer botón
        setTimeout(() => {
            modal.querySelector('button').focus();
        }, 100);
    }

    setupEventListeners() {
        // Botón de lista de consulta
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartOverlay = document.getElementById('cartOverlay');
        const clearCart = document.getElementById('clearCart');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const customerModal = document.getElementById('customerModal');
        const closeCustomerModal = document.getElementById('closeCustomerModal');
        const customerOverlay = document.getElementById('customerOverlay');
        const customerForm = document.getElementById('customerForm');
        const contactForm = document.getElementById('contactForm');
        const filterToggle = document.getElementById('filterToggle');
        const categoryFilters = document.getElementById('categoryFilters');

        // Abrir lista de consulta
        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                cartModal.classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('cartDrawer').classList.remove('translate-x-full');
                    document.getElementById('cartDrawer').classList.add('slide-in');
                }, 10);
                this.carrito.renderItems();
                cartIcon.setAttribute('aria-expanded', 'true');
            });
        }

        // Cerrar lista de consulta
        if (closeCart) {
            closeCart.addEventListener('click', () => {
                document.getElementById('cartDrawer').classList.add('translate-x-full');
                document.getElementById('cartDrawer').classList.remove('slide-in');
                setTimeout(() => {
                    cartModal.classList.add('hidden');
                }, 300);
                cartIcon.setAttribute('aria-expanded', 'false');
            });
        }

        // Cerrar lista al hacer click fuera
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => {
                document.getElementById('cartDrawer').classList.add('translate-x-full');
                document.getElementById('cartDrawer').classList.remove('slide-in');
                setTimeout(() => {
                    cartModal.classList.add('hidden');
                }, 300);
                cartIcon.setAttribute('aria-expanded', 'false');
            });
        }

        // Vaciar lista
        if (clearCart) {
            clearCart.addEventListener('click', () => {
                this.carrito.vaciar();
                this.carrito.renderItems();
            });
        }

        // Botón de consultar por WhatsApp
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (this.carrito.getTotalProductos() === 0) {
                    this.carrito.mostrarNotificacion('Agrega productos a tu lista primero', 'error');
                    return;
                }
                
                // Cerrar lista
                document.getElementById('cartDrawer').classList.add('translate-x-full');
                document.getElementById('cartDrawer').classList.remove('slide-in');
                setTimeout(() => {
                    cartModal.classList.add('hidden');
                    cartIcon.setAttribute('aria-expanded', 'false');
                }, 300);
                
                // Mostrar formulario de datos
                setTimeout(() => {
                    customerModal.classList.remove('hidden');
                }, 350);
            });
        }

        // Cerrar formulario de datos
        if (closeCustomerModal) {
            closeCustomerModal.addEventListener('click', () => {
                customerModal.classList.add('hidden');
            });
        }

        // Cerrar formulario al hacer click fuera
        if (customerOverlay) {
            customerOverlay.addEventListener('click', () => {
                customerModal.classList.add('hidden');
            });
        }

        // Enviar formulario de datos del cliente
        if (customerForm) {
            customerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const datosCliente = {
                    nombre: document.getElementById('customerName').value.trim(),
                    telefono: document.getElementById('customerPhone').value.trim(),
                    email: document.getElementById('customerEmail').value.trim() || '',
                    direccion: document.getElementById('customerAddress').value.trim() || ''
                };
                
                if (!datosCliente.nombre || !datosCliente.telefono) {
                    this.carrito.mostrarNotificacion('Por favor completa los campos obligatorios', 'error');
                    return;
                }
                
                if (!document.getElementById('acceptTerms').checked) {
                    this.carrito.mostrarNotificacion('Debes aceptar los términos para continuar', 'error');
                    return;
                }
                
                const mensaje = this.carrito.generarMensajeWhatsApp(datosCliente);
                const url = `https://wa.me/5842442208597?text=${encodeURIComponent(mensaje)}`;
                
                // Abrir WhatsApp en nueva pestaña
                window.open(url, '_blank', 'noopener,noreferrer');
                
                // Limpiar lista después de enviar
                setTimeout(() => {
                    this.carrito.vaciar();
                    this.carrito.renderItems();
                }, 1000);
                
                // Cerrar modal y resetear formulario
                customerModal.classList.add('hidden');
                customerForm.reset();
                
                this.carrito.mostrarNotificacion('Redirigiendo a WhatsApp...', 'gold');
            });
        }

        // Enviar formulario de contacto
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const nombre = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const mensaje = document.getElementById('message').value.trim();
                
                if (!nombre || !email || !mensaje) {
                    this.carrito.mostrarNotificacion('Por favor completa todos los campos', 'error');
                    return;
                }
                
                const mensajeWhatsApp = `¡Hola! Te contactan desde el sitio web de La Preferida Sublimaciones:

Nombre: ${nombre}
Email: ${email}
Mensaje: ${mensaje}

📍 Ubicación del local: https://maps.app.goo.gl/p38Q9K4NACXtRibg6

Por favor contáctame para más información. ¡Gracias!`;
                
                const url = `https://wa.me/5842442208597?text=${encodeURIComponent(mensajeWhatsApp)}`;
                window.open(url, '_blank', 'noopener,noreferrer');
                
                contactForm.reset();
                this.carrito.mostrarNotificacion('Redirigiendo a WhatsApp...', 'info');
            });
        }

        // Toggle de filtros en móvil
        if (filterToggle && categoryFilters) {
            filterToggle.addEventListener('click', () => {
                categoryFilters.classList.toggle('hidden');
                categoryFilters.classList.toggle('flex');
                categoryFilters.classList.add('flex-col', 'gap-2', 'mt-4', 'p-4', 'bg-white', 'dark:bg-[#1a1a1a]', 'rounded-xl', 'shadow-lg', 'border', 'border-gray-200', 'dark:border-gray-800');
            });
        }

        // Filtros de categoría
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                
                // Actualizar estado activo
                document.querySelectorAll('.category-filter').forEach(f => {
                    f.classList.remove('active');
                    if (!f.classList.contains('bg-accent-gold')) {
                        f.classList.add('bg-gray-100', 'dark:bg-[#1a1a1a]');
                    }
                    f.classList.remove('bg-accent-gold', 'text-black');
                });
                
                e.target.classList.add('active', 'bg-accent-gold', 'text-black');
                e.target.classList.remove('bg-gray-100', 'dark:bg-[#1a1a1a]');
                
                // Actualizar categoría actual y renderizar
                this.currentCategory = category;
                this.renderProductos();
                
                // Ocultar filtros en móvil después de seleccionar
                if (window.innerWidth < 768 && categoryFilters) {
                    categoryFilters.classList.add('hidden');
                    categoryFilters.classList.remove('flex');
                }
            });
        });

        // Manejar teclado en modales
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Cerrar carrito si está abierto
                if (!cartModal.classList.contains('hidden')) {
                    closeCart.click();
                }
                // Cerrar formulario de datos si está abierto
                if (!customerModal.classList.contains('hidden')) {
                    customerModal.classList.add('hidden');
                }
            }
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchInputMobile = document.getElementById('searchInputMobile');
        
        const performSearch = (query) => {
            query = query.toLowerCase().trim();
            
            if (query.length === 0) {
                this.currentCategory = 'all';
                this.renderProductos();
                return;
            }
            
            const productosFiltrados = PRODUCTOS.filter(producto =>
                producto.nombre.toLowerCase().includes(query) ||
                producto.descripcion.toLowerCase().includes(query) ||
                producto.tags.some(tag => tag.toLowerCase().includes(query)) ||
                producto.categoria.toLowerCase().includes(query)
            );
            
            this.renderProductos(productosFiltrados);
        };
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                performSearch(e.target.value);
            });
        }
        
        if (searchInputMobile) {
            searchInputMobile.addEventListener('input', (e) => {
                performSearch(e.target.value);
            });
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si estamos en un entorno seguro
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        console.warn('Para mejor seguridad, considera usar HTTPS');
    }
    
    // Inicializar aplicación
    window.app = new LaPreferidaApp();
    
    // Manejar errores de imágenes
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Error cargando imagen:', e.target.src);
            e.target.src = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80';
        }
    }, true);
    
    // Agregar clase loaded para animaciones
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Manejar errores no capturados
window.addEventListener('error', function(e) {
    console.error('Error no capturado:', e.error);
});

// Manejar promesas no capturadas
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promesa no capturada:', e.reason);
});