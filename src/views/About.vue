<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>About Tech-with-Ease</h1>
        <p>Empowering the next generation of tech professionals through innovative education</p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="our-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2018, Tech-with-Ease began with a simple mission: to make high-quality tech education 
              accessible to everyone. What started as a small coding bootcamp has grown into a comprehensive 
              tech training institute that has transformed thousands of careers.
            </p>
            <p>
              We believe that everyone deserves the opportunity to succeed in the tech industry, regardless 
              of their background. Our innovative teaching methods, industry partnerships, and dedicated 
              support system ensure that every student receives the personalized attention they need to excel.
            </p>
          </div>
          <div class="story-image">
            <img :src="aboutImage" alt="Tech-with-Ease students learning" class="story-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card">
            <div class="mv-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To democratize tech education by providing world-class training programs that are accessible, 
              practical, and designed to meet the evolving needs of the technology industry.
            </p>
          </div>
          
          <div class="mv-card">
            <div class="mv-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading tech education platform that bridges the gap between academic learning 
              and industry requirements, creating a skilled workforce ready for the future.
            </p>
          </div>
          
          <div class="mv-card">
            <div class="mv-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Our Values</h3>
            <p>
              Excellence, Innovation, Inclusivity, and Integrity drive everything we do. We're committed 
              to fostering a learning environment where everyone can thrive and succeed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Expert Team</h2>
          <p>Our passionate educators and industry veterans are here to guide your journey</p>
        </div>
        
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="team-image">
              <i :class="member.avatar"></i>
            </div>
            <div class="team-info">
              <h4>{{ member.name }}</h4>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
              <div class="team-skills">
                <span v-for="skill in member.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
              <div class="social-links">
                <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-link"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Students Say</h2>
          <p>Real stories from real students who transformed their careers with us</p>
        </div>
        
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p>"{{ testimonial.content }}"</p>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <i class="fas fa-user"></i>
                </div>
                <div class="author-info">
                  <h5>{{ testimonial.name }}</h5>
                  <span>{{ testimonial.position }}</span>
                  <div class="rating">
                    <i v-for="n in 5" :key="n" class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of successful graduates and transform your career today</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">Get Started</router-link>
            <router-link to="/courses" class="btn-secondary">View Courses</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import aboutImage from '../assets/frontenddevelopment.jpeg'

const teamMembers = ref([
  {
    id: 1,
    name: 'Muhammed Thanni Akanbi',
    position: 'Fullstack Developer',
    bio: 'Experienced fullstack developer specializing in modern web technologies and comprehensive software solutions.',
    avatar: 'fas fa-code',
    skills: ['Full Stack Development', 'JavaScript', 'Vue.js', 'Node.js']
  },
  {
    id: 2,
    name: 'Akanbi Awwal Olalekan',
    position: 'Data Scientist & Data Analyst',
    bio: 'Expert in data science and analytics with extensive experience in machine learning and statistical analysis.',
    avatar: 'fas fa-chart-line',
    skills: ['Data Science', 'Data Analysis', 'Python', 'Machine Learning']
  },
  {
    id: 3,
    name: 'Muhammed Thalith Akanbi',
    position: 'Graphics & Motion Designer',
    bio: 'Creative designer specializing in graphics design and motion graphics with a passion for visual storytelling.',
    avatar: 'fas fa-paint-brush',
    skills: ['Graphics Design', 'Motion Graphics', 'Adobe Creative Suite', 'UI/UX Design']
  }
])

const testimonials = ref([
  {
    id: 1,
    name: 'Ruqoyyah',
    position: 'Frontend Development Graduate',
    content: 'The Frontend Development program at Tech-with-Ease completely transformed my career. The hands-on projects and expert mentorship gave me the confidence to build amazing web applications. Best investment I ever made!'
  },
  {
    id: 2,
    name: 'Joshua',
    position: 'Fullstack Development Graduate',
    content: 'The Fullstack Development program was incredible. The instructors are world-class, and the curriculum covers everything from frontend to backend. I can now build complete web applications and got my dream job right after completion!'
  },
  {
    id: 3,
    name: 'Abeedah',
    position: 'Python Programming Graduate',
    content: 'From zero programming experience to mastering Python development. The support from instructors and the comprehensive Python curriculum made all the difference in my programming journey. Now I can build powerful applications!'
  }
])
</script>

<style scoped>
.about-page {
  padding-top: 80px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
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

/* Our Story Section */
.our-story {
  padding: 5rem 2rem;
  background: white;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.story-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}



.story-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.story-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.story-img:hover {
  transform: translateY(-5px);
}

/* Mission & Vision */
.mission-vision {
  background: #f8f9fa;
  padding: 5rem 2rem;
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.mv-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.mv-card:hover {
  transform: translateY(-10px);
}

.mv-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.mv-icon i {
  font-size: 2rem;
  color: white;
}

.mv-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.mv-card p {
  color: #666;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 5rem 2rem;
  background: white;
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-image {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.team-image i {
  font-size: 3rem;
  color: white;
}

.team-info h4 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.position {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
}

.bio {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.team-skills {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.skill-tag {
  background: #f8f9fa;
  color: #2563eb;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.social-link {
  width: 35px;
  height: 35px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #2563eb;
  color: white;
}



/* Testimonials */
.testimonials {
  padding: 5rem 2rem;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: -15px;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-icon i {
  color: white;
  font-size: 1.2rem;
}

.testimonial-content p {
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  margin-top: 1rem;
  color: #555;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: #2563eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-avatar i {
  color: white;
  font-size: 1.2rem;
}

.author-info h5 {
  color: #333;
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.author-info span {
  color: #666;
  font-size: 0.9rem;
}

.rating {
  margin-top: 0.5rem;
}

.rating i {
  color: #ffd700;
  font-size: 0.8rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
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
  color: #2c3e50;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  
  .mv-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .reasons-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
