// Lazy Loading System for Images and Resources
class LazyLoader {
  constructor() {
    this.imageObserver = null;
    this.resourceObserver = null;
    this.init();
  }

  init() {
    this.setupImageLazyLoading();
    this.setupResourceLazyLoading();
    this.preloadCriticalResources();
  }

  // Image lazy loading with Intersection Observer
  setupImageLazyLoading() {
    // Check if browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
      this.loadAllImages();
      return;
    }

    this.imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px 0px', // Start loading 50px before image enters viewport
      threshold: 0.01
    });

    // Observe all lazy images
    this.observeImages();
  }

  observeImages() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach(img => {
      this.imageObserver.observe(img);
    });
  }

  loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    // Create a new image to preload
    const newImg = new Image();

    newImg.onload = () => {
      img.src = src;
      img.classList.remove('lazy-image');
      img.classList.add('loaded');

      // Add fade-in animation
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease';

      requestAnimationFrame(() => {
        img.style.opacity = '1';
      });
    };

    newImg.onerror = () => {
      console.warn(`Failed to load image: ${src}`);
      // Fallback: show a placeholder or hide the image
      img.style.display = 'none';
    };

    newImg.src = src;
  }

  loadAllImages() {
    // Fallback for browsers without Intersection Observer
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach(img => this.loadImage(img));
  }

  // Resource lazy loading for scripts and styles
  setupResourceLazyLoading() {
    // Load non-critical scripts after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loadDeferredScripts();
      }, 100);
    });
  }

  loadDeferredScripts() {
    // Load scripts that are marked for deferred loading
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    deferredScripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.dataset.src || script.src;
      newScript.async = true;

      // Copy any data attributes
      Object.keys(script.dataset).forEach(key => {
        if (key !== 'defer') {
          newScript.dataset[key] = script.dataset[key];
        }
      });

      document.head.appendChild(newScript);
      script.remove(); // Remove the original script tag
    });
  }

  // Preload critical resources
  preloadCriticalResources() {
    // Preload critical fonts
    this.preloadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    // Preload critical images
    this.preloadImage('/images/avatar.jpg');

    // Preload critical scripts
    this.preloadScript('/js/navigation.js');
  }

  preloadFont(href) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'style';
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }

  preloadImage(src) {
    const img = new Image();
    img.src = src;
  }

  preloadScript(src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'script';
    document.head.appendChild(link);
  }

  // Utility method to refresh observers after dynamic content changes
  refresh() {
    this.observeImages();
  }
}

// Performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    this.observeCoreWebVitals();
    this.observeNavigationTiming();
    this.observeResourceTiming();
  }

  observeCoreWebVitals() {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          this.metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
            this.metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }
  }

  observeNavigationTiming() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];

        if (navigation) {
          this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          this.metrics.loadComplete = navigation.loadEventEnd - navigation.loadEventStart;

          console.log('Navigation Timing:', this.metrics);
        }
      }, 0);
    });
  }

  observeResourceTiming() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource =>
          resource.duration > 1000 // Resources taking more than 1 second
        );

        if (slowResources.length > 0) {
          console.warn('Slow resources detected:', slowResources);
        }
      }, 1000);
    });
  }

  getMetrics() {
    return this.metrics;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize lazy loading
  window.lazyLoader = new LazyLoader();

  // Initialize performance monitoring
  window.performanceMonitor = new PerformanceMonitor();

  console.log('🚀 Lazy loading and performance monitoring initialized');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LazyLoader, PerformanceMonitor };
}