// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


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
// --- Testimonials carousel (continuous scroll) ---
(function(){
  const reviews = [
    { name:"Eli*****", role:"Asylum client", stars:5,
      text:"Phenomenal support. Clear steps and follow-ups. Huge peace of mind.",
      photo:"" },
    { name:"Gri*****", role:"EAD renewal", stars:5,
      text:"Got reminders and guidance. Wish I had used this earlier.",
      photo:"" },
    { name:"Cra*****", role:"Court prep", stars:5,
      text:"Explained everything. I didn’t have to log in to USCIS daily anymore.",
      photo:"" },
    { name:"A.M.", role:"Family petition", stars:5,
      text:"They treated me like family. I finally understood my options.",
      photo:"" },
    { name:"R.K.", role:"Asylum interview", stars:5,
      text:"Practice interview and checklist made me confident.",
      photo:"" },
    { name:"J.S.", role:"Work permit", stars:5,
      text:"Renewal on time—no lapse. Thank you!", photo:"" },
  ];

  const track = document.getElementById('testiTrack');
  if (!track) return;

  const makeStars = n => '★ '.repeat(n).trim();
  const cardHTML = r => `
    <article class="testi-card">
      <div class="testi-head">
        <div class="avatar">
          ${r.photo ? `<img src="${r.photo}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">` : r.name.slice(0,1)}
        </div>
        <div>
          <div class="name">${r.name}</div>
          <div class="role">${r.role}</div>
        </div>
        <div class="tstars" style="margin-left:auto">${makeStars(r.stars)}</div>
      </div>
      <p class="quote">“${r.text}”</p>
    </article>
  `;

  // Populate track with 2x set for seamless loop
  track.innerHTML = reviews.map(cardHTML).join('') + reviews.map(cardHTML).join('');

  let x = 0;
  const speed = 0.4;      // px per frame (adjust to taste)
  let running = true;
  let loopWidth = 0;

  function computeLoopWidth(){
    const children = track.children;
    let w = 0, half = children.length / 2;
    for (let i=0;i<half;i++) w += children[i].getBoundingClientRect().width + 16; // +gap
    loopWidth = w;
  }
  computeLoopWidth();
  window.addEventListener('resize', computeLoopWidth);

  function tick(){
    if (running){
      x -= speed;
      if (-x >= loopWidth) x = 0;
      track.style.transform = `translateX(${x}px)`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Controls
  function step(dir){
    const first = track.querySelector('.testi-card');
    if(!first) return;
    const w = first.getBoundingClientRect().width + 16;
    x += dir * w; // +1 => right, -1 => left
  }
  document.getElementById('tPrev')?.addEventListener('click', ()=>step(+1));
  document.getElementById('tNext')?.addEventListener('click', ()=>step(-1));

  // Pause on hover
  //track.addEventListener('mouseenter', ()=> running = false);
  //track.addEventListener('mouseleave', ()=> running = true);
})();




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
