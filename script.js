/**
 * MicBioMate Platform Core Logic
 * - Internationalization (EN, DE, IT)
 * - Passwordless Onboarding (Magic Link / SSO)
 * - Interactive B2B Form Validation & Lead Generation
 */

const LANG_STORAGE_KEY = 'micbiomate-lang';

const LOCALE_CONFIG = {
  en: { fontScale: 1.0, tracking: '-0.02em', paddingMultiplier: 1.0 },
  de: { fontScale: 0.92, tracking: '-0.03em', paddingMultiplier: 1.15 },
  it: { fontScale: 0.98, tracking: '-0.02em', paddingMultiplier: 1.05 }
};

const I18N = {
  en: {
    nav_home: 'Home',
    nav_product: 'Product',
    nav_tech: 'Technology',
    nav_app: 'Application',
    nav_contact: 'Contact',
    hero_tag: '100% ANIMAL-FREE & INTACT',
    hero_title: 'Microbiological Biosynthesis of Intact Keratin',
    hero_desc: 'A revolutionary alternative to animal-derived proteins for premium cosmetics and regenerative medicine.',
    btn_tech: 'Learn about our technologies',
    btn_partner: 'Become a MicBioMate partner',
    products_title: 'OUR PRODUCTS',
    products_subtext: 'MicBioMate develops innovative keratins produced via biotechnology, without relying on animal or plant sources. Our solutions cater to the cosmetics industry, medical devices, and personalized medicine, combining high protein quality, production scalability, and a sustainable approach.',
    pcard1_sub: 'SKIN AND HAIR CARE',
    pcard1_desc: 'Third-generation biotechnological keratin for modern cosmetic formulas, featuring a preserved natural protein structure.',
    pcard2_sub: 'FOR MEDICAL DEVICES',
    pcard2_desc: 'Highly purified keratin for wound dressings, medical materials, and other biomedical applications.',
    pcard3_sub: 'FOR PERSONALIZED MEDICINE',
    pcard3_desc: 'Customizable protein solutions for regenerative medicine and modern drug delivery systems.',
    btn_read_more: 'Read more',
    home_tech_sub: 'MICBIOMATE IS A STARTUP THAT WILL PRODUCE HIGH-QUALITY THIRD GENERATION KERATINS.',
    tech_desc_1: 'Our core innovation lies in our ability to produce keratins that are entirely independent of animal resources (such as feathers, horns, and claws) and plant sources. This offers a customisable, scalable, and sustainable alternative to traditional methods.',
    tech_desc_2: 'Our mission is to revolutionise the cosmetic and biomedical industries by replacing animal-derived keratin and plant-based analogous proteins with our biotechnologically produced, vegan, and tailored keratins.',
    prod_title: 'Our distinct product lines include:',
    pline1_desc: 'Designed for cosmetics, specifically for skin and hair care formulations.',
    pline2_desc: 'Tailored for medical applications, including but not limited to advanced first-aid bandages and transdermal drug delivery systems.',
    pline3_desc: 'Our specialised platform for developing highly customisable, person-specific treatments, initially focusing on targeted drug delivery.',
    table_features: 'Features',
    table_usage: 'Usage',
    table_usage_1: 'Skin- and hair-care cosmetics',
    table_usage_2: 'Medical applications',
    table_usage_3: 'Person-specific treatments',
    tech_title: 'ANALYSIS OF MARKET PAIN POINTS',
    tech_sub: 'Traditional methods of keratin production are limited by outdated technologies. Here are the key challenges facing modern industries.',
    card1_title: 'ETHICAL INSTABILITY',
    card1_desc: '100% reliance on animal-derived raw materials (feathers, horns) creates ethical risks and threats to supply stability for premium beauty brands.',
    card2_title: 'ECONOMIC INEFFICIENCY',
    card2_desc: "Traditional acid extraction requires enormous energy consumption, accounting for up to 30% of the final product's production cost.",
    card3_title: 'LOST PROTEIN STRUCTURE',
    card3_desc: 'Industrial processing leads to denaturation, transforming valuable raw material into an ineffective hydrolysate with a disrupted tertiary structure.',
    bio_title: 'BIOPRODUCTION OF KERATIN',
    bio_desc: 'The MicBioMate biosynthesis system utilizes a traditional fermentation technology based on the controlled production of human keratins. Our architecture eliminates the use of animal-derived raw materials, replacing them with optimized microbial strains featuring a specific molecular profile.',
    arch_title: 'BIOSYNTHESIS ARCHITECTURE:',
    specs_title: 'Key technical specifications:',
    spec1_label: 'Assembly accuracy:',
    spec1_val: '99.5% (secondary structure verification)',
    spec2_label: 'Expression type:',
    spec2_val: 'Alpha-helical dimer (40-60 kDa)',
    spec3_label: 'Customization:',
    spec3_val: 'Optimized customized keratins.',
    table_title: 'Comparative specifications',
    th_module: 'Module ID',
    th_nom: 'Nomenclature',
    th_mass: 'Mass (kDa)',
    th_app: 'Application',
    td_app_1: 'Cosmetics industry',
    td_app_2: 'Clinical regeneration',
    td_app_3: 'Advanced Therapeutics',
    process_title: 'Technological process.',
    step_design: 'DESIGN',
    step_ferm: 'FERMENTATION',
    step_extract: 'EXTRACTION',
    step_purify: 'PURIFICATION',
    step_quality: 'QUALITY',
    prod_hero_tag: 'THIRD-GENERATION KERATIN',
    prod_hero_sub: 'SKIN AND HAIR CARE',
    prod_hero_desc: 'Third-generation biotechnological keratin for modern cosmetic formulas, preserved natural protein structure.',
    btn_contact_us: 'Contact Us',
    key_adv_title: 'KEY ADVANTAGES',
    adv1_title: 'Restoration of structure',
    adv1_desc: 'Filling micro-cracks from the inside.',
    adv2_title: 'Moisture retention',
    adv2_desc: 'Protection against over-drying.',
    adv3_title: 'Smoothness and elasticity',
    adv3_desc: 'Silky texture without weighing hair down.',
    adv4_title: 'Protective barrier',
    adv4_desc: 'Resistance to external irritants.',
    fields_title: 'FIELDS AND APPLICATIONS',
    app1_title: 'SOLUTION FOR STRENGTHENING THE NAIL PLATE',
    app1_desc: 'Bioavailable raw material for treating brittleness and splitting, and for strengthening nail structure.',
    app2_title: 'KERATIN FOR HAIR STRUCTURE RESTORATION',
    app2_desc: 'Raw material for deep cortex restoration and hair color protection.',
    app3_title: 'ACTIVE INGREDIENT FOR ANTI-AGING AND FACIAL HYDRATION',
    app3_desc: "A hypoallergenic ingredient for lifting and strengthening the skin's protective barrier.",
    app4_title: 'FIRMING INGREDIENT FOR BODY SKIN',
    app4_desc: 'An active ingredient to improve elasticity, combat flaking, and restore balance.',
    why_title: 'Why MicBioKeratin',
    why_desc: 'The answer lies in our unique production technology. We obtain hydrolyzed keratin with a molecular weight specifically tailored for maximum bioavailability. It is not merely an active ingredient; it is a biomimetic component that unerringly "recognizes" damaged areas of the cortex and epidermis, instantly integrating into the structure and restoring it from within. By choosing our raw material, you give your products a proven ability to work at the molecular level.',
    char_title: 'KEY CHARACTERISTICS',
    char_cat_label: 'Product Category',
    char_qual_label: 'Protein Quality',
    char_qual_val: 'High quality',
    char_app_label: 'Applications',
    char_app_val: 'Hair Care, Skin Care',
    char_scal_label: 'Scalability',
    char_scal_val: 'High protein scalability',
    char_meth_label: 'Production Method',
    char_meth_val: 'Production method',
    char_sust_label: 'Sustainability',
    char_sust_val: 'Sustainable biotechnology',
    cta_title: 'Interested in MicBioKeratin?',
    cta_desc: 'Contact our team to discuss your project or request a product sample.',
    btn_contact: 'Contact Our Team',
    med_hero_tag: 'THIRD-GENERATION KERATIN',
    med_hero_sub: 'FOR MEDICAL DEVICES',
    med_hero_desc: 'Highly purified keratin for wound dressings, medical materials, and other biomedical applications.',
    med_adv1_title: 'Pharmaceutical purity',
    med_adv1_desc: 'High purity, allergen-free.',
    med_adv2_title: 'Tissue regeneration',
    med_adv2_desc: 'Accelerates healing and regeneration.',
    med_adv3_title: 'High bioavailability',
    med_adv3_desc: 'Deep penetration into the dermis.',
    med_adv4_title: 'Formula stability',
    med_adv4_desc: 'Stable under any conditions.',
    med_app1_title: 'ACTIVE INGREDIENT FOR THERAPEUTIC OINTMENTS AND CREAMS',
    med_app1_desc: 'Raw material for products that accelerate the healing of skin micro-injuries and cracks.',
    med_app2_title: 'ACTIVE INGREDIENT FOR SOS PRODUCTS USED AFTER PEELS AND INJECTIONS',
    med_app2_desc: 'Stimulates follicle nourishment and scalp recovery in cases of alopecia.',
    med_app3_title: 'RAW MATERIALS FOR HAIR LOSS REMEDIES',
    med_app3_desc: "A hypoallergenic ingredient for lifting and strengthening the skin's protective barrier.",
    med_app4_title: 'BASE FOR SERUMS FOR NAIL DYSTROPHY',
    med_app4_desc: 'Bioavailable keratin for restoring the nail plate after fungal infections.',
    med_why_title: 'Why MicBioKeratinMED',
    med_why_desc: 'The answer lies in our medical-grade purification and precise molecular weight control. We obtain hydrolyzed keratin specifically tailored for maximum tissue bioavailability. It is a bio-compatible protein framework that targetedly integrates into damaged areas of the epidermis and dermis, accelerating cellular recovery. By choosing MediBioKeratin Med, you give your products a proven ability to repair and protect skin at the molecular level.',
    med_char_cat_label: 'Product Category',
    med_char_app_label: 'Medical Applications',
    med_char_purity_label: 'Purity',
    med_char_cust_label: 'Customization',
    med_char_meth_label: 'Production Method',
    med_char_scal_label: 'Scalability',
    med_cta_title: 'Interested in MicBioKeratinMED?',
    med_cta_desc: 'Contact our team to discuss your project or request a product sample.',
    plus_hero_tag: 'THIRD-GENERATION KERATIN',
    plus_hero_sub: 'FOR PERSONALIZED MEDICINE',
    plus_hero_desc: 'Customizable protein solutions for regenerative medicine and modern drug delivery systems.',
    plus_adv1_title: 'Maximum concentration',
    plus_adv1_desc: 'Higher active peptide density per dose.',
    plus_adv2_title: 'Targeted customization',
    plus_adv2_desc: 'Molecular profile tailored to a specific therapy.',
    plus_adv3_title: 'Peptide enrichment',
    plus_adv3_desc: 'Bio-peptide complex for deep tissue regeneration.',
    plus_adv4_title: 'Controlled delivery',
    plus_adv4_desc: 'Optimized for targeted drug delivery systems.',
    plus_app1_title: 'ACTIVE INGREDIENT FOR THERAPEUTIC OINTMENTS & CREAMS',
    plus_app1_desc: 'High-activity keratin for regenerative ointments, creams, and dermatological formulas.',
    plus_app2_title: 'SOS COMPONENT FOR POST-PEEL & INJECTION CARE',
    plus_app2_desc: 'Accelerates recovery of epidermis and dermis after peels, injections, and procedures.',
    plus_app3_title: 'BASE FOR TARGETED DRUG DELIVERY SYSTEMS',
    plus_app3_desc: 'A protein carrier platform for person-specific and transdermal drug delivery.',
    plus_app4_title: 'PLATFORM FOR PERSONALIZED REGENERATIVE TREATMENTS',
    plus_app4_desc: 'Customizable keratin matrices for regenerative medicine and individual protocols.',
    plus_why_title: 'Why MicBioKeratinMED-PLUS',
    plus_why_desc: 'This is a highly active ingredient based on native keratin and an enriched bio-peptide complex. The molecular profile is customized for maximum tissue bioavailability, so the protein integrates into damaged areas of the epidermis and dermis and supports deep regeneration. By choosing MicBioKeratinMED-PLUS, you give your products a platform for personalized medicine and modern drug delivery.',
    plus_char_cat_label: 'Product Category',
    plus_char_cat_val: 'Biotechnology',
    plus_char_name_label: 'Product Name',
    plus_char_purity_label: 'Purity',
    plus_char_purity_val: '100% Native Keratin',
    plus_char_formula_label: 'Active Formula',
    plus_char_formula_val: 'Enriched Bio-Peptide Complex',
    plus_char_meth_label: 'Production Method',
    plus_char_meth_val: 'Advanced Biomaterial Extraction',
    plus_char_app_label: 'Medical Applications',
    plus_char_app_val: 'Dermatology, Trichology & Podology',
    plus_char_bio_label: 'Biocompatibility',
    plus_char_bio_val: '100% Hypoallergenic',
    plus_char_supply_label: 'Supply Format',
    plus_char_supply_val: 'Active Ingredient',
    plus_cta_title: 'Interested in MicBioKeratinMED-PLUS?',
    plus_cta_desc: 'Contact our team to discuss your project or request a product sample.',
    partner_title: 'B2B PARTNER ACCESS',
    partner_subtitle: 'Automatic system for assigning domain email access rights',
    placeholder_email: 'Corporate Email',
    nda_text: "I confirm my agreement to the terms of the MicBioMate platform's NDA and Privacy Policy regarding access to trade secrets.",
    btn_send_link: 'Send Magic Link',
    team_title: 'THE TEAM',
    team_role_1: 'Chief Executive Officer<br>Industrial Biotechnologist<br>Entrepreneur',
    team_role_2: 'Chief Scientific Officer Keratin Engineer',
    team_role_3: 'Chief Financial Officer Financial & Market Expert',
    advisory_title: 'Advisory board',
    faq_title: 'FREQUENTLY ASKED QUESTIONS',
    faq_q1: 'WHAT IS KERATIN, AND WHY IS IT USED IN COSMETICS?',
    faq_a1: 'Keratin is a fibrous protein that serves as the primary building block for hair, nails, and skin. It is used in cosmetic products to help restore damaged hair, improve skin elasticity, and protect the skin barrier.',
    faq_q2: 'WHAT IS THE DIFFERENCE BETWEEN HYDROLYZED AND INTACT KERATIN?',
    faq_a2: 'Hydrolyzed keratin is broken down into small fragments using chemical treatments to more easily fit onto external hair structures or surface skin; intact keratin maintains its native structure and structural protein integrity, providing a durable, profound priming protein layer for supreme product.',
    faq_q3: 'HOW DOES KERATIN HELP WITH SKIN REGENERATION?',
    faq_a3: 'Intact keratin provides structural protein support and cell integrity, assisting in dermal repair and extracellular matrix formation. This protein helps with the extensive production of fine skin collagen and strengthening the protective skin barrier.',
    faq_q4: 'CAN KERATIN PRODUCTS BE USED ON SENSITIVE SKIN?',
    faq_a4: 'Yes, pure third-generation keratin is exceptionally skin-compatible and allergen-free, making it safe for sensitive skin and inflammatory conditions like atopic dermatitis or eczema. Always patch-test before applying or consulting your physician for severe conditions.',
    faq_q5: 'DO KERATIN PRODUCTS HAVE SIDE EFFECTS?',
    faq_a5: 'Pure third-generation keratin products are completely biocompatible and do not cause systemic side effects. Unlike animal-derived harsh chemical alternatives, bioengineered keratin preserves natural affinity to skin, minimizing irritation or structural damage and ensuring maximum safety.',
    faq_q6: 'IS THE PRODUCTION OF MICROBIAL KERATIN ECO-FRIENDLY?',
    faq_a6: 'Yes, the production of microbial keratin is entirely cruelty-free, sustainable, and dramatically reduces water consumption, carbon footprints, and environmental waste compared to traditional animal farming.',
    faq_q7: 'HOW DO YOU IDENTIFY HIGH-QUALITY KERATIN ON THE LABEL?',
    faq_a7: 'Look for terms like "bio-engineered third-generation keratin", high purity percentages (>95%), and explicit avoidance of animal-derived feathers or claws. True high-quality keratin ensures preserved secondary and tertiary structural integrity for optimal functional performance.',
    faq_q8: 'HOW CAN YOU SWITCH TO SUSTAINABLE HAIR CARE WITHOUT COMPROMISING PRODUCT EFFECTIVENESS?',
    faq_a8: 'To switch to sustainable hair care without sacrificing performance, look for products using advanced eco-friendly bio-synthesized keratin that matches animal-derived standards. Always verify eco-certifications and check professional feedback on environmental performance before making the full switch.',
    faq_q9: 'WHAT IS THE SPECIFIC BENEFIT OF USING BIOTECHNOLOGICAL PROTEINS IN DAILY MOISTURIZING CREAMS?',
    faq_a9: 'Biotechnological proteins form a breathable molecular film over the skin surface that locks in moisture and instantly smooths out fine lines. Unlike large animal-derived molecules, these peptides are synthesized from bioengineered yeast, ensuring absolute purity and zero allergic reactions.',
    faq_q10: 'WHICH INGREDIENTS SHOULD I LOOK FOR WHEN CARING FOR DAMAGED HAIR?',
    faq_a10: 'Focus on intact, bio-synthesized keratin instead of heavy hydrolyzed alternatives, as it allows deep penetration into the hair cortex to rebuild internal fibers. Complement with natural lipids to heal the cuticle and provide lasting protection.',
    faq_q11: 'IS BIOTECHNOLOGICAL KERATIN JUST AS EFFECTIVE?',
    faq_a11: 'Yes, biotechnological keratin is just as effective—and often more superior—to traditional animal-derived protein. Thanks to advanced synthetic biotechnology, its molecules perfectly replicate the structure of human hair, enabling it to penetrate deeper into damaged tissue and repair hair from within.',
    faq_google: 'Ask Google AI',
    reviews_title: 'REVIEWS ABOUT US',
    review_1_text: '“Switching to MicBioMate’s vegan keratin was a game-changer for our premium hair repair line. Traditionally, sourcing high-purity cruelty-free keratin was a logistical nightmare. MicBioMate provided us with a batch of MicBioKeratin that perfectly matched human protein structures. Our lab tests showed a 34% increase in hair cuticle restoration compared to old animal-derived alternatives. The technical brochure (TDS) was incredibly detailed, and the sample kit arrived within 3 days.”',
    review_2_text: '“In medical device manufacturing, regulatory compliance is everything. We integrated MicBioKeratinMED into our new biocompatible wound-dressing matrices. MicBioMate’s quality standards are exceptional — zero endotoxins and full compliance with ISO requirements. Their team provided immaculate documentation that helped us pass our clinical audit ahead of schedule. Highly recommend their professional expert support.”',
    review_3_text: '“We utilize the MicBioKeratinMED-PLUS platform for our personalized regenerative medicine projects. What truly sets MicBioMate apart is their digital ecosystem. The BioIntegrate API platform allowed our team to seamlessly bridge our laboratory information systems (LIMS) via GraphQL. Automated data acquisition and real-time expression tracking saved us months of manual reporting. Their documentation is flawless.”',
    reviews_more: 'Show more reviews',
    feedback_title: 'YOU CAN LEAVE YOUR FEEDBACK HERE.',
    feedback_name: 'Name',
    feedback_name_ph: '/',
    feedback_email: 'Email Address',
    feedback_email_ph: 'Enter your email',
    feedback_rating: 'Share your experience in scaling',
    feedback_comments: 'Add your comments...',
    feedback_comments_ph: 'Add your comments...',
    feedback_send: 'Send',
    partners_title: 'OUR PARTNERS',
    portal_subtitle: 'MICBIOMATE PORTAL',
    portal_title: '<span>LEARN MORE</span><span>ABOUT</span><span>OUR INNOVATIVE</span><span>SOLUTIONS.</span>',
    portal_desc: 'We are reimagining keratin production. Leave your details to discuss opportunities for integrating our technologies.',
    portal_name: 'Name*',
    portal_name_ph: 'Name',
    portal_surname: 'Surname*',
    portal_surname_ph: 'Surname',
    portal_email: 'Company email*',
    portal_email_ph: 'Company email',
    portal_goals: 'Goals and Objectives',
    portal_goals_ph: 'Briefly describe your goals.',
    portal_send: 'Send request',
    footer_info_1: 'MicBioMate:<br>Microbiological biotechnology for innovative materials.',
    footer_info_2: '100% free from animal-derived ingredients, 100% intact keratin',
    footer_subscribe: 'Subscribe to the biotechnology digest MicBioMate.',
    footer_sub_btn: 'Subscribe',
    footer_copy: '© MicBioMate GmbH. All rights reserved. All information is property of MicBioMate GmbH.'
  },
  de: {
    nav_home: 'Startseite',
    nav_product: 'Produkte',
    nav_tech: 'Technologie',
    nav_app: 'Anwendung',
    nav_contact: 'Kontakt',
    hero_tag: '100% TIERFREI & INTAKT',
    hero_title: 'Mikrobiologische Biosynthese von intaktem Keratin',
    hero_desc: 'Eine revolutionäre Alternative zu tierischen Proteinen für Premium-Kosmetik und regenerative Medizin.',
    btn_tech: 'Unsere Technologien entdecken',
    btn_partner: 'MicBioMate-Partner werden',
    products_title: 'UNSERE PRODUKTE',
    products_subtext: 'MicBioMate entwickelt innovative Keratine aus der Biotechnologie — ohne tierische oder pflanzliche Quellen. Unsere Lösungen richten sich an Kosmetik, Medizinprodukte und personalisierte Medizin und vereinen hohe Proteinqualität, Skalierbarkeit und Nachhaltigkeit.',
    pcard1_sub: 'HAUT- UND HAARPFLEGE',
    pcard1_desc: 'Biotechnologisches Keratin der dritten Generation für moderne Kosmetikformeln mit erhaltener natürlicher Proteinstruktur.',
    pcard2_sub: 'FÜR MEDIZINPRODUKTE',
    pcard2_desc: 'Hochreines Keratin für Wundauflagen, medizinische Materialien und weitere biomedizinische Anwendungen.',
    pcard3_sub: 'FÜR PERSONALISIERTE MEDIZIN',
    pcard3_desc: 'Anpassbare Proteinlösungen für regenerative Medizin und moderne Wirkstoffabgabesysteme.',
    btn_read_more: 'Mehr erfahren',
    home_tech_sub: 'MICBIOMATE IST EIN START-UP, DAS HOCHWERTIGE KERATINE DER DRITTEN GENERATION HERSTELLEN WIRD.',
    tech_desc_1: 'Unsere Kerninnovation liegt in der Fähigkeit, Keratine vollständig unabhängig von tierischen Ressourcen (Federn, Hörner, Krallen) und pflanzlichen Quellen herzustellen. Das bietet eine anpassbare, skalierbare und nachhaltige Alternative zu herkömmlichen Verfahren.',
    tech_desc_2: 'Unsere Mission ist es, Kosmetik- und Biomedizinbranche zu transformieren, indem wir tierisches Keratin und pflanzliche Analogproteine durch biotechnologisch hergestellte, vegane und maßgeschneiderte Keratine ersetzen.',
    prod_title: 'Unsere Produktlinien umfassen:',
    pline1_desc: 'Entwickelt für die Kosmetik, insbesondere für Haut- und Haarpflegeformulierungen.',
    pline2_desc: 'Ausgelegt auf medizinische Anwendungen, einschließlich fortschrittlicher Erste-Hilfe-Verbände und transdermaler Wirkstoffabgabe.',
    pline3_desc: 'Unsere spezialisierte Plattform für hochgradig anpassbare, personenspezifische Therapien — zunächst mit Fokus auf gezielte Wirkstoffabgabe.',
    table_features: 'Merkmale',
    table_usage: 'Einsatz',
    table_usage_1: 'Haut- und Haarpflegekosmetik',
    table_usage_2: 'Medizinische Anwendungen',
    table_usage_3: 'Personenspezifische Behandlungen',
    tech_title: 'ANALYSE DER MARKTSCHMERZPUNKTE',
    tech_sub: 'Herkömmliche Verfahren der Keratinherstellung sind durch veraltete Technologien begrenzt. Dies sind die zentralen Herausforderungen moderner Industrien.',
    card1_title: 'ETHISCHE INSTABILITÄT',
    card1_desc: 'Die 100%ige Abhängigkeit von tierischen Rohstoffen (Federn, Hörner) erzeugt ethische Risiken und bedroht die Versorgungssicherheit Premium-Beauty-Marken.',
    card2_title: 'WIRTSCHAFTLICHE INEFFIZIENZ',
    card2_desc: 'Die klassische Säureextraktion erfordert enormen Energieeinsatz und macht bis zu 30 % der Herstellungskosten des Endprodukts aus.',
    card3_title: 'VERLORENE PROTEINSTRUKTUR',
    card3_desc: 'Die industrielle Verarbeitung führt zur Denaturierung und verwandelt wertvollen Rohstoff in ein unwirksames Hydrolysat mit gestörter Tertiärstruktur.',
    bio_title: 'BIOPRODUKTION VON KERATIN',
    bio_desc: 'Das Biosynthesesystem von MicBioMate nutzt eine etablierte Fermentationstechnologie zur kontrollierten Herstellung humaner Keratine. Unsere Architektur verzichtet auf tierische Rohstoffe und setzt auf optimierte mikrobielle Stämme mit spezifischem Molekülprofil.',
    arch_title: 'BIOSYNTHESE-ARCHITEKTUR:',
    specs_title: 'Wichtige technische Spezifikationen:',
    spec1_label: 'Assemblierungsgenauigkeit:',
    spec1_val: '99,5 % (Verifikation der Sekundärstruktur)',
    spec2_label: 'Expressionstyp:',
    spec2_val: 'Alpha-helikales Dimer (40–60 kDa)',
    spec3_label: 'Anpassung:',
    spec3_val: 'Optimierte, kundenspezifische Keratine.',
    table_title: 'Vergleichende Spezifikationen',
    th_module: 'Modul-ID',
    th_nom: 'Nomenklatur',
    th_mass: 'Masse (kDa)',
    th_app: 'Anwendung',
    td_app_1: 'Kosmetikindustrie',
    td_app_2: 'Klinische Regeneration',
    td_app_3: 'Fortschrittliche Therapeutika',
    process_title: 'Technologischer Prozess.',
    step_design: 'DESIGN',
    step_ferm: 'FERMENTATION',
    step_extract: 'EXTRAKTION',
    step_purify: 'REINIGUNG',
    step_quality: 'QUALITÄT',
    prod_hero_tag: 'KERATIN DER DRITTEN GENERATION',
    prod_hero_sub: 'HAUT- UND HAARPFLEGE',
    prod_hero_desc: 'Biotechnologisches Keratin der dritten Generation für moderne Kosmetikformeln mit erhaltener natürlicher Proteinstruktur.',
    btn_contact_us: 'Kontakt',
    key_adv_title: 'WICHTIGSTE VORTEILE',
    adv1_title: 'Wiederherstellung der Struktur',
    adv1_desc: 'Auffüllen von Mikrorissen von innen.',
    adv2_title: 'Feuchtigkeitsspeicherung',
    adv2_desc: 'Schutz vor Austrocknung.',
    adv3_title: 'Glätte und Elastizität',
    adv3_desc: 'Seidige Textur, ohne das Haar zu beschweren.',
    adv4_title: 'Schutzbarriere',
    adv4_desc: 'Resistenz gegen äußere Reizstoffe.',
    fields_title: 'BEREICHE UND ANWENDUNGEN',
    app1_title: 'LÖSUNG ZUR STÄRKUNG DER NAGELPLATTE',
    app1_desc: 'Bioverfügbarer Rohstoff gegen Brüchigkeit und Spliss sowie zur Stärkung der Nagelstruktur.',
    app2_title: 'KERATIN ZUR WIEDERHERSTELLUNG DER HAARSTRUKTUR',
    app2_desc: 'Rohstoff zur tiefen Cortex-Reparatur und zum Farbschutz.',
    app3_title: 'WIRKSTOFF FÜR ANTI-AGING UND GESICHTSHYDRATION',
    app3_desc: 'Ein hypoallergenes Ingredient für Lifting und Stärkung der Hautschutzbarriere.',
    app4_title: 'STRAFFENDER WIRKSTOFF FÜR DIE KÖRPERHAUT',
    app4_desc: 'Ein Wirkstoff zur Verbesserung der Elastizität, gegen Schuppung und zum Wiederherstellen des Gleichgewichts.',
    why_title: 'Warum MicBioKeratin',
    why_desc: 'Die Antwort liegt in unserer einzigartigen Produktionstechnologie. Wir gewinnen hydrolysiertes Keratin mit einem Molekulargewicht, das auf maximale Bioverfügbarkeit abgestimmt ist. Es ist nicht nur ein Wirkstoff, sondern eine biomimetische Komponente, die geschädigte Bereiche von Cortex und Epidermis erkennt, sich in die Struktur integriert und sie von innen wiederherstellt.',
    char_title: 'WICHTIGSTE EIGENSCHAFTEN',
    char_cat_label: 'Produktkategorie',
    char_qual_label: 'Proteinqualität',
    char_qual_val: 'Hohe Qualität',
    char_app_label: 'Anwendungen',
    char_app_val: 'Haarpflege, Hautpflege',
    char_scal_label: 'Skalierbarkeit',
    char_scal_val: 'Hohe Proteinskalierbarkeit',
    char_meth_label: 'Herstellungsverfahren',
    char_meth_val: 'Produktionsmethode',
    char_sust_label: 'Nachhaltigkeit',
    char_sust_val: 'Nachhaltige Biotechnologie',
    cta_title: 'Interesse an MicBioKeratin?',
    cta_desc: 'Kontaktieren Sie unser Team, um Ihr Projekt zu besprechen oder eine Produktprobe anzufordern.',
    btn_contact: 'Unser Team kontaktieren',
    med_hero_tag: 'KERATIN DER DRITTEN GENERATION',
    med_hero_sub: 'FÜR MEDIZINPRODUKTE',
    med_hero_desc: 'Hochreines Keratin für Wundauflagen, medizinische Materialien und weitere biomedizinische Anwendungen.',
    med_adv1_title: 'Pharmazeutische Reinheit',
    med_adv1_desc: 'Hohe Reinheit, allergenfrei.',
    med_adv2_title: 'Geweberegeneration',
    med_adv2_desc: 'Beschleunigt Heilung und Regeneration.',
    med_adv3_title: 'Hohe Bioverfügbarkeit',
    med_adv3_desc: 'Tiefe Penetration in die Dermis.',
    med_adv4_title: 'Formulastabilität',
    med_adv4_desc: 'Stabil unter allen Bedingungen.',
    med_app1_title: 'WIRKSTOFF FÜR THERAPEUTISCHE SALBEN UND CREMES',
    med_app1_desc: 'Rohstoff für Produkte, die die Heilung von Mikroverletzungen und Rissen der Haut beschleunigen.',
    med_app2_title: 'WIRKSTOFF FÜR SOS-PRODUKTE NACH PEELINGS UND INJEKTIONEN',
    med_app2_desc: 'Fördert die Follikelernährung und die Regeneration der Kopfhaut bei Alopezie.',
    med_app3_title: 'ROHSTOFF FÜR MITTEL GEGEN HAARAUSFALL',
    med_app3_desc: 'Ein hypoallergenes Ingredient für Lifting und Stärkung der Hautschutzbarriere.',
    med_app4_title: 'BASIS FÜR SEREN BEI NAGELDYSTROPHIE',
    med_app4_desc: 'Bioverfügbares Keratin zur Wiederherstellung der Nagelplatte nach Pilzinfektionen.',
    med_why_title: 'Warum MicBioKeratinMED',
    med_why_desc: 'Die Antwort liegt in unserer medizinisch-gradigen Reinigung und der präzisen Kontrolle des Molekulargewichts. Wir gewinnen hydrolysiertes Keratin, das auf maximale Gewebebioverfügbarkeit abgestimmt ist. Es ist ein biokompatibles Protein-Gerüst, das gezielt in geschädigte Bereiche von Epidermis und Dermis integriert und die zelluläre Regeneration beschleunigt.',
    med_char_cat_label: 'Produktkategorie',
    med_char_app_label: 'Medizinische Anwendungen',
    med_char_purity_label: 'Reinheit',
    med_char_cust_label: 'Anpassung',
    med_char_meth_label: 'Herstellungsverfahren',
    med_char_scal_label: 'Skalierbarkeit',
    med_cta_title: 'Interesse an MicBioKeratinMED?',
    med_cta_desc: 'Kontaktieren Sie unser Team, um Ihr Projekt zu besprechen oder eine Produktprobe anzufordern.',
    plus_hero_tag: 'KERATIN DER DRITTEN GENERATION',
    plus_hero_sub: 'FÜR PERSONALISIERTE MEDIZIN',
    plus_hero_desc: 'Anpassbare Proteinlösungen für regenerative Medizin und moderne Wirkstoffabgabesysteme.',
    plus_adv1_title: 'Maximale Konzentration',
    plus_adv1_desc: 'Höhere aktive Peptiddichte pro Dosis.',
    plus_adv2_title: 'Gezielte Anpassung',
    plus_adv2_desc: 'Molekularprofil, abgestimmt auf eine spezifische Therapie.',
    plus_adv3_title: 'Peptid-Anreicherung',
    plus_adv3_desc: 'Bio-Peptidkomplex für tiefe Geweberegeneration.',
    plus_adv4_title: 'Kontrollierte Abgabe',
    plus_adv4_desc: 'Optimiert für gezielte Wirkstoffabgabesysteme.',
    plus_app1_title: 'WIRKSTOFF FÜR THERAPEUTISCHE SALBEN UND CREMES',
    plus_app1_desc: 'Hochaktives Keratin für regenerative Salben, Cremes und dermatologische Formeln.',
    plus_app2_title: 'SOS-KOMPONENTE FÜR DIE PFLEGE NACH PEELINGS UND INJEKTIONEN',
    plus_app2_desc: 'Beschleunigt die Regeneration von Epidermis und Dermis nach Peelings, Injektionen und Eingriffen.',
    plus_app3_title: 'BASIS FÜR GEZIELTE WIRKSTOFFABGABESYSTEME',
    plus_app3_desc: 'Eine Proteinträger-Plattform für personenspezifische und transdermale Wirkstoffabgabe.',
    plus_app4_title: 'PLATTFORM FÜR PERSONALISIERTE REGENERATIVE BEHANDLUNGEN',
    plus_app4_desc: 'Anpassbare Keratin-Matrices für regenerative Medizin und individuelle Protokolle.',
    plus_why_title: 'Warum MicBioKeratinMED-PLUS',
    plus_why_desc: 'Dies ist ein hochaktiver Wirkstoff auf Basis nativen Keratins und eines angereicherten Bio-Peptidkomplexes. Das Molekularprofil ist auf maximale Gewebebioverfügbarkeit abgestimmt, sodass das Protein in geschädigte Bereiche von Epidermis und Dermis integriert und die tiefe Regeneration unterstützt.',
    plus_char_cat_label: 'Produktkategorie',
    plus_char_cat_val: 'Biotechnologie',
    plus_char_name_label: 'Produktname',
    plus_char_purity_label: 'Reinheit',
    plus_char_purity_val: '100 % natives Keratin',
    plus_char_formula_label: 'Aktive Formel',
    plus_char_formula_val: 'Angereicherter Bio-Peptidkomplex',
    plus_char_meth_label: 'Herstellungsverfahren',
    plus_char_meth_val: 'Advanced Biomaterial Extraction',
    plus_char_app_label: 'Medizinische Anwendungen',
    plus_char_app_val: 'Dermatologie, Trichologie & Podologie',
    plus_char_bio_label: 'Biokompatibilität',
    plus_char_bio_val: '100 % hypoallergen',
    plus_char_supply_label: 'Lieferform',
    plus_char_supply_val: 'Wirkstoff',
    plus_cta_title: 'Interesse an MicBioKeratinMED-PLUS?',
    plus_cta_desc: 'Kontaktieren Sie unser Team, um Ihr Projekt zu besprechen oder eine Produktprobe anzufordern.',
    partner_title: 'B2B-PARTNERZUGANG',
    partner_subtitle: 'Automatisches System zur Vergabe von Domain-E-Mail-Zugriffsrechten',
    placeholder_email: 'Firmen-E-Mail',
    nda_text: 'Ich bestätige mein Einverständnis mit der NDA und der Datenschutzrichtlinie der MicBioMate-Plattform hinsichtlich des Zugangs zu Geschäftsgeheimnissen.',
    btn_send_link: 'Magic Link senden',
    team_title: 'DAS TEAM',
    team_role_1: 'Chief Executive Officer<br>Industriebiotechnologe<br>Unternehmer',
    team_role_2: 'Chief Scientific Officer Keratin-Ingenieur',
    team_role_3: 'Chief Financial Officer Finanz- und Marktexperte',
    advisory_title: 'Advisory Board',
    faq_title: 'HÄUFIG GESTELLTE FRAGEN',
    faq_q1: 'WAS IST KERATIN UND WARUM WIRD ES IN DER KOSMETIK VERWENDET?',
    faq_a1: 'Keratin ist ein Faserprotein und der zentrale Baustein von Haar, Nägeln und Haut. In Kosmetikprodukten hilft es, geschädigtes Haar zu regenerieren, die Elastizität der Haut zu verbessern und die Hautbarriere zu schützen.',
    faq_q2: 'WAS IST DER UNTERSCHIED ZWISCHEN HYDROLYSIERTEM UND INTAKTEM KERATIN?',
    faq_a2: 'Hydrolysiertes Keratin wird chemisch in kleine Fragmente zerlegt, damit es sich leichter auf Haar- oder Hautoberflächen anlagert. Intaktes Keratin behält seine native Struktur und Proteinintegrität und bildet eine langlebige, tiefgehende Proteinbasis für hochwertige Formulierungen.',
    faq_q3: 'WIE HILFT KERATIN BEI DER HAUTREGENERATION?',
    faq_a3: 'Intaktes Keratin stützt die Zellintegrität und unterstützt die dermale Reparatur sowie den Aufbau der extrazellulären Matrix. Das Protein fördert die Kollagenbildung und stärkt die schützende Hautbarriere.',
    faq_q4: 'KÖNNEN KERATINPRODUKTE AUF EMPFINDLICHER HAUT VERWENDET WERDEN?',
    faq_a4: 'Ja. Reines Keratin der dritten Generation ist besonders hautverträglich und allergenarm – auch bei empfindlicher Haut und entzündlichen Zuständen wie Neurodermitis. Vor der Anwendung einen Patch-Test durchführen oder bei schweren Fällen ärztlichen Rat einholen.',
    faq_q5: 'HABEN KERATINPRODUKTE NEBENWIRKUNGEN?',
    faq_a5: 'Reine Keratinprodukte der dritten Generation sind biokompatibel und verursachen keine systemischen Nebenwirkungen. Im Gegensatz zu aggressiven tierischen Alternativen bleibt die natürliche Hautaffinität erhalten; Reizungen und strukturelle Schäden werden minimiert.',
    faq_q6: 'IST DIE HERSTELLUNG MIKROBIELLEN KERATINS UMWELTFREUNDLICH?',
    faq_a6: 'Ja. Die Herstellung mikrobiellen Keratins ist vollständig ohne Tierleid, nachhaltig und reduziert Wasserverbrauch, CO₂-Fußabdruck und Abfall im Vergleich zur konventionellen Tierhaltung deutlich.',
    faq_q7: 'WIE ERKENNT MAN HOCHWERTIGES KERATIN AUF DEM ETIKETT?',
    faq_a7: 'Achten Sie auf Begriffe wie „bioengineered third-generation keratin“, hohe Reinheit (>95 %) und den ausdrücklichen Verzicht auf tierische Federn oder Klauen. Hochwertiges Keratin bewahrt die sekundäre und tertiäre Struktur für optimale Wirkung.',
    faq_q8: 'WIE STEIGT MAN AUF NACHHALTIGE HAARPFLEGE UM, OHNE DIE WIRKUNG ZU VERLIEREN?',
    faq_a8: 'Setzen Sie auf ökologisch hergestelltes, biosynthetisches Keratin, das tierischen Standards entspricht. Prüfen Sie Ökozertifikate und professionelle Rückmeldungen zur Umweltleistung, bevor Sie vollständig umstellen.',
    faq_q9: 'WELCHEN KONKRETEN NUTZEN HABEN BIOTECHNOLOGISCHE PROTEINE IN TÄGLICHEN FEUCHTIGKEITSCREMES?',
    faq_a9: 'Biotechnologische Proteine bilden einen atmungsaktiven molekularen Film auf der Haut, der Feuchtigkeit einschließt und feine Linien sofort glättet. Anders als große tierische Moleküle stammen diese Peptide aus bioengineerten Hefen – mit hoher Reinheit und ohne allergische Reaktionen.',
    faq_q10: 'WELCHE INHALTSSTOFFE SOLLTE ICH BEI GESCHÄDIGTEM HAAR BEACHTEN?',
    faq_a10: 'Setzen Sie auf intaktes, biosynthetisches Keratin statt schwerer hydrolysierter Alternativen: Es dringt tief in den Haarkortex ein und baut innere Fasern auf. Ergänzen Sie natürliche Lipide, um die Kutikula zu regenerieren und dauerhaften Schutz zu geben.',
    faq_q11: 'IST BIOTECHNOLOGISCHES KERATIN EBENSO WIRKSAM?',
    faq_a11: 'Ja. Biotechnologisches Keratin ist mindestens so wirksam – oft sogar überlegen – wie herkömmliches tierisches Protein. Durch moderne Biotechnologie bildet es die Struktur menschlichen Haars nach, dringt tiefer in geschädigtes Gewebe ein und repariert Haar von innen.',
    faq_google: 'Google KI fragen',
    reviews_title: 'BEWERTUNGEN ÜBER UNS',
    review_1_text: '“Der Umstieg auf veganes Keratin von MicBioMate war ein Wendepunkt für unsere Premium-Haarrepair-Linie. Hochreines, cruelty-free Keratin zu beziehen, war bisher logistisch extrem aufwendig. MicBioMate lieferte uns eine Charge MicBioKeratin, die menschliche Proteinstrukturen präzise abbildet. Unsere Labortests zeigten 34 % mehr Restoration der Haarkutikula im Vergleich zu früheren tierischen Alternativen. Das technische Datenblatt (TDS) war sehr detailliert, und das Musterkit kam innerhalb von drei Tagen.”',
    review_2_text: '“In der Medizinproduktefertigung zählt vor allem die regulatorische Konformität. Wir haben MicBioKeratinMED in unsere neuen biokompatiblen Wundauflagen integriert. Die Qualitätsstandards von MicBioMate sind außergewöhnlich — keine Endotoxine und volle ISO-Konformität. Die Dokumentation war makellos und hat uns geholfen, das klinische Audit früher abzuschließen. Die fachliche Unterstützung können wir nur empfehlen.”',
    review_3_text: '“Wir nutzen die Plattform MicBioKeratinMED-PLUS für personalisierte regenerative Medizinprojekte. Was MicBioMate wirklich auszeichnet, ist das digitale Ökosystem. Über die BioIntegrate-API konnten wir unsere Laborinformationssysteme (LIMS) per GraphQL anbinden. Automatisierte Datenerfassung und Echtzeit-Tracking der Expression haben uns Monate manueller Berichte erspart. Die Dokumentation ist einwandfrei.”',
    reviews_more: 'Weitere Bewertungen anzeigen',
    feedback_title: 'HIER KÖNNEN SIE IHR FEEDBACK HINTERLASSEN.',
    feedback_name: 'Name',
    feedback_name_ph: '/',
    feedback_email: 'E-Mail-Adresse',
    feedback_email_ph: 'E-Mail eingeben',
    feedback_rating: 'Teilen Sie Ihre Erfahrung',
    feedback_comments: 'Kommentar hinzufügen...',
    feedback_comments_ph: 'Kommentar hinzufügen...',
    feedback_send: 'Senden',
    partners_title: 'UNSERE PARTNER',
    portal_subtitle: 'MICBIOMATE PORTAL',
    portal_title: '<span>ERFAHREN SIE MEHR</span><span>ÜBER UNSERE</span><span>INNOVATIVEN</span><span>LÖSUNGEN.</span>',
    portal_desc: 'Wir denken die Keratinproduktion neu. Hinterlassen Sie Ihre Daten, um Integrationsmöglichkeiten zu besprechen.',
    portal_name: 'Name*',
    portal_name_ph: 'Name',
    portal_surname: 'Nachname*',
    portal_surname_ph: 'Nachname',
    portal_email: 'Firmen-E-Mail*',
    portal_email_ph: 'Firmen-E-Mail',
    portal_goals: 'Ziele und Aufgaben',
    portal_goals_ph: 'Beschreiben Sie kurz Ihre Ziele.',
    portal_send: 'Anfrage senden',
    footer_info_1: 'MicBioMate:<br>Mikrobiologische Biotechnologie für innovative Materialien.',
    footer_info_2: '100 % frei von tierischen Inhaltsstoffen, 100 % intaktes Keratin',
    footer_subscribe: 'Abonnieren Sie den Biotechnologie-Digest von MicBioMate.',
    footer_sub_btn: 'Abonnieren',
    footer_copy: '© MicBioMate GmbH. Alle Rechte vorbehalten. Alle Informationen sind Eigentum der MicBioMate GmbH.'
  },
  it: {
    nav_home: 'Home',
    nav_product: 'Prodotti',
    nav_tech: 'Tecnologia',
    nav_app: 'Applicazione',
    nav_contact: 'Contatti',
    hero_tag: '100% SENZA ORIGINE ANIMALE E INTEGRO',
    hero_title: 'Biosintesi microbiologica di cheratina integra',
    hero_desc: 'Un’alternativa rivoluzionaria alle proteine di origine animale per la cosmesi premium e la medicina rigenerativa.',
    btn_tech: 'Scopri le nostre tecnologie',
    btn_partner: 'Diventa partner MicBioMate',
    products_title: 'I NOSTRI PRODOTTI',
    products_subtext: 'MicBioMate sviluppa cheratine innovative prodotte via biotecnologia, senza fonti animali o vegetali. Le nostre soluzioni servono cosmesi, dispositivi medici e medicina personalizzata, unendo alta qualità proteica, scalabilità e sostenibilità.',
    pcard1_sub: 'CURA DI PELLE E CAPELLI',
    pcard1_desc: 'Cheratina biotecnologica di terza generazione per formule cosmetiche moderne, con struttura proteica naturale conservata.',
    pcard2_sub: 'PER DISPOSITIVI MEDICI',
    pcard2_desc: 'Cheratina ad alta purezza per medicazioni, materiali medici e altre applicazioni biomediche.',
    pcard3_sub: 'PER LA MEDICINA PERSONALIZZATA',
    pcard3_desc: 'Soluzioni proteiche personalizzabili per la medicina rigenerativa e i sistemi moderni di drug delivery.',
    btn_read_more: 'Scopri di più',
    home_tech_sub: 'MICBIOMATE È UNA STARTUP CHE PRODURRÀ CHERATINE DI TERZA GENERAZIONE DI ALTA QUALITÀ.',
    tech_desc_1: 'La nostra innovazione principale è la capacità di produrre cheratine del tutto indipendenti da risorse animali (piume, corna, artigli) e da fonti vegetali. Offre un’alternativa personalizzabile, scalabile e sostenibile ai metodi tradizionali.',
    tech_desc_2: 'La nostra missione è rivoluzionare i settori cosmetico e biomedico sostituendo la cheratina animale e le proteine analoghe vegetali con cheratine vegane, biotecnologiche e su misura.',
    prod_title: 'Le nostre linee di prodotto includono:',
    pline1_desc: 'Pensata per la cosmesi, in particolare per formulazioni per pelle e capelli.',
    pline2_desc: 'Pensata per applicazioni mediche, tra cui bende avanzate di primo soccorso e sistemi transdermici di rilascio dei principi attivi.',
    pline3_desc: 'La nostra piattaforma specializzata per trattamenti altamente personalizzabili e persona-specifici, con focus iniziale sul targeted drug delivery.',
    table_features: 'Caratteristiche',
    table_usage: 'Utilizzo',
    table_usage_1: 'Cosmetici per pelle e capelli',
    table_usage_2: 'Applicazioni mediche',
    table_usage_3: 'Trattamenti persona-specifici',
    tech_title: 'ANALISI DEI PUNTI CRITICI DEL MERCATO',
    tech_sub: 'I metodi tradizionali di produzione della cheratina sono limitati da tecnologie obsolete. Queste sono le sfide principali delle industrie moderne.',
    card1_title: 'INSTABILITÀ ETICA',
    card1_desc: 'La dipendenza al 100% da materie prime animali (piume, corna) crea rischi etici e minacce alla stabilità dell’approvvigionamento per i brand beauty premium.',
    card2_title: 'INEFFICIENZA ECONOMICA',
    card2_desc: 'L’estrazione acida tradizionale richiede un enorme consumo energetico, fino al 30% del costo di produzione del prodotto finale.',
    card3_title: 'STRUTTURA PROTEICA PERDUTA',
    card3_desc: 'La lavorazione industriale provoca denaturazione, trasformando una materia prima preziosa in un idrolizzato inefficace con struttura terziaria alterata.',
    bio_title: 'BIOPRODUZIONE DELLA CHERATINA',
    bio_desc: 'Il sistema di biosintesi MicBioMate utilizza una tecnologia di fermentazione tradizionale basata sulla produzione controllata di cheratine umane. La nostra architettura elimina le materie prime animali, sostituendole con ceppi microbici ottimizzati dal profilo molecolare specifico.',
    arch_title: 'ARCHITETTURA DELLA BIOSINTESI:',
    specs_title: 'Specifiche tecniche chiave:',
    spec1_label: 'Precisione di assemblaggio:',
    spec1_val: '99,5% (verifica della struttura secondaria)',
    spec2_label: 'Tipo di espressione:',
    spec2_val: 'Dimero alfa-elicale (40-60 kDa)',
    spec3_label: 'Personalizzazione:',
    spec3_val: 'Cheratine ottimizzate e personalizzate.',
    table_title: 'Specifiche comparative',
    th_module: 'ID modulo',
    th_nom: 'Nomenclatura',
    th_mass: 'Massa (kDa)',
    th_app: 'Applicazione',
    td_app_1: 'Industria cosmetica',
    td_app_2: 'Rigenerazione clinica',
    td_app_3: 'Terapie avanzate',
    process_title: 'Processo tecnologico.',
    step_design: 'DESIGN',
    step_ferm: 'FERMENTAZIONE',
    step_extract: 'ESTRAZIONE',
    step_purify: 'PURIFICAZIONE',
    step_quality: 'QUALITÀ',
    prod_hero_tag: 'CHERATINA DI TERZA GENERAZIONE',
    prod_hero_sub: 'CURA DI PELLE E CAPELLI',
    prod_hero_desc: 'Cheratina biotecnologica di terza generazione per formule cosmetiche moderne, con struttura proteica naturale conservata.',
    btn_contact_us: 'Contattaci',
    key_adv_title: 'VANTAGGI CHIAVE',
    adv1_title: 'Ripristino della struttura',
    adv1_desc: 'Riempimento delle microfessure dall’interno.',
    adv2_title: 'Ritenzione dell’umidità',
    adv2_desc: 'Protezione dall’essiccazione eccessiva.',
    adv3_title: 'Levigatezza ed elasticità',
    adv3_desc: 'Texture setosa senza appesantire i capelli.',
    adv4_title: 'Barriera protettiva',
    adv4_desc: 'Resistenza agli irritanti esterni.',
    fields_title: 'CAMPI E APPLICAZIONI',
    app1_title: 'SOLUZIONE PER RAFFORZARE LA LAMINA UNGUEALE',
    app1_desc: 'Materia prima biodisponibile per trattare fragilità e sfaldamento e per rafforzare la struttura dell’unghia.',
    app2_title: 'CHERATINA PER IL RIPRISTINO DELLA STRUTTURA CAPILLARE',
    app2_desc: 'Materia prima per il ripristino profondo della corteccia e la protezione del colore.',
    app3_title: 'INGREDIENTE ATTIVO PER ANTI-AGE E IDRATAZIONE DEL VISO',
    app3_desc: 'Un ingrediente ipoallergenico per lifting e rafforzamento della barriera protettiva della pelle.',
    app4_title: 'INGREDIENTE RASSODANTE PER LA PELLE DEL CORPO',
    app4_desc: 'Un ingrediente attivo per migliorare l’elasticità, contrastare la desquamazione e ripristinare l’equilibrio.',
    why_title: 'Perché MicBioKeratin',
    why_desc: 'La risposta sta nella nostra tecnologia produttiva unica. Otteniamo cheratina idrolizzata con un peso molecolare studiato per la massima biodisponibilità. Non è solo un ingrediente attivo: è un componente biomimetico che riconosce le aree danneggiate di corteccia ed epidermide, si integra nella struttura e la ripristina dall’interno.',
    char_title: 'CARATTERISTICHE CHIAVE',
    char_cat_label: 'Categoria prodotto',
    char_qual_label: 'Qualità proteica',
    char_qual_val: 'Alta qualità',
    char_app_label: 'Applicazioni',
    char_app_val: 'Cura capelli, cura pelle',
    char_scal_label: 'Scalabilità',
    char_scal_val: 'Elevata scalabilità proteica',
    char_meth_label: 'Metodo di produzione',
    char_meth_val: 'Metodo di produzione',
    char_sust_label: 'Sostenibilità',
    char_sust_val: 'Biotecnologia sostenibile',
    cta_title: 'Interessati a MicBioKeratin?',
    cta_desc: 'Contattate il nostro team per discutere il vostro progetto o richiedere un campione.',
    btn_contact: 'Contatta il nostro team',
    med_hero_tag: 'CHERATINA DI TERZA GENERAZIONE',
    med_hero_sub: 'PER DISPOSITIVI MEDICI',
    med_hero_desc: 'Cheratina ad alta purezza per medicazioni, materiali medici e altre applicazioni biomediche.',
    med_adv1_title: 'Purezza farmaceutica',
    med_adv1_desc: 'Alta purezza, senza allergeni.',
    med_adv2_title: 'Rigenerazione tissutale',
    med_adv2_desc: 'Accelera guarigione e rigenerazione.',
    med_adv3_title: 'Alta biodisponibilità',
    med_adv3_desc: 'Profonda penetrazione nel derma.',
    med_adv4_title: 'Stabilità della formula',
    med_adv4_desc: 'Stabile in qualsiasi condizione.',
    med_app1_title: 'INGREDIENTE ATTIVO PER UNGUENTI E CREME TERAPEUTICI',
    med_app1_desc: 'Materia prima per prodotti che accelerano la guarigione di microlesioni e ragadi della pelle.',
    med_app2_title: 'INGREDIENTE ATTIVO PER PRODOTTI SOS DOPO PEELING E INIEZIONI',
    med_app2_desc: 'Stimola il nutrimento del follicolo e il recupero del cuoio capelluto nei casi di alopecia.',
    med_app3_title: 'MATERIE PRIME PER RIMEDI CONTRO LA CADUTA DEI CAPELLI',
    med_app3_desc: 'Un ingrediente ipoallergenico per lifting e rafforzamento della barriera protettiva della pelle.',
    med_app4_title: 'BASE PER SIERI PER DISTROFIA UNGUEALE',
    med_app4_desc: 'Cheratina biodisponibile per ripristinare la lamina ungueale dopo infezioni fungine.',
    med_why_title: 'Perché MicBioKeratinMED',
    med_why_desc: 'La risposta sta nella purificazione di grado medicale e nel controllo preciso del peso molecolare. Otteniamo cheratina idrolizzata studiata per la massima biodisponibilità tissutale. È un’impalcatura proteica biocompatibile che si integra nelle aree danneggiate di epidermide e derma, accelerando il recupero cellulare.',
    med_char_cat_label: 'Categoria prodotto',
    med_char_app_label: 'Applicazioni mediche',
    med_char_purity_label: 'Purezza',
    med_char_cust_label: 'Personalizzazione',
    med_char_meth_label: 'Metodo di produzione',
    med_char_scal_label: 'Scalabilità',
    med_cta_title: 'Interessati a MicBioKeratinMED?',
    med_cta_desc: 'Contattate il nostro team per discutere il vostro progetto o richiedere un campione.',
    plus_hero_tag: 'CHERATINA DI TERZA GENERAZIONE',
    plus_hero_sub: 'PER LA MEDICINA PERSONALIZZATA',
    plus_hero_desc: 'Soluzioni proteiche personalizzabili per la medicina rigenerativa e i sistemi moderni di drug delivery.',
    plus_adv1_title: 'Massima concentrazione',
    plus_adv1_desc: 'Maggiore densità di peptidi attivi per dose.',
    plus_adv2_title: 'Personalizzazione mirata',
    plus_adv2_desc: 'Profilo molecolare adattato a una terapia specifica.',
    plus_adv3_title: 'Arricchimento peptidico',
    plus_adv3_desc: 'Complesso bio-peptidico per la rigenerazione tissutale profonda.',
    plus_adv4_title: 'Rilascio controllato',
    plus_adv4_desc: 'Ottimizzato per sistemi di targeted drug delivery.',
    plus_app1_title: 'INGREDIENTE ATTIVO PER UNGUENTI E CREME TERAPEUTICI',
    plus_app1_desc: 'Cheratina ad alta attività per unguenti, creme e formule dermatologiche rigenerative.',
    plus_app2_title: 'COMPONENTE SOS PER LA CURA POST-PEELING E POST-INIEZIONE',
    plus_app2_desc: 'Accelera il recupero di epidermide e derma dopo peeling, iniezioni e procedure.',
    plus_app3_title: 'BASE PER SISTEMI DI TARGETED DRUG DELIVERY',
    plus_app3_desc: 'Una piattaforma proteica per il rilascio transdermico e persona-specifico dei principi attivi.',
    plus_app4_title: 'PIATTAFORMA PER TRATTAMENTI RIGENERATIVI PERSONALIZZATI',
    plus_app4_desc: 'Matrici di cheratina personalizzabili per la medicina rigenerativa e protocolli individuali.',
    plus_why_title: 'Perché MicBioKeratinMED-PLUS',
    plus_why_desc: 'È un ingrediente altamente attivo a base di cheratina nativa e di un complesso bio-peptidico arricchito. Il profilo molecolare è personalizzato per la massima biodisponibilità tissutale, così la proteina si integra nelle aree danneggiate di epidermide e derma e sostiene la rigenerazione profonda.',
    plus_char_cat_label: 'Categoria prodotto',
    plus_char_cat_val: 'Biotecnologia',
    plus_char_name_label: 'Nome prodotto',
    plus_char_purity_label: 'Purezza',
    plus_char_purity_val: '100% cheratina nativa',
    plus_char_formula_label: 'Formula attiva',
    plus_char_formula_val: 'Complesso bio-peptidico arricchito',
    plus_char_meth_label: 'Metodo di produzione',
    plus_char_meth_val: 'Advanced Biomaterial Extraction',
    plus_char_app_label: 'Applicazioni mediche',
    plus_char_app_val: 'Dermatologia, tricologia e podologia',
    plus_char_bio_label: 'Biocompatibilità',
    plus_char_bio_val: '100% ipoallergenico',
    plus_char_supply_label: 'Formato di fornitura',
    plus_char_supply_val: 'Ingrediente attivo',
    plus_cta_title: 'Interessati a MicBioKeratinMED-PLUS?',
    plus_cta_desc: 'Contattate il nostro team per discutere il vostro progetto o richiedere un campione.',
    partner_title: 'ACCESSO PARTNER B2B',
    partner_subtitle: 'Sistema automatico per l’assegnazione dei diritti di accesso e-mail di dominio',
    placeholder_email: 'Email aziendale',
    nda_text: 'Confermo l’accettazione dei termini dell’NDA e dell’Informativa sulla privacy della piattaforma MicBioMate relativamente all’accesso ai segreti commerciali.',
    btn_send_link: 'Invia Magic Link',
    team_title: 'IL TEAM',
    team_role_1: 'Chief Executive Officer<br>Biotecnologo industriale<br>Imprenditore',
    team_role_2: 'Chief Scientific Officer Ingegnere della cheratina',
    team_role_3: 'Chief Financial Officer Esperto finanziario e di mercato',
    advisory_title: 'Advisory board',
    faq_title: 'DOMANDE FREQUENTI',
    faq_q1: 'COS’È LA CHERATINA E PERCHÉ SI USA IN COSMETICA?',
    faq_a1: 'La cheratina è una proteina fibrosa, il costituente principale di capelli, unghie e pelle. Nei prodotti cosmetici aiuta a riparare i capelli danneggiati, migliorare l’elasticità della pelle e proteggere la barriera cutanea.',
    faq_q2: 'QUAL È LA DIFFERENZA TRA CHERATINA IDROLIZZATA E INTATTA?',
    faq_a2: 'La cheratina idrolizzata è spezzata in frammenti piccoli con trattamenti chimici, così si deposita più facilmente su capelli o pelle. La cheratina intatta conserva la struttura nativa e l’integrità proteica, formando uno strato proteico duraturo e profondo.',
    faq_q3: 'COME AIUTA LA CHERATINA LA RIGENERAZIONE DELLA PELLE?',
    faq_a3: 'La cheratina intatta sostiene l’integrità cellulare e favorisce la riparazione dermica e la formazione della matrice extracellulare. Aiuta la produzione di collagene e rafforza la barriera protettiva della pelle.',
    faq_q4: 'I PRODOTTI A BASE DI CHERATINA SI POSSONO USARE SULLA PELLE SENSIBILE?',
    faq_a4: 'Sì. La cheratina pura di terza generazione è altamente compatibile e povera di allergeni, adatta anche a pelle sensibile e a condizioni infiammatorie come la dermatite atopica. Fare sempre un patch test o consultare un medico nei casi gravi.',
    faq_q5: 'I PRODOTTI A BASE DI CHERATINA HANNO EFFETTI COLLATERALI?',
    faq_a5: 'I prodotti di cheratina pura di terza generazione sono biocompatibili e non causano effetti sistemici. A differenza di alternative animali aggressive, la cheratina bioingegnerizzata mantiene l’affinità naturale con la pelle e riduce irritazioni e danni strutturali.',
    faq_q6: 'LA PRODUZIONE DI CHERATINA MICROBICA È ECOSOSTENIBILE?',
    faq_a6: 'Sì. La produzione di cheratina microbica è cruelty-free, sostenibile e riduce nettamente consumo d’acqua, impronta di carbonio e rifiuti rispetto all’allevamento tradizionale.',
    faq_q7: 'COME RICONOSCERE CHERATINA DI ALTA QUALITÀ IN ETICHETTA?',
    faq_a7: 'Cercate termini come “bio-engineered third-generation keratin”, elevata purezza (>95%) e l’esclusione esplicita di piume o artigli animali. Una cheratina di qualità conserva l’integrità strutturale secondaria e terziaria.',
    faq_q8: 'COME PASSARE A UNA HAIR CARE SOSTENIBILE SENZA PERDERE EFFICACIA?',
    faq_a8: 'Scegliete cheratina biosintetica eco-compatibile che raggiunga gli standard delle fonti animali. Verificate le eco-certificazioni e i feedback professionali sulle prestazioni ambientali prima del passaggio completo.',
    faq_q9: 'QUAL È IL BENEFICIO SPECIFICO DELLE PROTEINE BIOTECNOLOGICHE NELLE CREME IDRATANTI QUOTIDIANE?',
    faq_a9: 'Le proteine biotecnologiche formano un film molecolare traspirante sulla pelle, che trattiene l’umidità e leviga all’istante le linee sottili. A differenza delle grandi molecole animali, questi peptidi derivano da lieviti bioingegnerizzati: massima purezza e zero reazioni allergiche.',
    faq_q10: 'QUALI INGREDIENTI CERCARE PER I CAPELLI DANNEGGIATI?',
    faq_a10: 'Concentratevi sulla cheratina intatta biosintetica invece di alternative idrolizzate pesanti: penetra in profondità nella corteccia e ricostruisce le fibre interne. Completate con lipidi naturali per riparare la cuticola e proteggere a lungo.',
    faq_q11: 'LA CHERATINA BIOTECNOLOGICA È ALTRETTANTO EFFICACE?',
    faq_a11: 'Sì. La cheratina biotecnologica è altrettanto efficace — e spesso superiore — rispetto alle proteine animali tradizionali. Grazie alla biotecnologia replica la struttura del capello umano, penetra più a fondo nel tessuto danneggiato e ripara il capello dall’interno.',
    faq_google: 'Chiedi a Google AI',
    reviews_title: 'RECENSIONI SU DI NOI',
    review_1_text: '“Passare alla cheratina vegana MicBioMate ha cambiato la nostra linea premium di riparazione dei capelli. Procurarsi cheratina cruelty-free ad alta purezza era un incubo logistico. MicBioMate ci ha fornito un lotto di MicBioKeratin che replica in modo preciso le strutture proteiche umane. I test di laboratorio hanno mostrato un aumento del 34% nel ripristino della cuticola rispetto alle vecchie alternative animali. La scheda tecnica (TDS) era molto dettagliata e il kit campione è arrivato in tre giorni.”',
    review_2_text: '“Nella produzione di dispositivi medici la conformità normativa è tutto. Abbiamo integrato MicBioKeratinMED nelle nuove matrici biocompatibili per medicazioni. Gli standard qualitativi di MicBioMate sono eccezionali — zero endotossine e piena conformità ISO. La documentazione impeccabile ci ha fatto superare l’audit clinico in anticipo. Consigliamo vivamente il supporto degli esperti.”',
    review_3_text: '“Utilizziamo la piattaforma MicBioKeratinMED-PLUS per progetti di medicina rigenerativa personalizzata. Ciò che distingue MicBioMate è l’ecosistema digitale. La piattaforma BioIntegrate API ha collegato i nostri sistemi LIMS via GraphQL. L’acquisizione automatica dei dati e il tracking in tempo reale dell’espressione ci hanno fatto risparmiare mesi di report manuali. La documentazione è impeccabile.”',
    reviews_more: 'Mostra altre recensioni',
    feedback_title: 'PUOI LASCIARE IL TUO FEEDBACK QUI.',
    feedback_name: 'Nome',
    feedback_name_ph: '/',
    feedback_email: 'Indirizzo e-mail',
    feedback_email_ph: 'Inserisci la tua e-mail',
    feedback_rating: 'Condividi la tua esperienza',
    feedback_comments: 'Aggiungi un commento...',
    feedback_comments_ph: 'Aggiungi un commento...',
    feedback_send: 'Invia',
    partners_title: 'I NOSTRI PARTNER',
    portal_subtitle: 'PORTALE MICBIOMATE',
    portal_title: '<span>SCOPRI DI PIÙ</span><span>SULLE NOSTRE</span><span>SOLUZIONI</span><span>INNOVATIVE.</span>',
    portal_desc: 'Stiamo ripensando la produzione di cheratina. Lascia i tuoi dati per discutere le opportunità di integrazione delle nostre tecnologie.',
    portal_name: 'Nome*',
    portal_name_ph: 'Nome',
    portal_surname: 'Cognome*',
    portal_surname_ph: 'Cognome',
    portal_email: 'Email aziendale*',
    portal_email_ph: 'Email aziendale',
    portal_goals: 'Obiettivi',
    portal_goals_ph: 'Descrivi brevemente i tuoi obiettivi.',
    portal_send: 'Invia richiesta',
    footer_info_1: 'MicBioMate:<br>biotecnologia microbiologica per materiali innovativi.',
    footer_info_2: '100% senza ingredienti di origine animale, 100% cheratina integra',
    footer_subscribe: 'Iscriviti al digest di biotecnologia MicBioMate.',
    footer_sub_btn: 'Iscriviti',
    footer_copy: '© MicBioMate GmbH. Tutti i diritti riservati. Tutte le informazioni sono proprietà di MicBioMate GmbH.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initContactForm();
  initMagicLinkAuth();
  initB2BFormHandlers();
  initFAQAccordion();
  initMobileNav();
  initStarRating();
  initReviewForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const composeButton = form.querySelector('button[type="button"]');
  if (!composeButton) return;

  const composeEmail = () => {
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const subject = encodeURIComponent('Website inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\r\nEmail: ${formData.get('email')}\r\n\r\n${formData.get('message')}`
    );

    window.location.href = `mailto:info@micbiomate.com?subject=${subject}&body=${body}`;
  };

  composeButton.addEventListener('click', composeEmail);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    composeEmail();
  });
}

function getSavedLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  return I18N[saved] ? saved : 'en';
}

function initLanguageSelector() {
  const dropdowns = document.querySelectorAll('.lang-dropdown');

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector('.lang-btn');
    const menu = dropdown.querySelector('.lang-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('show');
      closeAllLangMenus();
      if (!isOpen) {
        menu.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-dropdown')) {
      closeAllLangMenus();
    }
  });

  document.querySelectorAll('.lang-option').forEach((option) => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const selectedLang = option.getAttribute('data-lang');
      if (!I18N[selectedLang]) return;
      applyLanguage(selectedLang);
      closeAllLangMenus();
    });
  });

  applyLanguage(getSavedLang());
}

function closeAllLangMenus() {
  document.querySelectorAll('.lang-menu').forEach((menu) => menu.classList.remove('show'));
  document.querySelectorAll('.lang-btn').forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
}

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.querySelectorAll('.current-lang').forEach((el) => {
    el.textContent = lang.toUpperCase();
  });

  applyLanguageLayout(lang);
  updateFaqGoogleLinks();
}

function updateFaqGoogleLinks() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question span[data-i18n]');
    const button = item.querySelector('.btn-faq');
    if (!question || !button) return;
    const text = question.textContent.trim();
    if (text) {
      button.href = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
    }
  });
}

