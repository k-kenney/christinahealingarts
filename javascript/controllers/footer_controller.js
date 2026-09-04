import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.element.innerHTML = `
      <footer class="site-footer">
        <div class="footer-container">

          <div class="business-logo-white">
            <a href="/" aria-label="Christina Healing Arts home">
              <img
                src="/img/yellow-logo-circle.png"
                alt="Christina Healing Arts"
              />
            </a>
          </div>

          <div class="footer-center">

            <p class="footer-name">
              Christina Healing Arts
            </p>

            <p class="footer-tagline">
              Movement · Connection · Wellbeing
            </p>

            <div class="footer-social-icons">

              <a
                href="https://www.facebook.com/christinapharesyoga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/christinahealingarts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/christina-phares-18b541145/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

            </div>

          </div>

          <div class="footer-copyright">
            <small>
              &copy; 2026 Christina Healing Arts
            </small>
          </div>

        </div>
      </footer>
    `;
  }
}