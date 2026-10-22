/* OMD Hair Transplant Marketing landing page behaviour */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const U = 'https://onlinemarketingfordoctors.com/wp-content/uploads/';
  const ZOOM_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M11 8.6v4.8M8.6 11h4.8"/></svg>';
  const PLAY_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  /* ---------------- data: case studies, every channel we ran ---------------- */
  const CASES = [
    {
      id: 'crown', name: 'The Crown Clinic', logo: 'assets/client-logos/the-crown-clinic-logo.webp', region: 'Australia',
      place: 'Sydney, Campbelltown and Melbourne', specialty: 'Hair transplant surgery', months: '6 months',
      channels: ['Strategy', 'Website', 'SEO', 'Reviews', 'Landing pages', 'Google Ads', 'Meta ads'],
      title: 'Enquiries up three-fold, and 300% more new patients after a six-month campaign.',
      hero: { n: '300%', t: 'more new patients in 6 months' },
      stats: [['603%', 'increase in leads'], ['152%', 'increase in total monthly web traffic'], ['5.15% to 19.89%', 'organic conversion rate after the website revamp']],
      situation: 'A hair transplant clinic founded in 2005 by James and Ilka Nadin, with a strong value proposition and a clear idea of its patient. Online it was weak: few reviews, thin content with no videos or patient stories, and nothing aimed at the men weighing up a cheaper transplant overseas. Several branding and marketing agencies had not moved it.',
      did: ['Answered three questions first: who the dream patient is, where he spends his time, and what hook brings him in', 'Researched the strongest competitors at home and overseas: where they advertise, rank and earn their links', 'Revamped the website around clear calls to action and the clinic\'s points of difference: organic conversion rate from 5.15% to 19.89%, paid from 4.38% to 23.07%', 'On-site SEO best practice and a local reviews programme on the Google Business Profile', 'A dedicated Google Ads landing page and single keyword ad groups, with bids negotiated up from below the average', 'Facebook and Instagram ads for new procedures, plus remarketing to site visitors, the email list and social followers'],
      shots: [['assets/cases/crown-6-month-results.webp', 'Six months of traffic and conversions, March to August 2020'], ['assets/work/websites/crown-clinic--top.webp', 'The new Crown Clinic website', 'assets/work/websites/crown-clinic--full.webp'], ['assets/cases/crown-enquiries-467.webp', '467.54% more enquiries'], ['assets/cases/crown-bounce-conversion.webp', 'Organic bounce rate down 87.94%, conversion rate up 285%']],
      portrait: 'assets/cases/james-nadin.webp',
      quote: 'They put together a comprehensive strategy and plan to improve our digital marketing presence (SEO, PPC ads, Social Media, Website Content and Landing Pages...), and so far we can see obvious improved results from the work that they have done. Enquiries have gone crazy, the number of enquiries has increased by three folds ever since they started.',
      who: 'James Nadin', role: 'CEO and Owner, The Crown Clinic',
      link: 'https://onlinemarketingfordoctors.com/case-study-crown-clinic/'
    },
    {
      id: 'mehta', name: 'Malay Mehta Aesthetic Clinic', logo: 'assets/client-logos/malay-mehta-logo.webp', region: 'India',
      place: 'Mumbai', specialty: 'Hair transplant surgery', months: '12 months',
      channels: ['Strategy', 'Website', 'Brand and funnel', 'Lead magnet', 'Email', 'Google Ads', 'Meta ads', 'SEO'],
      title: 'Six agencies had tried. After twelve months with us: 376% more enquiries, and from 5 to 50 procedures a month.',
      hero: { n: '1,277%', t: 'increase in organic traffic in 12 months' },
      stats: [['376%', 'increase in total patient enquiries'], ['1.94% to 4.91%', 'website conversion rate'], ['5 to 50', 'monthly procedures, with clinic staff growing from 3 to 18']],
      situation: 'Dr Malay Mehta has practised hair transplant surgery in Mumbai since 2011. His results were excellent, but the clinic was quieter than competitors. Weak visibility, few reviews, thin content with no sales funnel or videos, low traffic and a Google Ads campaign that produced few leads. Six local agencies had tried and failed.',
      did: ['A brandscript and one-liner: one sitting, a rich look forever, with a 98% graft survival rate', 'A new conversion-led website and dedicated Google Ads landing pages', 'A baldness calculator lead magnet, because more than 95% of visitors leave without enquiring', 'Nurture and sales email sequences for everyone who used the calculator or asked for a free consultation', 'Full-funnel Facebook and Instagram, from brand awareness to free consultation offers, then loyalty and referral', 'A Google Business Profile built up with reviews, long-form procedure pages and links from relevant sites'],
      shots: [['assets/cases/mehta-traffic-conversion-yoy.webp', 'Traffic and conversions, year on year'], ['assets/work/websites/dr-malay-mehta--top.webp', 'The new Malay Mehta Aesthetic Clinic website', 'assets/work/websites/dr-malay-mehta--full.webp'], ['assets/cases/mehta-landing-page.webp', 'Hair transplant landing page for Google Ads'], ['assets/cases/mehta-google-reviews.webp', '4.9 stars on the Google Business Profile']],
      portrait: 'assets/headshots/malay-mehta.webp',
      quote: 'Really happy with the service and definitely going to opt for more services from their end. Have selected them for my clinic marketing before trying 6 agencies in the past. So I was apprehensive and sceptical about the work but not only they met my expectation but I would say they outperformed my expectation.',
      who: 'Dr Malay Mehta', role: 'Hair Transplant Surgeon, Malay Mehta Aesthetic Clinic',
      link: 'https://onlinemarketingfordoctors.com/casestudy/dr-malay-mehta/'
    }
  ];

  const FEATURED = ['forbes-logo-2.webp', 'daily-mail-uk-logo.png', 'business-insider-logo-2.webp', 'entrepreneur-logo.png', 'Yahoo_Finance_logo.webp', 'mashable-logo.webp', 'usa-today-logo.webp', 'msn-logo-1.webp', 'london-insider-logo.webp', 'marketing-mag-logo.webp', 'thrive-global-logo.png', 'smart-company-logo-1.png', 'herald-sun.png', 'new-york-weekly.webp', 'sem_logo.webp'];

  /* ---------------- data: service galleries ---------------- */
  // UK clinics first, then the rest of the hair transplant work
  const WEBSITES = [
    ['websites/fortes-clinic', 'Fortes Clinic', 'Homepage, FUE hair transplant clinic, London'],
    ['websites/crown-clinic', 'The Crown Clinic', 'Homepage, hair transplants, Sydney and Melbourne'],
    ['websites/tajmeel-clinic', 'Tajmeel Clinic', 'Homepage, hair transplants and hair loss, Bournemouth'],
    ['websites/dr-malay-mehta', 'Malay Mehta Aesthetic Clinic', 'Homepage, hair transplant surgery, Mumbai'],
    ['landing-pages/crown-clinic-hair-transplant', 'The Crown Clinic', 'FUE hair transplant landing page'],
    ['websites/atlantis-medical', 'Atlantis Medical', 'Homepage, hair transplant surgery, Melbourne'],
    ['websites/az-hair-restoration', 'AZ Hair Restoration', 'Homepage, doctor-led hair transplants, Raleigh, North Carolina'],
    ['websites/imami-hair-restoration', 'Imami Hair Restoration', 'Homepage, hair transplant surgery, Florida'],
    ['websites/hair-transplant-medical-centre', 'Hair Transplant Medical Centre', 'Homepage, hair transplant surgery, Toronto'],
    ['landing-pages/imami-hair-fue', 'Imami Hair Restoration', 'FUE hair transplant landing page'],
    ['websites/new-hair-clinic', 'New Hair Clinic', 'Homepage, hair transplant and hair loss, Perth'],
    ['landing-pages/hair-transplant-medical-centre', 'Hair Transplant Medical Centre', 'Hair transplant landing page, Canada']
  ].map(([f, c, t]) => ({ thumb: `assets/work/${f}--top.webp`, full: `assets/work/${f}--full.webp`, client: c, cap: t }));

  const GADS = [
    ['fortes-clinic--fortes-clinic-shown-in-google-sponsored-results-for-the-keyword-fue-or-fut-hair-transplant-lond.webp', 'Fortes Clinic', 'Google Search ad, FUE or FUT hair transplant London'],
    ['the-crown-clinic--crown-clinic-ranks-on-google-search-ads-for-hair-transplant-keyword.webp', 'The Crown Clinic', 'Google Search ad, hair transplant'],
    ['the-crown-clinic--crown-clinic-ranking-on-google-maps-ads-for-the-keyword-hair-transplant-melbourne.webp', 'The Crown Clinic', 'Google Maps ad, hair transplant Melbourne'],
    ['the-crown-clinic--google-ads-hair-transplant-cost.webp', 'The Crown Clinic', 'Google Search ad, hair transplant cost'],
    ['the-crown-clinic--google-hair-replacement-surgery.webp', 'The Crown Clinic', 'Google Search ad, hair replacement surgery'],
    ['hair-transplants-melbourne--hair-transplants-melbourne-ranks-on-google-search-ads-for-hair-transplant-melbourne-keyword.webp', 'Hair Transplants Melbourne', 'Google Search ad, hair transplant Melbourne'],
    ['new-hair-clinic--google-ads-hair-transplant-perth.webp', 'New Hair Clinic', 'Google Search ad, hair transplant Perth']
  ].map(([f, c, t]) => ({ file: `assets/work/google-ads/${f}`, client: c, cap: t }));

  const SADS = [
    ['the-crown-clinic-hair-transplant-june-2025.webp', 'The Crown Clinic', 'Hair transplant leads, June 2025: 106 at $12.83 each'],
    ['malay-mehta-hair-transplant-may-2025.webp', 'Malay Mehta Aesthetic Clinic', 'Hair transplant leads, May 2025: 92 enquiries'],
    ['darling-downs-hair-beard-transplant-2025.webp', 'Darling Downs Hair Transplant Clinic', 'Hair and beard transplant, February to March 2025: 30 leads'],
    ['hair-transplant-clinic-april.webp', 'Hair transplant clinic', 'Merged hair transplant lead campaign: 144 leads at $6.64 each'],
    ['hair-transplant-clinic-january-2025.webp', 'Hair transplant clinic', 'Instant form leads, January 2025: 96 at $16.11 each'],
    ['the-crown-clinic-hair-transplant-september-october-2024.webp', 'The Crown Clinic', 'Hair transplant leads, September to October 2024: 149 at $11.42 each'],
    ['malay-mehta-hair-transplant-november-december-2024.webp', 'Malay Mehta Aesthetic Clinic', 'Hair transplant, November to December 2024: 165 enquiries']
  ].map(([f, c, t]) => ({ file: `assets/work/social-ads/${f}`, client: c, cap: t }));

  // hair transplant video adverts and social content we produced
  const SOCIAL_VIDEOS = [
    ['GQbEYqtv8PQ', 'The Crown Clinic', 'Baldness calculator'],
    ['NOlKPL3JxRI', 'Malay Mehta Aesthetic Clinic', 'Hair transplant'],
    ['BwxH80HjV84', 'AZ Hair Restoration', 'Hair transplant for women'],
    ['WuM4_qDXpiM', 'The Crown Clinic', 'The hair transplant client journey'],
    ['ZATQoZGZPSw', 'Darling Downs Hair Transplant Clinic', 'Beard transplant'],
    ['FHtSvI3eJFo', 'Hair Transplant Medical Centre', 'FUE surgery'],
    ['xN9mKsKvcMg', 'Malay Mehta Aesthetic Clinic', 'Client testimonial'],
    ['XOtYXw7DIXw', 'The Crown Clinic', 'Hair transplant surgery'],
    ['XM1EFhNB-ek', 'New Hair Clinic', 'Hair transplant']
  ];

  // newest shoots first. A local path is used as is; the rest are the library
  // on the main site.
  const PHOTOS = [
    ['assets/work/photography/british-face-clinic-rhinoplasty-theatre.webp', 'British Face Clinic', 'In theatre, Harley Street'],
    ['assets/work/photography/beyond-aesthetics-consultation.webp', 'Beyond Aesthetics', 'Assessment in consultation, Sydney'],
    ['assets/work/photography/beyond-aesthetics-reception.webp', 'Beyond Aesthetics', 'A patient arriving at reception, Sydney'],
    ['assets/work/photography/beyond-aesthetics-waiting-area.webp', 'Beyond Aesthetics', 'The waiting area, Sydney'],
    ['assets/work/photography/white-hill-clinic-operating-theatre.webp', 'White Hill Clinic', 'Operating theatre'],
    ['assets/work/photography/white-hill-clinic-consultation-desk.webp', 'White Hill Clinic', 'Consultation with the surgeon'],
    ['assets/work/photography/white-hill-clinic-front-of-house.webp', 'White Hill Clinic', 'Front of house'],
    ['assets/work/photography/white-hill-clinic-interior.webp', 'White Hill Clinic', 'Showing a patient through the clinic'],
    ['assets/work/photography/white-hill-clinic-consultation-lounge.webp', 'White Hill Clinic', 'The consultation lounge'],
    ['assets/work/photography/white-hill-clinic-team-portrait.webp', 'White Hill Clinic', 'The full clinic team'],
    ['assets/work/photography/cosmex-consultation.webp', 'Cosmex', 'Reviewing imaging in consultation'],
    ['assets/work/photography/cosmex-facial-assessment.webp', 'Cosmex', 'Assessment in the treatment room'],
    ['assets/work/photography/cosmex-team.webp', 'Cosmex', 'The clinic team'],
    ['2022/10/photography-amc-1.jpg', 'Clinic photography', 'Consultation, natural light'],
    ['2022/10/videography-lum.jpg', 'Lumiere Beauty Clinic', 'Film still, clinic introduction'],
    ['2022/10/photography-amc-2.jpg', 'Clinic photography', 'The team at work'],
    ['2022/10/videography-my-cosmetic-clinic-1.jpg', 'My Cosmetic Clinic', 'Film still, treatment room'],
    ['2022/10/photography-amc-3.jpg', 'Clinic photography', 'Practitioner portrait'],
    ['2022/10/photography-cg-1.jpg', 'Connect Gene', 'Headshot session'],
    ['2022/10/videography-vasectomy-australia-1.jpg', 'Vasectomy Australia', 'Film still, doctor introduction'],
    ['2022/10/photography-amc-4.jpg', 'Clinic photography', 'Reception and waiting area'],
    ['2022/10/videography-for-medical-practices.jpg', 'On set', 'Production day at a clinic'],
    ['2022/10/photography-amc-5.jpg', 'Clinic photography', 'Treatment in progress'],
    ['2022/10/photography-amc-6.jpg', 'Clinic photography', 'Team portrait']
  ].map(([f, c, t]) => ({ file: f.startsWith('assets/') ? f : U + f, client: c, cap: t }));

  const CLIENTS = [
    ['fortes-clinic.webp', 'Fortes Clinic'],
    ['Tajmeel-Clinic-logo.png', 'Tajmeel Clinic'],
    ['the-crown-clinic-logo.webp', 'The Crown Clinic'],
    ['malay-mehta-logo.webp', 'Malay Mehta Aesthetic Clinic']
  ];

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

  /* ---------------- ticker ---------------- */
  const track = $('#tickerTrack'), track2 = $('#tickerTrack2');
  const row = (arr) => arr.map(f => `<img src="assets/featured-in/${f}" alt="" loading="lazy">`).join('');
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

  const clientTrack = $('#clientTrack');
  if (clientTrack) {
    const tile = ([f, n], dup) =>
      `<div class="logo-strip-item"${dup ? ' aria-hidden="true"' : ''}><img src="assets/client-logos/${f}" alt="${dup ? '' : esc(n)}" loading="lazy"></div>`;
    clientTrack.innerHTML = CLIENTS.map(c => tile(c, false)).join('') + CLIENTS.map(c => tile(c, true)).join('');
  }

  /* ---------------- reveal + count-up ---------------- */
  const revealEls = $$('.rv, .watch');
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('in'));
  } else {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => ro.observe(el));
  }
  const counters = $$('[data-count]');
  const runCount = (el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || '', dur = 1400, t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e).toLocaleString('en-GB') + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (reduced || !('IntersectionObserver' in window)) {
    counters.forEach(el => el.textContent = (+el.dataset.count).toLocaleString('en-GB') + (el.dataset.suffix || ''));
  } else {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: .6 });
    counters.forEach(el => co.observe(el));
  }

  /* ---------------- generic slider helpers ---------------- */
  const slideCard = (it, cls = '') => `
    <figure class="slide ${cls}">
      <button class="shot" type="button" data-zoom="${esc(it.full || it.file)}" data-client="${esc(it.client)}" data-cap="${esc(it.cap)}" aria-label="Enlarge: ${esc(it.client)}, ${esc(it.cap)}">
        <img src="${esc(it.thumb || it.file)}" alt="${esc(it.client)}: ${esc(it.cap)}" loading="lazy">
        <span class="zoom" aria-hidden="true">${ZOOM_SVG}</span>
      </button>
      <figcaption class="meta"><b>${esc(it.client)}</b><span>${esc(it.cap)}</span></figcaption>
    </figure>`;
  const posTrackers = [];
  // a scroller is either a .slides track of .slide items or any snap row of
  // direct children (process steps, case study screenshots)
  const sliderItems = (el) => {
    const s = $$('.slide', el); if (s.length) return s;
    return [...el.children].filter(c => c.getBoundingClientRect().width > 0);
  };
  const sliderGap = (el) => parseFloat(getComputedStyle(el).columnGap) || 18;
  const trackPos = (slidesEl, posEl) => {
    if (!slidesEl || !posEl) return;
    const update = () => {
      const items = sliderItems(slidesEl); if (!items.length) { posEl.textContent = ''; return; }
      const w = items[0].getBoundingClientRect().width + sliderGap(slidesEl);
      if (w <= 18) { posEl.textContent = `1 / ${items.length}`; return; }
      const idx = Math.min(items.length, Math.round(slidesEl.scrollLeft / w) + 1);
      posEl.textContent = `${idx} / ${items.length}`;
    };
    slidesEl.addEventListener('scroll', update, { passive: true });
    posTrackers.push(update);
    update();
  };
  const fillSlider = (id, posId, items, cls) => {
    const el = $('#' + id); if (!el) return;
    el.innerHTML = items.map(it => slideCard(it, cls)).join('');
    trackPos(el, $('#' + posId));
  };
  fillSlider('webSlides', 'webPos', WEBSITES, 'web');
  fillSlider('gadsSlides', 'gadsPos', GADS, 'ad');
  fillSlider('sadsSlides', 'sadsPos', SADS, 'wide');
  fillSlider('photoSlides', 'photoPos', PHOTOS, 'photo');
  const sm = $('#smSlides');
  if (sm) {
    sm.innerHTML = SOCIAL_VIDEOS.map(([id, client, title]) => `
      <figure class="slide vslide">
        <button class="vshot" type="button" data-video="${id}" aria-label="Play video: ${esc(client)}, ${esc(title)}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="play" aria-hidden="true">${PLAY_SVG}</span>
        </button>
        <figcaption class="meta"><b>${esc(client)}</b><span>${esc(title)}. Tap to play.</span></figcaption>
      </figure>`).join('');
    trackPos(sm, $('#smPos'));
  }
  window.addEventListener('resize', () => posTrackers.forEach(f => f()), { passive: true });

  /* ---------------- results sliders ---------------- */
  const prettyCaption = (c, client) => {
    let s = c.replace(/\s+\d+$/, '').replace(/\s+(k|ke|key|keyw|keywo|keywor|keyword|keywords)$/i, '').replace(/\s+(the\s+)?keyword$/i, '').trim();
    if (client) { const cl = client.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (s.toLowerCase().startsWith(cl)) s = s.slice(cl.length).trim(); }
    s = s.replace(/\bgmb\b/gi, 'Google Business Profile').replace(/\badn\b/gi, 'and').replace(/\bai google search results\b/gi, 'Google AI search results').replace(/\bchatgpt\b/gi, 'ChatGPT').replace(/\bchactgpt\b/gi, 'ChatGPT').replace(/\bgoogle\b/g, 'Google').replace(/\bmaps\b/g, 'Maps').replace(/\bfue\b/gi, 'FUE').replace(/\bbbl\b/gi, 'BBL');
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const buildSlider = (kind, data, tabsEl, slidesEl, posEl) => {
    const groups = Object.keys(data);
    tabsEl.innerHTML = groups.map((g) => {
      return `<button class="tab" type="button" data-group="${esc(g)}"><span class="tab-name">${esc(g)}</span><span class="count">${data[g].length}</span><svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>`;
    }).join('');
    const layout = tabsEl.parentElement, slider = slidesEl.closest('.slider');
    let current = groups[0];
    const mqAcc = window.matchMedia('(max-width: 860px)');
    const applyMode = () => {
      const acc = mqAcc.matches;
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
            <img src="${esc(it.file)}" alt="${esc(it.client)}: ${esc(prettyCaption(it.caption, it.client))}" loading="lazy">
            <span class="zoom" aria-hidden="true">${ZOOM_SVG}</span>
          </button>
          <figcaption class="meta"><b>${esc(it.client)}</b><span>${esc(prettyCaption(it.caption, it.client))}</span></figcaption>
        </figure>`).join('');
      slidesEl.scrollTo({ left: 0 });
      updatePos();
    };
    const updatePos = () => {
      const items = $$('.slide', slidesEl); if (!items.length) { posEl.textContent = ''; return; }
      const w = items[0].getBoundingClientRect().width + 18;
      const idx = w > 18 ? Math.min(items.length, Math.round(slidesEl.scrollLeft / w) + 1) : 1;
      posEl.textContent = `${idx} / ${items.length}`;
    };
    slidesEl.addEventListener('scroll', updatePos, { passive: true });
    tabsEl.addEventListener('click', (e) => {
      const b = e.target.closest('.tab'); if (!b) return;
      const acc = mqAcc.matches;
      if (acc && b.dataset.group === current) { current = null; applyMode(); return; }
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
    buildSlider('seo', data.seo, $('#seoTabs'), $('#seoSlides'), $('#seoPos'));
    buildSlider('ai', data.ai, $('#aiTabs'), $('#aiSlides'), $('#aiPos'));
    // the SEO service tab shows a taste: the first two screenshots from each clinic
    const pick = (sec, n) => Object.keys(data[sec]).flatMap(g => data[sec][g].slice(0, 2)).slice(0, n);
    const taste = [...pick('seo', 8), ...pick('ai', 6)].map(it => ({ file: it.file, client: it.client, cap: prettyCaption(it.caption, it.client) }));
    fillSlider('seoGallery', 'seoGalleryPos', taste, 'ad');
  }).catch(() => {
    $('#seoSlides').innerHTML = '<p class="muted">Results are loading slowly. Please refresh the page.</p>';
  });
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-prev],[data-next]'); if (!btn) return;
    const el = $('#' + (btn.dataset.prev || btn.dataset.next)); if (!el) return;
    const first = sliderItems(el)[0]; if (!first) return;
    const w = first.getBoundingClientRect().width + sliderGap(el);
    el.scrollBy({ left: btn.dataset.prev ? -w : w, behavior: reduced ? 'auto' : 'smooth' });
  });
  const ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
  const ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  const navFor = (id, what, cls) => `<div class="slider-nav ${cls}"><span class="pos" id="${id}Pos"></span>` +
    `<button class="arrow" data-prev="${id}" aria-label="Previous ${what}">${ARROW_L}</button>` +
    `<button class="arrow" data-next="${id}" aria-label="Next ${what}">${ARROW_R}</button></div>`;
  // numbered process steps become a swipe row on phones, with the same arrows
  $$('.svc-steps').forEach((ol, i) => {
    ol.id = ol.id || `steps${i + 1}`;
    ol.insertAdjacentHTML('afterend', navFor(ol.id, 'step', 'steps-nav'));
    trackPos(ol, $('#' + ol.id + 'Pos'));
  });

  /* ---------------- services rail ---------------- */
  const ICONS = {
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></svg>',
    google: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    seo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
    film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    press: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h13v14H4zM17 8h3v9a2 2 0 0 1-2 2M7 9h7M7 13h7M7 16h4"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l4-4 4 3 3-3 4 4"/><path d="M3 11l5 5 3 2 3-2 7-5"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10-10-4-4L4 16z"/><path d="m13 7 4 4"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1.3-4.2A8 8 0 1 1 21 12z"/><path d="M8.5 11h7M8.5 14.5h4"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 11h.01M14 11h.01M10 14h4"/></svg>'
  };
  const svcRail = $('#svcRail'), svcPanels = $('#svcPanels');
  if (svcRail && svcPanels) {
    const panels = $$('.svc-panel', svcPanels);
    svcRail.innerHTML = panels.map(p => `
      <button class="svc-tab" type="button" data-svc="${p.id}" aria-controls="${p.id}">
        <span class="svc-ic" aria-hidden="true">${ICONS[p.dataset.icon] || ''}</span>
        <span class="svc-name">${p.dataset.name}</span>
        <svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>`).join('');
    const svcHome = svcPanels.parentElement, mqSvc = window.matchMedia('(max-width: 920px)');
    let svcCurrent = panels[0].id;
    const applySvc = () => {
      const acc = mqSvc.matches;
      if (!acc && !svcCurrent) svcCurrent = panels[0].id;
      svcRail.setAttribute('role', acc ? 'presentation' : 'tablist');
      let active = null;
      $$('.svc-tab', svcRail).forEach(t => {
        const on = t.dataset.svc === svcCurrent;
        if (on) active = t;
        if (acc) { t.removeAttribute('role'); t.removeAttribute('aria-selected'); t.setAttribute('aria-expanded', String(on)); }
        else { t.setAttribute('role', 'tab'); t.removeAttribute('aria-expanded'); t.setAttribute('aria-selected', String(on)); }
      });
      panels.forEach(p => p.classList.toggle('is-active', p.id === svcCurrent));
      svcPanels.hidden = acc && !active;
      if (acc) { if (active) active.after(svcPanels); } else if (svcPanels.parentElement !== svcHome) { svcHome.append(svcPanels); }
      posTrackers.forEach(f => f());
    };
    svcRail.addEventListener('click', (e) => {
      const b = e.target.closest('.svc-tab'); if (!b) return;
      const acc = mqSvc.matches;
      svcCurrent = (acc && b.dataset.svc === svcCurrent) ? null : b.dataset.svc;
      applySvc();
      if (acc) b.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
      else {
        // keep the top of the panel in view when switching from far down a long panel
        const top = svcPanels.getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 96, behavior: reduced ? 'auto' : 'smooth' });
      }
    });
    mqSvc.addEventListener('change', applySvc);
    applySvc();
    // deep links: #svc-seo opens that service
    const openFromHash = () => {
      const id = location.hash.replace('#', '');
      if (panels.some(p => p.id === id)) { svcCurrent = id; applySvc(); }
    };
    window.addEventListener('hashchange', openFromHash);
    openFromHash();
  }

  /* ---------------- case studies ---------------- */
  const csNav = $('#csNav'), csPanels = $('#csPanels');
  csNav.innerHTML = CASES.map((c) => `
    <button class="cs-tab" type="button" data-cs="${c.id}">
      <span class="logo-box">${c.logo ? `<img src="${c.logo}" alt="">` : `<b>${esc(c.name)}</b>`}</span>
      ${c.logo ? `<b>${esc(c.name)}</b>` : `<span class="cs-region">${esc(c.region)}</span>`}
      <svg class="tab-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>`).join('');
  csPanels.innerHTML = CASES.map((c, i) => `
    <div class="cs-panel ${i === 0 ? 'is-active' : ''}" id="cs-${c.id}" role="tabpanel">
      <div class="cs-grid">
        <div>
          <div class="cs-head">
            <div class="cs-name">${c.logo ? `<span class="logo-box"><img src="${esc(c.logo)}" alt=""></span>` : ''}<b>${esc(c.name)}</b></div>
            <h3>${esc(c.title)}</h3>
            <ul class="cs-channels" aria-label="Channels we ran">${(c.channels || []).map(ch => `<li>${esc(ch)}</li>`).join('')}</ul>
          </div>
          <div class="cs-hero-stat"><span class="num">${esc(c.hero.n)}</span><span>${esc(c.hero.t)}</span></div>
          <div class="cs-stats">${c.stats.map(s => `<div><span class="num">${esc(s[0])}</span><small>${esc(s[1])}</small></div>`).join('')}</div>
          <div class="cs-body">
            <h4>The situation</h4><p>${esc(c.situation)}</p>
            <h4>What we did</h4><ul>${c.did.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
          </div>
          <blockquote class="cs-quote">
            <p>"${esc(c.quote)}"</p>
            <div class="q-who">${c.portrait ? `<img src="${esc(c.portrait)}" alt="" loading="lazy">` : ''}<div><b>${esc(c.who)}</b><small>${esc(c.role)}</small></div></div>
          </blockquote>
          <a class="cs-link" href="${esc(c.link)}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
        </div>
        <div class="cs-shots" id="csShots-${c.id}">
          ${c.video ? `<figure class="shot-card s1 shot-video"><button class="vshot" type="button" data-video="${esc(c.video[0])}" aria-label="Play video: ${esc(c.video[1])}"><img src="https://i.ytimg.com/vi/${esc(c.video[0])}/maxresdefault.jpg" alt="" loading="lazy" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${esc(c.video[0])}/hqdefault.jpg'"><span class="play" aria-hidden="true">${PLAY_SVG}</span></button><figcaption>${esc(c.video[1])}</figcaption></figure>` : ''}
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + (c.video ? 2 : 1)}"><button class="shot-zoom" type="button" data-zoom="${esc(s[2] || s[0])}" data-client="${esc(c.name)}" data-cap="${esc(s[1])}" aria-label="Enlarge screenshot: ${esc(c.name)}, ${esc(s[1])}"><img src="${esc(s[0])}" alt="${esc(s[1])}" loading="lazy"></button><figcaption>${esc(s[1])}</figcaption></figure>`).join('')}
          ${c.portrait ? `<div class="portrait"><img src="${esc(c.portrait)}" alt="${esc(c.who)}" loading="lazy"></div>` : ''}
        </div>
        ${navFor('csShots-' + c.id, 'screenshot', 'cs-shots-nav')}
      </div>
    </div>`).join('');
  CASES.forEach(c => trackPos($('#csShots-' + c.id), $('#csShots-' + c.id + 'Pos')));
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
      if (acc) { t.removeAttribute('role'); t.removeAttribute('aria-selected'); t.setAttribute('aria-expanded', String(on)); }
      else { t.setAttribute('role', 'tab'); t.removeAttribute('aria-expanded'); t.setAttribute('aria-selected', String(on)); }
    });
    $$('.cs-panel', csPanels).forEach(p => p.classList.toggle('is-active', p.id === 'cs-' + csCurrent));
    csPanels.hidden = acc && !active;
    if (acc) { if (active) active.after(csPanels); } else if (csPanels.parentElement !== csHome) { csHome.append(csPanels); }
  };
  csNav.addEventListener('click', (e) => {
    const b = e.target.closest('.cs-tab'); if (!b) return;
    const acc = mqCs.matches;
    csCurrent = (acc && b.dataset.cs === csCurrent) ? null : b.dataset.cs;
    applyCsMode();
    b.scrollIntoView({ block: 'nearest', inline: acc ? 'nearest' : 'center', behavior: reduced ? 'auto' : 'smooth' });
  });
  mqCs.addEventListener('change', applyCsMode);
  applyCsMode();
  // full-page website captures are far taller than wide: crop those to the top
  $$('.cs-shots .shot-card img').forEach(im => {
    const mark = () => { if (im.naturalHeight > im.naturalWidth * 1.35) im.closest('.shot-card').classList.add('tall'); };
    if (im.complete && im.naturalWidth) mark(); else im.addEventListener('load', mark, { once: true });
  });

  /* ---------------- lightbox: videos and screenshots ---------------- */
  const lb = $('#lightbox'), lbFrame = $('#lightboxFrame'), lbClose = $('#lightboxClose'),
        lbPrev = $('#lightboxPrev'), lbNext = $('#lightboxNext');
  let lastFocused = null;
  const openLightbox = (html, isImage, label) => {
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
  // the lightbox arrows step through whichever set was opened: the videos in
  // one slider, or the screenshots in one slider or case study
  let step = null;
  // video buttons are both static and generated, so delegate on the document
  let videoSet = [], videoIdx = 0;
  const showVideo = (i) => {
    const n = videoSet.length;
    videoIdx = (i + n) % n;
    const b = videoSet[videoIdx];
    openLightbox(
      `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`,
      false, 'Video');
    lb.classList.toggle('has-set', n > 1);
    step = showVideo;
    lastFocused = b;
    if (b.closest('.slides')) b.closest('.slide').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-video]'); if (!b) return;
    const scope = b.closest('.slides, .wall');
    videoSet = scope ? $$('[data-video]', scope) : [b];
    showVideo(videoSet.indexOf(b));
  });
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
    step = showZoom;
    // a full-page website screenshot fitted to the viewport is an unreadable
    // strip, so anything much taller than it is wide opens already zoomed
    const im = lbFrame.querySelector('img');
    const autoZoom = () => { if (im.naturalHeight > im.naturalWidth * 1.6) lb.classList.add('is-zoomed', 'is-tall'); };
    if (im.complete && im.naturalWidth) autoZoom(); else im.addEventListener('load', autoZoom, { once: true });
    lastFocused = btn;
    if (btn.closest('.slides')) btn.closest('.slide').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
  };
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-zoom]'); if (!btn) return;
    const scope = btn.closest('.cs-panel') || btn.closest('.slides') || btn.parentElement;
    zoomSet = $$('[data-zoom]', scope);
    showZoom(zoomSet.indexOf(btn));
  });
  lbFrame.addEventListener('click', (e) => {
    if (!lb.classList.contains('is-image') || !e.target.closest('.zoomwrap')) return;
    const wrap = lbFrame.querySelector('.zoomwrap');
    lb.classList.toggle('is-zoomed');
    if (lb.classList.contains('is-zoomed')) wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2;
  });
  const go = (d) => { if (step === showVideo) showVideo(videoIdx + d); else showZoom(zoomIdx + d); };
  lbPrev.addEventListener('click', () => go(-1));
  lbNext.addEventListener('click', () => go(1));
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbFrame) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); if (typeof closeBook === 'function') closeBook(); setDrawer(false); return; }
    if (!lb.classList.contains('has-set')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
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
      const first = $('.logo');
      if (first) first.focus({ preventScroll: true });
    });
  }

  /* ---------------- FAQ: one open at a time ---------------- */
  const faqs = $$('.faq details');
  faqs.forEach(d => d.addEventListener('toggle', () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));
})();
