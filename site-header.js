
class SiteHeader extends HTMLElement {
  connectedCallback() { this.innerHTML = `<header>
    <div class="nav-container">
      <div class="nav-left">
        <a href="index.html" class="brand-link">
          <img src="logo.jpg" alt="MYTTA" class="logo">
          <strong>MYTTA Foundation</strong>
        </a>
      </div>
      
      <div class="nav-center">
        <a href="index.html" class="nav-link">Home</a>

        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Services</button>
          <div class="mega">
            <div class="mega-grid">
              <a class="mega-item" href="services-asylum.html">🕊️ Asylum & Refugee</a>
              <a class="mega-item" href="services-ead.html">💼 Employment Authorization (EAD)</a>
              <a class="mega-item" href="services-greencard.html">🪪 Green Card & I-130</a>
              <a class="mega-item" href="services-eoir.html">⚖️ EOIR / Court Defense</a>
              <a class="mega-item" href="services-vawa-u.html">💛 VAWA & U Visa</a>
              <a class="mega-item" href="services-detention.html">🏥 Detention Support</a>
              <a class="mega-item" href="services-student.html">🎓 Student Visa Assistance</a>
              <a class="mega-item" href="services-general.html">📂 General Legal / Court</a>
            </div>
            <div class="mega-cta">
              <div>Not sure where to start?</div>
              <a class="btn btn-primary" href="all-services.html">Browse All Services</a>
            </div>
          </div>
        </div>

        <!-- Case Tools (mega menu style like Services) -->
        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Case Tools</button>
          <div class="mega">
            <div class="mega-grid">
              <a class="mega-item" href="https://egov.uscis.gov/casestatus/landing.do" target="_blank" rel="noopener">📅 Case Status Checker</a>
              <a class="mega-item" href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener">🕒 Processing Time Estimator</a>
              <a class="mega-item" href="features.html#guides">📘 Form Guide Library</a>
              <a class="mega-item" href="features.html#checklist">📄 Document Checklist Generator</a>
              <a class="mega-item" href="features.html#alerts">🔔 Case Alerts & Notifications</a>
              <a class="mega-item" href="features.html#tracker">📊 Case Tracker Overview</a>
              <a class="mega-item" href="features.html#uploads">⬆️ Upload Evidence / Forms</a>
              <a class="mega-item" href="features.html#exports">📥 Export CSV / PDF</a>
            </div>
            <div class="mega-cta">
              <div>Want everything in one place?</div>
              <a class="btn btn-primary" href="features.html">Open Case Tools</a>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Knowledge</button>
          <div class="menu">
            <a href="articles.html">Articles & Q&A</a>
            <a href="faq.html">FAQ & Downloads</a>
          </div>
        </div>

        <div class="dropdown">
          <button class="nav-link dropdown-toggle">Community</button>
          <div class="menu">
            <a href="community.html">Events & Workshops</a>
            <a href="community.html#volunteer">Volunteer / Internship</a>
            <a href="team.html#partners">Partners</a>
          </div>
        </div>

        <a href="team.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </div>
      <div class="nav-right">
        <a href="signup_login.html" class="btn donate-btn">Login/Signup</a>
      </div>

    </div>
  </header>`; }
}
customElements.define('site-header', SiteHeader);