function applyLanguageLayout(lang) {
  const config = LOCALE_CONFIG[lang];
  if (!config) return;
  const root = document.documentElement;

  root.style.setProperty('--ui-font-scale', config.fontScale);
  root.style.setProperty('--ui-letter-spacing', config.tracking);
  root.style.setProperty('--ui-button-padding-x', `${16 * config.paddingMultiplier}px`);

  document.querySelectorAll('.auto-layout-container').forEach((container) => {
    container.setAttribute('data-current-lang', lang);
  });
}

function initMagicLinkAuth() {
  const authForm = document.getElementById('sso-magic-form') || document.getElementById('partnerForm');
  if (!authForm) return;

  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = authForm.querySelector('input[type="email"]');
    const submitBtn = authForm.querySelector('button[type="submit"]');
    const userRole = authForm.querySelector('[name="b2b_role"]')?.value || 'general';

    if (!emailInput || !emailInput.value) return;

    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending Link...';

    try {
      await fakeApiCall({ email: emailInput.value, role: userRole });
      showAuthSuccessMessage(authForm, emailInput.value);
    } catch (error) {
      console.error('Magic Link generation failed:', error);
      submitBtn.disabled = false;
      submitBtn.innerText = 'Try Again';
    }
  });
}

function showAuthSuccessMessage(formElement, email) {
  formElement.innerHTML = `
    <div class="auth-success-card">
      <div class="icon-check">✓</div>
      <h3>Magic Link Sent</h3>
      <p>We emailed a secure sign-in link to <strong>${email}</strong>.</p>
      <p class="text-subtle">Check your inbox to access the tailored dashboard.</p>
    </div>
  `;
}

