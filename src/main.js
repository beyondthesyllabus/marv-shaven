import './style.css'
import founderImg from './assets/founder.png'

const app = document.querySelector('#app');

const sections = {
  home: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content reveal">
            <h1>Guiding young adults,<br>reframing thoughts.</h1>
            <p>Develop clarity, emotional intelligence, and purpose through expert guidance and cognitive restructuring. Your journey to a better you starts here.</p>
            <div class="hero-btns">
              <a href="#booking" class="btn btn-primary">Book a Session</a>
              <a href="#services" class="btn btn-secondary">Our Services <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="feature-icon"><i class="fas fa-comments"></i></div>
            <h3>Ask Questions</h3>
            <p>Need quick advice or have a burning question? We're here to provide clarity.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon"><i class="fas fa-share-nodes"></i></div>
            <h3>Share Experience</h3>
            <p>Your story matters. Share your journey and help others in our community.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon"><i class="fas fa-lightbulb"></i></div>
            <h3>Read Insights</h3>
            <p>Explore articles and thoughts on personal growth and mental well-being.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  about: `
    <section id="about">
      <div class="container">
        <div class="section-header reveal">
          <h2>About Marv's Haven</h2>
          <p><i>Founded by Marvelous Udoemah, we are dedicated to helping young adults navigate life's complexities.</i></p>
        </div>
        <div class="about-grid">
          <div class="about-img-container reveal">
            <div class="founder-circle">
              <img src="/Images/mar.png" alt="Marvelous Udoemah">
            </div>
          </div>
          <div class="about-content reveal">
            <div class="about-text-card">
              <h3>Meet the Founder</h3>
              <p><strong>Marvelous Udoemah</strong> is an educationist specializing in Guidance and Counseling. She is passionate about helping young people understand themselves better, especially in areas like identity, relationships, and emotional intelligence.</p>
              <p style="margin-top: 15px;">Beyond academics, she is a writer and author of the teen-focused book "Being Teen". Her leadership extends to Pleasant Hope Ministries International, where she serves as the Teenagers President of Arrow Teens of the Pleasant Hope Ministries International,Port Harcourt, Rivers State.</p>
              
              <div class="qualifications">
                <h4>Qualifications & Memberships</h4>
                <div class="qual-item"><i class="fas fa-graduation-cap"></i> B.ed (Guidance and Counselling)</div>
                <div class="qual-item"><i class="fas fa-certificate"></i> Certified @ Purposeful Teens Academy</div>
                <div class="qual-item"><i class="fas fa-users"></i> Member of The Writer's Manger Network (TWMN)</div>
              </div>

              <div class="mission-vision-grid">
                <div class="vision-card">
                  <h4>Our Mission</h4>
                  <p>To empower young adults with clarity and emotional tools to thrive in every area of life.</p>
                </div>
                <div class="vision-card">
                  <h4>Our Vision</h4>
                  <p>To be the leading haven for cognitive restructuring and purposeful living for the next generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  services: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Services</h2>
          <p>Tailored counselling and coaching sessions designed for your unique journey.</p>
        </div>
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-user"></i></div>
            <h3>One-on-one Counselling</h3>
            <p>Personalized sessions focusing on your specific mental and emotional needs.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-book-open"></i></div>
            <h3>Guidance Sessions</h3>
            <p>Academic and life direction guidance for students seeking a path forward.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-chart-line"></i></div>
            <h3>Personal Development</h3>
            <p>Coaching to help you reach your full potential and master emotional intelligence.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-users-viewfinder"></i></div>
            <h3>Group Sessions</h3>
            <p>Interactive group counselling for collaborative growth and shared learning.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-school"></i></div>
            <h3>Educational Counselling</h3>
            <p>Specialized support for students navigating the challenges of academic life.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
          <div class="service-card reveal">
            <div class="service-icon"><i class="fas fa-child-reaching"></i></div>
            <h3>Adolescent Counselling</h3>
            <p>Dedicated support for teenagers dealing with identity and growth phases.</p>
            <a href="#booking" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  `,
  booking: `
    <section id="booking">
      <div class="container">
        <div class="section-header reveal">
          <h2>Book a Session</h2>
          <p>Take the first step towards clarity. Select a service and time that works for you.</p>
        </div>
        <div class="booking-container reveal">
          <form id="booking-form">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required>
            </div>
            <div class="grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="example@gmail.com" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="07086083377" required>
              </div>
            </div>
            <div class="form-group">
              <label>Select Service</label>
              <select required>
                <option value="">Choose a service...</option>
                <option>One-on-one counselling</option>
                <option>Guidance sessions</option>
                <option>Personal development coaching</option>
                <option>Group sessions</option>
                <option>Educational counselling</option>
                <option>Adolescent counselling</option>
              </select>
            </div>
            <div class="grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div class="form-group">
                <label>Preferred Date</label>
                <input type="date" required>
              </div>
              <div class="form-group">
                <label>Preferred Time</label>
                <input type="time" required>
              </div>
            </div>
            <div class="form-group">
              <label>Additional Notes</label>
              <textarea rows="4" placeholder="Briefly describe what you'd like to discuss..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 18px;">Confirm Booking Request</button>
          </form>
          <div id="booking-success" style="display: none; text-align: center; padding: 40px 0;">
            <div class="service-icon" style="margin: 0 auto 20px; background: #E7F9EE; color: #27AE60;"><i class="fas fa-check"></i></div>
            <h3>Request Submitted!</h3>
            <p>Thank you for choosing Marv's Haven. We will send a confirmation message to your email shortly.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section id="contact" style="background: var(--bg-soft);">
      <div class="container">
        <div class="section-header reveal">
          <h2>Get in Touch</h2>
          <p>Have questions? We're just a message away.</p>
        </div>
        <div class="about-grid">
            <div class="contact-info reveal">
              <div class="contact-card">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-details">
                  <h5>Email Us</h5>
                  <p><strong>marvelousgab77@gmail.com</strong></p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <div class="contact-details">
                  <h5>Call Us</h5>
                  <p><strong>07086083377</strong></p>
                </div>
              </div>
              <div class="contact-card whatsapp">
                <a href="https://wa.me/2347086083377" target="_blank">
                  <i class="fab fa-whatsapp"></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
           <div class="contact-form-container reveal">
              <div class="booking-container" style="padding: 30px;">
                <form>
                   <div class="form-group">
                      <label>Subject</label>
                      <input type="text" placeholder="How can we help?">
                   </div>
                   <div class="form-group">
                      <label>Message</label>
                      <textarea rows="5" placeholder="Your message..."></textarea>
                   </div>
                   <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                </form>
              </div>
           </div>
        </div>
      </div>
    </section>
  `
};

// Render all sections
app.innerHTML = `
  ${sections.home}
  ${sections.about}
  ${sections.services}
  ${sections.booking}
  ${sections.contact}
`;

// Mobile Menu Toggle
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
}

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// Scroll Reveal Logic
const revealOnScroll = () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;
    if (isVisible) {
      el.classList.add('active');
    }
  });
};

// Header Scrolled Effect
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  revealOnScroll();
});

// Initial reveal check
revealOnScroll();

// Form Handling
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookingForm.style.display = 'none';
    document.querySelector('#booking-success').style.display = 'block';
  });
}

// Insights Interaction
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.innerText;
    if (title === 'Ask Questions' || title === 'Share Experience') {
      alert(`The ${title} feature is coming soon! For now, please use the contact form below.`);
      const contactTarget = document.querySelector('#contact');
      if (contactTarget) {
        window.scrollTo({
          top: contactTarget.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
