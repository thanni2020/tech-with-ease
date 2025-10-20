<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <router-link to="/" class="nav-brand">
            <img :src="logo3" alt="Tech-with-Ease" class="logo-image" />
          </router-link>
        </div>
        
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          
          <div class="dropdown" 
               @mouseenter="isCoursesDropdownOpen = true" 
               @mouseleave="isCoursesDropdownOpen = false"
               @click="toggleCoursesDropdown">
            <router-link to="/courses" class="nav-link dropdown-trigger" @click="closeMenu">
              Courses <i class="fas fa-chevron-down"></i>
            </router-link>
            <div class="dropdown-menu" :class="{ active: isCoursesDropdownOpen }">
              <button 
                v-for="course in courses" 
                :key="course.id" 
                @click="goToCourse(course.id)"
                class="dropdown-item"
              >
                {{ course.title }}
              </button>
            </div>
          </div>
          
          <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
          <a href="tel:+2348164908656" class="nav-cta" @click="closeMenu">+234 816 490 8656</a>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo3 from '../assets/logo3.png'

const router = useRouter()
const isMenuOpen = ref(false)
const isCoursesDropdownOpen = ref(false)

// Course data for dropdown
const courses = ref([
  { id: 1, title: 'Web Design Fundamentals' },
  { id: 2, title: 'Frontend Development' },
  { id: 3, title: 'Fullstack Development' },
  { id: 4, title: 'Data Analytics' },
  { id: 5, title: 'Data Science' },
  { id: 6, title: 'Graphics Design' }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isCoursesDropdownOpen.value = false
}

const toggleCoursesDropdown = () => {
  isCoursesDropdownOpen.value = !isCoursesDropdownOpen.value
}

const goToCourse = (courseId) => {
  router.push(`/course/${courseId}`)
  closeMenu()
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #ffd700;
}

.nav-link.router-link-active {
  color: #ffd700;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffd700;
}

.nav-cta {
  background: #ffd700;
  color: #333;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-cta:hover {
  background: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

/* Dropdown Styles */
.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-trigger i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-trigger i {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  min-width: 250px;
  z-index: 1000;
  margin-top: 0.5rem;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: left;
  background: none;
  border: none;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:first-child {
  border-radius: 10px 10px 0 0;
}

.dropdown-item:last-child {
  border-bottom: none;
  border-radius: 0 0 10px 10px;
}

.dropdown-item:hover {
  background: #4f46e5;
  color: white;
  transform: translateX(5px);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
    gap: 1rem;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }
  
  /* Mobile dropdown styles */
  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: rgba(255, 255, 255, 0.1);
    margin: 0.5rem 1rem;
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }
  
  .dropdown-item {
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: none;
  }
}
</style>