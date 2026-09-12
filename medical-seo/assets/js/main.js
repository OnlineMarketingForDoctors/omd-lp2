/* OMD Medical SEO landing page behaviour */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
      id: 'symmetry', name: 'Symmetry Clinic', logo: 'assets/client-logos/symmetry-clinic-logo.png', uk: true,
      kind: 'rankings', meta: 'Ranking file',
      place: 'Harley Street, London', specialty: 'Facial plastic surgery',
      title: "Named in ChatGPT's top five London rhinoplasty clinics, and in five separate Google AI Overviews.",
      hero: { n: 'Top 5', t: "in ChatGPT's shortlist of London rhinoplasty clinics" },
      stats: [['5', 'Google AI Overview placements for London facial surgery searches'], ['14', 'AI answers captured'], ['6', 'Google Search and Maps placements']],
      queries: ['best facial plastic surgeons in london', 'top 10 facial cosmetic surgeons in london', 'best facelift surgery clinic in london', 'revision rhinoplasty london', 'septoplasty london', 'nose reduction london', 'facial reconstructive surgery in london'],
      shots: [['assets/results/ai/plastic-surgery/symmetry-clinic--symmetry-clinic-ranks-on-chatgpt-for-top-5-plastic-surgery-clinics-in-london-specialising-in-rh.webp', "ChatGPT's top five London rhinoplasty clinics"], ['assets/results/ai/plastic-surgery/symmetry-clinic--symmetry-clinic-ranking-on-google-ai-overview-for-top-10-facial-cosmetic-surgeons-in-london.webp', 'Google AI Overview, top facial cosmetic surgeons in London'], ['assets/results/seo/plastic-surgery/symmetry-clinic--symmetry-clinic-ranking-in-google-search-for-the-keyword-revision-rhinoplasty-london.webp', 'Google Search, revision rhinoplasty London']],
      portrait: ''
    },
    {
      id: 'vision', name: 'The Vision Surgeon', logo: 'assets/client-logos/the-vision-surgeon-logo.webp', uk: true,
      kind: 'rankings', meta: 'Ranking file',
      place: 'Colchester and Essex', specialty: 'Ophthalmology',
      title: 'The answer when a patient asks for the best laser eye surgeon in Colchester.',
      hero: { n: '6', t: 'AI answers naming the clinic for laser eye surgery in Colchester' },
      stats: [['5', 'Google Search and Maps placements across Colchester and Essex'], ['6', 'AI answers captured'], ['2', 'ChatGPT shortlists for laser refractive surgery']],
      queries: ['best laser surgeon in colchester', 'best laser refractive surgery clinic in colchester', 'laser eye surgery colchester', 'hyperopia treatment colchester', 'eye doctor colchester', 'ophthalmologist colchester', 'eye care specialist essex'],
      shots: [['assets/results/ai/eye-care-clinics/the-vision-surgeon--the-vision-surgeon-ranks-on-chatgpt-results-for-best-laser-surgeon-in-colchester-keyword.webp', "ChatGPT, best laser surgeon in Colchester"], ['assets/results/ai/eye-care-clinics/the-vision-surgeon--the-vision-surgeon-ranks-on-ai-search-results-for-laser-eye-surgery-colchester-keyword.webp', 'Google AI search, laser eye surgery Colchester'], ['assets/results/seo/eye-care-clinics/the-vision-surgeon--the-vision-surgeon-ranks-on-google-maps-for-eye-doctor-colchester-keyword.webp', 'Google Maps, eye doctor Colchester']],
      portrait: ''
    },
    {
      id: 'mansmatters', name: 'MansMatters', logo: 'assets/client-logos/mans-matters-logo.webp', uk: true,
      kind: 'rankings', meta: 'Ranking file',
      place: 'London', specialty: "Men's health",
      title: "First on Google for the e-shot in London, and ChatGPT's answer for men's health clinics in the city.",
      hero: { n: '1st', t: 'on Google for the e-shot treatment in London' },
      stats: [['7', 'AI answers captured'], ['2', "ChatGPT shortlists for London men's health clinics"], ['2', 'Google Search and Maps placements']],
      queries: ['men health clinics in london', 'peyronies disease clinic in london', 'e shot treatment london', 'peyronies disease treatment london', 'shockwave therapy for peyronies', 'erectile dysfunction near london'],
      shots: [['assets/results/seo/men-and-women-health-clinics/mansmatters--mansmatters-ranks-1st-on-google-search-results-for-the-e-shot-treatment-london-keyword.webp', 'First on Google Search, e-shot treatment London'], ['assets/results/ai/men-and-women-health-clinics/mansmatters--mans-matters-ranks-on-chatgpt-for-men-health-clinics-in-london.webp', "ChatGPT, men's health clinics in London"], ['assets/results/ai/men-and-women-health-clinics/mansmatters--mansmatters-ranks-on-top-ai-google-search-results-for-the-keyword-peyronies-disease-treatment-n.webp', "Google AI search, Peyronie's disease treatment near London"]],
      portrait: ''
    },
    {
      id: 'fortes', name: 'Fortes Clinic', logo: 'assets/client-logos/fortes-clinic.webp', uk: true,
      kind: 'rankings', meta: 'AI search file',
      place: 'London', specialty: 'Hair transplant',
      title: "In ChatGPT's industry shortlist of the top three hair transplant clinics.",
      hero: { n: 'Top 3', t: "in ChatGPT's industry shortlist of hair transplant clinics" },
      stats: [['4', 'ChatGPT answers captured'], ['3', 'distinct London hair transplant queries']],
      queries: ['top hair transplant clinics in london', 'best fue hair transplant clinic in london', 'best doctor-led hair transplant clinic london', 'industry shortlist, top 3 hair transplant clinics'],
      note: "This clinic's evidence is AI search visibility rather than organic rankings.",
      shots: [['assets/results/ai/hair-transplant-clinics/fortes-clinic--fortes-clinic-ranking-on-chatgpt-for-industry-shortlist-for-top-3-hair-transplant-clinics.webp', "ChatGPT, industry shortlist of the top three clinics"], ['assets/results/ai/hair-transplant-clinics/fortes-clinic--fortes-clinic-ranking-on-chatgpt-for-top-hair-transplant-clinics-in-london.webp', 'ChatGPT, top hair transplant clinics in London'], ['assets/results/ai/hair-transplant-clinics/fortes-clinic--fortes-clinic-ranking-on-chatgpt-for-best-doctor-led-hair-transplant-clinic-london.webp', 'ChatGPT, best doctor-led hair transplant clinic in London']],
      portrait: ''
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
            <img src="${esc(it.file)}" alt="${esc(it.client)}: ${esc(prettyCaption(it.caption, it.client))}" loading="lazy">
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
            <h4>Where they appear now</h4>
            <ul class="cs-queries">${c.queries.map(q => `<li>${esc(q)}</li>`).join('')}</ul>
          </div>
          <p class="cs-note">Every placement above is a screenshot from a live client account, and you can open each one full size. ${c.note ? esc(c.note) + ' ' : ''}We do not publish traffic or enquiry figures for this clinic, so none are claimed here.</p>
          ` : `
          <div class="cs-body">
            <h4>The situation</h4><p>${c.situation}</p>
            <h4>What we did on the search side</h4><ul>${c.did.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <blockquote class="cs-quote">
            <p>"${c.quote}"</p>
            <div class="q-who">${c.portrait ? `<img src="${c.portrait}" alt="" loading="lazy">` : ''}<div><b>${c.who}</b><small>${c.role}</small></div></div>
          </blockquote>
          <a class="cs-link" href="${c.link}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
          `}
        </div>
        <div class="cs-shots">
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + 1}"><button class="shot-zoom" type="button" data-zoom="${esc(s[0])}" data-client="${esc(c.name)}" data-cap="${esc(s[1])}" aria-label="Enlarge screenshot: ${esc(c.name)}, ${esc(s[1])}"><img src="${esc(s[0])}" alt="${esc(s[1])}" loading="lazy"></button><figcaption>${esc(s[1])}</figcaption></figure>`).join('')}
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
    lb.classList.remove('is-open', 'is-image', 'has-set', 'is-zoomed');
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
    lb.classList.remove('is-zoomed');
    lb.classList.toggle('has-set', n > 1);
    lastFocused = btn;  // close returns the viewer to the screenshot they ended on
    // keep the slider or panel behind the lightbox on the screenshot being viewed
    if (btn.closest('.slides')) btn.closest('.slide').scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
  };
  // slides are rebuilt on every tab change, so delegate rather than bind per card
  $$('#seoSlides, #aiSlides, #csPanels').forEach(container => container.addEventListener('click', (e) => {
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
    if (e.key === 'Escape') { closeLightbox(); setDrawer(false); return; }
    if (!lb.classList.contains('has-set')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); showZoom(zoomIdx - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); showZoom(zoomIdx + 1); }
  });

  /* ---------------- FAQ: one open at a time ---------------- */
  const faqs = $$('.faq details');
  faqs.forEach(d => d.addEventListener('toggle', () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));
})();
