// Mobile Menu Toggle
// Basic vanilla JavaScript implementation
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navLinks = document.getElementById("navLinks")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")

    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll("span")
    spans[0].style.transform = navLinks.classList.contains("active") ? "rotate(45deg) translateY(10px)" : "none"
    spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1"
    spans[2].style.transform = navLinks.classList.contains("active") ? "rotate(-45deg) translateY(-10px)" : "none"
  })
}

// Gallery Filter System
// Pure JavaScript implementation for filtering gallery items
const filterButtons = document.querySelectorAll(".filter-btn")
const galleryItems = document.querySelectorAll(".gallery-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const filterValue = this.getAttribute("data-filter")

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    this.classList.add("active")

    // Filter gallery items
    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category")

      if (filterValue === "all" || category === filterValue) {
        item.classList.remove("hidden")
        // Fade in animation
        item.style.animation = "fadeIn 0.5s ease"
      } else {
        item.classList.add("hidden")
      }
    })
  })
})

// Newsletter Form Handler
const newsletterForm = document.getElementById("newsletterForm")
const formMessage = document.getElementById("formMessage")

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const emailInput = this.querySelector('input[type="email"]')
    const email = emailInput.value

    // Basic email validation
    if (email && email.includes("@")) {
      formMessage.textContent = "Thank you for subscribing!"
      formMessage.className = "form-message success"
      emailInput.value = ""

      // Hide message after 3 seconds
      setTimeout(() => {
        formMessage.textContent = ""
        formMessage.className = "form-message"
      }, 3000)
    } else {
      formMessage.textContent = "Please enter a valid email address."
      formMessage.className = "form-message error"
    }
  })
}

// Smooth Scrolling for Internal Links
// Enhanced user experience with smooth scrolling
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

// Add fade-in animation keyframes dynamically
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Scroll to Top Button (appears after scrolling)
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Add shadow to navbar on scroll
  const navbar = document.querySelector(".navbar")
  if (scrollTop > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})
