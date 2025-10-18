<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">Tech-with-Ease</h3>
        <p class="footer-desc">
          Empowering minds through innovative tech education. 
          Your journey to tech excellence starts here.
        </p>
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4 class="section-title">Quick Links</h4>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="section-title">Popular Courses</h4>
        <ul class="footer-links">
          <li><a href="#">Web Design Fundamentals</a></li>
          <li><a href="#">Frontend Development</a></li>
          <li><a href="#">Fullstack Development</a></li>
          <li><a href="#">Data Analytics</a></li>
          <li><a href="#">Data Science</a></li>
          <li><a href="#">Graphics Design</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4 class="section-title">Contact Info</h4>
        <div class="contact-info">
          <p><i class="fas fa-map-marker-alt"></i> 10B, Femi Oyedele Street, Eguje B/Stop, Idimu, Lagos</p>
          <p><i class="fas fa-phone"></i> +234 816 490 8656</p>
          <p><i class="fas fa-envelope"></i> info@techwithease.com</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 Tech-with-Ease. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3.footer-title {
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-section h4.section-title {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-desc {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #bdc3c7;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #ffd700;
  color: #2c3e50;
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffd700;
}

.contact-info p {
  margin-bottom: 0.8rem;
  color: #bdc3c7;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info i {
  color: #ffd700;
  width: 16px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #ffd700;
}

@media screen and (max-width: 768px) {
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>