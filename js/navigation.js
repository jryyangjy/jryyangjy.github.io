// Navigation System with SPA-like behavior
class NavigationManager {
  constructor() {
    this.currentPage = 'home';
    this.pageCache = new Map();
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupKeyboardNavigation();
    this.setupURLHandling();
    this.initializePage();
  }

  setupEventListeners() {
    // Navigation link clicks
    document.addEventListener('click', (e) => {
      const navLink = e.target.closest('.nav-link');
      if (navLink) {
        e.preventDefault();
        const pageId = navLink.getAttribute('data-page');
        if (pageId) {
          this.navigateTo(pageId);
        }
      }
    });

    // Mobile menu toggle (if implemented)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && this.isMobileMenuOpen()) {
        this.closeMobileMenu();
      }
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape' && this.isMobileMenuOpen()) {
        this.closeMobileMenu();
      }

      // Number keys for quick navigation (1-9)
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[num - 1]) {
          const pageId = navLinks[num - 1].getAttribute('data-page');
          if (pageId) {
            this.navigateTo(pageId);
          }
        }
      }
    });
  }

  setupURLHandling() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
      const pageId = e.state?.page || 'home';
      this.switchToPage(pageId, false); // Don't update URL again
    });

    // Handle initial URL
    const initialPath = window.location.pathname.substring(1) || 'home';
    if (initialPath !== 'home') {
      this.navigateTo(initialPath);
    }
  }

  initializePage() {
    // Show home page by default
    this.switchToPage('home', false);

    // Add loading class to body initially
    document.body.classList.add('loading');

    // Remove loading class after initial render
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 100);
  }

  navigateTo(pageId, updateURL = true) {
    if (pageId === this.currentPage) return;

    // Validate page exists
    const targetPage = document.getElementById(pageId);
    if (!targetPage) {
      console.warn(`Page '${pageId}' not found`);
      return;
    }

    this.switchToPage(pageId, updateURL);
  }

  switchToPage(pageId, updateURL = true) {
    // Update navigation active state
    this.updateActiveNavLink(pageId);

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
      page.style.display = 'none';
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      targetPage.style.display = 'block';

      // Trigger animations
      this.animatePageEnter(targetPage);

      // Update current page
      this.currentPage = pageId;

      // Update URL
      if (updateURL) {
        const newURL = pageId === 'home' ? '/' : `/${pageId}`;
        window.history.pushState({ page: pageId }, '', newURL);

        // Update page title
        this.updatePageTitle(pageId);
      }

      // Trigger page-specific initialization
      this.initializePageContent(pageId);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavLink(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      }
    });
  }

  updatePageTitle(pageId) {
    const titles = {
      home: 'Jiayue Yang - USTC Computer Science',
      publications: 'Publications - Jiayue Yang',
      talks: 'Talks - Jiayue Yang',
      teaching: 'Teaching - Jiayue Yang',
      portfolio: 'Portfolio - Jiayue Yang',
      projects: 'Projects - Jiayue Yang',
      blog: 'Blog - Jiayue Yang',
      cv: 'CV - Jiayue Yang',
      guide: 'Guide - Jiayue Yang'
    };

    document.title = titles[pageId] || 'Jiayue Yang - USTC Computer Science';
  }

  animatePageEnter(page) {
    // Reset animation
    page.style.opacity = '0';
    page.style.transform = 'translateY(20px)';

    // Trigger animation
    requestAnimationFrame(() => {
      page.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      page.style.opacity = '1';
      page.style.transform = 'translateY(0)';
    });

    // Animate child elements with stagger
    const children = page.querySelectorAll('.fade-in');
    children.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';

      setTimeout(() => {
        child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  initializePageContent(pageId) {
    // Page-specific initialization
    switch (pageId) {
      case 'projects':
        this.initializeProjectsPage();
        break;
      case 'portfolio':
        this.initializePortfolioPage();
        break;
      case 'blog':
        this.initializeBlogPage();
        break;
    }

    // Refresh lazy loading for new content
    if (window.lazyLoader) {
      window.lazyLoader.refresh();
    }
  }

  initializeProjectsPage() {
    // Initialize project filters, animations, etc.
    console.log('Projects page initialized');
  }

  initializePortfolioPage() {
    // Initialize portfolio animations
    console.log('Portfolio page initialized');
  }

  initializeBlogPage() {
    // Initialize blog features
    console.log('Blog page initialized');
  }

  toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('mobile-open');
    }
  }

  closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.remove('mobile-open');
    }
  }

  isMobileMenuOpen() {
    const navLinks = document.querySelector('.nav-links');
    return navLinks && navLinks.classList.contains('mobile-open');
  }

  // Public API
  getCurrentPage() {
    return this.currentPage;
  }

  goHome() {
    this.navigateTo('home');
  }

  goBack() {
    window.history.back();
  }

  goForward() {
    window.history.forward();
  }
}

// Theme Manager
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupThemeToggle();
    this.setupSystemThemeDetection();
  }

  setupThemeToggle() {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Add keyboard shortcut (Ctrl/Cmd + Shift + T)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  setupSystemThemeDetection() {
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          // Only auto-switch if user hasn't manually set theme
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);

    // Update theme toggle button
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      const icon = toggleButton.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
      }
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#667eea' : '#1a202c';
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  window.navigationManager = new NavigationManager();

  // Initialize theme manager
  window.themeManager = new ThemeManager();

  console.log('🚀 Navigation and theme systems initialized');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NavigationManager, ThemeManager };
}