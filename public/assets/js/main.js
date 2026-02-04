// NodeTool AI Inspired Interactions

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initScrollAnimations();
  initCategoryFilter();
  initSearch();
  initMobileMenu();
  initSmoothScroll();
  initTypingEffect();
});

// Scroll animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // Stagger animation for cards
  const staggerCards = document.querySelectorAll('.features-grid .card, .articles-grid .article-card');
  staggerCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Category filter
function initCategoryFilter() {
  const categoryTags = document.querySelectorAll('.category-tag');

  categoryTags.forEach(tag => {
    tag.addEventListener('click', function() {
      // Update active state
      categoryTags.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const category = this.dataset.category;
      const articles = document.querySelectorAll('.article-card');

      articles.forEach(article => {
        if (category === 'all' || article.dataset.category === category) {
          article.style.display = '';
          article.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (!searchInput) return;

  let debounceTimer;

  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      const query = this.value.toLowerCase();
      const articles = document.querySelectorAll('.article-card');

      articles.forEach(article => {
        const title = article.querySelector('.article-title').textContent.toLowerCase();
        const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();

        if (title.includes(query) || excerpt.includes(query)) {
          article.style.display = '';
        } else {
          article.style.display = 'none';
        }
      });
    }, 300);
  });
}

// Mobile menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('active');
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Typing effect for hero text
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-effect');
  if (!typingElement) return;

  const words = ['Developer', 'Designer', 'Creator', 'Innovator'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Particle background effect
function createParticles() {
  const canvas = document.createElement('canvas');
  canvas.classList.add('particle-canvas');
  document.querySelector('.bg-animation').appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Newsletter form handling
function handleNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // Show success message
    const message = document.createElement('div');
    message.className = 'newsletter-message';
    message.textContent = 'Thanks for subscribing!';
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 16px 24px;
      border-radius: 10px;
      font-weight: 500;
      z-index: 1000;
      animation: fadeInUp 0.3s ease;
    `;

    document.body.appendChild(message);

    setTimeout(() => {
      message.style.animation = 'fadeInUp 0.3s ease reverse';
      setTimeout(() => message.remove(), 300);
    }, 3000);

    this.reset();
  });
}

// Reading time calculator
function calculateReadingTime() {
  const articles = document.querySelectorAll('.article-card');

  articles.forEach(article => {
    const content = article.querySelector('.article-content');
    const text = content ? content.textContent : '';
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);

    const readingTime = document.createElement('span');
    readingTime.className = 'reading-time';
    readingTime.innerHTML = `<i class="ri-time-line"></i> ${minutes} min read`;

    const meta = article.querySelector('.article-meta');
    if (meta) {
      meta.appendChild(readingTime);
    }
  });
}

// Copy code button
function addCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="ri-file-copy-line"></i>';
    button.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 8px;
      background: var(--bg-tertiary);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
    `;

    button.addEventListener('click', function() {
      const code = block.querySelector('code').textContent;
      navigator.clipboard.writeText(code);

      this.innerHTML = '<i class="ri-check-line"></i>';
      this.style.color = 'var(--node-green)';

      setTimeout(() => {
        this.innerHTML = '<i class="ri-file-copy-line"></i>';
        this.style.color = '';
      }, 2000);
    });

    block.style.position = 'relative';
    block.appendChild(button);
  });
}

// Intersection Observer for lazy loading images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Theme toggle (if needed)
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    this.innerHTML = isDark ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
  });
}

// Export functions for global use
window.NodeToolBlog = {
  createParticles,
  handleNewsletterForm,
  calculateReadingTime,
  addCopyButtons,
  initLazyLoading,
  initThemeToggle
};
