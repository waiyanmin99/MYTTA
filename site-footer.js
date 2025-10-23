class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container pad28">
          <div class="cols cols-4">
            <div>
              <strong>MYTTA Foundation</strong>
              <div><small>© <span id="year"></span> MYTTA Foundation</small></div>
              <div><small class="muted">“Dare to Dream.”</small></div>
            </div>

            <div>
              <strong>Product</strong>
              <div>
                <small class="muted">
                  <a href="analytics.html">Services</a> · 
                  <a href="features.html">Case Tools</a> · 
                  <a href="articles.html">Knowledge</a>
                </small>
              </div>
            </div>

            <div>
              <strong>Company</strong>
              <div>
                <small class="muted">
                  <a href="team.html">About</a> · 
                  <a href="community.html">Community</a> · 
                  <a href="team.html#partners">Partners</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);