function initB2BFormHandlers() {
  const sampleForms = document.querySelectorAll('form[data-b2b-form]');

  sampleForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const feedbackContainer = form.querySelector('.form-feedback');

      if (!validateB2BInputs(payload, form)) return;

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.disabled = true;

      try {
        await fakeApiCall(payload);

        if (feedbackContainer) {
          feedbackContainer.className = 'form-feedback success';
          feedbackContainer.innerText = 'Request submitted successfully. Our R&D team will contact you.';
        }
        form.reset();
      } catch (err) {
        if (feedbackContainer) {
          feedbackContainer.className = 'form-feedback error';
          feedbackContainer.innerText = 'Submission failed. Please check your data and try again.';
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });
}

function validateB2BInputs(data, form) {
  let isValid = true;

  const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'mail.ru', 'yandex.ru'];
  if (data.email) {
    const domain = data.email.split('@')[1];
    const emailField = form.querySelector('input[type="email"]');

    if (freeEmailDomains.includes(domain?.toLowerCase())) {
      showFieldError(emailField, 'Please use a corporate business email address.');
      isValid = false;
    } else {
      clearFieldError(emailField);
    }
  }

  return isValid;
}

function showFieldError(field, message) {
  if (!field) return;
  field.classList.add('input-error');
  let errSpan = field.parentNode.querySelector('.error-msg');
  if (!errSpan) {
    errSpan = document.createElement('span');
    errSpan.className = 'error-msg';
    field.parentNode.appendChild(errSpan);
  }
  errSpan.innerText = message;
}

