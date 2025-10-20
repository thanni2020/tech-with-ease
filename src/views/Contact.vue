<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Ready to start your tech journey? Get in touch with our team today!</p>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName" 
                    required
                    :class="{ 'error': errors.firstName }"
                  >
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName" 
                    required
                    :class="{ 'error': errors.lastName }"
                  >
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    :class="{ 'error': errors.email }"
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="course">Interested Course</label>
                <select id="course" v-model="form.course">
                  <option value="">Select a course</option>
                  <option value="web-design-fundamentals">Web Design Fundamentals</option>
                  <option value="frontend-development">Frontend Development</option>
                  <option value="fullstack-development">Fullstack Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="data-science">Data Science</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required
                  :class="{ 'error': errors.message }"
                  placeholder="Tell us about your goals, questions, or any specific requirements..."
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.newsletter">
                  <span class="checkmark"></span>
                  Subscribe to our newsletter for tech tips and course updates
                </label>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Sending...
                </span>
                <span v-else>
                  <i class="fas fa-paper-plane"></i> Send Message
                </span>
              </button>
            </form>
            
            <div v-if="submitMessage" :class="['submit-message', submitStatus]">
              {{ submitMessage }}
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="contact-info-wrapper">
            <h2>Get in Touch</h2>
            <p>We're here to help you on your tech journey. Reach out to us through any of these channels.</p>
            
            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h4>Visit Us</h4>
                  <p>10B, Femi Oyedele Street<br>Eguje B/Stop, Idimu<br>Lagos, Nigeria</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info-content">
                  <h4>Call Us</h4>
                  <p>+234 816 490 8656<br>Mon - Fri: 9AM - 6PM WAT</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h4>Email Us</h4>
                  <p>info@techwithease.com<br>admissions@techwithease.com</p>
                </div>
              </div>
            </div>
            
            <div class="social-connect">
              <h4>Connect With Us</h4>
              <div class="social-links">
                <a href="#" class="social-link facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link youtube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our programs and enrollment process</p>
        </div>
        
        <div class="faq-grid">
          <div v-for="faq in faqs" :key="faq.id" class="faq-item">
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <h4>{{ faq.question }}</h4>
              <i :class="['fas', faq.isOpen ? 'fa-minus' : 'fa-plus']"></i>
            </div>
            <div v-show="faq.isOpen" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2>Find Our Campus</h2>
        <div class="map-placeholder">
          <div class="map-content">
            <i class="fas fa-map-marked-alt"></i>
            <h3>Tech-with-Ease Campus</h3>
            <p>10B, Femi Oyedele Street, Eguje B/Stop<br>Idimu, Lagos, Nigeria</p>
            <div class="map-actions">
              <button class="btn-map">View on Google Maps</button>
              <button class="btn-directions">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  course: '',
  experience: '',
  message: '',
  newsletter: false
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const faqs = ref([
  {
    id: 1,
    question: 'How long are the courses?',
    answer: 'Our courses range from 3 to 10 months depending on the program. We offer both full-time intensive courses and part-time flexible schedules to accommodate working professionals.',
    isOpen: false
  },
  {
    id: 2,
    question: 'Do I need prior experience to enroll?',
    answer: 'Not at all! We have courses designed for complete beginners as well as advanced professionals. Our instructors will assess your current level and recommend the best starting point.',
    isOpen: false
  },
  {
    id: 3,
    question: 'What kind of job support do you provide?',
    answer: 'We offer comprehensive career services including resume reviews, interview preparation, portfolio development, and connections to our network of 150+ hiring partners.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Are there payment plans available?',
    answer: 'Yes! We offer flexible payment options including monthly installments, income share agreements, and scholarships for qualifying students. Contact us to discuss the best option for you.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Can I attend classes online?',
    answer: 'Absolutely! We offer both in-person and online learning options. Our online classes are live and interactive, providing the same quality education as our on-campus programs.',
    isOpen: false
  },
  {
    id: 6,
    question: 'What is your job placement rate?',
    answer: 'We maintain a 98% job placement rate within 6 months of graduation. Our graduates work at top companies like Google, Apple, Microsoft, Netflix, and many innovative startups.',
    isOpen: false
  }
])

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }
  
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Success
    submitMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (id) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
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

/* Contact Section */
.contact-section {
  padding: 5rem 2rem;
  background: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Form */
.contact-form-wrapper h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.contact-form-wrapper p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4f46e5;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin-right: 0.5rem;
}

.submit-btn {
  background: linear-gradient(135deg, #4f46e5, #3730a3);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  min-width: 160px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Contact Info */
.contact-info-wrapper h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.contact-info-wrapper > p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateX(5px);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4f46e5, #3730a3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon i {
  color: white;
  font-size: 1.2rem;
}

.info-content h4 {
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-content p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.social-connect {
  text-align: center;
}

.social-connect h4 {
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.facebook { background: #3b5998; }
.twitter { background: #1da1f2; }
.linkedin { background: #0077b5; }
.instagram { background: #e4405f; }
.youtube { background: #ff0000; }

/* FAQ Section */
.faq-section {
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

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 15px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.faq-question h4 {
  color: #333;
  font-weight: 600;
  margin: 0;
}

.faq-question i {
  color: #667eea;
  font-size: 1.2rem;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #e9ecef;
}

.faq-answer p {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0 0;
}

/* Map Section */
.map-section {
  padding: 5rem 2rem;
  background: white;
}

.map-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.map-placeholder {
  background: linear-gradient(135deg, #4f46e5, #3730a3);
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.map-content i {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.map-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.map-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.map-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-map,
.btn-directions {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-map:hover,
.btn-directions:hover {
  background: white;
  color: #667eea;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
  
  .map-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .faq-question {
    padding: 1rem;
  }
  
  .faq-answer {
    padding: 0 1rem 1rem;
  }
}
</style>