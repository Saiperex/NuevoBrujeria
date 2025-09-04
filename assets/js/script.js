document.addEventListener("DOMContentLoaded", () => {
    // Menu deslizable
    const menuIcon = document.querySelector(".fa-bars-staggered")
    const menu = document.querySelector(".menu_mid")
    const body = document.body

    if (menuIcon && menu) {
        // Toggle del menú
        menuIcon.addEventListener("click", (e) => {
            e.stopPropagation()
            toggleMenu()
        })

        // Cerrar menú al hacer click en el botón de cerrar (::before)
        menu.addEventListener("click", (e) => {
            if (e.target === menu) {
                closeMenu()
            }
        })

        // Cerrar menú al hacer click fuera
        document.addEventListener("click", (e) => {
            if (menu.classList.contains("menu_activo") && !menu.contains(e.target) && !menuIcon.contains(e.target)) {
                closeMenu()
            }
        })

        // Cerrar menú con tecla Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && menu.classList.contains("menu_activo")) {
                closeMenu()
            }
        })

        function toggleMenu() {
            menu.classList.toggle("menu_activo")
            body.classList.toggle("menu-abierto")
        }

        function closeMenu() {
            menu.classList.remove("menu_activo")
            body.classList.remove("menu-abierto")
        }

        // Cerrar menú móvil al hacer click en un enlace
        const menuLinks = document.querySelectorAll(".menu_mid a")
        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (menu.classList.contains("menu_activo")) {
                    closeMenu()
                }
            })
        })
    }

    const Swiper = window.Swiper // Declare the Swiper variable here
    if (typeof Swiper !== "undefined") {
        // Swiper para servicios
        if (document.querySelector(".servicios_swiper")) {
            var swiper = new Swiper(".servicios_swiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 30,
                lazy: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
            })
        }
        // Swiper para testimonios
        if (document.querySelector(".testimonial_swiper")) {
            var swiperTestimonios = new Swiper(".testimonial_swiper", {
                slidesPerView: 1,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    },
                },
            })
        }
    }

    // Filtros de galería
    const filtrosBtns = document.querySelectorAll(".filtro_btn")
    const galeriaItems = document.querySelectorAll(".galeria_item")

    if (filtrosBtns.length > 0) {
        filtrosBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                // Remover clase activa de todos los botones
                filtrosBtns.forEach((b) => b.classList.remove("activo"))
                // Agregar clase activa al botón clickeado
                btn.classList.add("activo")

                const filtro = btn.getAttribute("data-filter")

                galeriaItems.forEach((item) => {
                    if (filtro === "todos" || item.getAttribute("data-categoria") === filtro) {
                        item.style.display = "block"
                    } else {
                        item.style.display = "none"
                    }
                })
            })
        })
    }

    // Formulario de contacto
    const contactForm = document.getElementById("contactForm")

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Obtener datos del formulario
            const formData = new FormData(this)
            const nombre = formData.get("nombre")
            const servicio = formData.get("servicio")
            const urgencia = formData.get("urgencia")
            const mensaje = formData.get("mensaje")

            // Crear mensaje para WhatsApp
            const whatsappMessage = `Hola Antonio, soy ${nombre}. 
          
  Servicio solicitado: ${servicio}
  Urgencia: ${urgencia}

  Mensaje: ${mensaje}

  Espero tu respuesta. Gracias.`

            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage)

            // Abrir WhatsApp
            window.open(`https://wa.me/351XXXXXXX?text=${encodedMessage}`, "_blank")
        })
    }

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    // Aplicar animaciones a elementos
    const animatedElements = document.querySelectorAll(
        ".servicio_detalle, .filosofia_item, .testimonio_card, .galeria_item",
    )

    animatedElements.forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(el)
    })

    // Contador animado para estadísticas
    const animateCounters = () => {
        const counters = document.querySelectorAll(".stat_numero, .numero")

        counters.forEach((counter) => {
            const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
            const increment = target / 100
            let current = 0

            const updateCounter = () => {
                if (current < target) {
                    current += increment
                    if (counter.textContent.includes("%")) {
                        counter.textContent = Math.ceil(current) + "%"
                    } else if (counter.textContent.includes("+")) {
                        counter.textContent = Math.ceil(current) + "+"
                    } else {
                        counter.textContent = Math.ceil(current)
                    }
                    requestAnimationFrame(updateCounter)
                } else {
                    counter.textContent = counter.textContent // Restaurar texto original
                }
            }

            // Iniciar animación cuando el elemento sea visible
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateCounter()
                        counterObserver.unobserve(entry.target)
                    }
                })
            })

            counterObserver.observe(counter)
        })
    }
    // Inicializar contadores
    animateCounters()
});

document.addEventListener("DOMContentLoaded", function() {
    // Referencias a los elementos
    const whatsappButton = document.getElementById("whatsapp-button");
    const whatsappChat = document.getElementById("whatsapp-chat");
    const chatHeader = document.getElementById("whatsapp-chat-header");
    const closeButton = document.querySelector("#whatsapp-chat-header .close-btn");
    const inputMessage = document.getElementById("whatsapp-chat-input");
    const sendButton = document.getElementById("send-message");

    // Mostrar el chat cuando se haga clic en el botón de WhatsApp
    whatsappButton.addEventListener("click", function() {
        whatsappChat.style.display = "block";
        whatsappButton.style.display = "none"; // Ocultar el icono de WhatsApp
    });

    // Ocultar el chat cuando se haga clic en la "X"
    closeButton.addEventListener("click", function() {
        whatsappChat.style.display = "none";
        whatsappButton.style.display = "flex"; // Mostrar el icono de WhatsApp
        inputMessage.value = ''; // Limpiar el contenido del input
    });

    // Enviar el mensaje a WhatsApp
    sendButton.addEventListener("click", function() {
        const message = inputMessage.value.trim();
        if (message) {
            // Redirigir a WhatsApp con el mensaje
            window.open(`https://wa.me/351XXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
            // Cerrar el chat y limpiar el input
            whatsappChat.style.display = "none";
            whatsappButton.style.display = "flex";
            inputMessage.value = ''; // Limpiar el contenido del input
        }
    });
});

