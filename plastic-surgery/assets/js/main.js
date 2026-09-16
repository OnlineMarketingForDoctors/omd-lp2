/* OMD Plastic Surgery Marketing landing page behaviour */
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
      id: 'delta', name: 'Delta Clinics', logo: 'assets/client-logos/delta-clinics-logo.webp', region: 'UK',
      place: 'Harley Street and Finchley, London', specialty: 'Plastic surgery', months: '8 months',
      channels: ['Website', 'Brand and funnel', 'Google Ads', 'Meta ads', 'SEO', 'Content', 'AI SMS assistant'],
      title: 'A newly opened Harley Street clinic, built from nothing to a 730% rise in enquiries.',
      hero: { n: '730%', t: 'more patient enquiries in 8 months' },
      stats: [['1,500%', 'increase in website traffic'], ['540%', 'increase in keyword rankings'], ['£0.11', 'average cost per click on Meta, from 295,000 impressions']],
      situation: 'Mr Hazem Alfie brought twenty years as a consultant plastic surgeon to a newly opened clinic with no proper website, no social presence and two Google listings competing with each other. Previous agencies had not moved the needle.',
      did: ['Positioned the clinic, then built a new conversion-driven website with a brandscript and one-liner', 'Dedicated landing pages for tummy tuck, breast enlargement and labiaplasty, used in Google Ads', 'Full-funnel Facebook and Instagram campaigns: 295,000 impressions, 12,895 clicks, £0.11 a click', 'Ebook lead magnets with follow-up email sequences, and an AI SMS assistant that books calls from inbound leads', 'Two Google Business Profiles rebuilt for their own catchments, plus long-form procedure pages and a monthly blog'],
      shots: [['assets/cases/delta-google-ads.webp', 'Google Ads campaign results'], ['assets/work/websites/delta-clinics-home--top.webp', 'The new Delta Clinics website', 'assets/work/websites/delta-clinics-home--full.webp'], ['assets/cases/delta-keywords-ranking.webp', 'Keyword rankings up 540% over the campaign'], ['assets/cases/delta-conversions.webp', 'Conversions by channel in Google Analytics']],
      portrait: 'assets/cases/delta-alfie.webp',
      quote: 'I have seen an increase of almost 730% in the total number of leads or enquiries that come to the clinic. They have designed a totally new website, they have been doing our SEO, and they have recently taken on our social media management.',
      who: 'Mr Hazem Alfie', role: 'Consultant Plastic Surgeon, Delta Clinics',
      link: 'https://onlinemarketingfordoctors.com/casestudy/delta-clinics/'
    },
    {
      id: 'bfc', name: 'British Face Clinic', logo: 'assets/client-logos/british_face_clinic_logo.webp', region: 'UK',
      place: 'Harley Street, Milton Keynes and Northampton', specialty: 'Facial cosmetic surgery', months: '12 months',
      channels: ['Website', 'Brand and funnel', 'Google Ads', 'Meta ads', 'SEO', 'Content', 'AI SMS assistant'],
      title: 'Three clinics, one facial surgeon, and a 5.08x return in twelve months.',
      hero: { n: '5.08x', t: 'return on investment in 12 months' },
      stats: [['1,012%', 'growth in keyword rankings'], ['£230,875', 'revenue from 44 procedures booked through Google Ads in a year'], ['£4', 'average cost per lead on Meta, from 3.2 million impressions']],
      situation: 'Mr Mrinal Supriya operates across London, Milton Keynes and Northampton. The clinic was known for deep plane facelift and rhinoplasty in the profession, invisible for those terms on Google, and had a website that did not convert and almost no paid presence.',
      did: ['Positioned the clinic around the deep plane facelift, then rebuilt the website to convert', 'Landing pages for deep plane facelift, rhinoplasty and blepharoplasty for Google Ads: 2,889 leads and 44 booked procedures in a year', 'Full-funnel Facebook and Instagram campaigns: 3.2 million impressions, 41,290 clicks, about £4 a lead', 'An AI SMS assistant in the CRM that answers every enquiry within minutes and books the phone consultation', 'Three Google Business Profiles restructured, plus long-form procedure pages and a monthly blog'],
      shots: [['assets/cases/bfc-ads-snapshot.webp', 'Google Ads: 2,889 leads, 44 procedures, £230,875 revenue'], ['assets/work/websites/british-face-clinic-home--top.webp', 'The new British Face Clinic website', 'assets/work/websites/british-face-clinic-home--full.webp'], ['assets/cases/bfc-ai-sms.webp', 'The AI SMS assistant booking phone consultations'], ['assets/cases/bfc-ga4.webp', 'Organic search up 106% year on year']],
      portrait: 'assets/cases/bfc-supriya.webp',
      quote: 'OMD completely renovated our website and gave it a much fresher look. They have also helped us with our SEO and with our paid Google campaign. Our organic keywords have grown by 1,000%, and we have seen an increase in our practice with a ROI of around 5.08.',
      who: 'Mr Mrinal Supriya', role: 'Facial Cosmetic Surgeon, British Face Clinic',
      link: 'https://onlinemarketingfordoctors.com/casestudy/british-face-clinic/'
    },
    {
      id: 'hr', name: 'HR Plastic Surgery', logo: 'assets/client-logos/hr-plastic-surgery-logo.webp', region: 'UK',
      place: 'London and Hertfordshire', specialty: 'Plastic surgery', months: '18 months',
      channels: ['Website', 'Brand and funnel', 'Google Ads', 'Meta ads', 'SEO', 'Content', 'Email'],
      title: 'Repositioned as the mummy makeover expert, from under 200 organic visits to 16,000 a month.',
      hero: { n: '247%', t: 'more patient enquiries in 18 months' },
      stats: [['2,098%', 'increase in organic traffic'], ['16,000', 'monthly website visitors'], ['155%', 'higher website conversion rate after the rebuild']],
      situation: 'Mr Hyder Ridha had barely marketed the practice while competing London clinics had been investing for a decade. Thin content, no sales funnel, few Google reviews, low traffic and a Google Ads campaign that was not producing leads.',
      did: ['Rebuilt the website around the mummy makeover, with a brandscript and one-liner: conversion rate up 155%', 'Dedicated landing pages for Google Ads: conversion rate up 107% and conversions up 989%', 'Ebook lead magnets with nurturing email sequences for the 95% of visitors who do not enquire first time', 'Full-funnel Facebook and Instagram campaigns from awareness to free consultation offers', 'Google Business Profiles for Harpenden, Hitchin and Hatfield, a monthly blog and link building'],
      shots: [['assets/cases/hr-website-after.webp', 'The new website, positioned around the mummy makeover'], ['assets/cases/hr-landing-page.webp', 'Breast augmentation landing page for Google Ads'], ['assets/cases/hr-traffic.webp', 'Over 16,000 monthly visitors'], ['assets/cases/hr-lead-magnets.webp', 'Ebook lead magnets']],
      portrait: 'assets/cases/hr-ridha.webp',
      quote: 'OMD devised a comprehensive plan to overhaul my entire website, repositioning it as the go-to Mummy Makeover expert. They initiated a Google Ads campaign to swiftly generate traffic, and the results became notably significant after the first 6 months, especially when SEO traffic started gaining traction.',
      who: 'Mr Hyder Ridha', role: 'Plastic Surgeon, HR Plastic Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study/hr-plastic-surgery/'
    },
    {
      id: 'bbc', name: 'Breast and Body Clinic UK', logo: 'assets/client-logos/bb-clinic-uk-logo.webp', region: 'UK',
      place: 'Manchester', specialty: 'Plastic surgery', months: '18 months',
      channels: ['Website', 'Brand and funnel', 'Google Ads', 'Meta ads', 'SEO', 'Content', 'CRM'],
      title: 'Not on page one for a single main keyword. Now on page one for all of them, with 706% more enquiries.',
      hero: { n: '706%', t: 'more patient enquiries in 18 months' },
      stats: [['2,936%', 'increase in organic traffic'], ['618%', 'more website conversions year on year'], ['29', 'extra leads a month from one exit pop-up lead magnet']],
      situation: 'Mr Aftab Siddiqui was competing in Manchester against clinics with years of search history. A local agency and an international one had both failed to move bookings. The site had 300 impressions a day, thin content, no funnel and an unproductive Google Ads account.',
      did: ['Rebuilt the website around the mummy makeover, with a brandscript, one-liner and ebook lead magnets', 'Landing pages for tummy tuck, breast augmentation, breast reduction and mummy makeover, with rebuilt Google Ads copy', 'Full-funnel Facebook and Instagram campaigns from awareness to free consultation offers', 'A CRM so the clinic can track every enquiry from source to booking', 'Google Business Profile optimisation, rewritten procedure pages, a monthly blog and link building'],
      shots: [['assets/cases/bbc-home-after.webp', 'The new website'], ['assets/cases/bbc-landing-page.webp', 'Mummy makeover landing page'], ['assets/cases/bbc-traffic.webp', 'Organic traffic growth'], ['assets/cases/bbc-12m-later.webp', 'Traffic and conversions twelve months later']],
      portrait: 'assets/cases/bbc-siddiqui.webp',
      quote: 'My website has been redesigned, I have lead magnets such as interesting eBooks, client testimonials, fantastic blogs, detailed new content, and they set up a CRM which enables me to track and monitor how my website performs. The website conversion number has gone up by 618% compared to the same time last year.',
      who: 'Mr Aftab Siddiqui', role: 'Plastic Surgeon, Breast and Body Clinic UK',
      link: 'https://onlinemarketingfordoctors.com/case-study/breast-and-body-clinic-uk/'
    },
    {
      id: 'somia', name: 'Dr Naveen Somia', logo: 'assets/client-logos/naveen-somia-logo.webp', region: 'Australia',
      place: 'Bondi Junction, Sydney', specialty: 'Plastic surgery', months: '12 months',
      channels: ['Strategy', 'SEO', 'Landing pages', 'Reviews', 'Email'],
      title: 'Page one for eyelid surgery in Sydney, and 115% more new patients in a year.',
      hero: { n: '115%', t: 'more new patients in 12 months' },
      stats: [['227%', 'increase in leads'], ['109%', 'increase in monthly web traffic'], ['Page 1', 'for eye bag surgery Sydney, eyelid surgery and plastic surgeon Bondi Junction']],
      situation: 'A well-known plastic surgeon and ASAPS president specialising in eyelid surgery and breast reduction, referred to OMD by a leading digital strategist. The practice needed an agency that could take on its whole online presence.',
      did: ['Strategy session to fix the direction, the target patient and the procedures to own', 'Competitor research: where rivals advertised, ranked and earned their links', 'Niche procedure pages and landing pages built out one by one, each with unique content', 'On-site SEO best practice and a local reviews programme', 'Redesigned newsletter, with list building through Facebook and Google advertising'],
      shots: [['assets/cases/somia-banner.webp', 'Dr Naveen Somia at his Sydney practice'], ['assets/cases/somia-1.webp', 'Strategy session with the practice team']],
      portrait: 'assets/cases/somia-portrait.webp',
      quote: 'Over the last 12 months we have increased the web traffic by over 100 percent and also increased the conversion by over 100 percent.',
      who: 'Dr Naveen Somia', role: 'MBBS PhD FRACS, Plastic Surgeon',
      link: 'https://onlinemarketingfordoctors.com/case-study-naveen-somia/'
    },
    {
      id: 'hodgkinson', name: 'Dr Darryl Hodgkinson', logo: 'assets/client-logos/dr-hodgkinson-logo.webp', region: 'Australia',
      place: 'Double Bay, Sydney', specialty: 'Plastic surgery', months: '4 months',
      channels: ['Positioning', 'SEO', 'Google Ads', 'Content', 'Lead magnet funnel'],
      title: 'A world-renowned surgeon being outranked by younger clinics. Turned around in four months.',
      hero: { n: '2x', t: 'consultation requests in 4 months' },
      stats: [['113%', 'increase in organic traffic'], ['136%', 'more clicks from Google Ads at 25% lower cost per click'], ['95%', 'lower bounce rate']],
      situation: 'Thirty years of experience and his own day surgery in Double Bay, yet organic traffic had halved after a Google update, the lead magnet was not converting and younger, more aggressive clinics dominated search and social. Several agencies had promised and not delivered.',
      did: ['Positioning strategy around facial surgery, the work he wanted to be known for', 'High Performance SEO for the most competitive Sydney facial surgery keywords', 'Content marketing that lifted organic traffic 113% and cut bounce rate by 95%', 'Google Ads rebuilt: 136% more clicks, 73% more conversions, each click 25% cheaper', 'A lead magnet funnel that turned research visitors into consultation requests'],
      video: ['d_AhqfJ34wY', 'Dr Hodgkinson on the results, in his own words'],
      shots: [['assets/cases/hodgkinson-banner.webp', 'Huyen Truong and Steven Tait with Dr Hodgkinson']],
      portrait: '',
      quote: 'The number of requests for consultations is at least doubled from the last 5 months, which is a very good sign.',
      who: 'Dr Darryl Hodgkinson', role: 'Plastic Surgeon, Double Bay Day Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study-dr-hodgkinson/'
    },
    {
      id: 'attalla', name: 'Dr Mark Attalla', logo: 'assets/client-logos/dr-mark-attalla-logo.webp', region: 'Australia',
      place: 'Melbourne', specialty: 'Cosmetic surgery', months: '8 months',
      channels: ['Website revamp', 'SEO', 'Google Ads', 'Content'],
      title: 'A penalised domain, a fresh start, and double the conversions on a quarter of the ad budget.',
      hero: { n: '146%', t: 'increase in leads in 8 months' },
      stats: [['76%', 'increase in monthly web traffic'], ['¼', 'of the previous Google Ads budget, for twice the conversions'], ['5.53% to 7.85%', 'organic conversion rate after the website revamp']],
      situation: 'Years of digital marketing spend, a domain penalised by a Google update, and a new site that still was not ranking for the liposuction keywords the practice depended on, with an expensive Google Ads account to match.',
      did: ['Website revamp for user experience and conversion before any more traffic was bought', 'Single keyword ad groups and bid negotiation in Google Ads: a quarter of the budget, double the conversions', 'Comprehensive keyword research across Melbourne suburbs and every liposuction variant', 'New niche procedure pages: stomach, thigh, arm, double chin, cost, fat transfer', 'On-site SEO best practice, proper indexation and faster load times'],
      shots: [['assets/cases/attalla-website.webp', 'The website before and after the revamp'], ['assets/cases/attalla-fig2.webp', 'Top ranking for liposuction Melbourne on Maps and organic search'], ['assets/cases/attalla-fig1.webp', 'Traffic and goal completions over 8 months, paid and organic'], ['assets/cases/attalla-fig6.webp', 'Google reviews, Chelsea Cosmetics Melbourne']],
      portrait: 'assets/cases/attalla-portrait.webp',
      quote: 'They organised the website in a way that is easier for the clients to go through. We found that we are spending almost one-fourth of our previous budget and getting double the conversion.',
      who: 'Dr Mark Attalla', role: 'Cosmetic Surgeon and Owner, Chelsea Cosmetics Melbourne',
      link: 'https://onlinemarketingfordoctors.com/case-study-dr-attalla/'
    }
  ];

  const FEATURED = ['forbes-logo-2.webp', 'daily-mail-uk-logo.png', 'business-insider-logo-2.webp', 'entrepreneur-logo.png', 'Yahoo_Finance_logo.webp', 'mashable-logo.webp', 'usa-today-logo.webp', 'msn-logo-1.webp', 'london-insider-logo.webp', 'marketing-mag-logo.webp', 'thrive-global-logo.png', 'smart-company-logo-1.png', 'herald-sun.png', 'new-york-weekly.webp', 'sem_logo.webp'];

  /* ---------------- data: service galleries ---------------- */
  const WEBSITES = [
    ['british-face-clinic-home', 'British Face Clinic', 'Homepage, Harley Street facial surgery clinic'],
    ['delta-clinics-home', 'Delta Clinics', 'Homepage, Harley Street and Finchley'],
    ['british-face-clinic-deep-plane-facelift-lp', 'British Face Clinic', 'Deep plane facelift landing page'],
    ['manaf-khatib-home', 'Mr Manaf Khatib', 'Homepage, plastic surgeon, London'],
    ['the-hanson-clinic-deep-plane-facelift', 'The Hanson Clinic', 'Deep plane facelift page, Dublin'],
    ['cambridge-clear-beauty-facelift-lp', 'Cambridge Clear Beauty', 'Facelift landing page, Cambridge'],
    ['british-face-clinic-rhinoplasty-lp', 'British Face Clinic', 'Rhinoplasty landing page']
  ].map(([f, c, t]) => ({ thumb: `assets/work/websites/${f}--top.webp`, full: `assets/work/websites/${f}--full.webp`, client: c, cap: t }));
  // the hanson file was saved under a shorter name
  WEBSITES[4].thumb = 'assets/work/websites/hanson-clinic-deep-plane-facelift--top.webp';
  WEBSITES[4].full = 'assets/work/websites/hanson-clinic-deep-plane-facelift--full.webp';

  const GADS = [
    ['results-ppc-performance-google-search-ads-ranking-result-deep-plane-facelift-near-london-for-british-face-clinic-by-omd-30032026.webp', 'Google Search ad, top position for deep plane facelift near London'],
    ['results-ppc-performance-google-maps-ads-ranking-result-rhinoplasty-london-for-british-face-clinic-by-omd-27012026.webp', 'Google Maps ad, rhinoplasty London'],
    ['results-ppc-performance-google-maps-ads-ranking-result-facial-surgeon-uk-for-british-face-clinic-by-omd-27012026.webp', 'Google Maps ad, facial surgeon UK'],
    ['results-ppc-performance-google-search-ads-ranking-result-deep-plane-facelift-near-london-for-british-face-clinic-by-omd-24022026.webp', 'Google Search ad, deep plane facelift near London']
  ].map(([f, t]) => ({ file: `assets/work/google-ads/${f}`, client: 'British Face Clinic', cap: t }));

  const SADS = [
    ['results-social-media-advertising-tummy-tuck-campaign-august-2025-for-delta-clinics-by-omd-29092025.webp', 'Delta Clinics', 'Tummy tuck campaign, August 2025'],
    ['results-social-media-advertising-mini-facelift-july-2025-for-british-face-clinic-by-omd-30072025.webp', 'British Face Clinic', 'Mini facelift campaign, July 2025'],
    ['results-social-media-advertising-deep-plane-facelift-blepharoplasty-may-2025-for-the-hanson-clinic-by-omd-26062025.webp', 'The Hanson Clinic', 'Deep plane facelift and blepharoplasty, May 2025'],
    ['results-social-media-advertising-breast-augmentation-june-2025-for-white-hill-clinic-by-omd-30072025.webp', 'White Hill Clinic', 'Breast augmentation, June 2025'],
    ['results-social-media-advertising-tummy-tuck-june-2025-for-delta-clinics-by-omd-30072025.webp', 'Delta Clinics', 'Tummy tuck campaign, June 2025'],
    ['results-social-media-advertising-deep-plane-facelift-march-1-31-2025-for-the-hanson-clinic-by-omd-30042025.webp', 'The Hanson Clinic', 'Deep plane facelift, March 2025'],
    ['results-social-media-advertising-breast-augmentation-may-2025-for-white-hill-clinic-by-omd-26062025.webp', 'White Hill Clinic', 'Breast augmentation, May 2025']
  ].map(([f, c, t]) => ({ file: `assets/work/social-ads/${f}`, client: c, cap: t }));

  const SOCIAL_VIDEOS = ['1Yz3dmQhNy8', 'EEb5xjdOkyY', 'J4JO0OGQwfs', 'Q5k_kK4KRuw', 'fDvDVZYmfII'];

  const PHOTOS = [
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
  ].map(([f, c, t]) => ({ file: U + f, client: c, cap: t }));

  const CLIENTS = [
    ['delta-clinics-logo.webp', 'Delta Clinics'],
    ['british_face_clinic_logo.webp', 'British Face Clinic'],
    ['hr-plastic-surgery-logo.webp', 'HR Plastic Surgery'],
    ['bb-clinic-uk-logo.webp', 'Breast and Body Clinic UK'],
    ['symmetry-clinic-logo.png', 'Symmetry Clinic'],
    ['manaf-khatib-logo.webp', 'Mr Manaf Khatib'],
    ['cambridge-clear-beauty-logo.png', 'Cambridge Clear Beauty'],
    ['Ullas-Facial-Plastic-Surgery-logo.svg', 'Ullas Facial Plastic Surgery'],
    ['Victoria-House-Clinic-logo-1.webp', 'Victoria House Clinic'],
    ['Tajmeel-Clinic-logo.png', 'Tajmeel Clinic'],
    ['ukaaps-capsco-logo.webp', 'UKAAPS CAPSCO'],
    ['head2neck-logo.png', 'Head2Neck'],
    ['paul-wilson-logo.svg', 'Paul Wilson'],
    ['uk-hand-wrist-surgery-logo.webp', 'UK Hand and Wrist Surgery'],
    ['fortes-clinic.webp', 'Fortes Clinic'],
    ['Harley-Street-Eye-Centre-logo.webp', 'The Harley Street Eye Centre']
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

  /* ---------------- hero video ---------------- */
  const hv = $('#heroVideo');
  if (hv) {
    const ready = () => hv.classList.add('is-ready');
    if (reduced) {
      hv.removeAttribute('autoplay'); hv.pause();
    } else {
      hv.addEventListener('playing', ready, { once: true });
      if (hv.readyState >= 3 && !hv.paused) ready();
      const p = hv.play(); if (p && p.catch) p.catch(() => {});
      // keep the video off while the tab is hidden, save battery on phones
      document.addEventListener('visibilitychange', () => { if (document.hidden) hv.pause(); else { const q = hv.play(); if (q && q.catch) q.catch(() => {}); } });
    }
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
    sm.innerHTML = SOCIAL_VIDEOS.map((id, i) => `
      <figure class="slide vslide">
        <button class="vshot" type="button" data-video="${id}" aria-label="Play social media video ${i + 1} of ${SOCIAL_VIDEOS.length}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="play" aria-hidden="true">${PLAY_SVG}</span>
        </button>
        <figcaption class="meta"><b>Clinic video ${i + 1}</b><span>Produced and published by OMD. Tap to play.</span></figcaption>
      </figure>`).join('');
    trackPos(sm, $('#smPos'));
  }
  window.addEventListener('resize', () => posTrackers.forEach(f => f()), { passive: true });

  /* ---------------- results sliders ---------------- */
  const prettyCaption = (c, client) => {
    let s = c.replace(/\s+\d+$/, '').replace(/\s+(k|ke|key|keyw|keywo|keywor|keyword|keywords)$/i, '').replace(/\s+(the\s+)?keyword$/i, '').trim();
    if (client) { const cl = client.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (s.toLowerCase().startsWith(cl)) s = s.slice(cl.length).trim(); }
    s = s.replace(/^(breast and body uk|breast and body clinic|dr darriyl hodgkinson|hand & wrist surgery uk|mr manaf khatib plastic surgery)\s*/i, '');
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
    // the SEO service tab shows a taste: the first few UK screenshots from each engine
    const pick = (sec, n) => Object.keys(data[sec]).flatMap(g => data[sec][g].filter(i => i.uk).slice(0, 2)).slice(0, n);
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
    lb.classList.remove('is-open', 'is-image', 'has-set', 'is-zoomed');
    lbFrame.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.isConnected) lastFocused.focus();
    lastFocused = null;
  };
  // video buttons are both static and generated, so delegate on the document
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-video]'); if (!b) return;
    lastFocused = b;
    openLightbox(
      `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`,
      false, 'Video');
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
    lb.classList.remove('is-zoomed');
    lb.classList.toggle('has-set', n > 1);
    // a full-page website screenshot fitted to the viewport is an unreadable
    // strip, so anything much taller than it is wide opens already zoomed
    const im = lbFrame.querySelector('img');
    const autoZoom = () => { if (im.naturalHeight > im.naturalWidth * 1.6) lb.classList.add('is-zoomed'); };
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
