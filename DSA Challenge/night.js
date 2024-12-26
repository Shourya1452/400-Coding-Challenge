// Handle night mode functionality
const NightMode = {
  toggle() {
      document.body.classList.toggle('night-mode-toggle');
      if (document.body.classList.contains('night-mode')) {
          document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%)');
          document.documentElement.style.setProperty('--gradient-card', 'linear-gradient(135deg, #2c3e50 0%, #3a4a5a 100%)');
      } else {
          document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #f5f7fa 0%, #e5e9f0 100%)');
          document.documentElement.style.setProperty('--gradient-card', 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)');
      }
  }
};


