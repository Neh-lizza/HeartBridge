
    const toggleBtn = document.getElementById("mobileToggle");
    const nav = document.getElementById("navLinks");
    const navbar = document.getElementById("navbar");

    // Mobile menu toggle
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        nav.classList.remove("show");
        toggleBtn.classList.remove("active");
      }
    });

    // Close mobile menu when clicking a link
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        toggleBtn.classList.remove("active");
      });
    });

    // Navbar scroll effects
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      
      // Add scrolled class for styling
      if (currentScroll > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }
      
      lastScroll = currentScroll;
    });

    // Set active link based on current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a:not(.btn-heart)").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
 