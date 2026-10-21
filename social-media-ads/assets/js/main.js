/* OMD social media advertising landing page behaviour (built on the /google-ads/ script) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const U = 'https://onlinemarketingfordoctors.com/wp-content/uploads/';

  /* ---------------- data: case studies (the Facebook and Instagram side of each account) ----------------
     every figure is read off the Ads Manager screenshot shown with it. 'fit'
     marks a short, wide screenshot that should keep its own shape; reel is
     an optional [YouTube id, caption] for one of the clinic's video ads */
  const R = 'assets/results/meta/';
  const CASES = [
    {
      id: 'delta', name: 'Delta Clinics', logo: 'assets/client-logos/delta-clinics-logo.webp',
      place: 'Harley Street and Finchley, London', specialty: 'Plastic surgery', months: '2025 to 2026',
      title: '130 tummy tuck leads in a month at £4.64 each, then remarketing for the ones who waited.',
      hero: { n: '£4.64', t: 'per tummy tuck lead, June 2025' },
      stats: [['130', 'tummy tuck leads in June 2025'], ['35', 'remarketing leads in August 2025, at £6.96 each'], ['63', 'breast augmentation and tummy tuck leads from dynamic ads, September 2026']],
      situation: 'Mr Hazem Alfie brought twenty years as a consultant plastic surgeon to a newly opened Harley Street clinic. Tummy tuck and breast augmentation are decisions patients take months over, so the clinic needed to be in front of them long before they were ready to search.',
      did: ['Lead campaigns split by procedure: tummy tuck, breast augmentation and labiaplasty, each with its own budget', 'Dynamic ads that mix feed images, carousels and surgeon videos, so Meta shows each person the version they respond to', 'A tummy tuck remarketing campaign for people who had already watched or engaged', 'Traffic campaigns to the procedure pages at £0.07 to £0.08 a click', 'An AI SMS assistant that replies to every lead and books the phone consultation'],
      shots: [[R + 'plastic-surgeons/delta-clinics-tummy-tuck-june-2025.webp', 'Tummy tuck leads, June 2025: 130 at £4.64', '', 'fit'], [R + 'plastic-surgeons/delta-clinics-tummy-tuck-remarketing-august-2025.webp', 'Tummy tuck remarketing, August 2025: 35 at £6.96', '', 'fit'], [R + 'plastic-surgeons/delta-clinics-breast-augmentation-feed-ad.webp', 'Breast augmentation feed ad']],
      portrait: 'assets/cases/delta-alfie.webp',
      quote: 'I have seen an increase of almost 730% in the total number of leads or enquiries that come to the clinic, and that also reflects on the total number of patients I have been operating on.',
      who: 'Mr Hazem Alfie', role: 'Consultant Plastic Surgeon, Delta Clinics',
      link: 'https://onlinemarketingfordoctors.com/casestudy/delta-clinics/'
    },
    {
      id: 'bfc', name: 'British Face Clinic', logo: 'assets/client-logos/british_face_clinic_logo.webp',
      place: 'Harley Street, Milton Keynes and Northampton', specialty: 'Facial cosmetic surgery', months: 'July 2025',
      title: '127 facelift and rhinoplasty leads in one month, with mini facelift leads at £3.79.',
      hero: { n: '£3.79', t: 'per mini facelift lead, July 2025' },
      stats: [['127', 'leads across five campaigns in July 2025'], ['40', 'rhinoplasty leads at £7.20 each'], ['19', 'male rhinoplasty leads from a campaign of their own']],
      situation: 'Mr Mrinal Supriya is known in the profession for deep plane facelift and rhinoplasty. Facial surgery patients research for months and want to see and hear the surgeon before they ask for a consultation, so the ads lead with him.',
      did: ['Separate lead campaigns for mini facelift, deep plane facelift, rhinoplasty and male rhinoplasty', 'Instant forms run alongside the deep plane facelift campaign, to see which brought cheaper leads', 'Video ads built around the surgeon: procedure FAQs, patient testimonials and results', 'Every lead tracked through the CRM to a booked consultation'],
      shots: [[R + 'plastic-surgeons/british-face-clinic-mini-facelift-july-2025.webp', 'Five lead campaigns, July 2025: mini facelift at £3.79', '', 'fit']],
      reel: ['8g-nRQfQ674', 'Mini facelift video ad'],
      portrait: 'assets/cases/bfc-supriya.webp',
      quote: '', who: 'Mr Mrinal Supriya', role: 'Facial Cosmetic Surgeon, British Face Clinic',
      link: 'https://onlinemarketingfordoctors.com/case-study/british-face-clinic/'
    },
    {
      id: 'hsec', name: 'The Harley Street Eye Centre', logo: 'assets/client-logos/Harley-Street-Eye-Centre-logo.webp',
      place: 'Harley Street, London', specialty: 'Ophthalmology', months: 'September 2026',
      title: '55 laser eye surgery leads from two feed ads, from £11.00 each.',
      hero: { n: '£11.00', t: 'per laser eye surgery lead, September 2026' },
      stats: [['55', 'form leads in September 2026'], ['17,740', 'people reached by the two ads'], ['£1,100', 'per eye: the price the ads lead with']],
      situation: 'Mr Hakam Ghabra runs a single-surgeon practice on Harley Street, up against national laser eye chains. Most people who would benefit from laser eye surgery are not searching for it today, so the ads go to them in the feed.',
      did: ['Lead ads with instant forms for laser eye surgery, with the price per eye up front', 'Carousel, image and video versions of each ad tested side by side', 'Two angles: "considering laser eye surgery?" and "tired of glasses and contacts?"', 'One action in every ad: book a free consultation'],
      shots: [[R + 'ophthalmologists/the-harley-street-eye-centre-leads-september-2026.webp', 'Two lead ads, September 2026: 55 leads', '', 'fit'], [R + 'ophthalmologists/the-harley-street-eye-centre-feed-ad-1.webp', 'Feed ad: considering laser eye surgery?'], [R + 'ophthalmologists/the-harley-street-eye-centre-feed-ad-2.webp', 'Feed ad: tired of glasses and contacts?']],
      portrait: 'assets/portraits/hakam-ghabra.webp',
      quote: '', who: 'Mr Hakam Ghabra', role: 'Clinical Director, The Harley Street Eye Centre',
      link: ''
    },
    {
      id: 'mansmatters', name: 'MansMatters', logo: 'assets/client-logos/mans-matters-logo.webp',
      place: 'London', specialty: "Men's health", months: 'February 2025',
      title: '56 erectile dysfunction leads at £1.23 each, in a category most advertisers avoid.',
      hero: { n: '£1.23', t: 'average cost per lead, February 2025' },
      stats: [['56', 'leads from six static ads'], ['£1.12', 'per lead from the best ad'], ['3,706', 'men reached']],
      situation: "Men's health is one of the hardest categories on Meta: an ad may not name the reader's condition or suggest it knows about it. The clinic needed discreet ads that still made men want to ask a question.",
      did: ['Six static ads tested at once in one lead campaign', "Copy written to Meta's personal attributes policy: it talks about the treatment, never about the reader", 'Budget left on the winning ad, which produced 52 of the 56 leads', "Video ads for erectile dysfunction and Peyronie's disease treatment"],
      shots: [[R + "mens-health-clinics/mansmatters-erectile-dysfunction-february-2025.webp", 'Six ads, February 2025: 56 leads at £1.23', '', 'fit']],
      portrait: '', quote: '', link: ''
    },
    {
      id: 'hanson', name: 'The Hanson Clinic', logo: 'assets/client-logos/the-hanson-clinic-logo.svg',
      place: 'Dublin, Ireland', specialty: 'Facial plastic surgery', months: 'January to May 2025',
      title: 'From 48 facelift leads in January to 149 surgical leads in May, at €3.30 each.',
      hero: { n: '€3.30', t: 'per deep plane facelift lead, May 2025' },
      stats: [['149', 'facelift and blepharoplasty leads in May 2025'], ['€5.47', 'per facelift lead in March, down to €3.30 by May'], ['€25', 'a day across both campaigns']],
      situation: '',
      did: ['A deep plane facelift lead campaign from January, improved month by month', 'A second campaign for blepharoplasty, added once the facelift ads were working', 'Surgeon and procedure videos made for the feed and Reels', 'Budgets of €10 to €15 a day per campaign'],
      shots: [[R + 'plastic-surgeons/the-hanson-clinic-facelift-blepharoplasty-may-2025.webp', 'May 2025: 149 leads from €3.30', '', 'fit'], [R + 'plastic-surgeons/the-hanson-clinic-deep-plane-facelift-march-2025.webp', 'March 2025: 57 leads at €5.47', '', 'fit'], [R + 'plastic-surgeons/the-hanson-clinic-deep-plane-facelift-january-2025.webp', 'January 2025: 48 leads', '', 'fit']],
      portrait: '', quote: '', link: ''
    },
    {
      id: 'whitehill', name: 'White Hill Clinic', logo: 'assets/client-logos/white-hill-clinic-logo.webp',
      place: '', specialty: 'Breast surgery', months: 'May and June 2025',
      title: '175 breast augmentation leads in a month, by expanding what already worked.',
      hero: { n: '175', t: 'breast augmentation leads, May 2025' },
      stats: [['$12.38', 'per lead on the original campaign'], ['139', 'leads in June 2025 at $11.76'], ['37,232', 'people reached in June']],
      situation: '',
      did: ['A breast augmentation lead campaign, then an expanded version with wider audiences and a larger budget once it had proved itself', 'Both run side by side for a month, so the expansion was judged against the original', 'Video ads for breast augmentation and for the clinic itself'],
      shots: [[R + 'plastic-surgeons/white-hill-clinic-breast-augmentation-may-2025.webp', 'May 2025: 175 leads', '', 'fit'], [R + 'plastic-surgeons/white-hill-clinic-breast-augmentation-june-2025.webp', 'June 2025: 139 leads at $11.76', '', 'fit']],
      portrait: '', quote: '', link: ''
    },
    {
      id: 'prophile', name: 'Prophile Clinics', logo: 'assets/client-logos/prophile-clinics-logo.webp',
      place: 'Brisbane and Gold Coast, Australia', specialty: 'Aesthetic medicine', months: 'January 2026',
      title: '581 form leads in one month across seven treatment campaigns.',
      hero: { n: '581', t: 'form leads, January 2026' },
      stats: [['150', 'anti-wrinkle leads in Brisbane at $8.23'], ['153', 'laser treatment leads in Brisbane'], ['7', 'campaigns, one per treatment and city']],
      situation: '',
      did: ['One campaign per treatment and per city: anti-wrinkle, laser and skin tightening, in Brisbane and on the Gold Coast', 'Instant forms, so patients can ask for a price without leaving Instagram', 'Video ads for HIFU, Pico laser, laser tattoo removal and anti-wrinkle treatment', 'Daily budgets from $20 to $68 per campaign'],
      shots: [[R + 'aesthetic-clinics/prophile-clinics-anti-wrinkle-january-2026.webp', 'Seven campaigns, January 2026: 581 leads', '', 'fit']],
      portrait: '', quote: '', link: ''
    },
    {
      id: 'crown', name: 'The Crown Clinic', logo: 'assets/client-logos/the-crown-clinic-logo.webp',
      place: 'Australia', specialty: 'Hair transplant surgery', months: '2024 to 2025',
      title: '149 hair transplant leads in two months at $11.42 each.',
      hero: { n: '$11.42', t: 'per hair transplant lead, September to October 2024' },
      stats: [['149', 'leads in September and October 2024'], ['1,146', 'clicks to the website at $0.49 each'], ['106', 'leads in June 2025 at $12.83']],
      situation: '',
      did: ['A hair transplant lead campaign running alongside a low-cost traffic campaign that feeds remarketing', 'Video ads for every stage: hair loss, the baldness calculator, the surgery and the client journey', 'A separate campaign for gynaecomastia', 'The same structure kept running and refreshed into 2025'],
      shots: [[R + 'hair-transplant-clinics/the-crown-clinic-hair-transplant-september-october-2024.webp', 'September to October 2024: 149 leads at $11.42', '', 'fit'], [R + 'hair-transplant-clinics/the-crown-clinic-hair-transplant-june-2025.webp', 'June 2025: 106 leads at $12.83', '', 'fit']],
      portrait: '',
      quote: 'Enquiries have gone crazy and the number of enquiries has increased three-fold ever since they started 6 months ago.',
      who: 'James Nadin', role: 'CEO, ICCM and The Crown Clinic',
      link: 'https://onlinemarketingfordoctors.com/case-study-crown-clinic/'
    },
    {
      id: 'mehta', name: 'Malay Mehta Aesthetic Clinic', logo: 'assets/client-logos/malay-mehta-logo.webp',
      place: 'India', specialty: 'Hair transplant surgery', months: '2024 to 2025',
      title: '165 hair transplant enquiries in two months, and the same campaign still producing in 2025.',
      hero: { n: '165', t: 'hair transplant enquiries, November to December 2024' },
      stats: [['92', 'more enquiries in May 2025'], ['65,355', 'people reached in two months'], ['₹437.77', 'per enquiry']],
      situation: '',
      did: ['One hair transplant lead campaign, optimised for submitted enquiries', 'Client testimonial and procedure videos made for the feed', 'Kept running and refreshed rather than restarted, so Meta keeps what it has learned'],
      shots: [[R + 'hair-transplant-clinics/malay-mehta-hair-transplant-november-december-2024.webp', 'November to December 2024: 165 enquiries', '', 'fit'], [R + 'hair-transplant-clinics/malay-mehta-hair-transplant-may-2025.webp', 'May 2025: 92 enquiries', '', 'fit']],
      portrait: '', quote: '',
      link: 'https://onlinemarketingfordoctors.com/casestudy/dr-malay-mehta/'
    },
    {
      id: 'attalla', name: 'Chelsea Cosmetics', logo: 'assets/client-logos/dr-mark-attalla-logo.webp',
      place: 'Melbourne, Australia', specialty: 'Cosmetic surgery', months: 'Treatment launch',
      title: '16 leads in a day on a $30 budget, for a treatment the clinic had just launched.',
      hero: { n: '$1.80', t: 'per lead for a newly launched cellulite treatment' },
      stats: [['16', 'leads in one day'], ['$30', 'daily budget'], ['2', 'audiences: people near the clinic, and past visitors']],
      situation: 'Chelsea Cosmetics had just launched a new cellulite treatment and needed a fast, reliable way to find the people interested in it.',
      did: ['Several ad copies and creatives tested against each other from the first day', 'Targeting people who live close to the clinic', 'Retargeting past website visitors', 'A follow-up process, so every lead was contacted quickly'],
      shots: [],
      portrait: 'assets/cases/attalla-portrait.webp',
      quote: 'We found that we are spending almost one-fourth of our previous budget and getting double the conversion, which is a great deal to achieve in a short period of time.',
      who: 'Dr Mark Attalla', role: 'Cosmetic Surgeon and Owner, Chelsea Cosmetics Melbourne',
      link: 'https://onlinemarketingfordoctors.com/case-study-dr-attalla/'
    }
  ];

  const FEATURED = ['forbes-logo-2.webp', 'daily-mail-uk-logo.png', 'business-insider-logo-2.webp', 'entrepreneur-logo.png', 'Yahoo_Finance_logo.webp', 'mashable-logo.webp', 'usa-today-logo.webp', 'msn-logo-1.webp', 'london-insider-logo.webp', 'marketing-mag-logo.webp', 'thrive-global-logo.png', 'smart-company-logo-1.png', 'herald-sun.png', 'new-york-weekly.webp', 'sem_logo.webp'];

  /* ---------------- header ---------------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  const drawer = $('#drawer'), menuBtn = $('#menuBtn');
  const setDrawer = (open) => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => setDrawer(!drawer.classList.contains('is-open')));
  $$('a', drawer).forEach(a => a.addEventListener('click', () => setDrawer(false)));

  // active nav link
  const sections = $$('main section[id]');
  const navLinks = $$('.nav a');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io.observe(s));
  }

  /* ---------------- hero parallax (fine pointers only) ---------------- */
  const viz = $('#heroViz');
  if (viz && !reduced && window.matchMedia('(pointer: fine)').matches) {
    const cards = $$('.fc', viz); let raf = 0, tx = 0, ty = 0;
    const apply = () => { raf = 0; cards.forEach(c => { const d = +c.dataset.depth || 1; c.style.setProperty('--px', (tx * 14 * d) + 'px'); c.style.setProperty('--py', (ty * 10 * d) + 'px'); }); };
    $('#hero').addEventListener('mousemove', (e) => {
      const r = viz.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width - .5); ty = ((e.clientY - r.top) / r.height - .5);
      if (!raf) raf = requestAnimationFrame(apply);
    });
    $('#hero').addEventListener('mouseleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(apply); });
  }

  /* ---------------- hero video ----------------
     muted, so it may autoplay; it only runs while the hero is on screen, and
     not at all for visitors who ask for reduced motion (they get the poster) */
  const heroVideo = $('#heroVideo');
  if (heroVideo && !reduced) {
    const play = () => { const p = heroVideo.play(); if (p && p.catch) p.catch(() => {}); };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { if (e.isIntersecting) play(); else heroVideo.pause(); }, { threshold: .2 }).observe(heroVideo);
    } else { play(); }
  }

  const CLIENTS = [
    ['delta-clinics-logo.webp', 'Delta Clinics'],
    ['british_face_clinic_logo.webp', 'British Face Clinic'],
    ['Harley-Street-Eye-Centre-logo.webp', 'The Harley Street Eye Centre'],
    ['mans-matters-logo.webp', 'MansMatters'],
    ['the-hanson-clinic-logo.svg', 'The Hanson Clinic'],
    ['white-hill-clinic-logo.webp', 'White Hill Clinic'],
    ['prophile-clinics-logo.webp', 'Prophile Clinics'],
    ['the-crown-clinic-logo.webp', 'The Crown Clinic'],
    ['malay-mehta-logo.webp', 'Malay Mehta Aesthetic Clinic'],
    ['vein-doctors-sydney-logo.webp', 'Vein Doctors Sydney'],
    ['dr-mark-attalla-logo.webp', 'Chelsea Cosmetics'],
    ['hr-plastic-surgery-logo.webp', 'HR Plastic Surgery'],
    ['bb-clinic-uk-logo.webp', 'Breast and Body Clinic UK'],
    ['symmetry-clinic-logo.png', 'Symmetry Clinic'],
    ['fortes-clinic.webp', 'Fortes Clinic'],
    ['cambridge-clear-beauty-logo.png', 'Cambridge Clear Beauty'],
    ['Victoria-House-Clinic-logo-1.webp', 'Victoria House Clinic'],
    ['paul-wilson-logo.svg', 'Paul Wilson'],
    ['Tajmeel-Clinic-logo.png', 'Tajmeel Clinic'],
    ['the-vision-surgeon-logo.webp', 'The Vision Surgeon'],
    ['head2neck-logo.png', 'Head2Neck'],
    ['manaf-khatib-logo.webp', 'Mr Manaf Khatib'],
    ['Save-Minds-logo-1.webp', 'SaveMinds'],
    ['Mindful-Space-Ireland-logo-1.webp', 'Mindful Space Ireland'],
  ];

  /* ---------------- ticker ---------------- */
  const track = $('#tickerTrack'), track2 = $('#tickerTrack2');
  const row = (arr) => arr.map(f => `<img src="assets/featured-in/${f}" alt="" loading="lazy">`).join('');
  // one row on desktop, two shorter rows on a phone where a single row reads as a trickle
  const mqTicker = window.matchMedia('(max-width: 920px)');
  const buildTicker = () => {
    if (mqTicker.matches) {
      const half = Math.ceil(FEATURED.length / 2);
      const a = row(FEATURED.slice(0, half)), b = row(FEATURED.slice(half));
      track.innerHTML = a + a;
      track2.innerHTML = b + b;
    } else {
      const all = row(FEATURED);
      track.innerHTML = all + all;
      track2.innerHTML = '';
    }
  };
  buildTicker();
  mqTicker.addEventListener('change', buildTicker);

  /* client logo strip: two identical sets, the second hidden from screen
     readers, so the track can loop by translating exactly half its width */
  const clientTrack = $('#clientTrack');
  if (clientTrack) {
    const tile = ([f, n], dup) =>
      `<div class="logo-strip-item"${dup ? ' aria-hidden="true"' : ''}><img src="assets/client-logos/${f}" alt="${dup ? '' : esc(n)}" loading="lazy"></div>`;
    clientTrack.innerHTML = CLIENTS.map(c => tile(c, false)).join('') + CLIENTS.map(c => tile(c, true)).join('');
  }

  /* ---------------- reveal + count-up ---------------- */
  const revealEls = $$('.rv');
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => ro.observe(el));
  }
  const counters = $$('[data-count]');
  // £51.66 and 5.8x need a prefix and fixed decimals; whole numbers keep the en-GB separators
  const fmtCount = (el, v) => {
    const dp = +el.dataset.decimals || 0;
    return (el.dataset.prefix || '') + v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp }) + (el.dataset.suffix || '');
  };
  const runCount = (el) => {
    const end = +el.dataset.count, dur = 1400, t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmtCount(el, end * e);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (reduced || !('IntersectionObserver' in window)) {
    counters.forEach(el => el.textContent = fmtCount(el, +el.dataset.count));
  } else {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: .6 });
    counters.forEach(el => co.observe(el));
  }

  /* ---------------- results sliders ---------------- */
  const ORDER = ['Plastic Surgeons', 'Hair Transplant Clinics', 'Aesthetic Clinics', 'Ophthalmologists', "Men's Health Clinics"];
  // captions are written by hand in assets/results/index.json, so they are used as they are
  const prettyCaption = (c) => c;
  const buildSlider = (kind, data, tabsEl, slidesEl, posEl) => {
    const groups = Object.keys(data).sort((a, b) => {
      const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    tabsEl.innerHTML = groups.map((g) => `<button class="tab" type="button" data-group="${esc(g)}"><span class="tab-name">${esc(g)}</span><span class="count">${data[g].length}</span><svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>`).join('');
    const layout = tabsEl.parentElement, slider = slidesEl.closest('.slider');
    let current = groups[0];
    // below 860px the rail becomes an accordion: the slider is moved in under the
    // open specialty, so the other specialties stay visible instead of scrolling
    // off the side of a pill row nobody notices
    const mqAcc = window.matchMedia('(max-width: 860px)');
    const applyMode = () => {
      const acc = mqAcc.matches;
      // the accordion can be fully closed; the desktop rail always has one open
      if (!acc && !current) { current = groups[0]; render(current); }
      tabsEl.setAttribute('role', acc ? 'presentation' : 'tablist');
      let active = null;
      $$('.tab', tabsEl).forEach(t => {
        const on = t.dataset.group === current;
        if (on) active = t;
        if (acc) {
          t.removeAttribute('role'); t.removeAttribute('aria-selected');
          t.setAttribute('aria-expanded', String(on));
        } else {
          t.setAttribute('role', 'tab'); t.removeAttribute('aria-expanded');
          t.setAttribute('aria-selected', String(on));
        }
      });
      slider.hidden = acc && !active;
      if (acc) { if (active) active.after(slider); } else if (slider.parentElement !== layout) { layout.append(slider); }
    };
    const render = (g) => {
      const items = data[g];
      slidesEl.innerHTML = items.map((it) => `
        <figure class="slide">
          <button class="shot" type="button" data-zoom="${esc(it.file)}" data-client="${esc(it.client)}" data-cap="${esc(prettyCaption(it.caption, it.client))}" aria-label="Enlarge screenshot: ${esc(it.client)}, ${esc(prettyCaption(it.caption, it.client))}">
            <img src="${esc(it.thumb || it.file)}" alt="${esc(it.client)}: ${esc(prettyCaption(it.caption, it.client))}" loading="lazy">
            <span class="zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M11 8.6v4.8M8.6 11h4.8"/></svg></span>
          </button>
          <figcaption class="meta"><b>${esc(it.client)}</b><span>${esc(prettyCaption(it.caption, it.client))}</span></figcaption>
        </figure>`).join('');
      slidesEl.scrollTo({ left: 0 });
      updatePos();
    };
    const updatePos = () => {
      const items = $$('.slide', slidesEl); if (!items.length) { posEl.textContent = ''; return; }
      const w = items[0].getBoundingClientRect().width + 18;
      const idx = Math.min(items.length, Math.round(slidesEl.scrollLeft / w) + 1);
      posEl.textContent = `${idx} / ${items.length}`;
    };
    slidesEl.addEventListener('scroll', updatePos, { passive: true });
    tabsEl.addEventListener('click', (e) => {
      const b = e.target.closest('.tab'); if (!b) return;
      const acc = mqAcc.matches;
      if (acc && b.dataset.group === current) { current = null; applyMode(); return; }  // tapping the open row closes it
      current = b.dataset.group;
      applyMode();
      render(current);
      if (acc) b.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
    });
    mqAcc.addEventListener('change', applyMode);
    applyMode();
    render(current);
  };
  fetch('assets/results/index.json').then(r => r.json()).then(data => {
    buildSlider('ads', data.ads, $('#adsTabs'), $('#adsSlides'), $('#adsPos'));
  }).catch(() => {
    $('#adsSlides').innerHTML = '<p class="muted">Results are loading slowly. Please refresh the page.</p>';
  });
  $$('[data-prev],[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = $('#' + (btn.dataset.prev || btn.dataset.next));
      const first = $('.slide', el); if (!first) return;
      const w = first.getBoundingClientRect().width + 18;
      el.scrollBy({ left: btn.dataset.prev ? -w : w, behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  /* ---------------- our work: video ad creatives ----------------
     133 Shorts from assets/work/creatives.json, a dozen at a time. Thumbnails
     come from YouTube; the player itself only loads when somebody taps play */
  const WORK_ORDER = ['Plastic Surgery', 'Hair Transplant', 'Aesthetic Clinics', "Men's Health", 'Vein Clinics', 'Vasectomy Clinics', 'Weight Loss Surgery', 'Skincare eCommerce'];
  // inside a specialty the clinics take turns, UK and Irish clinics first,
  // so one clinic with a dozen videos does not fill the first screen
  const WORK_FIRST = ['British Face Clinic', 'Delta Clinics', 'The Hanson Clinic', 'White Hill Clinic', 'MansMatters'];
  const takeTurns = (lists) => {
    const out = [], total = lists.reduce((n, l) => n + l.length, 0);
    for (let i = 0; out.length < total; i++) lists.forEach(l => { if (l[i]) out.push(l[i]); });
    return out;
  };
  const WORK_PAGE = 12;
  const workGrid = $('#workGrid'), workFilter = $('#workFilter'), workMore = $('#workMore'),
        workMoreBtn = $('#workMoreBtn'), workCount = $('#workCount');
  const reelCard = (it) => `
    <figure class="reel">
      <button class="reel-play" type="button" data-reel="${esc(it.id)}" data-client="${esc(it.client)}" data-title="${esc(it.title)}" aria-label="Play ad: ${esc(it.client)}, ${esc(it.title)}">
        <img src="https://i.ytimg.com/vi/${esc(it.id)}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
        <span class="fmt">Video ad</span>
        <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
      </button>
      <figcaption><b>${esc(it.client)}</b><span>${esc(it.title)}</span></figcaption>
    </figure>`;
  const buildWork = (items) => {
    const rank = (c) => { const i = WORK_FIRST.indexOf(c); return i < 0 ? 99 : i; };
    const by = {};
    items.forEach(it => {
      const cat = by[it.cat] = by[it.cat] || {};
      (cat[it.client] = cat[it.client] || []).push(it);
    });
    Object.keys(by).forEach(c => {
      // object keys keep first-appearance order, so the stable sort only lifts WORK_FIRST
      const clients = Object.keys(by[c]).sort((a, b) => rank(a) - rank(b));
      by[c] = takeTurns(clients.map(n => by[c][n]));
    });
    const cats = WORK_ORDER.filter(c => by[c]).concat(Object.keys(by).filter(c => !WORK_ORDER.includes(c)));
    // "All" deals one from each specialty in turn, so the first screen is not twelve thread lifts
    const lists = Object.assign({ All: takeTurns(cats.map(c => by[c])) }, by);
    let cat = 'All', shown = 0;
    workFilter.innerHTML = ['All'].concat(cats).map(c =>
      `<button class="chip" type="button" data-cat="${esc(c)}" aria-pressed="${c === 'All'}">${esc(c === 'All' ? 'All ads' : c)}<span class="count">${lists[c].length}</span></button>`).join('');
    const more = () => {
      const list = lists[cat], from = shown;
      shown = Math.min(list.length, shown + WORK_PAGE);
      workGrid.insertAdjacentHTML('beforeend', list.slice(from, shown).map(reelCard).join(''));
      workMore.hidden = shown >= list.length;
      workMoreBtn.textContent = `Show ${Math.min(WORK_PAGE, list.length - shown)} more ads`;
      workCount.textContent = `Showing ${shown} of ${list.length}`;
      return from;
    };
    const show = (c) => {
      cat = c; shown = 0; workGrid.innerHTML = '';
      $$('.chip', workFilter).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === c)));
      more();
    };
    workFilter.addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (b) show(b.dataset.cat); });
    workMoreBtn.addEventListener('click', () => {
      const from = more();
      // keyboard users carry on from the first new ad rather than the button
      const first = $$('.reel-play', workGrid)[from];
      if (first) first.focus({ preventScroll: true });
    });
    show('All');
  };
  fetch('assets/work/creatives.json').then(r => r.json()).then(buildWork).catch(() => {
    workGrid.innerHTML = '<p class="muted">The ads are loading slowly. Please refresh the page.</p>';
  });

  /* ---------------- case studies ---------------- */
  const csNav = $('#csNav'), csPanels = $('#csPanels');
  csNav.innerHTML = CASES.map((c) => `
    <button class="cs-tab" type="button" data-cs="${c.id}">
      <span class="logo-box">${c.logo ? `<img src="${c.logo}" alt="">` : `<b>${c.name}</b>`}</span>
      ${c.logo ? `<b>${c.name}</b>` : ''}
      <svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>`).join('');
  csPanels.innerHTML = CASES.map((c, i) => `
    <div class="cs-panel ${i === 0 ? 'is-active' : ''}" id="cs-${c.id}" role="tabpanel">
      <div class="cs-grid">
        <div>
          <div class="cs-head">
            <div class="cs-name">${c.logo ? `<span class="logo-box"><img src="${esc(c.logo)}" alt=""></span>` : ''}<b>${esc(c.name)}</b></div>
            <div class="place">${[c.place, c.specialty, c.months].filter(Boolean).map(t => `<span>${t}</span>`).join('')}</div>
            <h3>${c.title}</h3>
          </div>
          <div class="cs-hero-stat"><span class="num">${c.hero.n}</span><span>${c.hero.t}</span></div>
          <div class="cs-stats">${c.stats.map(s => `<div><span class="num">${s[0]}</span><small>${s[1]}</small></div>`).join('')}</div>
          <div class="cs-body">
            ${c.situation ? `<h4>The situation</h4><p>${c.situation}</p>` : ''}
            <h4>What we ran on Facebook and Instagram</h4><ul>${c.did.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          ${c.quote ? `
          <blockquote class="cs-quote">
            <p>"${c.quote}"</p>
            <div class="q-who">${c.portrait ? `<img src="${c.portrait}" alt="" loading="lazy">` : ''}<div><b>${c.who}</b><small>${c.role}</small></div></div>
          </blockquote>` : ''}
          ${c.link ? `<a class="cs-link" href="${c.link}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>` : ''}
        </div>
        <div class="cs-shots">
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + 1}${s[3] === 'fit' ? ' is-fit' : ''}"><button class="shot-zoom" type="button" data-zoom="${esc(s[0])}" data-client="${esc(c.name)}" data-cap="${esc(s[1])}" aria-label="Enlarge screenshot: ${esc(c.name)}, ${esc(s[1])}"><img src="${esc(s[0])}" alt="${esc(s[1])}" loading="lazy"></button><figcaption>${esc(s[1])}</figcaption></figure>`).join('')}
          ${c.reel ? `<figure class="shot-card cs-reel" style="grid-row:${c.shots.length + 1}"><button class="reel-play" type="button" data-reel="${esc(c.reel[0])}" data-client="${esc(c.name)}" data-title="${esc(c.reel[1])}" aria-label="Play ad: ${esc(c.name)}, ${esc(c.reel[1])}"><img src="https://i.ytimg.com/vi/${esc(c.reel[0])}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360"><span class="fmt">Video ad</span><span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></button><figcaption>${esc(c.reel[1])}</figcaption></figure>` : ''}
          ${c.portrait ? `<div class="portrait"${c.reel ? ` style="grid-row:${c.shots.length + 1}"` : ''}><img src="${c.portrait}" alt="${c.who}" loading="lazy"></div>` : ''}
        </div>
      </div>
    </div>`).join('');
  // same accordion as the specialty rail: below 860px the panel opens under the
  // clinic you tap, so the other clinics stay on screen instead of scrolling off
  const csHome = csPanels.parentElement, mqCs = window.matchMedia('(max-width: 860px)');
  let csCurrent = CASES[0].id;
  const applyCsMode = () => {
    const acc = mqCs.matches;
    if (!acc && !csCurrent) csCurrent = CASES[0].id;
    csNav.setAttribute('role', acc ? 'presentation' : 'tablist');
    let active = null;
    $$('.cs-tab', csNav).forEach(t => {
      const on = t.dataset.cs === csCurrent;
      if (on) active = t;
      if (acc) {
        t.removeAttribute('role'); t.removeAttribute('aria-selected');
        t.setAttribute('aria-expanded', String(on));
      } else {
        t.setAttribute('role', 'tab'); t.removeAttribute('aria-expanded');
        t.setAttribute('aria-selected', String(on));
      }
    });
    $$('.cs-panel', csPanels).forEach(p => p.classList.toggle('is-active', p.id === 'cs-' + csCurrent));
    csPanels.hidden = acc && !active;
    if (acc) { if (active) active.after(csPanels); } else if (csPanels.parentElement !== csHome) { csHome.append(csPanels); }
  };
  csNav.addEventListener('click', (e) => {
    const b = e.target.closest('.cs-tab'); if (!b) return;
    const acc = mqCs.matches;
    csCurrent = (acc && b.dataset.cs === csCurrent) ? null : b.dataset.cs;  // tapping the open clinic closes it
    applyCsMode();
    b.scrollIntoView({ block: 'nearest', inline: acc ? 'nearest' : 'center', behavior: reduced ? 'auto' : 'smooth' });
  });
  mqCs.addEventListener('change', applyCsMode);
  applyCsMode();

  /* ---------------- lightbox: video testimonials, video ads and screenshots ---------------- */
  const lb = $('#lightbox'), lbFrame = $('#lightboxFrame'), lbClose = $('#lightboxClose'),
        lbPrev = $('#lightboxPrev'), lbNext = $('#lightboxNext');
  let lastFocused = null;
  const openLightbox = (html, isImage, label) => {
    // stepping through a set re-enters this, so only take focus on the first open
    const first = !lb.classList.contains('is-open');
    if (first) lastFocused = document.activeElement;
    lb.classList.toggle('is-image', !!isImage);
    lb.classList.remove('is-vertical');
    lb.setAttribute('aria-label', label);
    lbFrame.innerHTML = html;
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (first) lbClose.focus();
  };
  const closeLightbox = () => {
    if (!lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open', 'is-image', 'is-vertical', 'has-set', 'is-zoomed', 'is-tall');
    lbFrame.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.isConnected) lastFocused.focus();
    lastFocused = null;
  };
  const ytFrame = (id, title) =>
    `<iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1&rel=0&playsinline=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  $$('[data-video]').forEach(b => b.addEventListener('click', () => {
    lbMode = 'video';
    openLightbox(ytFrame(b.dataset.video, 'Client video testimonial'), false, 'Client video testimonial');
  }));
  /* the arrows step through whichever set the viewer opened from: the screenshots
     of the visible slider group, the cards of one case study, or the video ads
     currently on screen */
  let lbMode = '', zoomSet = [], zoomIdx = 0, reelSet = [], reelIdx = 0;
  const showZoom = (i) => {
    if (!zoomSet.length) return;
    const n = zoomSet.length;
    zoomIdx = (i + n) % n;
    const btn = zoomSet[zoomIdx], d = btn.dataset;
    openLightbox(
      `<div class="zoomwrap"><img src="${esc(d.zoom)}" alt="${esc(d.client)}: ${esc(d.cap)}"><span class="zoom-hint">Tap to zoom</span></div>` +
      `<figcaption class="cap"><span class="cap-t"><b>${esc(d.client)}</b><span>${esc(d.cap)}</span></span>` +
      `${n > 1 ? `<span class="cap-n">${zoomIdx + 1} / ${n}</span>` : ''}</figcaption>`,
      true, `${d.client}: ${d.cap}`);
    lb.classList.remove('is-zoomed', 'is-tall');
    lb.classList.toggle('has-set', n > 1);
    // anything much taller than it is wide opens already zoomed
    const im = lbFrame.querySelector('img');
    const autoZoom = () => { if (im.naturalHeight > im.naturalWidth * 1.6) lb.classList.add('is-zoomed', 'is-tall'); };
    if (im.complete && im.naturalWidth) autoZoom(); else im.addEventListener('load', autoZoom, { once: true });
    lastFocused = btn;  // close returns the viewer to the screenshot they ended on
    // keep the slider or panel behind the lightbox on the screenshot being viewed
    if (btn.closest('.slides')) btn.closest('.slide').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
  };
  const showReel = (i) => {
    if (!reelSet.length) return;
    const n = reelSet.length;
    reelIdx = (i + n) % n;
    const btn = reelSet[reelIdx], d = btn.dataset;
    openLightbox(ytFrame(d.reel, `${d.client}: ${d.title}`), false, `Video ad: ${d.client}, ${d.title}`);
    lb.classList.add('is-vertical');
    lb.classList.toggle('has-set', n > 1);
    lastFocused = btn;
  };
  // slides are rebuilt on every tab change, so delegate rather than bind per card
  $$('#adsSlides, #csPanels').forEach(container => container.addEventListener('click', (e) => {
    const reel = e.target.closest('[data-reel]');
    if (reel) { lbMode = 'reel'; reelSet = [reel]; showReel(0); return; }
    const btn = e.target.closest('[data-zoom]'); if (!btn) return;
    const scope = btn.closest('.cs-panel') || container;
    lbMode = 'zoom';
    zoomSet = $$('[data-zoom]', scope);
    showZoom(zoomSet.indexOf(btn));
  }));
  workGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-reel]'); if (!btn) return;
    lbMode = 'reel';
    reelSet = $$('[data-reel]', workGrid);
    showReel(reelSet.indexOf(btn));
  });
  const step = (dir) => { if (lbMode === 'reel') showReel(reelIdx + dir); else showZoom(zoomIdx + dir); };
  // on a phone the screenshot is fitted, so tapping it switches to native size and pans
  lbFrame.addEventListener('click', (e) => {
    if (!lb.classList.contains('is-image') || !e.target.closest('.zoomwrap')) return;
    const wrap = lbFrame.querySelector('.zoomwrap');
    lb.classList.toggle('is-zoomed');
    if (lb.classList.contains('is-zoomed')) wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
  });
  lbPrev.addEventListener('click', () => step(-1));
  lbNext.addEventListener('click', () => step(1));
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbFrame) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); if (typeof closeBook === 'function') closeBook(); setDrawer(false); return; }
    if (!lb.classList.contains('has-set')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });

  /* ---------------- booking dialog ----------------
     every booking CTA opens the calendar here instead of scrolling to it. The
     href still points at the contact form, so without JS the click lands
     somewhere useful rather than nowhere. */
  const bookModal = $('#bookModal');
  if (bookModal) {
    const bookFrame = $('iframe', bookModal), bookClose = $('#bookModalClose');
    let bookLastFocused = null;
    const openBook = () => {
      bookLastFocused = document.activeElement;
      // first open pays for the calendar; later ones reuse the loaded frame
      if (!bookFrame.src && bookFrame.dataset.src) bookFrame.src = bookFrame.dataset.src;
      bookModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      bookClose.focus();
    };
    var closeBook = () => {
      if (!bookModal.classList.contains('is-open')) return;
      bookModal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (bookLastFocused && bookLastFocused.isConnected) bookLastFocused.focus();
      bookLastFocused = null;
    };
    $$('[data-book]').forEach(b => b.addEventListener('click', (e) => { e.preventDefault(); setDrawer(false); openBook(); }));
    bookClose.addEventListener('click', closeBook);
    bookModal.addEventListener('click', (e) => { if (e.target === bookModal) closeBook(); });
  }

  /* ---------------- back to top ---------------- */
  const toTop = $('#toTop');
  if (toTop) {
    const showTop = () => toTop.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', showTop, { passive: true });
    showTop();
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      // send focus back to the top of the page, not just the viewport
      const first = $('.logo');
      if (first) first.focus({ preventScroll: true });
    });
  }

  /* ---------------- FAQ: one open at a time ---------------- */
  const faqs = $$('.faq details');
  faqs.forEach(d => d.addEventListener('toggle', () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));
})();
