class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer footer--dark">
        <div class="container pad28">
          <div class="cols cols-4 footer-cols">

            <!-- Brand -->
            <div>
              <strong>MYTTA Foundation</strong>
              <div><small>© <span id="year"></span> MYTTA Foundation</small></div>
              <div><small class="muted">“Dare to Dream.”</small></div>
            </div>

            <!-- Product -->
            <div>
              <strong>Product</strong>
              <ul class="f-list">
                <li><a href="analytics.html">Services</a></li>
                <li><a href="features.html">Case Tools</a></li>
                <li><a href="articles.html">Knowledge</a></li>
              </ul>
            </div>

            <!-- Company -->
            <div>
              <strong>Company</strong>
              <ul class="f-list">
                <li><a href="team.html">About</a></li>
                <li><a href="community.html">Community</a></li>
                <li><a href="team.html#partners">Partners</a></li>
              </ul>
            </div>

            <!-- Connect -->
            <div>
              <strong>Connect</strong>
              <ul class="f-list social">
                <li>
                  <a href="https://facebook.com/myttafoundation" target="_blank" rel="noopener">
                    <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5H16V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7v3h3v8h3.5z"/></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@myttafoundation" target="_blank" rel="noopener">
                    <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.5c0-1.5-1.2-2.7-2.7-2.7C17.9 4.5 12 4.5 12 4.5s-5.9 0-8.3.3C2.2 4.8 1 6 1 7.5 1 9 1 12 1 12s0 3 .3 4.5c.3 1.5 1.5 2.7 3 2.7 2.4.3 7.7.3 7.7.3s5.9 0 8.3-.3c1.5 0 2.7-1.2 2.7-2.7.3-1.5.3-4.5.3-4.5s0-3-.3-4.5zM9.8 15.1V8.9L15 12l-5.2 3.1z"/></svg>
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="tel:+16265551234">
                    <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.7 0 1.2.6 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.6 21.2 2.8 13.4 2.8 3.2 2.8 2.5 3.3 2 4 2h2.1c.7 0 1.2.6 1.2 1.2 0 1.1.2 2.2.6 3.2.1.4 0 .9-.3 1.2l-2 2.2z"/></svg>
                    +1 (716) 730-0576
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    `;
    const year = this.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();
  }
}
customElements.define('site-footer', SiteFooter);