function clearFieldError(field) {
  if (!field) return;
  field.classList.remove('input-error');
  const errSpan = field.parentNode.querySelector('.error-msg');
  if (errSpan) errSpan.remove();
}

function fakeApiCall(data) {
  return new Promise((resolve) => setTimeout(resolve, 800));
}

function initMobileNav() {
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('navMenu');
  if (!burger || !nav) return;

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('active');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
      nav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

function initStarRating() {
  const stars = document.querySelectorAll('#starRating .star');
  const valueInput = document.getElementById('ratingValue');
  if (!stars.length || !valueInput) return;

  const paint = (n) => {
    stars.forEach((star) => {
      const v = Number(star.getAttribute('data-value'));
      star.textContent = v <= n ? '★' : '☆';
      star.classList.toggle('active', v <= n);
    });
  };

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      const n = Number(star.getAttribute('data-value'));
      valueInput.value = String(n);
      paint(n);
    });
  });

  window.resetStarRating = () => {
    valueInput.value = '0';
    paint(0);
  };
}

const REVIEWS_STORAGE_KEY = 'micbiomate-reviews-v2';

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function starsDisplay(rating) {
  const n = Math.min(5, Math.max(0, Number(rating) || 0));
  return `${'★'.repeat(n)}${'☆'.repeat(5 - n)}`;
}

