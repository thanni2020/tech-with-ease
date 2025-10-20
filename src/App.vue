<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* FontAwesome support */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Global utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1d4ed8;
}

/* Animation classes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive breakpoints */
@media screen and (max-width: 1200px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
