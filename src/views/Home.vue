<script setup>
import { ref } from 'vue'

const popularCourses = ref([
  {
    id: 1,
    title: 'Web Design Fundamentals',
    shortDescription: 'Learn the basics of web design including HTML, CSS, responsive design, and UI/UX principles.',
    fullDescription: 'Learn the basics of web design including HTML, CSS, responsive design, and UI/UX principles. Master HTML5 structure, CSS3 styling, Bootstrap framework, and create stunning responsive websites. Build a professional portfolio showcasing your web design skills and modern design principles.',
    image: './web.jpg',
    level: 'Beginner',
    duration: '6 weeks',
    price: 100000,
    showFullDescription: false
  },
  {
    id: 2,
    title: 'Frontend Development',
    shortDescription: 'Master modern frontend technologies including JavaScript, React, and advanced CSS frameworks.',
    fullDescription: 'Master modern frontend technologies including JavaScript, React, and advanced CSS frameworks. Learn JavaScript ES6+, React and Vue.js, state management, API integration, and performance optimization. Build interactive web applications with modern frontend tools and best practices.',
    image: './front.jpg',
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    price: 250000,
    showFullDescription: false
  },
  {
    id: 3,
    title: 'Fullstack Development',
    shortDescription: 'Master both frontend and backend development with modern technologies.',
    fullDescription: 'Master both frontend and backend development with modern technologies like React, Node.js, and databases. Learn to build complete web applications from frontend to backend, including user authentication, API development, and deployment strategies. Work on real-world projects that showcase your skills to potential employers.',
    image: './fullstack.jpg',
    level: 'Intermediate to Advanced',
    duration: '16 weeks',
    price: 500000,
    showFullDescription: false
  },
  {
    id: 4,
    title: 'Data Analytics',
    shortDescription: 'Learn data analysis, visualization, and business intelligence using Excel, SQL, and Python.',
    fullDescription: 'Learn data analysis, visualization, and business intelligence using Excel, SQL, and Python. Master Excel advanced functions, Power BI, SQL databases, Python for analysis, and data visualization. Transform raw data into actionable business insights and create compelling data stories.',
    image: './data.jpg',
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    price: 250000,
    showFullDescription: false
  },
  {
    id: 5,
    title: 'Data Science',
    shortDescription: 'Learn Python, machine learning, and advanced data science techniques.',
    fullDescription: 'Learn Python, machine learning, and advanced data science techniques. Dive deep into statistical analysis, predictive modeling, and big data processing. Master tools like Pandas, NumPy, Scikit-learn, and TensorFlow while working on industry-relevant projects using real datasets and neural networks.',
    image: './machine.jpg',
    level: 'Intermediate to Advanced',
    duration: '16 weeks',
    price: 400000,
    showFullDescription: false
  },
  {
    id: 6,
    title: 'Graphics Design',
    shortDescription: 'Master visual design, branding, and digital graphics creation.',
    fullDescription: 'Master visual design, branding, and digital graphics creation using industry-standard tools like Adobe Creative Suite. Learn typography, color theory, layout design, logo creation, and brand identity development. Create stunning visual content for web, print, and social media while building a professional portfolio.',
    image: './graphics.jpg',
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    price: 100000,
    showFullDescription: false
  }
])

const showCourseDetails = ref(false)
const selectedCourse = ref({})

const toggleDescription = (course) => {
  course.showFullDescription = !course.showFullDescription
}

const openCourseDetails = (course) => {
  selectedCourse.value = course
  showCourseDetails.value = true
  document.body.style.overflow = 'hidden' // Prevent background scrolling
}

const closeCourseDetails = () => {
  showCourseDetails.value = false
  selectedCourse.value = {}
  document.body.style.overflow = 'auto' // Restore scrolling
}