function createReviewItem(review) {
  const item = document.createElement('div');
  item.className = 'review-item review-item-user';
  const rating = Math.min(5, Math.max(1, Number(review.rating) || 1));
  item.innerHTML = `
    <div class="review-header">
      <h3 class="reviewer-name">${escapeHtml(review.name)}</h3>
      <div class="stars" data-rating="${rating}">${starsDisplay(rating)}</div>
    </div>
    <p class="review-text">“${escapeHtml(review.comments)}”</p>
  `;
  return item;
}

function loadUserReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (err) {
    return [];
  }
}

function saveUserReviews(list) {
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(list));
}

function initReviewForm() {
  const form = document.getElementById('feedbackForm');
  const list = document.getElementById('reviewsList');
  const moreBtn = document.getElementById('reviewsMoreBtn');
  if (!form || !list) return;

  localStorage.removeItem('micbiomate-reviews');
  document.querySelectorAll('.review-item-user').forEach((el) => el.remove());

  const updateReviewsToggle = () => {
    const count = list.querySelectorAll('.review-item').length;
    if (!moreBtn) return;

    if (count <= 3) {
      list.classList.remove('is-expanded');
      moreBtn.setAttribute('aria-expanded', 'false');
    }
  };

  loadUserReviews()
    .slice()
    .reverse()
    .forEach((review) => {
      list.prepend(createReviewItem(review));
    });

  updateReviewsToggle();

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      const expanded = list.classList.toggle('is-expanded');
      moreBtn.setAttribute('aria-expanded', String(expanded));
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (form.elements.name?.value || '').trim();
    const email = (form.elements.email?.value || '').trim();
    const comments = (form.elements.comments?.value || '').trim();
    const rating = Number(form.elements.rating?.value || 0);

    if (!name || !email || !comments || rating < 1) {
      return;
    }

    const review = {
      name,
      rating,
      comments,
      createdAt: Date.now()
    };

    const stored = loadUserReviews();
    stored.unshift(review);
    saveUserReviews(stored);

    const item = createReviewItem(review);
    item.classList.add('is-new');
    list.prepend(item);
    updateReviewsToggle();

    form.reset();
    if (typeof window.resetStarRating === 'function') {
      window.resetStarRating();
    }

    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
