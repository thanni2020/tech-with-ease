<template>
  <div class="courses-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Our Courses</h1>
        <p>Comprehensive tech training programs designed to accelerate your career</p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filters">
      <div class="container">
        <div class="filter-controls">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['filter-btn', { active: activeFilter === category }]"
            @click="filterCourses(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="courses-grid-section">
      <div class="container">
        <div class="courses-grid">
          <div 
            v-for="course in filteredCourses" 
            :key="course.id"
            class="course-card"
          >
            <div class="course-image">
              <img :src="course.image" :alt="course.title" />
              <div class="course-overlay">
                <div class="course-level">{{ course.level }}</div>
              </div>
            </div>
            
            <div class="course-content">
              <div class="course-header">
                <h3>{{ course.title }}</h3>
                <span class="course-duration"><i class="fas fa-clock"></i> {{ course.duration }}</span>
              </div>
              <p>{{ course.description }}</p>
              

              
              <div class="course-footer">
                <div class="price">
                  <span class="current-price">₦{{ course.price.toLocaleString() }}</span>
                </div>
                <button @click="openCourseDetails(course)" class="btn-learn-more">
                  <i class="fas fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Our Courses?</h2>
          <p>We provide comprehensive learning experiences that prepare you for real-world challenges</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h4>Hands-on Learning</h4>
            <p>Practice with real projects and build a portfolio that showcases your skills.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h4>Industry Experts</h4>
            <p>Learn from professionals currently working in top tech companies.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-certificate"></i>
            </div>
            <h4>Certification</h4>
            <p>Earn industry-recognized certificates upon successful completion.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h4>24/7 Support</h4>
            <p>Get help whenever you need it with our dedicated support team.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h4>Job Assistance</h4>
            <p>Career counseling and job placement support for all graduates.</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <i class="fas fa-sync-alt"></i>
            </div>
            <h4>Lifetime Updates</h4>
            <p>Access to course updates and new content for lifetime learning.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Details Modal -->
    <div v-if="showCourseDetails" class="modal-overlay" @click="closeCourseDetails">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeCourseDetails">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-header">
          <img :src="selectedCourse?.image" :alt="selectedCourse?.title" class="modal-course-image" />
          <div class="modal-header-overlay">
            <h2 class="modal-course-title">{{ selectedCourse?.title }}</h2>
            <p class="modal-course-subtitle">{{ selectedCourse?.level }} • {{ selectedCourse?.duration }}</p>
          </div>
        </div>
        
        <div class="modal-body">
          <p class="modal-course-description">{{ selectedCourse?.description }}</p>
          
          <div class="modal-course-features">
            <h3 class="modal-features-title">
              <i class="fas fa-list-check"></i>
              What You'll Learn
            </h3>
            <ul class="modal-features-list">
              <li v-for="feature in getCourseFeatures(selectedCourse)" :key="feature">
                <i class="fas fa-check-circle"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="modal-course-details">
            <div class="modal-detail-box">
              <div class="modal-detail-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="modal-detail-label">Duration</div>
              <div class="modal-detail-value">{{ selectedCourse?.duration }}</div>
            </div>
            
            <div class="modal-detail-box">
              <div class="modal-detail-icon">
                <i class="fas fa-signal"></i>
              </div>
              <div class="modal-detail-label">Level</div>
              <div class="modal-detail-value">{{ selectedCourse?.level }}</div>
            </div>
            
            <div class="modal-detail-box">
              <div class="modal-detail-icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="modal-detail-label">Price</div>
              <div class="modal-detail-value">${{ selectedCourse?.price }}</div>
            </div>
            
            <div class="modal-detail-box">
              <div class="modal-detail-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="modal-detail-label">Certificate</div>
              <div class="modal-detail-value">Yes</div>
            </div>
          </div>
          
          <div class="modal-actions">
            <router-link to="/contact" class="modal-btn modal-btn-primary">
              <i class="fas fa-user-plus"></i>
              Enroll Now
            </router-link>
            <button @click="downloadBrochure(selectedCourse?.title)" class="modal-btn modal-btn-secondary">
              <i class="fas fa-download"></i>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('All')
const categories = ['All', 'Web Development', 'Data Science', 'Data Analytics', 'Graphics Design']

const courses = ref([
  {
    id: 1,
    title: 'Web Design Fundamentals',
    description: 'Learn the basics of web design including HTML, CSS, responsive design, and UI/UX principles.',
    category: 'Web Development',
    image: '/web.jpg',
    level: 'Beginner',
    duration: '6 weeks',
    students: '3,240',
    rating: '4.7',
    price: 100000,
    features: ['HTML5 & CSS3', 'Responsive Design', 'Bootstrap Framework', 'UI/UX Principles', 'Portfolio Development']
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Master modern frontend technologies including JavaScript, React, and advanced CSS frameworks.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    students: '2,890',
    rating: '4.8',
    price: 250000,
    features: ['JavaScript ES6+', 'React & Vue.js', 'State Management', 'API Integration', 'Performance Optimization']
  },
  {
    id: 3,
    title: 'Fullstack Development',
    description: 'Complete web development course covering both frontend and backend technologies.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    students: '2,156',
    rating: '4.7',
    price: 100000,
    features: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Identity', 'Typography', 'Print & Web Design']
  }
])

const filteredCourses = computed(() => {
  if (activeFilter.value === 'All') {
    return courses.value
  }
  return courses.value.filter(course => course.category === activeFilter.value)
})

const filterCourses = (category) => {
  activeFilter.value = category
}

// Modal functionality
const showCourseDetails = ref(false)
const selectedCourse = ref(null)

