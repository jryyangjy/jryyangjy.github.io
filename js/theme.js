// Theme Management System
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.systemTheme = this.getSystemTheme();
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupThemeToggle();
    this.setupSystemThemeDetection();
    this.setupThemePersistence();
  }

  setupThemeToggle() {
    // Create theme toggle button if it doesn't exist
    if (!document.querySelector('.theme-toggle')) {
      this.createThemeToggleButton();
    }

    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });

      // Add keyboard shortcut (Ctrl/Cmd + Shift + T)
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }
  }

  createThemeToggleButton() {
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle theme');
    button.innerHTML = '<span class="theme-icon">🌙</span>';

    // Add to navbar
    const navbar = document.querySelector('.navbar .nav-container');
    if (navbar) {
      navbar.appendChild(button);
    }
  }

  setupSystemThemeDetection() {
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set theme
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          this.applyTheme(newTheme);
        }
      });
    }
  }

  setupThemePersistence() {
    // Save theme preference on unload
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('theme', this.currentTheme);
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.saveThemePreference();

    // Add transition class for smooth theme switching
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 300);
  }

  applyTheme(theme) {
    // Remove all theme classes
    document.body.classList.remove('light', 'dark', 'theme-transitioning');

    // Apply new theme
    document.body.classList.add(theme);

    // Update CSS custom properties for dynamic theming
    this.updateCSSVariables(theme);

    // Update theme toggle button
    this.updateThemeToggleButton(theme);

    // Update meta theme-color
    this.updateMetaThemeColor(theme);

    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: theme }
    }));
  }

  updateCSSVariables(theme) {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#1a202c');
      root.style.setProperty('--text-color', '#e2e8f0');
      root.style.setProperty('--card-bg', '#2d3748');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#222222');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.08)');
    }
  }

  updateThemeToggleButton(theme) {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      const icon = toggleButton.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
        icon.style.transform = 'scale(1)';
        setTimeout(() => {
          icon.style.transform = 'scale(1.2)';
          setTimeout(() => {
            icon.style.transform = 'scale(1)';
          }, 150);
        }, 50);
      }

      // Update aria-label
      toggleButton.setAttribute('aria-label',
        theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
      );
    }
  }

  updateMetaThemeColor(theme) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#667eea' : '#1a202c';
    }
  }

  saveThemePreference() {
    try {
      localStorage.setItem('theme', this.currentTheme);
    } catch (e) {
      console.warn('Unable to save theme preference to localStorage');
    }
  }

  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.currentTheme = theme;
      this.applyTheme(theme);
      this.saveThemePreference();
    }
  }

  resetToSystemTheme() {
    localStorage.removeItem('theme');
    this.currentTheme = this.getSystemTheme();
    this.applyTheme(this.currentTheme);
  }
}

// High contrast mode support
class AccessibilityManager {
  constructor() {
    this.highContrastMode = localStorage.getItem('highContrast') === 'true';
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    this.applyAccessibilitySettings();
    this.setupAccessibilityControls();
  }

  setupAccessibilityControls() {
    // High contrast toggle (Ctrl + Alt + H)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'h') {
        e.preventDefault();
        this.toggleHighContrast();
      }
    });

    // Font size adjustment (Ctrl + '+' / Ctrl + '-')
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        this.increaseFontSize();
      } else if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        this.decreaseFontSize();
      }
    });
  }

  toggleHighContrast() {
    this.highContrastMode = !this.highContrastMode;
    this.applyAccessibilitySettings();
    localStorage.setItem('highContrast', this.highContrastMode.toString());
  }

  applyAccessibilitySettings() {
    if (this.highContrastMode) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (this.reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
  }

  increaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = Math.min(currentSize + 2, 24); // Max 24px
    document.documentElement.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize + 'px');
  }

  decreaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = Math.max(currentSize - 2, 14); // Min 14px
    document.documentElement.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize + 'px');
  }

  resetFontSize() {
    document.documentElement.style.fontSize = '';
    localStorage.removeItem('fontSize');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  window.themeManager = new ThemeManager();

  // Initialize accessibility manager
  window.accessibilityManager = new AccessibilityManager();

  console.log('🎨 Theme and accessibility systems initialized');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeManager, AccessibilityManager };
}