const getCourseFeatures = (course) => {
  // Return appropriate features based on course type
  const features = {
    'Fullstack Development': [
      'Frontend Development with React/Vue',
      'Backend Development with Node.js',
      'Database Management (MongoDB, SQL)',
      'API Development and Integration',
      'Authentication and Security',
      'Deployment and DevOps Basics'
    ],
    'Data Science': [
      'Python Programming for Data Science',
      'Machine Learning Algorithms',
      'Deep Learning and Neural Networks',
      'Data Visualization with Python',
      'Statistical Analysis and Modeling',
      'Real-world Project Portfolio'
    ],
    'Graphics Design': [
      'Adobe Photoshop Mastery',
      'Adobe Illustrator Proficiency',
      'Brand Identity Design',
      'Typography and Layout Design',
      'Print and Digital Design',
      'Portfolio Development'
    ]
  }
  return features[course.title] || []
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
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Master <span class="highlight">Technology</span><br>
            With Ease & Excellence
          </h1>
          <p class="hero-subtitle">
            Learn from industry experts and join thousands of successful graduates.
          </p>
          <div class="hero-actions">
            <router-link to="/courses" class="btn-primary">Explore Courses</router-link>
            <router-link to="/contact" class="btn-secondary">Get Started</router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <h3>100+</h3>
              <p>Students Trained</p>
            </div>
            <div class="stat">
              <h3>98%</h3>
              <p>Job Placement</p>
            </div>
            <div class="stat">
              <h3>50+</h3>
              <p>Expert Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Tech-with-Ease?</h2>
          <p>We provide comprehensive tech education that prepares you for real-world challenges</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of real-world experience in top tech companies.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h3>Hands-on Projects</h3>
            <p>Build real projects that you can showcase in your portfolio and demonstrate to employers.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h3>Career Support</h3>
            <p>Get personalized career guidance, resume reviews, and interview preparation support.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>Flexible Learning</h3>
            <p>Study at your own pace with online classes, weekend batches, and recorded sessions.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-certificate"></i>
            </div>
            <h3>Industry Certification</h3>
            <p>Earn recognized certifications that add value to your professional profile.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <h3>Job Placement</h3>
            <p>Access our extensive network of hiring partners and get placed in top companies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="popular-courses">
      <div class="container">
        <div class="section-header">
          <h2>Popular Courses</h2>
          <p>Discover our most sought-after programs designed for career advancement</p>
        </div>
        
        <div class="courses-grid">
          <div v-for="course in popularCourses" :key="course.id" class="course-card">
            <div class="course-image">
              <img :src="course.image" :alt="course.title" />
              <div class="course-overlay">
                <span class="course-level">{{ course.level }}</span>
              </div>
            </div>
            <div class="course-content">
              <div class="course-header">
                <h3>{{ course.title }}</h3>
                <span class="course-duration"><i class="fas fa-clock"></i> {{ course.duration }}</span>
              </div>
              <p class="course-description" :class="{ expanded: course.showFullDescription }">
                {{ course.showFullDescription ? course.fullDescription : course.shortDescription }}
              </p>
              <button 
                v-if="course.fullDescription !== course.shortDescription"
                @click="toggleDescription(course)" 
                class="read-more-btn"
              >
                {{ course.showFullDescription ? 'Show Less' : 'Read More' }}
              </button>

              <div class="course-footer">
                <span class="price">₦{{ course.price.toLocaleString() }}</span>
                <button @click="openCourseDetails(course)" class="btn-learn-more">
                  <i class="fas fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="view-all">
          <router-link to="/courses" class="btn-primary">View All Courses</router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Tech Journey?</h2>
          <p>Join thousands of students who have transformed their careers with Tech-with-Ease. 
             Get personalized guidance and start learning today!</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">Enroll Now</router-link>
            <router-link to="/courses" class="btn-secondary">Browse Courses</router-link>
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
          <p class="modal-course-description">{{ selectedCourse?.fullDescription }}</p>
          
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
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="modal-detail-label">Price</div>
              <div class="modal-detail-value">₦{{ selectedCourse?.price?.toLocaleString() }}</div>
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
            <router-link to="/contact" class="modal-btn modal-btn-primary" @click="closeCourseDetails">
              <i class="fas fa-user-plus"></i>
              Enroll Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 80px; /* Account for fixed header */
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), 
              url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 4rem 2rem;
  min-height: 80vh;
  color: white;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  max-width: 600px;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #ffd700;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.btn-primary {
  background: #ffd700;
  color: #333;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
}

.btn-secondary {
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.stat p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-text {
  max-width: 600px;
  text-align: center;
}

/* Features Section */
.features {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.feature-icon i {
  font-size: 2rem;
  color: white;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Popular Courses Section */
.popular-courses {
  padding: 5rem 2rem;
  background: white;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-10px);
}

.course-image {
  position: relative;
  height: 200px;
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
  font-size: 1.4rem;
  color: #333;
  margin: 0;
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

.course-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.course-description.expanded {
  margin-bottom: 1rem;
}

.read-more-btn {
  background: none;
  border: none;
  color: #667eea;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.read-more-btn:hover {
  color: #5a67d8;
  text-decoration: underline;
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

/* Responsive Design */
@media (max-width: 768px) {
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

@media (max-width: 480px) {
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

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}



.view-all {
  text-align: center;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem;
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .hero {
    padding: 3rem 1rem;
    min-height: 70vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>