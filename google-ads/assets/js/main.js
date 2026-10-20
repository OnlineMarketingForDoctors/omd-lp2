/* OMD Google Ads landing page behaviour (built on the /medical-seo/ script) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const U = 'https://onlinemarketingfordoctors.com/wp-content/uploads/';

  /* ---------------- data: case studies (Google Ads side of each campaign) ---------------- */
  const R = 'assets/results/ads/';
  const CASES = [
    {
      id: 'bfc', name: 'British Face Clinic', logo: 'assets/client-logos/british_face_clinic_logo.webp', uk: true,
      place: 'Harley Street, Milton Keynes and Northampton', specialty: 'Facial cosmetic surgery', months: '12 months',
      title: '2,889 leads, 44 procedures and £230,875 of revenue from one year of Google Ads.',
      hero: { n: '5.8x', t: 'return on Google Ads in 12 months' },
      stats: [['2,889', 'leads from Google Ads in a year'], ['44', 'procedures booked from those leads'], ['£230,875', 'revenue traced back to the campaign']],
      situation: 'Mr Mrinal Supriya operates across London, Milton Keynes and Northampton. The clinic was known for deep plane facelift and rhinoplasty in the profession, had almost no paid presence, and a website that did not convert the visitors it did get.',
      did: ['Search campaigns split by procedure: deep plane facelift, rhinoplasty and blepharoplasty', 'A dedicated landing page for each procedure, so the advert and the page say the same thing', 'Search and Maps ads targeted around each of the three clinics', 'Every lead tracked to a booked procedure and its value, so the return is measured in pounds, not clicks', 'An AI SMS assistant in the CRM that answers every ad enquiry within minutes and books the phone consultation'],
      shots: [['assets/cases/bfc-ads-snapshot.webp', 'Google Ads: 2,889 leads, 44 procedures, £230,875 revenue'], [R + 'plastic-surgeons/british-face-clinic--british-face-clinic-ranking-on-both-google-ads-for-the-keyword-facelift-near-me.webp', 'Google Search ad, facelift near me'], [R + 'plastic-surgeons/british-face-clinic--british-face-clinic-ranks-on-google-search-ads-for-deep-plane-facelift-near-london-keyword.webp', 'Google Search ad, deep plane facelift near London']],
      portrait: 'assets/cases/bfc-supriya.webp',
      quote: 'OMD completely renovated our website and gave it a much fresher look. They have also helped us with our SEO and with our paid Google campaign. We have seen an increase in our practice with a ROI of around 5.08.',
      who: 'Mr Mrinal Supriya', role: 'Facial Cosmetic Surgeon, British Face Clinic',
      link: 'https://onlinemarketingfordoctors.com/casestudy/british-face-clinic/'
    },
    {
      id: 'hsec', name: 'The Harley Street Eye Centre', logo: 'assets/client-logos/Harley-Street-Eye-Centre-logo.webp', uk: true,
      place: 'Harley Street, London', specialty: 'Ophthalmology', months: 'Last 30 days',
      title: '171 conversions in 30 days at £51.66 each, and the cost per click halved in the first month.',
      hero: { n: '£51.66', t: 'average cost per conversion, last 30 days' },
      stats: [['171', 'conversions in 30 days'], ['£45.15', 'per conversion on the laser eye surgery campaign'], ['< ½', 'the previous cost per click, within the first month']],
      situation: 'Mr Hakam Ghabra is the clinic: one consultant ophthalmologist on Harley Street, bidding for laser eye surgery against national chains with national budgets. He needed every click to work harder, and to know which calls the ads were producing.',
      did: ['Search campaigns split by condition: laser eye surgery, keratoconus and retinitis pigmentosa', 'Performance Max campaigns for the clinic and for laser eye surgery, steered by tracked conversions', 'Call tracking set up properly, so every phone enquiry is traced to the campaign that produced it', 'Wasted searches cut and bids moved to what converts: cost per click below half within the first month'],
      shots: [[R + 'ophthalmologists/the-harley-street-eye-centre--google-ads-performance-example-from-harley-street-eye-centre-marketing-for-ophthalmology-clinic.webp', 'The ad account: 171 conversions at £51.66 each'], [R + 'ophthalmologists/the-harley-street-eye-centre--google-ads-top-ranking-for-laser-eye-surgery-london-marketing-for-marketing-for-ophthalmology-c.webp', 'Google Search ad, top position for laser eye surgery London'], [R + 'ophthalmologists/the-harley-street-eye-centre--keratoconus-surgery-top-google-ads-result-marketing-for-ophthalmology-uk.webp', 'Google Search ad, top position for keratoconus surgery']],
      portrait: 'assets/portraits/hakam-ghabra.webp',
      quote: 'Within the first month, we had already brought our cost per click down to less than half. The team also put proper effort into tracking, especially around phone calls, which is important because it helps me understand where enquiries are coming from.',
      who: 'Mr Hakam Ghabra', role: 'Clinical Director, The Harley Street Eye Centre',
      link: ''
    },
    {
      id: 'delta', name: 'Delta Clinics', logo: 'assets/client-logos/delta-clinics-logo.webp', uk: true,
      place: 'Harley Street and Finchley, London', specialty: 'Plastic surgery', months: '8 months',
      title: 'A newly opened Harley Street clinic, 200 Google Ads leads, and a 730% rise in enquiries.',
      hero: { n: '730%', t: 'more patient enquiries in 8 months' },
      stats: [['200', 'leads from Google Ads'], ['150', 'tummy tuck enquiries'], ['50', 'breast augmentation enquiries']],
      situation: 'Mr Hazem Alfie brought twenty years as a consultant plastic surgeon to a newly opened clinic with no proper website and two Google listings competing with each other. Previous agencies had not moved the needle.',
      did: ['Dedicated landing pages for tummy tuck, breast enlargement and labiaplasty, built for Google Ads', 'Search campaigns for the London procedure searches with the highest intent, such as breast augmentation London', 'Two Google Business Profiles rebuilt for their own catchments, so location ads point patients to the right clinic', 'An AI SMS assistant that replies to every ad enquiry and books the call'],
      shots: [['assets/cases/delta-google-ads.webp', 'Google Ads: 200 leads, 150 tummy tuck and 50 breast augmentation'], [R + 'plastic-surgeons/delta-clinics--delta-clinics-ranking-on-google-ads-for-the-keyword-breast-augmentation-london.webp', 'Google Search ad, breast augmentation London']],
      portrait: 'assets/cases/delta-alfie.webp',
      quote: 'I have seen an increase of almost 730% in the total number of leads or enquiries that come to the clinic, and that also reflects on the total number of patients I have been operating on. They are very able to do what they promise.',
      who: 'Mr Hazem Alfie', role: 'Consultant Plastic Surgeon, Delta Clinics',
      link: 'https://onlinemarketingfordoctors.com/casestudy/delta-clinics/'
    },
    {
      id: 'attalla', name: 'Chelsea Cosmetics', logo: 'assets/client-logos/dr-mark-attalla-logo.webp', uk: false,
      place: 'Melbourne, Australia', specialty: 'Cosmetic surgery', months: '8 months',
      title: 'Double the conversions on a quarter of the previous Google Ads budget.',
      hero: { n: '146%', t: 'more leads in 8 months' },
      stats: [['¼', 'of the previous Google Ads budget'], ['331%', 'more conversions from paid search'], ['101%', 'more visits from paid search']],
      situation: 'Dr Mark Attalla had years of digital marketing spend behind him, an expensive Google Ads account, and a domain penalised by a Google update. The goal was more leads, better leads, and a lower cost per lead.',
      did: ['Single keyword ad groups, so the advert copy matches the search almost word for word and click-through rate climbs', 'Bidding strategy, and negotiation with Google, so the clinic stopped paying for clicks that never converted', 'A website revamp for conversion before any more traffic was bought', 'New landing pages for every liposuction variant patients search: stomach, thigh, arm, double chin, cost'],
      shots: [['assets/cases/attalla-fig1.webp', 'Paid search conversions up 331%, from 206 to 887', '', 'fit'], ['assets/cases/attalla-website.webp', 'The website before and after the revamp'], ['assets/cases/attalla-fig2.webp', 'Top for liposuction Melbourne on Maps and search']],
      portrait: 'assets/cases/attalla-portrait.webp',
      quote: 'They organised the website in a way that is easier for the clients to go through. We found that we are spending almost one-fourth of our previous budget and getting double the conversion.',
      who: 'Dr Mark Attalla', role: 'Cosmetic Surgeon and Owner, Chelsea Cosmetics Melbourne',
      link: 'https://onlinemarketingfordoctors.com/case-study-dr-attalla/'
    },
    {
      id: 'hr', name: 'HR Plastic Surgery', logo: 'assets/client-logos/hr-plastic-surgery-logo.webp', uk: true,
      place: 'London and Hertfordshire', specialty: 'Plastic surgery', months: '18 months',
      title: 'A Google Ads account that produced no leads, turned around with landing pages: 989% more conversions.',
      hero: { n: '989%', t: 'more conversions from Google Ads' },
      stats: [['107%', 'higher conversion rate on Google Ads traffic'], ['247%', 'more patient enquiries in 18 months'], ['16,000', 'monthly website visitors']],
      situation: 'Mr Hyder Ridha had barely marketed the practice while competing London clinics had been investing for a decade. Thin content, no sales funnel, few Google reviews, and a Google Ads campaign that was spending without producing leads.',
      did: ['Repositioned the practice around the mummy makeover, so the ads had one clear promise to make', 'Dedicated landing pages for each advertised procedure: conversion rate up 107%, conversions up 989%', 'Google Ads used to bring patients in quickly while SEO took hold over the first six months', 'Ebook lead magnets with email follow-up for the visitors who click but are not ready to book'],
      shots: [['assets/cases/hr-landing-page.webp', 'Breast augmentation landing page for Google Ads'], [U + '2024/10/HR-Plastic-Surgery-Traffic-Over-16000-Visitors.png', 'Over 16,000 monthly visitors']],
      portrait: 'assets/cases/hr-ridha.webp',
      quote: 'OMD devised a comprehensive plan to overhaul my entire website, repositioning it as the go-to Mummy Makeover expert. They initiated a Google Ads campaign to swiftly generate traffic, and the results became notably significant after the first 6 months.',
      who: 'Mr Hyder Ridha', role: 'Plastic Surgeon, HR Plastic Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study/hr-plastic-surgery/'
    },
    {
      id: 'bbc', name: 'Breast and Body Clinic UK', logo: 'assets/client-logos/bb-clinic-uk-logo.webp', uk: true,
      place: 'Manchester', specialty: 'Plastic surgery', months: '18 months',
      title: 'An unproductive ad account rebuilt from the copy up, and 706% more enquiries.',
      hero: { n: '706%', t: 'more patient enquiries in 18 months' },
      stats: [['618%', 'more website conversions year on year'], ['4', 'procedure landing pages built for the ads'], ['29', 'extra leads a month from one lead magnet']],
      situation: 'Mr Aftab Siddiqui was competing in Manchester against clinics with years of history. A local agency and an international one had both failed to move bookings, and the Google Ads account was spending without producing enquiries.',
      did: ['Google Ads copy rewritten around what patients weigh up: price from, payment plans, free consultation, aftercare', 'Landing pages for tummy tuck, breast augmentation, breast reduction and mummy makeover', 'A CRM so every ad enquiry is tracked from the click to the booking', 'Lead magnets to capture the patients who click, research and are not ready yet'],
      shots: [['assets/cases/bbc-google-ads1.webp', 'Google Search ad, liposuction', '', 'fit'], ['assets/cases/bbc-google-ads2.webp', 'Google Search ad, free consultation offer', '', 'fit'], ['assets/cases/bbc-landing-page.webp', 'Mummy makeover landing page']],
      portrait: 'assets/cases/bbc-siddiqui.webp',
      quote: 'They set up a CRM which enables me to track and monitor how my website performs. The website conversion number has gone up by 618% compared to the same time last year.',
      who: 'Mr Aftab Siddiqui', role: 'Plastic Surgeon, Breast and Body Clinic UK',
      link: 'https://onlinemarketingfordoctors.com/case-study/breast-and-body-clinic-uk/'
    },
    {
      id: 'hodgkinson', name: 'Dr Darryl Hodgkinson', logo: 'assets/client-logos/dr-hodgkinson-logo.webp', uk: false,
      place: 'Sydney, Australia', specialty: 'Facial plastic surgery', months: '4 months',
      title: '136% more clicks at a 25% lower cost per click, and twice the consultation requests.',
      hero: { n: '2x', t: 'consultation requests in 4 months' },
      stats: [['136%', 'more clicks from Google Ads'], ['25%', 'lower cost per click'], ['73%', 'more conversions from Google Ads']],
      situation: 'Thirty years of experience and his own day surgery in Double Bay, yet younger, more aggressive clinics dominated search, and several agencies had promised and not delivered.',
      did: ['Rebuilt the Google Ads account around facial surgery, the work he wanted to be known for', 'Tighter keyword lists and negatives, so each click was cheaper and more relevant', 'Landing pages and a lead magnet funnel that turned clicks into consultation requests', 'SEO and content alongside, so paid and organic stopped competing for the same searches'],
      shots: [['assets/cases/hodgkinson-banner.webp', 'Huyen Truong and Steven Tait with Dr Hodgkinson']],
      portrait: '',
      quote: 'The number of requests for consultations is at least doubled from the last 5 months, which is a very good sign.',
      who: 'Dr Darryl Hodgkinson', role: 'Plastic Surgeon, Double Bay Day Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study-dr-hodgkinson/'
    },
    {
      id: 'vision', name: 'The Vision Surgeon', logo: 'assets/client-logos/the-vision-surgeon-logo.webp', uk: true,
      kind: 'rankings', meta: 'Ad placements',
      place: 'Colchester and Essex', specialty: 'Ophthalmology',
      title: 'Pinned above the map when Essex patients search for laser eye surgery.',
      hero: { n: '4', t: 'Google Maps ad placements captured across Colchester and Essex' },
      stats: [['3', 'procedures advertised on Google Maps'], ['2', 'areas targeted: Colchester and wider Essex']],
      queries: ['laser eye surgery colchester', 'lasik eye surgery essex', 'lens replacement surgery colchester'],
      shots: [[R + 'ophthalmologists/the-vision-surgeon--the-vision-surgeon-ranks-on-google-maps-ads-for-laser-eye-surgery-colchester-keyword.webp', 'Google Maps ad, laser eye surgery Colchester'], [R + 'ophthalmologists/the-vision-surgeon--the-vision-surgeon-ranks-on-google-maps-ads-for-lasik-eye-surgery-essex-keyword.webp', 'Google Maps ad, LASIK eye surgery Essex'], [R + 'ophthalmologists/the-vision-surgeon--the-vision-surgeon-ranks-on-google-maps-ads-for-lens-replacement-surgery-colchester-keyword.webp', 'Google Maps ad, lens replacement surgery Colchester']],
      portrait: ''
    }
  ];

  /* ---------------- data: landing pages built for Google Ads ----------------
     each card shows the first screen; tapping opens the whole page.
     UK pages lead each group, then Ireland, then everywhere else */
  const LP = (f, client, caption) => ({ thumb: `assets/work/landing-pages/${f}--top.webp`, file: `assets/work/landing-pages/${f}--full.webp`, client, caption });
  const LANDING_PAGES = {
    'Plastic Surgeons': [
      LP('delta-clinics-breast-enlargement', 'Delta Clinics', 'Breast enlargement, Harley Street'),
      LP('delta-clinics-labiaplasty', 'Delta Clinics', 'Labiaplasty, Harley Street'),
      LP('cambridge-clear-beauty-facelift', 'Cambridge Clear Beauty', 'Facelift, Cambridge'),
      LP('adore-life-facelift', 'Adore Life', 'Facelift, London and Cambridge'),
      LP('symmetry-clinic-otoplasty', 'Symmetry Clinic', 'Otoplasty, Harley Street'),
      LP('paul-wilson-rhinoplasty', 'Mr Paul Wilson', 'Preservation rhinoplasty'),
      LP('breast-and-body-clinic-breast-augmentation', 'Breast and Body Clinic UK', 'Breast augmentation, Manchester'),
      LP('victoria-house-clinic-neck-lift', 'Victoria House Clinic', 'Neck lift, Birmingham'),
      LP('hanson-clinic-deep-plane-facelift', 'The Hanson Clinic', 'Deep plane facelift, Dublin'),
      LP('white-hill-clinic-breast-augmentation', 'White Hill Clinic', 'Breast augmentation'),
      LP('ashbrook-vaser-liposuction', 'The Ashbrook Cosmetic Surgery', 'Vaser liposuction')
    ],
    'Ophthalmologists': [
      LP('harley-street-eye-centre-dry-eye', 'The Harley Street Eye Centre', 'Dry eye treatment, Harley Street'),
      LP('the-vision-surgeon-laser-eye', 'The Vision Surgeon', 'Laser eye surgery and lens replacement, Essex'),
      LP('aaec-laser-eye', 'AAEC', 'Laser vision correction')
    ],
    'Hair Transplant Clinics': [
      LP('fortes-clinic-fue', 'Fortes Clinic', 'FUE hair transplant, central London'),
      LP('imami-hair-fue', 'Imami Hair', 'FUE hair transplant'),
      LP('crown-clinic-hair-transplant', 'The Crown Clinic', 'FUE hair transplant, Australia'),
      LP('hair-transplant-medical-centre', 'Hair Transplant Medical Centre', 'Hair transplant, Canada')
    ],
    'Aesthetic Clinics': [
      LP('aesthetic-lane-lip-filler', 'Aesthetic Lane', 'Lip filler'),
      LP('antiwrinkle-injections', 'My Cosmetic Clinic', 'Anti-wrinkle injections'),
      LP('observatory-tower-sofwave', 'Observatory Tower Medical Centre', 'Sofwave skin tightening'),
      LP('ultherapy', 'Merz Aesthetics', 'Ultherapy skin lifting'),
      LP('eighteen-skin-hifu', 'Eighteen Skin', 'HIFU skin tightening'),
      LP('dermal-skin-laundry-emsculpt', 'Dermal Skin Laundry', 'Emsculpt body contouring'),
      LP('dermacosmetika-skin-tightening', 'Dermacosmetika', 'Skin tightening and cellulite'),
      LP('iccm-plasma-pen', 'ICCM', 'Plasmage plasma pen'),
      LP('endopersonalcare-lpg-endermologie', 'Endopersonalcare', 'LPG endermologie')
    ],
    'Mental Health Clinics': [
      LP('saveminds-depression', 'Save Minds', 'Depression treatment, London'),
      LP('mindful-space-adhd', 'Mindful Space Ireland', 'ADHD assessments, Ireland'),
      LP('cura-medical-specialists-migraine', 'Cura Medical Specialists', 'Headaches and migraine')
    ],
    'Other specialties': [
      LP('lotus-medics-fertility', 'Lotus Medics', 'Fertility treatment'),
      LP('amputee-clinic-prosthetics', 'Amputee Clinic', 'Prosthetics')
    ]
  };

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
    ['hr-plastic-surgery-logo.webp', 'HR Plastic Surgery'],
    ['bb-clinic-uk-logo.webp', 'Breast and Body Clinic UK'],
    ['symmetry-clinic-logo.png', 'Symmetry Clinic'],
    ['the-vision-surgeon-logo.webp', 'The Vision Surgeon'],
    ['mans-matters-logo.webp', 'MansMatters'],
    ['fortes-clinic.webp', 'Fortes Clinic'],
    ['Harley-Street-Eye-Centre-logo.webp', 'The Harley Street Eye Centre'],
    ['uk-hand-wrist-surgery-logo.webp', 'UK Hand and Wrist Surgery'],
    ['manaf-khatib-logo.webp', 'Mr Manaf Khatib'],
    ['head2neck-logo.png', 'Head2Neck'],
    ['cambridge-clear-beauty-logo.png', 'Cambridge Clear Beauty'],
    ['Tajmeel-Clinic-logo.png', 'Tajmeel Clinic'],
    ['Victoria-House-Clinic-logo-1.webp', 'Victoria House Clinic'],
    ['paul-wilson-logo.svg', 'Paul Wilson'],
    ['Save-Minds-logo-1.webp', 'SaveMinds'],
    ['Mindful-Space-Ireland-logo-1.webp', 'Mindful Space Ireland'],
    ['ukaaps-capsco-logo.webp', 'UKAAPS CAPSCO'],
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
  const ORDER = ['Plastic Surgeons', 'Ophthalmologists', 'Hair Transplant Clinics', 'Aesthetic Clinics', 'Neurology', 'Vein Clinics', 'Vasectomy Clinics', 'Medical eCommerce', 'Mental Health Clinics', 'Other specialties'];
  // captions are written by hand in assets/results/index.json, so they are used as they are
  const prettyCaption = (c) => c;
  const buildSlider = (kind, data, tabsEl, slidesEl, posEl) => {
    const groups = Object.keys(data).sort((a, b) => {
      const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    tabsEl.innerHTML = groups.map((g) => `<button class="tab" type="button" data-group="${g}"><span class="tab-name">${g}</span><span class="count">${data[g].length}</span><svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>`).join('');
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
  buildSlider('lp', LANDING_PAGES, $('#lpTabs'), $('#lpSlides'), $('#lpPos'));
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
            <div class="place"><span>${c.place}</span><span>${c.specialty}</span><span>${c.meta || c.months}</span></div>
            <h3>${c.title}</h3>
          </div>
          <div class="cs-hero-stat"><span class="num">${c.hero.n}</span><span>${c.hero.t}</span></div>
          <div class="cs-stats">${c.stats.map(s => `<div><span class="num">${s[0]}</span><small>${s[1]}</small></div>`).join('')}</div>
          ${c.kind === 'rankings' ? `
          <div class="cs-body">
            <h4>Where their ads appear</h4>
            <ul class="cs-queries">${c.queries.map(q => `<li>${esc(q)}</li>`).join('')}</ul>
          </div>
          <p class="cs-note">Every placement above is a screenshot from a live client account, and you can open each one full size. ${c.note ? esc(c.note) + ' ' : ''}We do not publish spend or enquiry figures for this clinic, so none are claimed here.</p>
          ` : `
          <div class="cs-body">
            <h4>The situation</h4><p>${c.situation}</p>
            <h4>What we did in the ad account</h4><ul>${c.did.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <blockquote class="cs-quote">
            <p>"${c.quote}"</p>
            <div class="q-who">${c.portrait ? `<img src="${c.portrait}" alt="" loading="lazy">` : ''}<div><b>${c.who}</b><small>${c.role}</small></div></div>
          </blockquote>
          ${c.link ? `<a class="cs-link" href="${c.link}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>` : ''}
          `}
        </div>
        <div class="cs-shots">
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + 1}${s[3] === 'fit' ? ' is-fit' : ''}"><button class="shot-zoom" type="button" data-zoom="${esc(s[0])}" data-client="${esc(c.name)}" data-cap="${esc(s[1])}" aria-label="Enlarge screenshot: ${esc(c.name)}, ${esc(s[1])}"><img src="${esc(s[0])}" alt="${esc(s[1])}" loading="lazy"></button><figcaption>${esc(s[1])}</figcaption></figure>`).join('')}
          ${c.portrait ? `<div class="portrait"><img src="${c.portrait}" alt="${c.who}" loading="lazy"></div>` : ''}
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

  /* ---------------- lightbox: video testimonials and ranking screenshots ---------------- */
  const lb = $('#lightbox'), lbFrame = $('#lightboxFrame'), lbClose = $('#lightboxClose'),
        lbPrev = $('#lightboxPrev'), lbNext = $('#lightboxNext');
  let lastFocused = null;
  const openLightbox = (html, isImage, label) => {
    // stepping through a set re-enters this, so only take focus on the first open
    const first = !lb.classList.contains('is-open');
    if (first) lastFocused = document.activeElement;
    lb.classList.toggle('is-image', !!isImage);
    lb.setAttribute('aria-label', label);
    lbFrame.innerHTML = html;
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (first) lbClose.focus();
  };
  const closeLightbox = () => {
    if (!lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open', 'is-image', 'has-set', 'is-zoomed', 'is-tall');
    lbFrame.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.isConnected) lastFocused.focus();
    lastFocused = null;
  };
  $$('[data-video]').forEach(b => b.addEventListener('click', () => openLightbox(
    `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="Client video testimonial" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`,
    false, 'Client video testimonial')));
  /* the arrows step through whichever set the viewer opened from: the screenshots
     of the visible slider group, or the cards of one case study */
  let zoomSet = [], zoomIdx = 0;
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
    // a full-page landing page fitted to the viewport is an unreadable strip,
    // so anything much taller than it is wide opens already zoomed
    const im = lbFrame.querySelector('img');
    const autoZoom = () => { if (im.naturalHeight > im.naturalWidth * 1.6) lb.classList.add('is-zoomed', 'is-tall'); };
    if (im.complete && im.naturalWidth) autoZoom(); else im.addEventListener('load', autoZoom, { once: true });
    lastFocused = btn;  // close returns the viewer to the screenshot they ended on
    // keep the slider or panel behind the lightbox on the screenshot being viewed
    if (btn.closest('.slides')) btn.closest('.slide').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
  };
  // slides are rebuilt on every tab change, so delegate rather than bind per card
  $$('#adsSlides, #lpSlides, #csPanels').forEach(container => container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-zoom]'); if (!btn) return;
    const scope = btn.closest('.cs-panel') || container;
    zoomSet = $$('[data-zoom]', scope);
    showZoom(zoomSet.indexOf(btn));
  }));
  // on a phone the screenshot is fitted, so tapping it switches to native size and pans
  lbFrame.addEventListener('click', (e) => {
    if (!lb.classList.contains('is-image') || !e.target.closest('.zoomwrap')) return;
    const wrap = lbFrame.querySelector('.zoomwrap');
    lb.classList.toggle('is-zoomed');
    if (lb.classList.contains('is-zoomed')) wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
  });
  lbPrev.addEventListener('click', () => showZoom(zoomIdx - 1));
  lbNext.addEventListener('click', () => showZoom(zoomIdx + 1));
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbFrame) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); if (typeof closeBook === 'function') closeBook(); setDrawer(false); return; }
    if (!lb.classList.contains('has-set')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); showZoom(zoomIdx - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); showZoom(zoomIdx + 1); }
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
