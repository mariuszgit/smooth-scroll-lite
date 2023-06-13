function SmoothScrollLite(duration = 500) {
    const links = document.querySelectorAll('a[href^="#"]');
  
    function handleClick(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let start = null;
  
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }
  
        window.requestAnimationFrame(step);
      }
    }
  
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });
  }