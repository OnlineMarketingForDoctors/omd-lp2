/* OMD Medical SEO landing page behaviour */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const U = 'https://onlinemarketingfordoctors.com/wp-content/uploads/';

  /* ---------------- data: case studies (SEO and AI search only) ---------------- */
  const CASES = [
    {
      id: 'delta', name: 'Delta Clinics', logo: 'assets/client-logos/delta-clinics-logo.webp', uk: true,
      place: 'Harley Street and Finchley, London', specialty: 'Plastic surgery', months: '8 months',
      title: 'Two London locations, one Google Business Profile problem, and a 730% rise in enquiries.',
      hero: { n: '730%', t: 'more patient enquiries in 8 months' },
      stats: [['1,500%', 'increase in website traffic'], ['540%', 'increase in keyword rankings'], ['2', 'Google Business Profiles restructured so they stopped competing']],
      situation: 'Mr Hazem Alfie is a consultant plastic surgeon with clinics on Harley Street and in Finchley. Two listings for one brand were cannibalising each other on Google Maps, and the procedure pages were too thin to rank for tummy tuck or breast augmentation in London.',
      did: ['Rebuilt each Google Business Profile for its own catchment, with its own categories and description', 'Wrote long-form, keyword-mapped pages for the core procedures, with diagrams and video', 'Started a monthly blog answering the questions patients type before they enquire', 'Deep keyword research across the procedure set, short-tail and long-tail, mapped page by page'],
      shots: [[U + '2025/09/ranking-keywords-delta-clinics.jpg', 'Keyword rankings, Delta Clinics'], [U + '2025/09/gmb-harley-street.jpg', 'Harley Street Google Business Profile'], [U + '2025/09/keywords-ranking.jpg', 'Ranking growth over the campaign']],
      portrait: U + '2025/09/mr-hazem-alfie.jpg',
      quote: 'I have seen an increase of almost 730% in the total number of leads or enquiries that come to the clinic. They have also been doing our SEO and I have seen great results with the SEO.',
      who: 'Mr Hazem Alfie', role: 'Consultant Plastic Surgeon, Delta Clinics',
      link: 'https://onlinemarketingfordoctors.com/casestudy/delta-clinics/'
    },
    {
      id: 'bfc', name: 'British Face Clinic', logo: 'assets/client-logos/british_face_clinic_logo.webp', uk: true,
      place: 'Harley Street, Milton Keynes and Northampton', specialty: 'Facial cosmetic surgery', months: '12 months',
      title: 'Three clinics, one facial surgeon, and a 1,012% increase in ranking keywords.',
      hero: { n: '1,012%', t: 'growth in keyword rankings in 12 months' },
      stats: [['5.08x', 'return on investment'], ['106%', 'increase in organic traffic'], ['300%', 'increase in conversions']],
      situation: 'Mr Mrinal Supriya operates across London, Milton Keynes and Northampton. The clinic was known for deep plane facelift and rhinoplasty in the profession, and almost invisible for those terms on Google.',
      did: ['Restructured three Google Business Profiles so each location owned its own local searches', 'Long-form pages for deep plane facelift, rhinoplasty and blepharoplasty, built from real search intent', 'Keyword research around trending facelift techniques and recovery questions', 'On-page rebuild: unique titles, headings and descriptions on every page'],
      shots: [[U + '2025/08/keywords-results-BFC.jpg', 'Keyword ranking results, British Face Clinic'], [U + '2025/08/British-Face-Clinic-GA4-YOY-Results-by-OMD.jpg', 'Year-on-year results in Google Analytics'], [U + '2025/08/GMB-listing.jpg', 'Google Business Profile listing']],
      portrait: U + '2025/08/mr-mrinal-supriya.jpg',
      quote: 'We have seen a significant increase in our organic traffic which has grown by around 150%. Similarly, we have seen a significant increase in our organic keywords, which has grown by 1,000%. We have seen an increase in our practice with a ROI of around 5.08.',
      who: 'Mr Mrinal Supriya', role: 'Facial Cosmetic Surgeon, British Face Clinic',
      link: 'https://onlinemarketingfordoctors.com/casestudy/british-face-clinic/'
    },
    {
      id: 'hr', name: 'HR Plastic Surgery', logo: 'assets/client-logos/hr-plastic-surgery-logo.webp', uk: true,
      place: 'London and Hertfordshire', specialty: 'Plastic surgery', months: '18 months',
      title: 'From minimal traffic to 16,000 visitors a month, and a 2,098% rise in organic traffic.',
      hero: { n: '2,098%', t: 'increase in organic traffic in 18 months' },
      stats: [['410%', 'more enquiries from organic search'], ['16,000', 'monthly website visitors'], ['2,148', 'visits a month from a single blog article']],
      situation: 'Mr Hyder Ridha had barely marketed the practice while competing clinics had been investing in search for a decade. The website had duplicated content, no local presence for its Hertfordshire clinics, and almost no organic traffic.',
      did: ['Audited and rewrote every thin or duplicated page, then positioned the site around mummy makeover', 'Keyword research covering the London suburbs and Hertfordshire towns patients actually search from', 'Google Business Profiles for Harpenden, Hitchin and Hatfield, each optimised and reviewed', 'Monthly blog programme, plus high-quality link building to build authority'],
      shots: [[U + '2024/10/HR-Plastic-Surgery-Traffic-Over-16000-Visitors.png', 'Over 16,000 monthly visitors'], [U + '2024/04/Harpenden-GMB-Results-Overall-Results-Nov-23-Jan-2024-vs-Nov-22-Jan-2023.jpg', 'Harpenden Google Business Profile, year on year'], [U + '2024/04/A-blog-article-has-driven-2148-visits-per-month.png', 'One article, 2,148 visits a month']],
      portrait: U + '2024/03/dr-hyder-ridha.jpg',
      quote: 'OMD successfully secured our ranking for highly competitive keywords, driving over 16,000 monthly visitors to our website. The conversion numbers witnessed an impressive surge of 400% across all traffic channels.',
      who: 'Mr Hyder Ridha', role: 'Plastic Surgeon, HR Plastic Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study/hr-plastic-surgery/'
    },
    {
      id: 'bbc', name: 'Breast and Body Clinic UK', logo: 'assets/client-logos/bb-clinic-uk-logo.webp', uk: true,
      place: 'Manchester', specialty: 'Plastic surgery', months: '18 months',
      title: 'Not on page one for a single main keyword. Now on page one for all of them.',
      hero: { n: '800%', t: 'more enquiries from organic search in 18 months' },
      stats: [['1,068%', 'increase in total website traffic'], ['300 to 4,270', 'search impressions a day'], ['4,331', 'visits a month from one blog article']],
      situation: 'Mr Aftab Siddiqui was competing in Manchester against clinics with years of search history. The site had 300 impressions a day and no first-page rankings for the procedures the practice is built on.',
      did: ['Rewrote all thin and copied content, then rebuilt the procedure pages for tummy tuck, breast reduction and mummy makeover', 'Keyword research covering every important Manchester suburb, short-tail and long-tail', 'Optimised and maintained the Google Business Profile for local and Maps rankings', 'Monthly articles targeting the questions patients search before booking, plus link building'],
      shots: [[U + '2024/10/Breast-and-Body-UK-Traffic-Over-6000.png', 'Organic traffic growth'], [U + '2024/03/tummy-tuck-manchester.png', 'Ranking for tummy tuck Manchester'], [U + '2024/03/bbc_fig13.jpg', 'Rankings for the most competitive local keywords']],
      portrait: U + '2024/01/mr-aftab-siddiqui.jpg',
      quote: 'My website has gone from 300 impressions a day to 4,270 a day. I was not on the first page for any of my main keywords and now I am on the first page for all of them.',
      who: 'Mr Aftab Siddiqui', role: 'Plastic Surgeon, Breast and Body Clinic UK',
      link: 'https://onlinemarketingfordoctors.com/case-study/breast-and-body-clinic-uk/'
    },
    {
      id: 'crown', name: 'The Crown Clinic', logo: '', uk: false,
      place: 'Sydney, Australia', specialty: 'Hair transplant', months: '6 months',
      title: 'First on Google for "hair transplant Sydney", and organic conversion rate up from 5% to nearly 20%.',
      hero: { n: '300%', t: 'more new patients in 6 months' },
      stats: [['89%', 'increase in organic traffic'], ['5.15% to 19.89%', 'organic conversion rate'], ['#1', 'for the most competitive hair transplant keywords in Sydney']],
      situation: 'A well-regarded clinic being outranked by newer competitors who marketed harder. The website had a high bounce rate, no local review strategy, and no presence for the big Sydney hair transplant searches.',
      did: ['On-site SEO best practice across every page: unique titles, headings, descriptions and faster load times', 'Local reviews programme on the Google Business Profile, which we still call the greatest local SEO weapon', 'Conversion fixes that cut organic bounce rate by 88% and quadrupled the organic conversion rate', 'Ranked top for hair transplant Sydney and hair loss treatment Sydney'],
      shots: [[U + '2020/11/figure-5-hair-transplant-sydney-ranks-1st.png', 'First for hair transplant Sydney'], [U + '2021/08/Traffic-Conversion-Performance-Over-The-Last-6-Months.png', 'Traffic and conversion over 6 months'], [U + '2020/11/figure-5-hair-loss-treatment-sydney.png', 'Ranking for hair loss treatment Sydney']],
      portrait: U + '2020/09/james-nadin.jpg',
      quote: 'Enquiries have gone crazy, the number of enquiries has increased by three folds ever since they started. They are very thorough and results driven with their work.',
      who: 'James Nadin', role: 'CEO, ICCM and The Crown Clinic',
      link: 'https://onlinemarketingfordoctors.com/case-study-crown-clinic/'
    },
    {
      id: 'mehta', name: 'Dr Malay Mehta', logo: '', uk: false,
      place: 'Mumbai, India', specialty: 'Hair transplant', months: '12 months',
      title: 'Number one for "hair transplant Mumbai", and surgical volume up from 5 to 50 a month.',
      hero: { n: '1,277%', t: 'increase in organic traffic in 12 months' },
      stats: [['683%', 'more enquiries from organic search'], ['376%', 'increase in total enquiries'], ['5 to 50', 'procedures a month']],
      situation: 'A skilled surgeon in one of the most competitive hair transplant markets on earth, with copied brochure content on the website and no ranking for the city keywords the practice needed.',
      did: ['Rewrote thin and duplicated content and added images, diagrams and video to the procedure pages', 'Keyword research across every Mumbai suburb, plus long-tail research for blog content', 'Google Business Profile claimed, optimised and maintained, with a review programme', 'High-quality link building to establish authority for the competitive city terms'],
      shots: [[U + '2024/10/Dr-Malay-Ranks-Number-1-For-Hair-Transplant-Mumbai-Marketing-For-Hair-Transplant-Clinics.jpg', 'Number one for hair transplant Mumbai'], [U + '2024/10/Dr-Malay-Mehta-Traffic-Growth-Year-on-Year-Hair-Transplant-Marketing.jpg', 'Year-on-year traffic growth'], [U + '2024/10/Malay-Mehta-1st-for-fue-hair-transplant-mumbai.jpg', 'First for FUE hair transplant Mumbai']],
      portrait: U + '2024/02/dr-malay-mehta-1.jpg',
      quote: 'Website conversion rate increased from 1.94% to 4.91%, and the practice expanded from 5 to 50 procedures a month within the first year.',
      who: 'Campaign summary', role: 'Dr Malay Mehta Aesthetic Clinic, Mumbai',
      link: 'https://onlinemarketingfordoctors.com/casestudy/dr-malay-mehta/'
    },
    {
      id: 'vein', name: 'Vein Doctors Sydney', logo: '', uk: false,
      place: 'Sydney, Australia', specialty: 'Vein clinic', months: '12 months',
      title: 'From under 200 visitors a day to nearly 500, and thousands more ranking keywords.',
      hero: { n: '65%', t: 'increase in organic traffic in 12 months' },
      stats: [['73%', 'more enquiries from organic search'], ['200 to 500', 'website users a day'], ['113%', 'increase in patient bookings']],
      situation: 'A premier Sydney vein clinic with low visibility for its main keywords, underperforming traffic and a website that did not convert the visitors it did get.',
      did: ['Rebuilt the website around conversion, then optimised every page for search', 'Ongoing content programme that expanded the site into thousands of new ranking keywords', 'Local SEO and Google Business Profile work for the Sydney catchment', 'Monthly tracking of enquiries and bookings against agreed benchmarks'],
      shots: [['assets/results/seo/vein-clinics/vein-doctors-sydney--vein-doctors-sydney-ranking-1st-on-google-search-and-google-maps-for-vein-doctor-sydney-keyword.webp', 'First on Google Search and Maps for vein doctor Sydney'], ['assets/results/ai/vein-clinics/vein-doctors-sydney--vein-doctors-sydney-ranks-on-chatgpt-for-vein-clinic-sydney.webp', 'Recommended by ChatGPT for vein clinic Sydney'], ['assets/results/seo/vein-clinics/vein-doctors-sydney--vein-doctors-sydney-ranking-1st-on-google-search-for-varicose-vein-treatment-sydney-keyword.webp', 'First for varicose vein treatment Sydney']],
      portrait: '',
      quote: 'My website has gone from less than 200 users to almost 500 now per day. More than doubled in 6 months. My keyword rankings increased significantly, and as new content was produced, we rank for thousands more keywords with our visibility increasing 65%.',
      who: 'Dr Ryan McConnell', role: 'Endovascular Specialist and Owner, Vein Doctors Sydney',
      link: 'https://onlinemarketingfordoctors.com/wp-content/uploads/2024/10/omd-case-study-vein-doctors-sydney.pdf'
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

  /* ---------------- ticker ---------------- */
  const track = $('#tickerTrack');
  const logos = FEATURED.map(f => `<img src="assets/featured-in/${f}" alt="" loading="lazy">`).join('');
  track.innerHTML = logos + logos;

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

  /* ---------------- results sliders ---------------- */
  const ORDER = ['Plastic Surgeons', 'Hair Transplant Clinics', 'Aesthetic Clinics', 'Ophthalmologists', "Men's & Women's Health", 'Head & Neck Surgery', 'Vein Clinics', 'Vasectomy Clinics', 'Orthopaedic Surgeons', 'Rheumatologists', 'Dentists', 'Mental Health Clinics', 'Chiropractors', "Women's Health", 'Neurology', 'Physiotherapy'];
  const prettyCaption = (c, client) => {
    let s = c.replace(/\s+\d+$/, '').replace(/\s+(k|ke|key|keyw|keywo|keywor|keyword|keywords)$/i, '').replace(/\s+(the\s+)?keyword$/i, '').trim();
    if (client) { const cl = client.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (s.toLowerCase().startsWith(cl)) s = s.slice(cl.length).trim(); }
    s = s.replace(/\bgmb\b/gi, 'Google Business Profile').replace(/\badn\b/gi, 'and').replace(/\bai google search results\b/gi, 'Google AI search results').replace(/\bchatgpt\b/gi, 'ChatGPT').replace(/\bgoogle\b/g, 'Google').replace(/\bmaps\b/g, 'Maps').replace(/\bfue\b/gi, 'FUE').replace(/\bled\b/gi, 'LED').replace(/\brf\b/gi, 'RF');
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const buildSlider = (kind, data, tabsEl, slidesEl, posEl) => {
    const groups = Object.keys(data).sort((a, b) => {
      const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    tabsEl.innerHTML = groups.map((g, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-group="${g}">${g}<span class="count">${data[g].length}</span></button>`).join('');
    const render = (g) => {
      const items = data[g];
      slidesEl.innerHTML = items.map((it) => `
        <figure class="slide">
          <div class="shot">${it.uk ? '<span class="uk">UK</span>' : ''}<img src="${it.file}" alt="${it.client}: ${prettyCaption(it.caption, it.client)}" loading="lazy"></div>
          <figcaption class="meta"><b>${it.client}</b><span>${prettyCaption(it.caption, it.client)}</span></figcaption>
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
      $$('.tab', tabsEl).forEach(t => t.setAttribute('aria-selected', String(t === b)));
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced ? 'auto' : 'smooth' });
      render(b.dataset.group);
    });
    render(groups[0]);
  };
  fetch('assets/results/index.json').then(r => r.json()).then(data => {
    buildSlider('seo', data.seo, $('#seoTabs'), $('#seoSlides'), $('#seoPos'));
    buildSlider('ai', data.ai, $('#aiTabs'), $('#aiSlides'), $('#aiPos'));
  }).catch(() => {
    $('#seoSlides').innerHTML = '<p class="muted">Results are loading slowly. Please refresh the page.</p>';
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
  csNav.innerHTML = CASES.map((c, i) => `
    <button class="cs-tab" role="tab" aria-selected="${i === 0}" data-cs="${c.id}">
      <span class="logo-box">${c.logo ? `<img src="${c.logo}" alt="">` : `<b>${c.name}</b>`}</span>
      ${c.logo ? `<b>${c.name}</b>` : ''}<small>${c.uk ? 'UK' : c.place.split(',').pop().trim()} &middot; ${c.months}</small>
    </button>`).join('');
  csPanels.innerHTML = CASES.map((c, i) => `
    <div class="cs-panel ${i === 0 ? 'is-active' : ''}" id="cs-${c.id}" role="tabpanel">
      <div class="cs-grid">
        <div>
          <div class="cs-head">
            <div class="place"><span>${c.place}</span><span>${c.specialty}</span><span>${c.months}</span></div>
            <h3>${c.title}</h3>
          </div>
          <div class="cs-hero-stat"><span class="num">${c.hero.n}</span><span>${c.hero.t}</span></div>
          <div class="cs-stats">${c.stats.map(s => `<div><span class="num">${s[0]}</span><small>${s[1]}</small></div>`).join('')}</div>
          <div class="cs-body">
            <h4>The situation</h4><p>${c.situation}</p>
            <h4>What we did on the search side</h4><ul>${c.did.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <blockquote class="cs-quote">
            <p>"${c.quote}"</p>
            <div class="q-who">${c.portrait ? `<img src="${c.portrait}" alt="" loading="lazy">` : ''}<div><b>${c.who}</b><small>${c.role}</small></div></div>
          </blockquote>
          <a class="cs-link" href="${c.link}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
        </div>
        <div class="cs-shots">
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + 1}"><img src="${s[0]}" alt="${s[1]}" loading="lazy"><figcaption>${s[1]}</figcaption></figure>`).join('')}
          ${c.portrait ? `<div class="portrait"><img src="${c.portrait}" alt="${c.who}" loading="lazy"></div>` : ''}
        </div>
      </div>
    </div>`).join('');
  csNav.addEventListener('click', (e) => {
    const b = e.target.closest('.cs-tab'); if (!b) return;
    $$('.cs-tab', csNav).forEach(t => t.setAttribute('aria-selected', String(t === b)));
    $$('.cs-panel', csPanels).forEach(p => p.classList.toggle('is-active', p.id === 'cs-' + b.dataset.cs));
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced ? 'auto' : 'smooth' });
  });

  /* ---------------- video lightbox ---------------- */
  const lb = $('#lightbox'), lbFrame = $('#lightboxFrame');
  const openVideo = (id) => {
    lbFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Client video testimonial" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    lb.classList.add('is-open'); document.body.style.overflow = 'hidden'; $('#lightboxClose').focus();
  };
  const closeVideo = () => { lb.classList.remove('is-open'); lbFrame.innerHTML = ''; document.body.style.overflow = ''; };
  $$('[data-video]').forEach(b => b.addEventListener('click', () => openVideo(b.dataset.video)));
  $('#lightboxClose').addEventListener('click', closeVideo);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeVideo(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeVideo(); setDrawer(false); } });

  /* ---------------- FAQ: one open at a time ---------------- */
  const faqs = $$('.faq details');
  faqs.forEach(d => d.addEventListener('toggle', () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));
})();