const openCourseDetails = (course) => {
  selectedCourse.value = course
  showCourseDetails.value = true
  document.body.style.overflow = 'hidden'
}

const closeCourseDetails = () => {
  showCourseDetails.value = false
  selectedCourse.value = null
  document.body.style.overflow = 'auto'
}

const getCourseFeatures = (course) => {
  if (!course) return []
  
  const featuresMap = {
    'Web Design Fundamentals': [
      'HTML5 structure and semantics',
      'CSS3 styling and animations',
      'Responsive web design principles',
      'Mobile-first design approach',
      'Cross-browser compatibility',
      'Web accessibility standards',
      'Portfolio website creation'
    ],
    'Frontend Development': [
      'JavaScript ES6+ fundamentals',
      'React.js component development',
      'Vue.js framework mastery',
      'State management (Redux/Vuex)',
      'RESTful API integration',
      'Frontend testing strategies',
      'Performance optimization techniques'
    ],
    'Fullstack Development': [
      'Frontend & backend integration',
      'Node.js server development',
      'Database design and management',
      'RESTful API creation',
      'User authentication systems',
      'Cloud deployment strategies',
      'DevOps and CI/CD pipelines'
    ],
    'Data Analytics': [
      'Excel advanced functions and pivot tables',
      'SQL database querying and joins',
      'Python data manipulation with Pandas',
      'Data visualization with Matplotlib',
      'Power BI dashboard creation',
      'Statistical analysis techniques',
      'Business intelligence reporting'
    ],
    'Data Science': [
      'Machine learning algorithms',
      'Deep learning and neural networks',
      'Natural language processing',
      'Computer vision applications',
      'AI model deployment',
      'Big data processing',
      'Research methodology and ethics'
    ],
    'Graphics Design': [
      'Adobe Photoshop mastery',
      'Adobe Illustrator vector graphics',
      'Brand identity development',
      'Typography and layout design',
      'Print design principles',
      'Web graphics optimization',
      'Client presentation skills'
    ]
  }
  
  return featuresMap[course.title] || course.features || []
}

const downloadBrochure = (courseTitle) => {
  // Simulate brochure download
  const link = document.createElement('a')
  link.href = '#' // In real implementation, this would be the actual brochure URL
  link.download = `${courseTitle.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`
  
  // Show download notification
  alert(`Downloading ${courseTitle} brochure...`)
  
  // In a real implementation, you would:
  // 1. Track the download event for analytics
  // 2. Serve the actual PDF file
  // 3. Show a proper notification/toast instead of alert
}

onMounted(() => {
  // Add any initialization logic here
})
</script>

<style scoped>
.courses-page {
  padding-top: 80px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Filter Section */
.filters {
  background: #f8f9fa;
  padding: 2rem;
}

.filter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.7rem 1.5rem;
  border: 2px solid #e9ecef;
  background: white;
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

/* Courses Grid */
.courses-grid-section {
  padding: 4rem 2rem;
  background: white;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.course-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image img {
  transform: scale(1.05);
}

.course-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.course-level {
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.course-content {
  padding: 2rem;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.course-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 600;
  flex: 1;
}

.course-duration {
  background: #f8f9fa;
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.course-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}





.btn-learn-more {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  flex: 1;
  justify-content: center;
}

.btn-learn-more:hover {
  background: #5a67d8;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}



.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e9ecef;
}

.price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 1rem;
}

.current-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #667eea;
}



/* Why Choose Us Section */
.why-choose-us {
  background: #f8f9fa;
  padding: 5rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.benefit-icon i {
  font-size: 1.8rem;
  color: white;
}

.benefit-item h4 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.benefit-item p {
  color: #666;
  line-height: 1.6;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Course Details Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
  transition: all 0.3s ease;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-close:hover {
  background: white;
  color: #333;
  transform: scale(1.1);
}

.modal-header {
  position: relative;
  height: 250px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.modal-course-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.modal-header-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem;
  color: white;
}

.modal-course-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.modal-course-subtitle {
  font-size: 1.1rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

.modal-body {
  padding: 2rem;
}

.modal-course-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
  text-align: left;
}

.modal-course-features {
  margin-bottom: 2rem;
}

.modal-features-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-features-list li {
  background: #f8f9fc;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  font-size: 0.95rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.modal-features-list li:hover {
  background: #f0f2ff;
  transform: translateX(5px);
}

.modal-course-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.modal-detail-box {
  background: linear-gradient(135deg, #f8f9fc 0%, #f0f2ff 100%);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.modal-detail-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
}

.modal-detail-icon {
  font-size: 2rem;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.modal-detail-label {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.modal-detail-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.modal-btn {
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-content: center;
  min-width: 140px;
}

.modal-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.modal-btn-secondary {
  background: #f8f9fa;
  color: #667eea;
  border: 2px solid #667eea;
}

.modal-btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

@media screen and (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .course-details {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .course-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    text-align: center;
  }

  /* Modal responsive styles */
  .modal-overlay {
    padding: 0.5rem;
  }
  
  .modal-content {
    max-height: 95vh;
    border-radius: 15px;
  }
  
  .modal-header {
    height: 200px;
    border-radius: 15px 15px 0 0;
  }
  
  .modal-course-title {
    font-size: 1.5rem;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-features-list {
    grid-template-columns: 1fr;
  }
  
  .modal-course-details {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .modal-btn {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .modal-course-details {
    grid-template-columns: 1fr;
  }
  
  .modal-header-overlay {
    padding: 1rem;
  }
  
  .modal-course-title {
    font-size: 1.3rem;
  }
}
</style>