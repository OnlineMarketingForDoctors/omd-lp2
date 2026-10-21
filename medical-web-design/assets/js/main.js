/* OMD Medical Web Design landing page behaviour (built on the /medical-seo/ and /google-ads/ scripts) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ---------------- data: case studies (what the website changed) ----------------
     UK clinics first. The Crown Clinic and ArthritisCARE carry the before and
     after analytics screenshots. A shot is [image, caption, full-size image, 'fit'] */
  const C = 'assets/cases/', WS = 'assets/work/websites/';
  const CASES = [
    {
      id: 'bfc', name: 'British Face Clinic', logo: 'assets/client-logos/british_face_clinic_logo.webp', uk: true,
      place: 'Harley Street, Milton Keynes and Northampton', specialty: 'Facial cosmetic surgery', months: '12 months',
      title: 'A completely renovated website, and a 5.08x return on the practice\'s marketing.',
      hero: { n: '5.08x', t: 'return on investment in 12 months' },
      stats: [['300%', 'increase in conversions'], ['106%', 'increase in organic traffic'], ['1,012%', 'growth in keyword rankings']],
      situation: 'Mr Mrinal Supriya operates across London, Milton Keynes and Northampton. The clinic was known for deep plane facelift and rhinoplasty in the profession, but its website looked dated and was almost invisible for those procedures on Google.',
      did: ['Renovated the website from top to bottom, with a fresher, more premium look for a Harley Street facial surgeon', 'Long-form pages for deep plane facelift, rhinoplasty and blepharoplasty, written from real patient searches', 'Location content for London, Milton Keynes and Northampton, matched to three restructured Google Business Profiles', 'On-page rebuild: unique titles, headings and descriptions on every page'],
      shots: [[WS + 'british-face-clinic--top.webp', 'The new British Face Clinic homepage', WS + 'british-face-clinic--full.webp'], [C + 'bfc-deep-plane-facelift-page--top.webp', 'The deep plane facelift page', C + 'bfc-deep-plane-facelift-page--full.webp'], [C + 'british-face-clinic-ga4-yoy-results-by-omd.webp', 'Website users and key events, year on year, in Google Analytics']],
      portrait: C + 'bfc-supriya.webp',
      quote: 'OMD completely renovated our website and gave it a much fresher look. They have also helped us with our SEO and with our paid Google campaign and we have seen significant increase in our organic traffic which has grown by around 150%.',
      who: 'Mr Mrinal Supriya', role: 'Facial Cosmetic Surgeon, British Face Clinic',
      link: 'https://onlinemarketingfordoctors.com/casestudy/british-face-clinic/'
    },
    {
      id: 'delta', name: 'Delta Clinics', logo: 'assets/client-logos/delta-clinics-logo.webp', uk: true,
      place: 'Harley Street and Finchley, London', specialty: 'Plastic surgery', months: '8 months',
      title: 'A totally new website for a newly opened Harley Street clinic, and a 730% rise in enquiries.',
      hero: { n: '730%', t: 'more patient enquiries in 8 months' },
      stats: [['1,500%', 'increase in website traffic'], ['540%', 'increase in keyword rankings'], ['2', 'clinic locations, each with its own Google profile']],
      situation: 'Mr Hazem Alfie brought twenty years as a consultant plastic surgeon to a newly opened clinic with no proper website, procedure pages too thin to rank, and two Google listings competing with each other.',
      did: ['Designed and wrote a totally new website for the clinic', 'Long-form pages for tummy tuck, breast enlargement and labiaplasty, with diagrams and video', 'Rebuilt the Harley Street and Finchley Google Business Profiles so they stopped competing', 'Website, SEO and social media now run by one designated OMD team'],
      shots: [[WS + 'delta-clinics--top.webp', 'The new Delta Clinics homepage', WS + 'delta-clinics--full.webp'], [C + 'delta-contact-page--top.webp', 'The contact page', C + 'delta-contact-page--full.webp']],
      portrait: C + 'delta-alfie.webp',
      quote: 'Currently they are managing our website, they have designed a totally new website, they have also been doing our SEO and I\'ve seen great results with the SEO. I have seen an increase of almost 730% in the total number of leads or inquiries that come to the clinic.',
      who: 'Mr Hazem Alfie', role: 'Consultant Plastic Surgeon, Delta Clinics',
      link: 'https://onlinemarketingfordoctors.com/casestudy/delta-clinics/'
    },
    {
      id: 'bbc', name: 'Breast and Body Clinic UK', logo: 'assets/client-logos/bb-clinic-uk-logo.webp', uk: true,
      place: 'Manchester', specialty: 'Plastic surgery', months: '18 months',
      title: 'A redesigned website, and 618% more website conversions than the year before.',
      hero: { n: '618%', t: 'more website conversions, year on year' },
      stats: [['300 to 4,270', 'search impressions a day'], ['1,068%', 'increase in total website traffic'], ['800%', 'more enquiries from organic search']],
      situation: 'Mr Aftab Siddiqui was competing in Manchester against clinics with years of history online. The website had thin, copied content, 300 impressions a day, and no first-page rankings for the procedures the practice is built on.',
      did: ['Redesigned the website and rewrote the procedure pages for tummy tuck, breast augmentation, breast reduction and mummy makeover', 'Built in lead magnets, patient testimonials and a regular blog', 'A CRM so every website enquiry is tracked and followed up', 'Keyword research across every important Manchester suburb, mapped page by page'],
      shots: [[WS + 'breast-and-body-clinic-uk--top.webp', 'The new Breast and Body Clinic homepage', WS + 'breast-and-body-clinic-uk--full.webp'], [C + 'breast-and-body-uk-traffic-over-6000.webp', 'Website traffic growth', '', 'fit'], [C + 'bbc-breast-augmentation-page--top.webp', 'The breast augmentation page', C + 'bbc-breast-augmentation-page--full.webp']],
      portrait: C + 'bbc-siddiqui.webp',
      quote: 'My website has been redesigned, I have lead magnets such as interesting eBooks, client testimonials, fantastic blogs, detailed new content and they set up a CRM which enables me to track and monitor how my website performs.',
      who: 'Mr Aftab Siddiqui', role: 'Plastic Surgeon, Breast and Body Clinic UK',
      link: 'https://onlinemarketingfordoctors.com/case-study/breast-and-body-clinic-uk/'
    },
    {
      id: 'hr', name: 'HR Plastic Surgery', logo: 'assets/client-logos/hr-plastic-surgery-logo.webp', uk: true,
      place: 'London and Hertfordshire', specialty: 'Plastic surgery', months: '18 months',
      title: 'An entire website overhauled around one procedure, and 16,000 visitors a month.',
      hero: { n: '400%', t: 'more conversions across all traffic channels' },
      stats: [['2,098%', 'increase in organic traffic'], ['107%', 'higher conversion rate on the new procedure pages'], ['16,000', 'monthly website visitors']],
      situation: 'Mr Hyder Ridha had barely marketed the practice while competing London clinics had been investing for a decade. The website had duplicated content, no local presence for its Hertfordshire clinics, and minimal traffic.',
      did: ['Overhauled the entire website, repositioning the practice as the go-to mummy makeover expert', 'Rewrote every thin or duplicated page, and added dedicated pages for each priority procedure', 'Local pages and Google Business Profiles for Harpenden, Hitchin and Hatfield', 'Ebook lead magnets with email follow-up for visitors who are not ready to book yet'],
      shots: [[WS + 'hr-plastic-surgery--top.webp', 'The new HR Plastic Surgery homepage', WS + 'hr-plastic-surgery--full.webp'], [C + 'hr-plastic-surgery-traffic-over-16000-visitors.webp', 'Over 16,000 website visitors a month', '', 'fit'], [C + 'hr-landing-page.webp', 'The breast augmentation page']],
      portrait: C + 'hr-ridha.webp',
      quote: 'OMD devised a comprehensive plan to overhaul my entire website, repositioning it as the go-to Mummy Makeover expert. In comparison to the initial state of my website, OMD not only met but exceeded my expectations.',
      who: 'Mr Hyder Ridha', role: 'Plastic Surgeon, HR Plastic Surgery',
      link: 'https://onlinemarketingfordoctors.com/case-study/hr-plastic-surgery/'
    },
    {
      id: 'crown', name: 'The Crown Clinic', logo: 'assets/client-logos/the-crown-clinic-logo.webp', uk: false,
      place: 'Sydney, Australia', specialty: 'Hair transplant', months: '6 months',
      title: 'A new website, an 88% lower bounce rate, and 467% more enquiries.',
      hero: { n: '467%', t: 'more enquiries after the new website' },
      stats: [['-87.94%', 'organic bounce rate'], ['5.16% to 19.89%', 'organic conversion rate'], ['906.99%', 'more goal completions, March to August 2020']],
      situation: 'A well-regarded Sydney hair transplant clinic being outranked and outsold by newer competitors who marketed harder. The old website had a high bounce rate, and most of the visitors it did get left without enquiring.',
      did: ['A new website built for conversion, with the consultation as the one obvious next step on every page', 'On-site SEO best practice across every page: unique titles, headings, descriptions and faster load times', 'Conversion fixes that cut the organic bounce rate by 88% and nearly quadrupled the organic conversion rate', 'A local reviews programme on the Google Business Profile, and top rankings for hair transplant Sydney'],
      shots: [[WS + 'crown-clinic--top.webp', 'The FUE hair transplant page, Sydney', WS + 'crown-clinic--full.webp'], [C + 'crown-bounce-conversion.webp', 'Organic bounce rate down 87.94%, conversion rate up 285.09%', '', 'fit'], [C + 'crown-enquiries.webp', '467.54% increase in the number of enquiries', '', 'fit']],
      portrait: C + 'james-nadin.webp',
      quote: 'Enquiries have gone crazy, the number of enquiries has increased by three folds ever since they started. They are very thorough and results driven with their work.',
      who: 'James Nadin', role: 'CEO, ICCM and The Crown Clinic',
      link: 'https://onlinemarketingfordoctors.com/case-study-crown-clinic/'
    },
    {
      id: 'arthritiscare', name: 'ArthritisCARE', logo: '', uk: false, kind: 'evidence', meta: '12 months',
      place: 'Brisbane, Australia', specialty: 'Rheumatology',
      title: 'Website conversion rate up from 1.94% to 4.97%, and eight times the goal completions.',
      hero: { n: '259.95%', t: 'more website users, year on year' },
      stats: [['1.94% to 4.97%', 'website conversion rate, year on year'], ['207 to 1,735', 'goal completions, year on year'], ['192.25%', 'more organic users in six months']],
      evidence: ['Website users up 259.95% year on year, from 7,568 to 27,241', 'Website conversion rate up from 1.94% to 4.97%, and goal completions up from 207 to 1,735', 'Organic search users up 281.39%, with the organic conversion rate up from 1.94% to 4.91%', 'Organic users up a further 192.25% across six months of 2021'],
      shots: [[WS + 'arthritiscare--top.webp', 'The new ArthritisCARE homepage', WS + 'arthritiscare--full.webp'], [C + 'arthritiscare-conversion-rate.webp', 'Year on year: conversion rate 1.94% to 4.97%, goal completions 207 to 1,735', '', 'fit'], [C + 'arthritiscare-organic-6-months.webp', 'Organic users up 192.25% in six months', '', 'fit']],
      portrait: ''
    }
  ];

  /* ---------------- data: the website portfolio ----------------
     each card shows the first screen; tapping opens the whole page.
     UK websites lead each group, then everywhere else */
  // thumb is the first screen at 960px wide; thumbSm is the same at 640px for phones
  const W = (f, client, caption) => ({ thumb: `${WS}${f}--top.webp`, thumbSm: `${WS}${f}--top-640.webp`, file: `${WS}${f}--full.webp`, client, caption });
  const WEBSITES = {
    "Plastic Surgeons": [
      W('breast-and-body-clinic-uk', 'Breast and Body Clinic UK', 'Mummy makeover and cosmetic surgery, Manchester, Chester and Preston'),
      W('british-face-clinic', 'British Face Clinic', 'Facial cosmetic surgery, London, Milton Keynes and Northampton'),
      W('cambridge-clear-beauty', 'Cambridge Clear Beauty', 'Cosmetic surgery and aesthetic treatments, Cambridge'),
      W('capsco', 'CAPSCO', 'Consortium of aesthetic plastic surgery clinic owners, UK'),
      W('delta-clinics', 'Delta Clinics', 'Cosmetic and plastic surgery, London'),
      W('hr-plastic-surgery', 'HR Plastic Surgery', 'Breast, body and face plastic surgery, Hertfordshire'),
      W('mr-manaf-khatib-plastic-surgery', 'Mr Manaf Khatib', 'Aesthetic and reconstructive plastic surgery, London and Hertfordshire'),
      W('mr-roshan-vijayan', 'Mr Roshan Vijayan', 'Aesthetic and body contouring surgery, Hertfordshire'),
      W('ullas-plastic-surgery', 'Ullas Facial Plastic Surgery', 'Facial plastic and reconstructive surgery, Manchester'),
      W('the-hanson-clinic', 'The Hanson Clinic', 'Plastic and aesthetic surgery with Mr Richard Hanson, Dublin'),
      W('beyond-aesthetics', 'Beyond Aesthetics', 'Plastic and cosmetic surgery, Sydney'),
      W('clinica-pogany', 'Centrul Medical Pogany', 'Aesthetic and post-bariatric plastic surgery, Romania'),
      W('dr-jay-plastic-surgery', 'Doctor Jay Plastic Surgery', 'Facial plastic surgery, Bangkok'),
      W('pcls-coffs-harbour', 'Dr Chandran Arianayagam', 'Plastic, cosmetic and laser surgery, Coffs Harbour'),
      W('dr-joseph-luo', 'Dr Joseph Luo', 'Plastic, reconstructive and aesthetic surgery, Perth'),
      W('dr-queenie-chan', 'Dr Queenie Chan', 'Plastic and reconstructive surgery, Albury'),
      W('the-bougainvillea-clinique', 'The Bougainvillea Clinique', 'Plastic surgery and medical day spa, Winter Park, Florida'),
      W('west-coast-plastic-surgery', 'West Coast Plastic Surgery', 'Plastic surgery with Dr Qadir Khan, West Perth'),
      W('white-hill-clinic', 'White Hill Clinic', 'Cosmetic surgery, hair and skin, Double Bay, Sydney')
    ],
    "Cosmetic Clinics": [
      W('aesthetic-lane', 'Aesthetic Lane', 'Cosmetic aesthetics clinic, Black Rock, Melbourne'),
      W('better-look', 'Better Look', 'Doctor-led cosmetic injectables and skin treatments, Deepdene, Melbourne'),
      W('dermal-skin-laundry', 'Dermal Skin Laundry', 'Skin needling and non-surgical skin treatments, Epping, Melbourne'),
      W("dr-reddy-sankeerth", "Dr Sankeerth Reddy", "Aesthetic medicine and men's health, Singapore"),
      W('ellysium-aesthetics', 'Ellysium Aesthetics', 'Non-surgical aesthetics and hair restoration, Iluka, Perth'),
      W('gardenia-skin-co', 'Gardenia Skin Co', 'Cosmetic skin and anti-ageing treatments, Sydney'),
      W('jade-cosmetic-clinic', 'Jade Cosmetic Clinic', 'Cosmetic injectables and skin rejuvenation, Cairns and Brisbane'),
      W('my-cosmetic-clinic', 'My Cosmetic Clinic', 'Cosmetic injectables and surgery, Sydney and NSW'),
      W('prophile-clinics', 'Prophile Clinics', 'Non-surgical aesthetic treatments, Gold Coast and Brisbane'),
      W('queensland-skin-and-laser', 'Queensland Skin & Laser', 'Cosmetic skin and laser clinic, Brisbane'),
      W('shire-aesthetics', 'Shire Cosmetic Medicine', 'Non-surgical cosmetic and vein clinic, Miranda, Sydney')
    ],
    Ophthalmologists: [
      W('the-harley-street-eye-centre', 'The Harley Street Eye Centre', 'Laser, lens and corneal eye surgery, Harley Street'),
      W('the-vision-surgeon-uk', 'The Vision Surgeon', 'Laser eye, lens and cataract surgery, Colchester'),
      W('ashford-advanced-eye-care', 'Ashford Advanced Eye Care', 'Laser vision correction and cataract surgery, Adelaide'),
      W('canterbury-eye-specialists', 'Canterbury Eye Specialists', 'Ophthalmologists and cataract surgery, Canterbury, Melbourne'),
      W('heidelberg-eye-clinic', 'Heidelberg Eye Clinic', 'Cataract, glaucoma and retinal eye care, Heidelberg, Melbourne'),
      W('vision-clinic-sydney', 'Vision Clinic Sydney', 'Laser vision correction and cataract surgery, Sydney')
    ],
    "Hair Transplant Clinics": [
      W('fortes-clinic', 'Fortes Clinic', 'FUE hair transplant clinic, Little Venice, London'),
      W('tajmeel-clinic', 'Tajmeel Clinic', 'Hair transplants and hair loss treatment, Bournemouth'),
      W('atlantis-medical', 'Atlantis Medical', 'Hair transplant surgery, Malvern, Melbourne'),
      W('az-hair-restoration', 'AZ Hair Restoration', 'Doctor-led hair transplant clinic, Raleigh, North Carolina'),
      W('hair-transplant-medical-centre', 'Hair Transplant Medical Centre', 'Hair transplant surgery, Toronto, Mississauga and Oakville'),
      W('imami-hair-restoration', 'Imami Hair Restoration', 'Hair transplant surgery with Dr Imami, Melbourne, Florida'),
      W('dr-malay-mehta', 'Malay Mehta Aesthetic Clinic', 'Hair transplant surgery with Dr Malay Mehta, Mumbai'),
      W('new-hair-clinic', 'New Hair Clinic', 'Hair transplant and hair loss treatment, Perth'),
      W('scalp-transformation', 'Scalp Transformation', 'Scalp micropigmentation, Sydney CBD'),
      W('crown-clinic', 'The Crown Clinic', 'Hair transplants, Sydney, Campbelltown and Melbourne')
    ],
    Dermatologists: [
      W('derma-cosmetika', 'Derma Cosmetika', 'Skin, face and body treatments, Camberwell, Melbourne'),
      W('hk-cosmetics', 'HK Cosmetics', 'Doctor-led cosmetic injectables and skin, Sans Souci, Sydney'),
      W('inside-out-dermatology', 'Inside Out Dermatology', 'Specialist dermatology for the whole family, Preston, Melbourne'),
      W('my-cosmetic-skincare', 'My Cosmetic Skincare', 'Online medical-grade skincare store, Sydney'),
      W('sinclair-dermatology', 'Sinclair Dermatology', 'Medical dermatology and clinical trials, East Melbourne')
    ],
    "Orthopaedic Surgeons": [
      W('dr-adrian-low', 'Dr Adrian Low', 'Shoulder, knee and trauma orthopaedic surgery, Sydney'),
      W('dr-robert-sew-hoy', 'Dr Robert Sew Hoy', 'Hip and knee surgery, North Sydney and Frenchs Forest'),
      W('moati-melbourne-othorpaethedic-trauma-institute', 'Melbourne Orthopaedic & Trauma Institute', 'Hip and knee surgery, Malvern and Werribee, Melbourne'),
      W('mid-north-coast-hip-knee-clinic', 'Mid North Coast Hip & Knee Clinic', 'Hip and knee surgery, Coffs Harbour and Sydney'),
      W('andrew-gong', 'Mr Andrew Gong', 'Orthopaedic surgery, Melbourne')
    ],
    "Hand Surgeons": [
      W('hand-wrist-surgery-uk', 'UK Hand & Wrist Surgery', 'Specialist hand and wrist surgery, Hatfield, Hertfordshire'),
      W('nsw-hand-surgery-association', 'NSW Hand Surgery Association', 'Professional association for hand surgeons, New South Wales')
    ],
    "Head & Neck Surgeons": [
      W('head2neck', 'Head2Neck', 'Head, neck and maxillofacial surgery, London and Hertfordshire')
    ],
    "General Surgeons": [
      W('dr-brad-bidwell-general-surgery', 'Dr Brad Bidwell', 'General, breast and colorectal surgery, Wangaratta')
    ],
    "Vasectomy Clinics": [
      W('dr-geoff-cashion', 'Dr Geoff Cashion', 'Vasectomy and patient referrals, Sydney'),
      W('gentle-procedures', 'Gentle Procedures Clinic', 'No-scalpel vasectomy, Sydney, Penrith and Narellan'),
      W('msi-vasectomy', 'MSI Australia', 'No-scalpel vasectomy clinics across Australia'),
      W('sydney-vasectomy-centre', 'Sydney Vasectomy Centre', 'No-scalpel vasectomy, Sydney'),
      W('the-cooper-clinic', 'The Cooper Clinic', 'Non-scalpel vasectomy, Auckland and North Island'),
      W('vasectomy-clinic-brisbane', 'Vasectomy Clinic Brisbane', 'No-scalpel vasectomy, The Gap, Brisbane')
    ],
    "Vein Clinics": [
      W('medi-vein', 'Medi Vein Centre', 'Varicose vein treatment, Sydney CBD and Balmain'),
      W('spier-veins', 'Spider Veins Australia', 'Spider vein treatment, Sydney CBD and Parramatta'),
      W('vein-health-clinics', 'Vein Health Clinics', 'Varicose vein treatment, Central Florida'),
      W('vein-hydration', 'Vein Hydration', 'IV hydration and vitamin drips, Central Florida')
    ],
    Rheumatologists: [
      W('arthritiscare', 'arthritisCARE', 'Rheumatology for arthritis and joint pain, Brisbane'),
      W('fnq-rheumatology', 'FNQ Rheumatology', 'Rheumatology and joint pain care, Cairns'),
      W("rheumatology-com-au", "Rheumatology.com.au", "arthritisCARE's rheumatology website, Dutton Park, Brisbane")
    ],
    "Dental & Periodontal Clinics": [
      W('kiama-dental-specialists', 'Kiama Dental Specialists', 'Professor-led periodontal care, Kiama'),
      W('smile-specialists-suite', 'Smile Specialists Suite', 'Specialist periodontics and dental implants, Neutral Bay, Newcastle and Kiama'),
      W('the-dentist', 'The Dentist at 70 Pitt Street', 'General and cosmetic dentistry, Sydney CBD')
    ],
    "Chiropractic & Physiotherapy": [
      W('adjusted', 'Adjusted Chiropractic Studios', 'Chiropractic care, Sydney CBD'),
      W('infinity-allied-care', 'Infinity Allied Healthcare', 'Physiotherapy and allied health, Sydney'),
      W('platinum-chiropractic-erina', 'Platinum Chiropractic Erina', 'Chiropractic care, Erina, Central Coast NSW')
    ],
    "Mental Health Clinics": [
      W("save-minds", "Save Minds", "Consultant-led ketamine therapy, St John's Wood, London"),
      W('mindful-space', 'Mindful Space', 'Online ADHD and autism assessments, Ireland')
    ],
    "GP & Medical Centres": [
      W("mansmatters", "MansMatters", "Non-invasive men's health clinic, Knightsbridge and Richmond"),
      W('balmoral-medical-practice', 'Balmoral Medical Practice', 'General practice for families, Mosman, Sydney'),
      W('connectgene', 'ConnectGene', 'Personalised cancer care and genomic testing, Hong Kong'),
      W('cg-genomics-oncology', 'ConnectGene Genomics Oncology', 'Genomic testing for cancer, Hong Kong'),
      W('cura-specialists', 'CURA Medical Specialists', 'Neurology specialists, Drummoyne, Sydney'),
      W('dr-tony-kodsi', 'Dr Tony Kodsi', 'Pain medicine specialist, Macquarie Park, Sydney'),
      W('hearty-center', 'Hearty Center', 'Cancer wellness retreat, Katoomba, Blue Mountains'),
      W('lotus-medics', 'Lotus Medics', 'Gynaecology and obstetrics, Orange, Bathurst and Parkes'),
      W('new-albion-medical-centre', 'New Albion Medical Centre', 'Family GP practice, Albion Park NSW'),
      W('night-lite-pediatrics', 'Night Lite Pediatrics', 'Paediatric urgent care, Florida'),
      W('observatory-tower-medical-centre', 'Observatory Tower Medical Centre', 'GP and executive health clinic, Sydney CBD'),
      W('southern-allergy', 'Southern Allergy', 'Allergy care for children and adults, Melbourne'),
      W('st-leonards-medical-clinic', 'St Leonards Medical Clinic', 'General practice, St Leonards, Sydney')
    ]
  };

  /* the browser in the hero scrolls through these, top to bottom */
  const HERO_SITES = [
    { f: 'breast-and-body-clinic-uk', name: 'Breast and Body Clinic UK', place: 'Manchester', url: 'breastandbody.co.uk' },
    { f: 'delta-clinics', name: 'Delta Clinics', place: 'Harley Street', url: 'deltaclinics.co.uk' },
    { f: 'hr-plastic-surgery', name: 'HR Plastic Surgery', place: 'London and Hertfordshire', url: 'hrplasticsurgery.com' },
    { f: 'british-face-clinic', name: 'British Face Clinic', place: 'Harley Street', url: 'britishfaceclinic.com' },
    { f: 'the-harley-street-eye-centre', name: 'The Harley Street Eye Centre', place: 'Harley Street', url: 'theharleystreeteyecentre.com' }
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

  /* ---------------- hero browser ----------------
     each website scrolls from header to footer, then the next one fades in.
     It only runs while the hero is on screen, and not at all for visitors who
     ask for reduced motion (they get the first screen and the dots) */
  const hvScreen = $('#hvScreen'), hvUrl = $('#hvUrl'), hvName = $('#hvName'), hvDots = $('#hvDots');
  if (hvScreen) {
    let hvIdx = 0, hvTimer = 0;
    hvDots.innerHTML = HERO_SITES.map((s, i) => `<button type="button" aria-label="Show the ${esc(s.name)} website"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('');
    const measure = (img) => {
      const shift = Math.max(0, img.getBoundingClientRect().height - hvScreen.clientHeight);
      img.style.setProperty('--shift', shift + 'px');
      // about 260px a second at desktop size, so a long page takes longer
      img.style.setProperty('--dur', Math.min(26, Math.max(12, shift / 260)) + 's');
    };
    const start = (img) => {
      measure(img);
      if (reduced) return;
      img.classList.add('is-scrolling');
      img.addEventListener('animationend', () => { hvTimer = setTimeout(() => show(hvIdx + 1), 1400); }, { once: true });
    };
    const show = (i) => {
      clearTimeout(hvTimer);
      hvIdx = (i + HERO_SITES.length) % HERO_SITES.length;
      const s = HERO_SITES[hvIdx], old = $('img', hvScreen);
      const img = new Image();
      img.alt = `The ${s.name} website, designed by OMD`;
      img.className = 'is-out';
      img.onload = () => {
        hvScreen.append(img);
        requestAnimationFrame(() => img.classList.remove('is-out'));
        setTimeout(() => { if (old && old !== img) old.remove(); }, 650);
        hvUrl.textContent = s.url;
        hvName.innerHTML = `<b>${esc(s.name)}</b> &middot; ${esc(s.place)}`;
        $$('button', hvDots).forEach((d, k) => { if (k === hvIdx) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
        start(img);
      };
      img.src = `${WS}${s.f}--hero.webp`;
    };
    hvDots.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      show($$('button', hvDots).indexOf(b));
    });
    const first = $('img', hvScreen);
    if (first.complete && first.naturalWidth) start(first); else first.addEventListener('load', () => start(first), { once: true });
    window.addEventListener('resize', () => { const img = $('img', hvScreen); if (img) measure(img); }, { passive: true });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => hvScreen.style.setProperty('--play', e.isIntersecting ? 'running' : 'paused')).observe(hvScreen);
    }
  }

  const CLIENTS = [
    ['british_face_clinic_logo.webp', 'British Face Clinic'],
    ['delta-clinics-logo.webp', 'Delta Clinics'],
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
    ['the-crown-clinic-logo.webp', 'The Crown Clinic'],
    ['vein-doctors-sydney-logo.webp', 'Vein Doctors Sydney'],
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
  // prefixes, suffixes and fixed decimals come from the markup; whole numbers keep the en-GB separators
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
  const ORDER = [...Object.keys(WEBSITES), 'Plastic Surgeons', 'Hair Transplant Clinics', 'Aesthetic Clinics', 'Ophthalmologists', "Men's & Women's Health", 'Head & Neck Surgery', 'Vein Clinics', 'Vasectomy Clinics', 'Orthopaedic Surgeons', 'Rheumatologists', 'Dentists', 'Mental Health Clinics', 'Chiropractors', "Women's Health", 'Neurology', 'Physiotherapy'];
  // website captions are written by hand above; the SEO and AI captions come from
  // the screenshot file names (as on /medical-seo/), so they are tidied first
  const handCaption = (c) => c;
  const fileCaption = (c, client) => {
    let s = c.replace(/\s+\d+$/, '').replace(/\s+(k|ke|key|keyw|keywo|keywor|keyword|keywords)$/i, '').replace(/\s+(the\s+)?keyword$/i, '').trim();
    if (client) { const cl = client.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (s.toLowerCase().startsWith(cl)) s = s.slice(cl.length).trim(); }
    s = s.replace(/\bgmb\b/gi, 'Google Business Profile').replace(/\badn\b/gi, 'and').replace(/\bai google search results\b/gi, 'Google AI search results').replace(/\bchatgpt\b/gi, 'ChatGPT').replace(/\bgoogle\b/g, 'Google').replace(/\bmaps\b/g, 'Maps').replace(/\bfue\b/gi, 'FUE').replace(/\bled\b/gi, 'LED').replace(/\brf\b/gi, 'RF');
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const buildSlider = (data, tabsEl, slidesEl, posEl, prettyCaption) => {
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
            <img src="${esc(it.thumb || it.file)}"${it.thumbSm ? ` srcset="${esc(it.thumbSm)} 640w, ${esc(it.thumb)} 960w" sizes="(max-width: 860px) 78vw, 520px" width="960" height="600"` : ''} decoding="async" alt="${esc(it.client)}: ${esc(prettyCaption(it.caption, it.client))}" loading="lazy">
            <span class="zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M11 8.6v4.8M8.6 11h4.8"/></svg></span>
          </button>
          <figcaption class="meta"><b>${esc(it.client)}</b><span>${esc(prettyCaption(it.caption, it.client))}</span></figcaption>
        </figure>`).join('');
      slidesEl.scrollTo({ left: 0 });
      updatePos();
    };
    const updatePos = () => {
      const items = $$('.slide', slidesEl); if (!items.length) { posEl.textContent = ''; return; }
      // a slider can run in more than one row (the portfolio runs in two), so
      // count by column and show the range of cards on screen
      const w = items[0].getBoundingClientRect().width + 18, n = items.length;
      const rows = getComputedStyle(slidesEl).display === 'grid' ? getComputedStyle(slidesEl).gridTemplateRows.split(' ').length : 1;
      const col = Math.round(slidesEl.scrollLeft / w), cols = Math.max(1, Math.round((slidesEl.clientWidth + 18) / w));
      const first = Math.min(n, col * rows + 1), last = Math.min(n, (col + cols) * rows);
      posEl.textContent = last > first ? `${first}\u2013${last} / ${n}` : `${first} / ${n}`;
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
  buildSlider(WEBSITES, $('#webTabs'), $('#webSlides'), $('#webPos'), handCaption);
  fetch('assets/results/index.json').then(r => r.json()).then(data => {
    buildSlider(data.seo, $('#seoTabs'), $('#seoSlides'), $('#seoPos'), fileCaption);
    buildSlider(data.ai, $('#aiTabs'), $('#aiSlides'), $('#aiPos'), fileCaption);
  }).catch(() => {
    $('#seoSlides').innerHTML = '<p class="muted">Results are loading slowly. Please refresh the page.</p>';
  });
  $$('[data-prev],[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = $('#' + (btn.dataset.prev || btn.dataset.next));
      const first = $('.slide', el); if (!first) return;
      // the two-row portfolio pages by a whole screen of four; single rows move one card
      const w = getComputedStyle(el).display === 'grid' ? el.clientWidth + 18 : first.getBoundingClientRect().width + 18;
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
          ${c.kind === 'evidence' ? `
          <div class="cs-body">
            <h4>What the analytics show</h4>
            <ul>${c.evidence.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
          </div>
          <p class="cs-note">Every figure above is read straight from the clinic's analytics and search screenshots, which you can open full size, next to the website we built.</p>
          ` : `
          <div class="cs-body">
            <h4>The situation</h4><p>${c.situation}</p>
            <h4>What we did</h4><ul>${c.did.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <blockquote class="cs-quote">
            <p>"${c.quote}"</p>
            <div class="q-who">${c.portrait ? `<img src="${c.portrait}" alt="" loading="lazy">` : ''}<div><b>${c.who}</b><small>${c.role}</small></div></div>
          </blockquote>
          ${c.link ? `<a class="cs-link" href="${c.link}" target="_blank" rel="noopener">Read the full case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></a>` : ''}
          `}
        </div>
        <div class="cs-shots">
          ${c.shots.map((s, k) => `<figure class="shot-card s${k + 1}${s[3] === 'fit' ? ' is-fit' : ''}"><button class="shot-zoom" type="button" data-zoom="${esc(s[2] || s[0])}" data-client="${esc(c.name)}" data-cap="${esc(s[1])}" aria-label="Enlarge screenshot: ${esc(c.name)}, ${esc(s[1])}"><img src="${esc(s[0])}" alt="${esc(s[1])}" loading="lazy"></button><figcaption>${esc(s[1])}</figcaption></figure>`).join('')}
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
  $$('#webSlides, #seoSlides, #aiSlides, #csPanels').forEach(container => container.addEventListener('click', (e) => {
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
