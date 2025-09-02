// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger menu
      const spans = navToggle.querySelectorAll("span")
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const spans = navToggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10, 10, 10, 0.98)"
    } else {
      navbar.style.background = "rgba(10, 10, 10, 0.95)"
    }
  })

  // Animate elements on scroll
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

  // Observe service cards and testimonials
  const animatedElements = document.querySelectorAll(".service-card, .testimonial-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Form validation (for contact forms)
function validateForm(formId) {
  const form = document.getElementById(formId)
  if (!form) return false

  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "#ff4444"
      isValid = false
    } else {
      field.style.borderColor = "#d4af37"
    }
  })

  // Email validation
  const emailFields = form.querySelectorAll('input[type="email"]')
  emailFields.forEach((field) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (field.value && !emailRegex.test(field.value)) {
      field.style.borderColor = "#ff4444"
      isValid = false
    }
  })

  return isValid
}

// WhatsApp integration
function openWhatsApp(message = "") {
  const phoneNumber = "15551234567" // Replace with actual number
  const encodedMessage = encodeURIComponent(message || "Hola, me interesa una consulta sobre sus servicios esotéricos.")
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappURL, "_blank")
}

// Add WhatsApp floating button
document.addEventListener("DOMContentLoaded", () => {
  const whatsappButton = document.createElement("div")
  whatsappButton.innerHTML = `
        <a href="#" onclick="openWhatsApp(); return false;" class="whatsapp-float">
            <span>💬</span>
        </a>
    `
  whatsappButton.innerHTML += `
        <style>
            .whatsapp-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 20px;
                right: 20px;
                background: #25d366;
                color: white;
                border-radius: 50%;
                text-align: center;
                font-size: 24px;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s ease;
            }
            .whatsapp-float:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
            }
        </style>
    `
  document.body.appendChild(whatsappButton)
})
