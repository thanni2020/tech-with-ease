<template>
  <div class="course-detail-page" v-if="course">
    <!-- Course Hero Section -->
    <section class="course-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="breadcrumb">
              <router-link to="/courses">Courses</router-link>
              <i class="fas fa-chevron-right"></i>
              <span>{{ course.title }}</span>
            </div>
            
            <h1>{{ course.title }}</h1>
            <p class="hero-description">{{ course.description }}</p>
            
            <div class="course-meta">
              <div class="meta-item">
                <i class="fas fa-signal"></i>
                <span>{{ course.level }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>{{ course.duration }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-calendar-week"></i>
                <span>4 hours per week</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-laptop"></i>
                <span>Online/Offline</span>
              </div>
            </div>

            <div class="hero-actions">
              <button class="btn-enroll" @click="goToContact">
                <i class="fas fa-play"></i>
                Enroll Now - ₦{{ course.price.toLocaleString() }}
              </button>
            </div>
          </div>

          <div class="hero-image">
            <div class="course-image-container">
              <img :src="course.image" :alt="course.title" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Content -->
    <section class="course-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">
            <!-- Course Curriculum -->
            <div class="curriculum-section">
              <h2>Course Curriculum</h2>
              <div class="curriculum-list">
                <div class="curriculum-item" v-for="(week, index) in getCurriculum(course.title)" :key="index">
                  <div class="week-number">{{ index + 1 }}</div>
                  <div class="week-content">
                    <h3>{{ week.title }}</h3>
                    <p>{{ week.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enrollment Sidebar -->
          <div class="enrollment-sidebar">
            <div class="pricing-card" id="enrollment">
              <div class="price-display">
                <span class="currency">₦</span>
                <span class="amount">{{ course.price.toLocaleString() }}</span>
              </div>

              <div class="course-info">
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ course.duration }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-calendar-week"></i>
                  <span>4 hours per week</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-laptop"></i>
                  <span>Online/Offline</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-certificate"></i>
                  <span>Certificate included</span>
                </div>
              </div>

              <div class="enrollment-actions">
                <button class="btn-enroll-main" @click="goToContact">
                  <i class="fas fa-credit-card"></i>
                  Enroll Now
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Loading state -->
  <div v-else class="loading-state">
    <div class="container">
      <div class="loading-content">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading course details...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Import course images
import webImage from '../assets/webdesign.jpg'
import frontImage from '../assets/frontenddevelopment.jpeg'
import fullstackImage from '../assets/fullstackweb.jpg'
import dataImage from '../assets/dataanalytics.jpg'
import machineImage from '../assets/datascience2.jpg'
import graphicsImage from '../assets/graphicsdesign2.jpg'

const route = useRoute()
const router = useRouter()

// Course data
const courses = ref([
  {
    id: 1,
    title: 'Web Design Fundamentals',
    description: 'Learn the basics of web design including HTML, CSS, responsive design, and version control with Git.',
    category: 'Web Development',
    image: webImage,
    level: 'Beginner',
    duration: '6 weeks',
    students: '3,240',
    rating: '4.7',
    price: 100000,
    features: ['HTML5 & CSS3', 'Responsive Design', 'Bootstrap Framework', 'Version Control with Git', 'Portfolio Development']
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Master modern frontend technologies including HTML, CSS, JavaScript, and Vue.js frameworks.',
    category: 'Web Development',
    image: frontImage,
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    students: '2,890',
    rating: '4.8',
    price: 250000,
    features: ['HTML5 & CSS3', 'JavaScript ES6+', 'Vue.js Framework', 'State Management', 'API Integration']
  },
  {
    id: 3,
    title: 'Fullstack Development',
    description: 'Complete web development course covering both frontend and backend technologies.',
    category: 'Web Development',
    image: fullstackImage,
    level: 'Intermediate to Advanced',
    duration: '16 weeks',
    students: '2,340',
    rating: '4.8',
    price: 500000,
    features: ['React & Node.js', 'Database Management', 'API Development', 'Authentication', 'Deployment & DevOps']
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Learn data analysis, visualization, and business intelligence using Excel, SQL, and Python.',
    category: 'Data Analytics',
    image: dataImage,
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    students: '1,987',
    rating: '4.6',
    price: 250000,
    features: ['Excel & Power BI', 'SQL Databases', 'Python for Analysis', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Advanced data science program covering machine learning, AI, and predictive analytics.',
    category: 'Data Science',
    image: machineImage,
    level: 'Intermediate to Advanced',
    duration: '16 weeks',
    students: '1,856',
    rating: '4.9',
    price: 400000,
    features: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Algorithms', 'Research Projects']
  },
  {
    id: 6,
    title: 'Graphics Design',
    description: 'Master visual design, branding, and digital graphics using Adobe Creative Suite.',
    category: 'Graphics Design',
    image: graphicsImage,
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    students: '2,156',
    rating: '4.7',
    price: 100000,
    features: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity', 'Typography', 'Print & Web Design']
  }
])

// Find current course
const course = computed(() => {
  const courseId = parseInt(route.params.id)
  return courses.value.find(c => c.id === courseId)
})

// Methods
const getCurriculum = (courseTitle) => {
  const curriculumMap = {
    'Web Design Fundamentals': [
      { title: 'HTML Basics', description: 'Learn HTML structure, elements, and semantic markup' },
      { title: 'CSS Styling', description: 'Master CSS properties, selectors, and responsive design' },
      { title: 'Bootstrap Framework', description: 'Build responsive layouts with Bootstrap components' },
      { title: 'Version Control with Git', description: 'Learn Git fundamentals, repositories, and collaborative development workflows' },
      { title: 'Portfolio Project', description: 'Create a complete portfolio website' },
      { title: 'Career Preparation', description: 'Job search strategies and interview preparation' }
    ],
    'Frontend Development': [
      { title: 'HTML5 Fundamentals', description: 'Learn HTML5 structure, semantic elements, and modern markup' },
      { title: 'CSS3 & Responsive Design', description: 'Master CSS3 styling, flexbox, grid, and responsive layouts' },
      { title: 'JavaScript Fundamentals', description: 'Core JavaScript programming and ES6+ features' },
      { title: 'JavaScript DOM Manipulation', description: 'Interactive web pages and event handling' },
      { title: 'Vue.js Framework', description: 'Component-based development with Vue.js' },
      { title: 'Vue.js Advanced Features', description: 'State management, routing, and advanced Vue concepts' },
      { title: 'API Integration', description: 'Connect frontend with backend services and RESTful APIs' },
      { title: 'Testing & Deployment', description: 'Frontend testing strategies and production deployment' }
    ],
    'Fullstack Development': [
      { title: 'HTML5 + Basic CSS', description: 'Learn HTML5 structure and basic CSS styling fundamentals' },
      { title: 'Advanced CSS + Flexbox + Media Queries', description: 'Master advanced CSS layouts and responsive design techniques' },
      { title: 'JavaScript Basics', description: 'Core JavaScript programming concepts and syntax' },
      { title: 'JavaScript DOM Manipulation', description: 'Interactive web pages through DOM manipulation and events' },
      { title: 'Intro to Vue.js', description: 'Getting started with Vue.js framework and component-based development' },
      { title: 'Vue.js Project + Version Control', description: 'Build complete Vue.js application with Git version control' },
      { title: 'Node.js Fundamentals', description: 'Server-side JavaScript development with Node.js' },
      { title: 'Express.js Deep Dive', description: 'Build robust web APIs and server applications with Express.js' },
      { title: 'MongoDB Fundamentals', description: 'NoSQL concepts, MongoDB basics, document structure, and CRUD operations with hands-on practice' },
      { title: 'Advanced MongoDB & Integration', description: 'Schema design, indexing, aggregation pipelines, and seamless integration with Node.js/Express applications' },
      { title: 'Authentication', description: 'User authentication, authorization, and security implementation' },
      { title: 'Full Stack Integration', description: 'Connect frontend and backend for complete application functionality' },
      { title: 'Final Project + Hosting', description: 'Deploy complete full-stack application to production environment' }
    ],
    'Data Analytics': [
      { title: 'Excel Mastery', description: 'Advanced Excel functions and data manipulation' },
      { title: 'SQL Database', description: 'Query databases and manage data efficiently' },
      { title: 'Python for Analysis', description: 'Use Python libraries for data analysis' },
      { title: 'Data Visualization', description: 'Create compelling charts and dashboards' },
      { title: 'Business Intelligence', description: 'Apply analytics to business problems' }
    ],
    'Data Science': [
      { title: 'Python Programming', description: 'Master Python for data science applications' },
      { title: 'Machine Learning', description: 'Supervised and unsupervised learning algorithms' },
      { title: 'Deep Learning', description: 'Neural networks and advanced AI techniques' },
      { title: 'Model Deployment', description: 'Deploy ML models in production environments' },
      { title: 'Research Project', description: 'Complete an end-to-end data science project' }
    ],
    'Graphics Design': [
      { title: 'Design Fundamentals', description: 'Learn color theory, typography, and composition' },
      { title: 'Adobe Photoshop', description: 'Master photo editing and digital manipulation' },
      { title: 'Adobe Illustrator', description: 'Create vector graphics and illustrations' },
      { title: 'Brand Identity', description: 'Design logos and complete brand systems' },
      { title: 'Portfolio Development', description: 'Build a professional design portfolio' }
    ]
  }
  
  return curriculumMap[courseTitle] || [
    { title: 'Course Introduction', description: 'Overview and learning objectives' },
    { title: 'Fundamentals', description: 'Core concepts and principles' },
    { title: 'Practical Application', description: 'Hands-on projects and exercises' },
    { title: 'Advanced Topics', description: 'Industry best practices and advanced techniques' },
    { title: 'Final Project', description: 'Capstone project showcasing your skills' }
  ]
}

const goToContact = () => {
  router.push('/contact')
}

// Redirect if course not found
onMounted(() => {
  if (!course.value) {
    router.push('/courses')
  }
})
</script>

<style scoped>
/* Global Styles */
.course-detail-page {
  min-height: 100vh;
  padding-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Course Hero Section */
.course-hero {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 4rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.breadcrumb a {
  color: white;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.course-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.meta-item i {
  color: #ffd700;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-enroll {
  background: white;
  color: #2563eb;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.btn-enroll:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Hero Image */
.hero-image {
  display: flex;
  justify-content: center;
}

.course-image-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  max-width: 700px;
  width: 100%;
}

.course-image-container img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

/* Course Content */
.course-content {
  padding: 4rem 0;
  background: #f8f9fa;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.main-content h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

/* Learning Section */
.learning-section {
  margin-bottom: 3rem;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.feature-item i {
  color: #2563eb;
  font-size: 1.2rem;
}

/* Curriculum Section */
.curriculum-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.curriculum-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.curriculum-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.week-number {
  width: 40px;
  height: 40px;
  background: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.week-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.week-content p {
  color: #666;
  line-height: 1.6;
}

/* Enrollment Sidebar */
.enrollment-sidebar {
  display: flex;
  flex-direction: column;
}

.pricing-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: sticky;
  top: 100px;
}

.price-display {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.price-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.currency {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: #2563eb;
}

.course-info {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.info-item i {
  color: #2563eb;
  width: 16px;
}

.enrollment-actions {
  margin-top: 2rem;
}

.btn-enroll-main {
  width: 100%;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.btn-enroll-main:hover {
  transform: translateY(-2px);
}

/* Loading State */
.loading-state {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  text-align: center;
}

.loading-content i {
  font-size: 3rem;
  color: #2563eb;
  margin-bottom: 1rem;
}

.loading-content p {
  color: #666;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .course-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .pricing-card {
    position: static;
  }
}
</style>
