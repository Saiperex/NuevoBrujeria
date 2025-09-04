// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(17, 24, 39, 0.98)"
    } else {
      header.style.background = "rgba(17, 24, 39, 0.95)"
    }
  }
})

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        // Una vez que el elemento es visible, dejamos de observarlo para mejor performance
        fadeInObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

function initializeFadeInAnimations() {
  // Elementos del hero principal (index.html)
  const heroTitle = document.querySelector(".hero-text h1")
  const heroSubtitle = document.querySelector(".hero-text h2")
  const heroDescription = document.querySelector(".hero-text p")
  const heroButtons = document.querySelector(".hero-buttons")
  const maestroImage = document.querySelector(".maestro-image")

  if (heroTitle) {
    heroTitle.classList.add("fade-in-left")
    fadeInObserver.observe(heroTitle)
  }

  if (heroSubtitle) {
    heroSubtitle.classList.add("fade-in-left", "fade-in-delay-1")
    fadeInObserver.observe(heroSubtitle)
  }

  if (heroDescription) {
    heroDescription.classList.add("fade-in-left", "fade-in-delay-2")
    fadeInObserver.observe(heroDescription)
  }

  if (heroButtons) {
    heroButtons.classList.add("fade-in-left", "fade-in-delay-3")
    fadeInObserver.observe(heroButtons)
  }

  if (maestroImage) {
    maestroImage.classList.add("fade-in-right", "fade-in-delay-2")
    fadeInObserver.observe(maestroImage)
  }

  const serviceHeroContent = document.querySelector(".service-hero-content")
  if (serviceHeroContent) {
    const serviceTitle = serviceHeroContent.querySelector("h1")
    const serviceDescription = serviceHeroContent.querySelector("p")

    if (serviceTitle) {
      serviceTitle.classList.add("fade-in-up")
      fadeInObserver.observe(serviceTitle)
    }
    if (serviceDescription) {
      serviceDescription.classList.add("fade-in-up", "fade-in-delay-1")
      fadeInObserver.observe(serviceDescription)
    }
  }

  const serviceInfo = document.querySelector(".service-info")
  if (serviceInfo) {
    serviceInfo.classList.add("fade-in-left")
    fadeInObserver.observe(serviceInfo)
  }

  const serviceSidebar = document.querySelector(".service-sidebar")
  if (serviceSidebar) {
    serviceSidebar.classList.add("fade-in-right", "fade-in-delay-1")
    fadeInObserver.observe(serviceSidebar)
  }

  // Tarjetas de protección
  document.querySelectorAll(".protection-card").forEach((card, index) => {
    card.classList.add("fade-in-up", `fade-in-delay-${(index % 4) + 1}`)
    fadeInObserver.observe(card)
  })

  // Tarjetas de paquetes de prosperidad
  document.querySelectorAll(".package-card").forEach((card, index) => {
    card.classList.add("fade-in-up", `fade-in-delay-${(index % 3) + 1}`)
    fadeInObserver.observe(card)
  })

  // Beneficios de servicios
  document.querySelectorAll(".benefit-item").forEach((item, index) => {
    item.classList.add("fade-in-left", `fade-in-delay-${Math.min(index + 1, 4)}`)
    fadeInObserver.observe(item)
  })

  // Pasos del proceso
  document.querySelectorAll(".step").forEach((step, index) => {
    step.classList.add("fade-in-left", `fade-in-delay-${Math.min(index + 1, 4)}`)
    fadeInObserver.observe(step)
  })

  // Historias de éxito
  document.querySelectorAll(".story-card").forEach((card, index) => {
    card.classList.add("fade-in-up", `fade-in-delay-${(index % 3) + 1}`)
    fadeInObserver.observe(card)
  })

  // Banner de urgencia
  const urgencyBanner = document.querySelector(".urgency-banner")
  if (urgencyBanner) {
    urgencyBanner.classList.add("fade-in-up")
    fadeInObserver.observe(urgencyBanner)
  }

  // Testimonios mini
  document.querySelectorAll(".testimonial-mini").forEach((testimonial) => {
    testimonial.classList.add("fade-in-up", "fade-in-delay-2")
    fadeInObserver.observe(testimonial)
  })

  // CTA de servicios
  const serviceCta = document.querySelector(".service-cta .cta-content")
  if (serviceCta) {
    serviceCta.classList.add("fade-in-up")
    fadeInObserver.observe(serviceCta)
  }

  // Títulos de sección
  document.querySelectorAll(".section-title").forEach((title) => {
    title.classList.add("fade-in-up")
    fadeInObserver.observe(title)
  })

  // Tarjetas de servicios (página principal)
  document.querySelectorAll(".service-card").forEach((card, index) => {
    card.classList.add("fade-in-up", `fade-in-delay-${(index % 3) + 1}`)
    fadeInObserver.observe(card)
  })

  // Estadísticas
  document.querySelectorAll(".stat").forEach((stat, index) => {
    stat.classList.add("fade-in-up", `fade-in-delay-${index + 1}`)
    fadeInObserver.observe(stat)
  })

  // Contenido de testimonios (página principal)
  document.querySelectorAll(".testimonial-content").forEach((content) => {
    content.classList.add("fade-in-up")
    fadeInObserver.observe(content)
  })

  // Información de contacto
  const contactInfo = document.querySelector(".contact-info")
  const contactForm = document.querySelector(".contact-form")

  if (contactInfo) {
    contactInfo.classList.add("fade-in-left")
    fadeInObserver.observe(contactInfo)
  }

  if (contactForm) {
    contactForm.classList.add("fade-in-right", "fade-in-delay-2")
    fadeInObserver.observe(contactForm)
  }

  // Métodos de contacto
  document.querySelectorAll(".contact-method").forEach((method, index) => {
    method.classList.add("fade-in-left", `fade-in-delay-${index + 1}`)
    fadeInObserver.observe(method)
  })

  // Elementos de FAQ
  document.querySelectorAll(".faq-item").forEach((item, index) => {
    item.classList.add("fade-in-up", `fade-in-delay-${(index % 2) + 1}`)
    fadeInObserver.observe(item)
  })

  // Tipos de amarre
  document.querySelectorAll(".amarre-type").forEach((type, index) => {
    type.classList.add("fade-in-up", `fade-in-delay-${(index % 3) + 1}`)
    fadeInObserver.observe(type)
  })

  document.querySelectorAll(".fade-in").forEach((element) => {
    fadeInObserver.observe(element)
  })

  document.querySelectorAll(".fade-in-left").forEach((element) => {
    fadeInObserver.observe(element)
  })

  document.querySelectorAll(".fade-in-right").forEach((element) => {
    fadeInObserver.observe(element)
  })

  document.querySelectorAll(".fade-in-up").forEach((element) => {
    fadeInObserver.observe(element)
  })
}

