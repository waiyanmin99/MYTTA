// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Feature cards
const features = [
  {title:'Case Tracker', desc:'Track all case statuses with update history and notes.'},
  {title:'Processing Time Trends', desc:'Visualize changes and predict timelines with historical data.'},
  {title:'Visa Bulletin Trends', desc:'Quickly interpret movement by category and chargeability.'},
  {title:'Automated Notifications', desc:'Never miss inquiries, biometrics, or filing windows.'},
  {title:'Email Integration', desc:'Connect Gmail/Outlook to triage client messages by case.'},
  {title:'Bulk Upload', desc:'Import cases from CSV with validation and dedupe checks.'},
];
const grid = document.querySelector('.feature-grid');
if (grid) features.forEach(f=>{
  const card = document.createElement('div');
  card.className='card';
  card.innerHTML = `<div class="chip"></div><strong>${f.title}</strong><p class="muted">${f.desc}</p>`;
  grid.appendChild(card);
});

// Pricing cards
const tiers=[
  {name:'Starter', price:'$0', perks:['1 user','Up to 10 cases','Email alerts']},
  {name:'Premium', price:'$49', perks:['3 users','Unlimited cases','Analytics + CSV import']},
  {name:'Business', price:'Contact us', perks:['SSO/SAML','Priority support','Custom integrations']},
];
const wrap=document.querySelector('.pricing-cards');
if (wrap) tiers.forEach(t=>{
  const el=document.createElement('div');
  el.className='card';
  el.innerHTML = `
    <div style="color:#64748b;font-weight:600">${t.name}</div>
    <div style="font-size:28px;font-weight:800;margin-top:6px">${t.price}<span style="font-size:14px;color:#64748b;font-weight:500">/mo</span></div>
    <ul class="list">${t.perks.map(p=>`<li>${p}</li>`).join('')}</ul>
    <div style="margin-top:10px"><a class="btn btn-primary" href="#cta">Get started</a></div>`;
  wrap.appendChild(el);
});

// CTA button demo
var _btn=document.getElementById('startBtn'); if(_btn) _btn.addEventListener('click',()=>{
  alert('Demo only: hook this up to your sign‑up flow.');
});
// --- Testimonials slider ---
const quotes = [
  "“MYTTA treated me like family. I finally understood my options.” — A.M.",
  "“Clear guidance for my asylum case. I felt supported the whole way.” — R.K.",
  "“They helped me renew my work permit on time. Huge relief.” — J.S.",
];
const qEl = document.querySelector('[data-quote]');
const dotsWrap = document.getElementById('tDots');
const prev = document.getElementById('tPrev');
const next = document.getElementById('tNext');

if (qEl && dotsWrap && prev && next) {
  let i = 0;
  // dots
  const dots = quotes.map((_, idx) => {
    const d = document.createElement('div');
    d.className = 'dot' + (idx === 0 ? ' active' : '');
    d.addEventListener('click', () => { i = idx; render(); });
    dotsWrap.appendChild(d);
    return d;
  });

  function render() {
    qEl.textContent = quotes[i];
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  prev.addEventListener('click', () => { i = (i - 1 + quotes.length) % quotes.length; render(); });
  next.addEventListener('click', () => { i = (i + 1) % quotes.length; render(); });

  // auto-advance every 5s
  setInterval(() => { i = (i + 1) % quotes.length; render(); }, 5000);

  render();
}


// --- Dropdown click support (mobile + accessibility) ---
(function(){
  const dds = document.querySelectorAll('.dropdown');
  const toggles = document.querySelectorAll('.dropdown-toggle');
  if(!toggles.length) return;
  toggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dd = btn.closest('.dropdown');
      const willOpen = !dd.classList.contains('open');
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      if (willOpen) dd.classList.add('open');
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
})();