// Testimonials Slider
let currentTestimonial = 0
const testimonials = document.querySelectorAll(".testimonial")
const totalTestimonials = testimonials.length

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active")
  })
  if (testimonials[index]) {
    testimonials[index].classList.add("active")
  }
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials
  showTestimonial(currentTestimonial)
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials
  showTestimonial(currentTestimonial)
}

// Testimonial controls
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

if (nextBtn) nextBtn.addEventListener("click", nextTestimonial)
if (prevBtn) prevBtn.addEventListener("click", prevTestimonial)

// Auto-advance testimonials
if (totalTestimonials > 0) {
  setInterval(nextTestimonial, 5000)
}

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.nombre || !data.email || !data.telefono || !data.servicio || !data.mensaje) {
      alert("Por favor, completa todos los campos.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert("Por favor, ingresa un email válido.")
      return
    }

    // Show success message
    alert("¡Gracias por tu consulta! Te contactaré pronto para ayudarte.")

    // Reset form
    this.reset()

    // In a real implementation, you would send this data to a server
    console.log("Form data:", data)
  })
}

function addLoadingStates() {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.type === "submit" || this.classList.contains("submit-btn")) {
        e.preventDefault()

        const originalText = this.textContent
        this.textContent = "Enviando..."
        this.style.opacity = "0.7"
        this.style.pointerEvents = "none"

        setTimeout(() => {
          this.textContent = originalText
          this.style.opacity = "1"
          this.style.pointerEvents = "auto"
        }, 2000)
      }
    })
  })
}

function handleResponsiveChanges() {
  let resizeTimeout

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      // Recalcular animaciones si es necesario
      const isMobile = window.innerWidth <= 768

      // Ajustar navegación móvil
      if (!isMobile && navMenu) {
        navMenu.classList.remove("active")
        if (hamburger) hamburger.classList.remove("active")
      }

      // Reinicializar slider de testimonios si es necesario
      if (testimonials.length > 0) {
        showTestimonial(currentTestimonial)
      }
    }, 250)
  })

  // Manejar cambios de orientación
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      // Forzar recálculo de layout después del cambio de orientación
      window.dispatchEvent(new Event("resize"))
    }, 100)
  })
}

function initializeWebsite() {
  // Inicializar animaciones fade-in
  initializeFadeInAnimations()

  // Inicializar estados de carga
  addLoadingStates()

  // Inicializar manejo responsive
  handleResponsiveChanges()

  // Mostrar primer testimonio si existe
  if (testimonials.length > 0) {
    showTestimonial(0)
  }

  console.log("%c🌟 Rituales y Pactos Poderosos 🌟", "color: #8B5CF6; font-size: 20px; font-weight: bold;")
  console.log("%cMaestro Antonio Vasquez - Brujo Especialista", "color: #F59E0B; font-size: 14px;")
  console.log("%cSitio web con animaciones fade-in y diseño responsive", "color: #EC4899; font-size: 12px;")
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWebsite)
} else {
  initializeWebsite()
}

function preloadCriticalImages() {
  const criticalImages = ["images/inicio.webp", "images/perfil.png", "images/logo.png"]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Precargar imágenes críticas
preloadCriticalImages()


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
